<template>
  <div class="particles-container" ref="particlesContainer">
    <canvas ref="particlesCanvas" class="particles-canvas"></canvas>
    <div class="particles-overlay"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useColorMode as useNuxtColorMode } from '#imports';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  opacity: number;
}

const colorMode = useNuxtColorMode();
const particlesCanvas = ref<HTMLCanvasElement | null>(null);
const particlesContainer = ref<HTMLDivElement | null>(null);
const animationFrameId = ref<number | null>(null);
const particles = ref<Particle[]>([]);
const mousePosition = ref({ x: 0, y: 0 });
const isMouseMoving = ref(false);
const mouseTimeout = ref<NodeJS.Timeout | null>(null);

// Configuration
const particleCount = 80;
const particleMinRadius = 1;
const particleMaxRadius = 4;
const particleMaxSpeed = 0.4;
const connectionDistance = 180;
const mouseMoveRadius = 120;

const getLightModeColor = () => {
  // Return an array of colors for more variety
  return ['#7FDBA6', '#6BC895', '#8FEDB7', '#A0FFD0'];
};

const getDarkModeColor = () => {
  // Return an array of colors for more variety
  return ['#7FDBA6', '#6BC895', '#8FEDB7', '#A0FFD0'];
};

const getRandomColor = () => {
  const colors = colorMode.value === 'dark' ? getDarkModeColor() : getLightModeColor();
  return colors[Math.floor(Math.random() * colors.length)];
};

const initializeParticles = () => {
  if (!particlesCanvas.value) return;
  
  const canvas = particlesCanvas.value;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  const width = canvas.width;
  const height = canvas.height;
  
  particles.value = [];
  
  for (let i = 0; i < particleCount; i++) {
    const radius = Math.random() * (particleMaxRadius - particleMinRadius) + particleMinRadius;
    const x = Math.random() * (width - radius * 2) + radius;
    const y = Math.random() * (height - radius * 2) + radius;
    const color = getRandomColor();
    
    const velocity = {
      x: (Math.random() - 0.5) * particleMaxSpeed,
      y: (Math.random() - 0.5) * particleMaxSpeed
    };
    
    particles.value.push({
      x,
      y,
      radius,
      color,
      velocity,
      opacity: Math.random() * 0.5 + 0.1
    });
  }
};

const resizeCanvas = () => {
  if (!particlesCanvas.value || !particlesContainer.value) return;
  
  const canvas = particlesCanvas.value;
  const container = particlesContainer.value;
  
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  
  // Reinitialize particles after resize
  initializeParticles();
};

const handleMouseMove = (event: MouseEvent) => {
  if (!particlesContainer.value) return;
  
  const rect = particlesContainer.value.getBoundingClientRect();
  mousePosition.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
  
  isMouseMoving.value = true;
  
  // Reset timeout on each mouse move
  if (mouseTimeout.value) {
    clearTimeout(mouseTimeout.value);
  }
  
  // Set isMouseMoving to false after 2 seconds of no movement
  mouseTimeout.value = setTimeout(() => {
    isMouseMoving.value = false;
  }, 2000);
};

const animate = () => {
  if (!particlesCanvas.value) return;
  
  const canvas = particlesCanvas.value;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  const width = canvas.width;
  const height = canvas.height;
  
  // Clear canvas
  ctx.clearRect(0, 0, width, height);
  
  // Update and draw particles
  particles.value.forEach(particle => {
    // Move particles
    particle.x += particle.velocity.x;
    particle.y += particle.velocity.y;
    
    // Bounce off walls
    if (particle.x - particle.radius <= 0 || particle.x + particle.radius >= width) {
      particle.velocity.x = -particle.velocity.x;
    }
    
    if (particle.y - particle.radius <= 0 || particle.y + particle.radius >= height) {
      particle.velocity.y = -particle.velocity.y;
    }
    
    // Mouse interaction
    if (isMouseMoving.value) {
      const dx = mousePosition.value.x - particle.x;
      const dy = mousePosition.value.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < mouseMoveRadius) {
        const force = (mouseMoveRadius - distance) / mouseMoveRadius;
        const angle = Math.atan2(dy, dx);
        
        // Create a slight push-away effect from the cursor
        particle.velocity.x -= Math.cos(angle) * force * 0.15;
        particle.velocity.y -= Math.sin(angle) * force * 0.15;
        
        // Temporarily increase particle opacity when near cursor
        particle.opacity = Math.min(0.8, particle.opacity + force * 0.3);
        
        // Limit velocity
        const speed = Math.sqrt(
          particle.velocity.x * particle.velocity.x + 
          particle.velocity.y * particle.velocity.y
        );
        
        if (speed > particleMaxSpeed * 2) {
          particle.velocity.x = (particle.velocity.x / speed) * particleMaxSpeed * 2;
          particle.velocity.y = (particle.velocity.y / speed) * particleMaxSpeed * 2;
        }
      } else {
        // Gradually revert to original opacity
        particle.opacity = Math.max(particle.opacity * 0.99, Math.random() * 0.5 + 0.1);
      }
    } else {
      // Gradually revert to original opacity when mouse not moving
      particle.opacity = Math.max(particle.opacity * 0.995, Math.random() * 0.5 + 0.1);
    }
    
    // Draw particle
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.globalAlpha = particle.opacity;
    ctx.fill();
    ctx.globalAlpha = 1;
  });
  
  // Draw connections
  ctx.beginPath();
  for (let i = 0; i < particles.value.length; i++) {
    for (let j = i + 1; j < particles.value.length; j++) {
      const particle1 = particles.value[i];
      const particle2 = particles.value[j];
      
      const dx = particle1.x - particle2.x;
      const dy = particle1.y - particle2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < connectionDistance) {
        ctx.beginPath();
        // Use a gradient for line color
        const opacity = (1 - distance / connectionDistance) * 0.2;
        ctx.strokeStyle = particle1.color;
        ctx.globalAlpha = opacity;
        ctx.lineWidth = opacity * 1.5;
        ctx.moveTo(particle1.x, particle1.y);
        ctx.lineTo(particle2.x, particle2.y);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
  }
  
  // Continue animation loop
  animationFrameId.value = requestAnimationFrame(animate);
};

onMounted(() => {
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', handleMouseMove);
  
  resizeCanvas();
  initializeParticles();
  animate();
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas);
  window.removeEventListener('mousemove', handleMouseMove);
  
  if (animationFrameId.value !== null) {
    cancelAnimationFrame(animationFrameId.value);
  }
  
  if (mouseTimeout.value) {
    clearTimeout(mouseTimeout.value);
  }
});

// Watch for color mode changes
watch(() => colorMode.value, () => {
  // Update particle colors when color mode changes
  particles.value.forEach(particle => {
    particle.color = getRandomColor();
  });
});
</script>

<style scoped>
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.particles-canvas {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}

.particles-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(127, 219, 166, 0.08) 0%, rgba(255, 255, 255, 0) 70%),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%);
}

:deep(.dark) .particles-overlay {
  background: radial-gradient(circle at 50% 50%, rgba(127, 219, 166, 0.12) 0%, rgba(0, 0, 0, 0) 70%),
              linear-gradient(to bottom, rgba(127, 219, 166, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
}
</style> 