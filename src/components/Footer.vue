<template>
    <footer class="bg-blue-900 text-white py-12 min-h-[300px] flex flex-col justify-center">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div class="w-full md:w-auto">
            <h2 class="text-2xl font-semibold mb-3">Newsletter & Special Promo</h2>
            <div class="flex">
              <input
                type="email"
                placeholder="Enter your email here"
                class="px-4 py-3 rounded-l-md w-full md:w-72 text-gray-900 text-lg"
              >
              <button class="bg-yellow-500 text-blue-900 px-6 py-3 rounded-r-md font-semibold text-lg">
                Subscribe
              </button>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 text-base">
            <div class="space-y-1">
              <a href="#" class="block hover:underline">About us</a>
              <a href="#" class="block hover:underline">FAQ</a>
            </div>
            <div class="space-y-1">
              <a href="#" class="block hover:underline">Contact</a>
              <a href="#" class="block hover:underline">Services & Facilities</a>
            </div>
            <div class="space-y-1">
              <a href="#" class="block hover:underline">Terms of Use</a>
              <a href="#" class="block hover:underline">Privacy Policy</a>
              <a href="#" class="block hover:underline">How to book</a>
            </div>
          </div>
        </div>
        <div class="mt-8 text-center text-base">
          <p>© {{ currentYear }} © Copyright LovelyStay. All right reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    computed: {
      currentYear() {
        return new Date().getFullYear()
      }
    }
  }
  </script>