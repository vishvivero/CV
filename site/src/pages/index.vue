<template>
  <div id="landing-page" class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Navigation Bar -->
    <SharedLandingNavbar />

    <!-- Hero Section -->
    <section class="bg-white dark:bg-gray-900 py-16 md:py-24 border-b border-gray-100 dark:border-gray-800 relative overflow-hidden hero-section">
      <!-- Particle Background Animation -->
      <SharedParticleBackground />
      
      <div class="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div class="flex flex-col md:flex-row items-center md:space-x-10">
          <div class="md:w-1/2 space-y-6 mb-10 md:mb-0 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight hero-title">
              Create Professional Resumes In Minutes
            </h1>
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              <SharedBrandName /> helps you build impressive, ATS-friendly resumes that stand out to employers and land you interviews.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <UiButton 
                :as="NuxtLink" 
                :to="$nuxt.$localePath('/dashboard')" 
                class="text-base h-12 px-8 bg-[#7FDBA6] text-white hover:bg-[#6BC895] transition-colors"
              >
                Start Building Now
              </UiButton>
              <UiButton 
                as="a"
                href="#how-it-works"
                class="text-base h-12 px-8 bg-[#7FDBA6] text-white hover:bg-[#6BC895] transition-colors"
              >
                See How It Works
              </UiButton>
            </div>
          </div>
          
          <div class="md:w-1/2">
            <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 max-w-md mx-auto border border-gray-100 dark:border-gray-700">
              <div class="flex items-center mb-4">
                <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <!-- Resume Preview with Animation -->
              <div class="bg-gray-50 dark:bg-gray-700 rounded-md mb-4 relative overflow-hidden">
                <!-- Static CV that shows when video is not playing or as fallback -->
                <div :class="{'hidden': isVideoPlaying}" class="p-4">
                  <div class="text-[#7FDBA6] text-xl font-bold">John Developer</div>
                  <div class="text-gray-600 dark:text-gray-300 text-sm">Front-End Engineer | UI/UX Specialist</div>
                  <div class="flex justify-end text-xs text-gray-500 dark:text-gray-400 mt-2">
                    <div class="flex items-center"><span class="i-mdi:email mr-1"></span> john@example.com</div>
                    <div class="flex items-center ml-3"><span class="i-mdi:phone mr-1"></span> (123) 456-7890</div>
                  </div>
                </div>
                
                <!-- Video Animation -->
                <video 
                  ref="resumeVideo"
                  class="w-full h-full object-cover absolute inset-0"
                  :class="{'opacity-100': isVideoPlaying, 'opacity-0': !isVideoPlaying}"
                  :src="'/videos/resume-editing.mp4'"
                  muted
                  playsinline
                  @ended="restartVideoAfterDelay"
                  @loadedmetadata="onVideoLoaded"
                  :loop="false"
                ></video>
              </div>
              
              <!-- Experience Section -->
              <div class="mb-4" :class="{'opacity-70': isVideoPlaying}">
                <div class="text-[#7FDBA6] font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">EXPERIENCE</div>
                <div class="text-sm mb-1 font-semibold">Senior Front-End Developer</div>
                <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">TechCorp Inc. | 2019 - Present</div>
                <ul class="text-xs pl-5 text-gray-600 dark:text-gray-300 list-disc">
                  <li>Led development of responsive web applications</li>
                  <li>Implemented CI/CD pipeline reducing deployment time</li>
                </ul>
              </div>
              
              <!-- Education Section -->
              <div :class="{'opacity-70': isVideoPlaying}">
                <div class="text-[#7FDBA6] font-bold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">EDUCATION</div>
                <div class="text-sm mb-1 font-semibold">Bachelor of Science in Computer Science</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">University of Technology | 2012 - 2016</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Indicators -->
    <section v-if="false" class="py-10 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        <div class="text-center mb-8">
          <h2 class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">Trusted by thousands of job seekers worldwide</h2>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-[#7FDBA6]">10,000+</div>
            <div class="text-gray-600 dark:text-gray-400">Resumes Created</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-[#7FDBA6]">94%</div>
            <div class="text-gray-600 dark:text-gray-400">Interview Rate</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-[#7FDBA6]">4.9/5</div>
            <div class="text-gray-600 dark:text-gray-400">User Rating</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-[#7FDBA6]">100%</div>
            <div class="text-gray-600 dark:text-gray-400">Free to Use</div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">How It Works</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Three simple steps to create your professional resume
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md text-center border border-gray-100 dark:border-gray-700">
            <div class="w-16 h-16 rounded-full bg-[#7FDBA6]/20 dark:bg-[#7FDBA6]/30 flex items-center justify-center mx-auto mb-6">
              <span class="text-[#7FDBA6] dark:text-[#7FDBA6] font-bold text-xl">1</span>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Enter Your Information</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Use our intuitive editor to input your personal details, work experience, education, and skills
            </p>
          </div>

          <!-- Step 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md text-center border border-gray-100 dark:border-gray-700">
            <div class="w-16 h-16 rounded-full bg-[#7FDBA6]/20 dark:bg-[#7FDBA6]/30 flex items-center justify-center mx-auto mb-6">
              <span class="text-[#7FDBA6] dark:text-[#7FDBA6] font-bold text-xl">2</span>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Choose Your Template</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Select from our library of professional templates designed to impress employers
            </p>
          </div>

          <!-- Step 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md text-center border border-gray-100 dark:border-gray-700">
            <div class="w-16 h-16 rounded-full bg-[#7FDBA6]/20 dark:bg-[#7FDBA6]/30 flex items-center justify-center mx-auto mb-6">
              <span class="text-[#7FDBA6] dark:text-[#7FDBA6] font-bold text-xl">3</span>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Download & Apply</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Download your professionally formatted resume as a PDF and start applying to jobs
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Features Designed for Success</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to create professional, ATS-optimized resumes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 bg-[#7FDBA6]/20 dark:bg-[#7FDBA6]/30 rounded-lg flex items-center justify-center mb-4">
              <span class="i-mdi:rocket-launch text-2xl text-[#7FDBA6] dark:text-[#7FDBA6]"></span>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">ATS-Optimized Templates</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Our templates are designed to pass through Applicant Tracking Systems and get your resume noticed
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 bg-[#7FDBA6]/20 dark:bg-[#7FDBA6]/30 rounded-lg flex items-center justify-center mb-4">
              <span class="i-mdi:shield-check text-2xl text-[#7FDBA6] dark:text-[#7FDBA6]"></span>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Privacy First</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Your data stays on your device. We don't store your personal information in the cloud
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 bg-[#7FDBA6]/20 dark:bg-[#7FDBA6]/30 rounded-lg flex items-center justify-center mb-4">
              <span class="i-mdi:palette-advanced text-2xl text-[#7FDBA6] dark:text-[#7FDBA6]"></span>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Customizable Design</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Personalize fonts, colors, and layouts to match your style and industry standards
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 bg-[#7FDBA6]/20 dark:bg-[#7FDBA6]/30 rounded-lg flex items-center justify-center mb-4">
              <span class="i-mdi:file-document-edit text-2xl text-[#7FDBA6] dark:text-[#7FDBA6]"></span>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Content Suggestions</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Get expert suggestions for skills, action verbs, and responsibilities for your industry
            </p>
          </div>

          <!-- Feature 5 -->
          <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 bg-[#7FDBA6]/20 dark:bg-[#7FDBA6]/30 rounded-lg flex items-center justify-center mb-4">
              <span class="i-mdi:devices text-2xl text-[#7FDBA6] dark:text-[#7FDBA6]"></span>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Works Everywhere</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Access and edit your resumes from any device with a web browser
            </p>
          </div>

          <!-- Feature 6 -->
          <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 bg-[#7FDBA6]/20 dark:bg-[#7FDBA6]/30 rounded-lg flex items-center justify-center mb-4">
              <span class="i-mdi:lightning-bolt text-2xl text-[#7FDBA6] dark:text-[#7FDBA6]"></span>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Instant PDF Export</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Download your resume as a professional PDF with one click, ready to submit
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section v-if="false" id="testimonials" class="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">What Our Users Say</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of professionals who've successfully landed jobs using <SharedBrandName />
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <div class="flex items-center mb-4">
              <div class="flex text-[#7FDBA6]">
                <span class="i-mdi:star"></span>
                <span class="i-mdi:star"></span>
                <span class="i-mdi:star"></span>
                <span class="i-mdi:star"></span>
                <span class="i-mdi:star"></span>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              "I applied to 5 jobs with my new resume and got 3 interview calls! The ATS optimization really works."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-[#7FDBA6]/20 rounded-full flex items-center justify-center mr-3">
                <span class="text-[#7FDBA6] font-semibold">SJ</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 dark:text-gray-200">Sarah J.</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">Marketing Specialist</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <div class="flex items-center mb-4">
              <div class="flex text-[#7FDBA6]">
                <span class="i-mdi:star"></span>
                <span class="i-mdi:star"></span>
                <span class="i-mdi:star"></span>
                <span class="i-mdi:star"></span>
                <span class="i-mdi:star"></span>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              "The templates are so professional and customizable. I was able to build a tailored resume for each position I applied to."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-[#7FDBA6]/20 rounded-full flex items-center justify-center mr-3">
                <span class="text-[#7FDBA6] font-semibold">DM</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 dark:text-gray-200">David M.</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <div class="flex items-center mb-4">
              <div class="flex text-[#7FDBA6]">
                <span class="i-mdi:star"></span>
                <span class="i-mdi:star"></span>
                <span class="i-mdi:star"></span>
                <span class="i-mdi:star"></span>
                <span class="i-mdi:star"></span>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              "As a recent graduate, I was worried about my resume. This tool helped me highlight my skills and education effectively."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-[#7FDBA6]/20 rounded-full flex items-center justify-center mr-3">
                <span class="text-[#7FDBA6] font-semibold">AL</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 dark:text-gray-200">Amy L.</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">Recent Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-4xl mx-auto px-4 md:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Frequently Asked Questions</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about <SharedBrandName />
          </p>
        </div>

        <div class="space-y-6">
          <!-- FAQ Item 1 -->
          <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
            <div class="p-4 md:p-6 border-b border-gray-200 dark:border-gray-600">
              <h3 class="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
                Is <SharedBrandName /> really free to use?
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                Yes! <SharedBrandName /> is completely free and open-source. You can create unlimited resumes without paying a cent.
              </p>
            </div>
          </div>

          <!-- FAQ Item 2 -->
          <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
            <div class="p-4 md:p-6 border-b border-gray-200 dark:border-gray-600">
              <h3 class="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
                Is my information secure?
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                Absolutely. Your data is stored locally on your device and never sent to any servers. We have no access to your personal information.
              </p>
            </div>
          </div>

          <!-- FAQ Item 3 -->
          <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
            <div class="p-4 md:p-6 border-b border-gray-200 dark:border-gray-600">
              <h3 class="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
                Are the templates ATS-friendly?
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                Yes, all our templates are designed to be easily read by Applicant Tracking Systems, increasing your chances of getting past automated resume screenings.
              </p>
            </div>
          </div>

          <!-- FAQ Item 4 -->
          <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
            <div class="p-4 md:p-6">
              <h3 class="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
                Can I create multiple resumes?
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                Yes, you can create and save multiple resumes, making it easy to tailor your applications to different job positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24 bg-[#7FDBA6]/10 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Ready to Build Your Professional Resume?</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Join thousands of job seekers who've created standout resumes with <SharedBrandName />
        </p>
        <UiButton 
          :as="NuxtLink" 
          :to="$nuxt.$localePath('/dashboard')" 
          class="text-base h-12 px-10 bg-[#7FDBA6] text-white hover:bg-[#6BC895] transition-colors text-lg font-semibold"
        >
          Create Your Resume Now
        </UiButton>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Brand -->
          <div>
            <div class="flex items-center mb-4">
              <SharedLogo class="mr-2" />
              <SharedBrandName class="text-xl" />
            </div>
            <p class="text-gray-400 mb-4">
              Create professional resumes in minutes with our intuitive, privacy-focused resume builder.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-[#7FDBA6] transition-colors">
                <span class="i-mdi:twitter text-xl"></span>
              </a>
              <a href="#" class="text-gray-400 hover:text-[#7FDBA6] transition-colors">
                <span class="i-mdi:linkedin text-xl"></span>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-[#7FDBA6] transition-colors">Home</a></li>
              <li><a href="#features" class="text-gray-400 hover:text-[#7FDBA6] transition-colors">Features</a></li>
              <li><a href="#how-it-works" class="text-gray-400 hover:text-[#7FDBA6] transition-colors">How It Works</a></li>
              <li><a href="#testimonials" class="text-gray-400 hover:text-[#7FDBA6] transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Resources</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-[#7FDBA6] transition-colors">Resume Templates</a></li>
              <li><a href="#" class="text-gray-400 hover:text-[#7FDBA6] transition-colors">Career Advice</a></li>
              <li><a href="#" class="text-gray-400 hover:text-[#7FDBA6] transition-colors">Resume Examples</a></li>
              <li><a href="#" class="text-gray-400 hover:text-[#7FDBA6] transition-colors">Cover Letter Tips</a></li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Legal</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-[#7FDBA6] transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="text-gray-400 hover:text-[#7FDBA6] transition-colors">Terms of Service</a></li>
              <li><a href="#" class="text-gray-400 hover:text-[#7FDBA6] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-800 text-center md:text-left md:flex md:justify-between md:items-center">
          <p class="text-gray-400">
            © {{ new Date().getFullYear() }} <SharedBrandName />. All rights reserved.
          </p>
          <div class="mt-4 md:mt-0">
            <SharedToggleDark />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";

// Resume video animation state and refs
const resumeVideo = ref<HTMLVideoElement | null>(null);
const isVideoPlaying = ref(false);
const videoReady = ref(false);

const onVideoLoaded = () => {
  videoReady.value = true;
  // Start the video after a short delay once the page loads
  setTimeout(() => {
    if (resumeVideo.value) {
      resumeVideo.value.play()
        .then(() => {
          isVideoPlaying.value = true;
        })
        .catch(err => {
          console.error('Error playing video:', err);
        });
    }
  }, 2000);
};

const restartVideoAfterDelay = () => {
  isVideoPlaying.value = false;
  
  // Wait a bit before replaying
  setTimeout(() => {
    if (resumeVideo.value) {
      resumeVideo.value.currentTime = 0;
      resumeVideo.value.play()
        .then(() => {
          isVideoPlaying.value = true;
        })
        .catch(err => {
          console.error('Error replaying video:', err);
        });
    }
  }, 5000); // 5 second delay before replaying
};

// Play video when the element comes into view
onMounted(() => {
  if (process.client) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoReady.value && resumeVideo.value && !isVideoPlaying.value) {
          resumeVideo.value.play()
            .then(() => {
              isVideoPlaying.value = true;
            })
            .catch(err => {
              console.error('Error playing video on scroll:', err);
            });
        }
      });
    }, { threshold: 0.5 });
    
    if (resumeVideo.value) {
      observer.observe(resumeVideo.value);
    }
    
    // Cleanup
    onBeforeUnmount(() => {
      observer.disconnect();
    });
  }
});
</script>

<style scoped>
#landing-page {
  scroll-behavior: smooth;
}

.hero-section {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  animation: fadeIn 1s ease-out forwards;
}

@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}
</style>
