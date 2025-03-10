<template>
  <nav class="w-full border-b border-gray-200 dark:border-gray-800 py-4 px-4 md:px-8 sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo and brand name -->
      <nuxt-link class="flex items-center gap-x-2" :to="$nuxt.$localePath('/')">
        <SharedLogo />
        <SharedBrandName class="text-xl" />
      </nuxt-link>
      
      <!-- Desktop navigation -->
      <div class="hidden md:flex items-center space-x-6">
        <a href="#how-it-works" class="text-gray-600 dark:text-gray-300 hover:text-[#7FDBA6] dark:hover:text-[#7FDBA6] transition-colors">How It Works</a>
        <a href="#features" class="text-gray-600 dark:text-gray-300 hover:text-[#7FDBA6] dark:hover:text-[#7FDBA6] transition-colors">Features</a>
        <a v-if="false" href="#testimonials" class="text-gray-600 dark:text-gray-300 hover:text-[#7FDBA6] dark:hover:text-[#7FDBA6] transition-colors">Testimonials</a>
        
        <!-- Dark mode toggle -->
        <SharedToggleDark />
        
        <!-- CTA Button -->
        <UiButton 
          :as="NuxtLink" 
          :to="$nuxt.$localePath('/dashboard')" 
          class="bg-[#7FDBA6] hover:bg-[#6BC895] text-white h-10 px-6"
        >
          {{ $t("landing.start") }}
        </UiButton>
      </div>
      
      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center gap-2">
        <UiDropdownMenu>
          <UiDropdownMenuTrigger as-child>
            <UiButton variant="ghost" size="sm">
              <span class="i-mdi:menu text-2xl"></span>
              <span class="sr-only">Menu</span>
            </UiButton>
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent align="end">
            <UiDropdownMenuItem as="a" href="#how-it-works">
              How It Works
            </UiDropdownMenuItem>
            <UiDropdownMenuItem as="a" href="#features">
              Features
            </UiDropdownMenuItem>
            <UiDropdownMenuItem v-if="false" as="a" href="#testimonials">
              Testimonials
            </UiDropdownMenuItem>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuItem :as="NuxtLink" :to="$nuxt.$localePath('/dashboard')">
              {{ $t("landing.start") }}
            </UiDropdownMenuItem>
          </UiDropdownMenuContent>
        </UiDropdownMenu>
        <SharedToggleDark />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { NuxtLink } from "#components";
</script> 