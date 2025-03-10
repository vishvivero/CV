<template>
  <svg
    width="1.7em"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    :fill="$colorMode.unknown || $colorMode.value !== 'dark' ? '#1e293b' : '#e2e8f0'"
  >
    <!-- Background shape with gradient -->
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#7FDBA6;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#5AC88D;stop-opacity:0.8" />
      </linearGradient>
      <clipPath id="roundedRect">
        <rect x="2" y="2" width="28" height="28" rx="8" ry="8" />
      </clipPath>
    </defs>
    
    <!-- Rounded rectangle background -->
    <rect x="2" y="2" width="28" height="28" rx="8" ry="8" fill="url(#logoGradient)" />
    
    <!-- Stylized "TM.CV" text -->
    <g fill="#FFFFFF" transform="translate(4, 7)">
      <!-- T -->
      <path d="M2 2h6v2H6v12H4V4H2V2z" />
      
      <!-- M -->
      <path d="M9 2h2v8l2-4 2 4V2h2v14h-2l-2-6-2 6h-2V2z" />
      
      <!-- Dot -->
      <circle cx="19" cy="15" r="1" />
      
      <!-- CV -->
      <path d="M21 2c1.1 0 2 0.9 2 2v10c0 1.1-0.9 2-2 2s-2-0.9-2-2V4c0-1.1 0.9-2 2-2z" />
      <path d="M25 2c1.1 0 2 0.9 2 2v10c0 1.1-0.9 2-2 2s-2-0.9-2-2V4c0-1.1 0.9-2 2-2z" />
    </g>
  </svg>
</template>
