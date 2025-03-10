<template>
  <svg
    width="1.7em"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    :fill="$colorMode.unknown || $colorMode.value !== 'dark' ? '#1e293b' : '#e2e8f0'"
  >
    <!-- Background circle with gradient -->
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.15" />
        <stop offset="100%" style="stop-color:#2563eb;stop-opacity:0.15" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="15" fill="url(#logoGradient)" />
    
    <!-- Stylized "T" representing Tailor -->
    <path
      d="M12 8h8v2h-3v12h-2V10h-3V8z"
      fill="currentColor"
    />
    
    <!-- Stylized "M" representing My -->
    <path
      d="M12 24h2l2-6 2 6h2l-3-8h-2l-3 8z"
      fill="currentColor"
    />
    
    <!-- Dot for CV -->
    <circle
      cx="22"
      cy="16"
      r="1.5"
      fill="currentColor"
    />
    
    <!-- Stylized "CV" -->
    <path
      d="M24 8h2v16h-2V8zM28 8h2v16h-2V8z"
      fill="currentColor"
    />
  </svg>
</template>
