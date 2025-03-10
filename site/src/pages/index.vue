<template>
  <div id="landing-page" class="bg-[#fafafa] dark:bg-[#121212] min-h-screen">
    <SharedHeader />

    <!-- Hero Section -->
    <section class="max-w-6xl mx-auto px-4 pt-10 md:pt-20 pb-10">
      <div class="flex flex-col md:flex-row items-center gap-10">
        <div class="md:w-1/2 space-y-6">
          <h1 class="text-4xl md:text-6xl font-bold leading-tight">
            Craft your perfect <span class="text-[#7FDBA6]">resume</span> in minutes
          </h1>
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
            <SharedBrandName /> makes building professional resumes simple with our intuitive Markdown editor and stunning templates.
          </p>
          <div class="flex gap-4 pt-4">
            <UiButton 
              :as="NuxtLink" 
              :to="$nuxt.$localePath('/dashboard')" 
              class="text-base h-12 px-8 bg-[#7FDBA6] text-white hover:bg-[#6BC895] transition-colors"
            >
              {{ $t("landing.start") }}
            </UiButton>
            <UiButton 
              as="a"
              href="#features"
              variant="outline"
              class="text-base h-12 px-6"
            >
              Learn More
            </UiButton>
          </div>
        </div>
        <div class="md:w-1/2 relative">
          <div class="relative overflow-hidden rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 aspect-[3/4]">
            <!-- Resume Preview Mockup -->
            <div class="p-6 h-full flex flex-col">
              <!-- Header -->
              <div class="bg-[#f8f9fa] dark:bg-gray-700 p-4 rounded-md mb-4">
                <div class="text-[#7FDBA6] text-xl font-bold">John Developer</div>
                <div class="text-gray-600 dark:text-gray-300 text-sm">Front-End Engineer | UI/UX Specialist</div>
                <div class="flex justify-end text-xs text-gray-500 dark:text-gray-400 mt-2">
                  <div class="flex items-center"><span class="i-mdi:email mr-1"></span> john@example.com</div>
                  <div class="flex items-center ml-3"><span class="i-mdi:phone mr-1"></span> (123) 456-7890</div>
                </div>
              </div>
              
              <!-- Experience -->
              <div class="mb-4">
                <div class="text-[#7FDBA6] font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">EXPERIENCE</div>
                <div class="text-sm mb-1 font-semibold">Senior Front-End Developer</div>
                <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">TechCorp Inc. | 2019 - Present</div>
                <ul class="text-xs pl-5 text-gray-600 dark:text-gray-300 list-disc">
                  <li>Led development of responsive web applications</li>
                  <li>Implemented CI/CD pipeline reducing deployment time</li>
                </ul>
              </div>
              
              <!-- Education -->
              <div class="mb-4">
                <div class="text-[#7FDBA6] font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">EDUCATION</div>
                <div class="text-sm mb-1 font-semibold">Bachelor of Science in Computer Science</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">University of Technology | 2012 - 2016</div>
              </div>
              
              <!-- Skills -->
              <div>
                <div class="text-[#7FDBA6] font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">SKILLS</div>
                <div class="grid grid-cols-2 gap-2 text-xs">
                  <div class="mb-1">
                    <div class="mb-1">JavaScript / TypeScript</div>
                    <div class="bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div class="bg-[#7FDBA6] h-full rounded-full" style="width: 90%"></div>
                    </div>
                  </div>
                  <div class="mb-1">
                    <div class="mb-1">React / Vue</div>
                    <div class="bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div class="bg-[#7FDBA6] h-full rounded-full" style="width: 80%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Decorative elements -->
          <div class="absolute -z-10 -top-5 -right-5 w-24 h-24 rounded-full bg-[#7FDBA6]/20"></div>
          <div class="absolute -z-10 -bottom-5 -left-5 w-32 h-32 rounded-full bg-[#7FDBA6]/10"></div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16 bg-white dark:bg-gray-900">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Choose <SharedBrandName /></h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our modern resume builder combines simplicity with power to help you create the perfect CV
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#7FDBA6]/20 rounded-lg flex items-center justify-center mb-4">
              <span class="i-mdi:rocket-launch text-2xl text-[#7FDBA6]"></span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Simple & Powerful</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li class="flex items-start">
                <span class="i-mdi:check text-[#7FDBA6] mr-2 mt-1"></span>
                <span>Manage multiple resumes</span>
              </li>
              <li class="flex items-start">
                <span class="i-mdi:check text-[#7FDBA6] mr-2 mt-1"></span>
                <span>Real-time preview</span>
              </li>
              <li class="flex items-start">
                <span class="i-mdi:check text-[#7FDBA6] mr-2 mt-1"></span>
                <span>Export to PDF</span>
              </li>
              <li class="flex items-start">
                <span class="i-mdi:check text-[#7FDBA6] mr-2 mt-1"></span>
                <span>Fully customizable</span>
              </li>
            </ul>
          </div>

          <!-- Feature 2 -->
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#7FDBA6]/20 rounded-lg flex items-center justify-center mb-4">
              <span class="i-mdi:shield-check text-2xl text-[#7FDBA6]"></span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Privacy First</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li class="flex items-start">
                <span class="i-mdi:check text-[#7FDBA6] mr-2 mt-1"></span>
                <span>Open source and free</span>
              </li>
              <li class="flex items-start">
                <span class="i-mdi:check text-[#7FDBA6] mr-2 mt-1"></span>
                <span>All data saved locally</span>
              </li>
              <li class="flex items-start">
                <span class="i-mdi:check text-[#7FDBA6] mr-2 mt-1"></span>
                <span>No login or registration</span>
              </li>
              <li class="flex items-start">
                <span class="i-mdi:check text-[#7FDBA6] mr-2 mt-1"></span>
                <span>No user tracking or ads</span>
              </li>
            </ul>
          </div>

          <!-- Feature 3 -->
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#7FDBA6]/20 rounded-lg flex items-center justify-center mb-4">
              <span class="i-mdi:palette-advanced text-2xl text-[#7FDBA6]"></span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Professional Design</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li class="flex items-start">
                <span class="i-mdi:check text-[#7FDBA6] mr-2 mt-1"></span>
                <span>Beautiful templates</span>
              </li>
              <li class="flex items-start">
                <span class="i-mdi:check text-[#7FDBA6] mr-2 mt-1"></span>
                <span>Custom font selection</span>
              </li>
              <li class="flex items-start">
                <span class="i-mdi:check text-[#7FDBA6] mr-2 mt-1"></span>
                <span>Adaptive theming</span>
              </li>
              <li class="flex items-start">
                <span class="i-mdi:check text-[#7FDBA6] mr-2 mt-1"></span>
                <span>Advanced formatting options</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Three simple steps to create your professional resume
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-[#7FDBA6] flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-xl">1</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Write Your Content</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Use our easy Markdown editor to craft your resume content
            </p>
          </div>

          <!-- Step 2 -->
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-[#7FDBA6] flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-xl">2</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Customize Design</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Personalize fonts, colors, and spacing to your preference
            </p>
          </div>

          <!-- Step 3 -->
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-[#7FDBA6] flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-xl">3</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Export & Share</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Download as PDF or share your resume with potential employers
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-[#7FDBA6]/10">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to build your professional resume?</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Join thousands of professionals who've created stunning resumes with <SharedBrandName />
        </p>
        <UiButton 
          :as="NuxtLink" 
          :to="$nuxt.$localePath('/dashboard')" 
          class="text-base h-12 px-8 bg-[#7FDBA6] text-white hover:bg-[#6BC895] transition-colors"
        >
          {{ $t("landing.start") }}
        </UiButton>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-50 dark:bg-gray-900 py-10">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <SharedBrandName class="text-xl" />
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
              © {{ new Date().getFullYear() }} All rights reserved.
            </p>
          </div>
          <div class="flex gap-6">
            <a href="https://github.com/vishvivero/CV" target="_blank" class="text-gray-500 dark:text-gray-400 hover:text-[#7FDBA6] transition-colors">
              <span class="i-mdi:github text-2xl"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
</script>

<style scoped>
#landing-page {
  scroll-behavior: smooth;
}
</style>
