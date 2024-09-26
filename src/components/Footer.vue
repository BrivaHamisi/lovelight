<template>
  <footer class="bg-blue-900 text-white py-8 sm:py-12 min-h-[300px] flex flex-col justify-center">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <div class="w-full md:w-auto">
          <h2 class="text-xl sm:text-2xl font-semibold mb-3">Newsletter & Special Promo</h2>
          <div class="flex">
            <input
              type="email"
              placeholder="Enter your email here"
              class="px-3 py-2 sm:px-4 sm:py-3 rounded-l-md w-full md:w-72 text-gray-900 text-sm sm:text-base"
            >
            <button class="bg-yellow-500 text-blue-900 px-4 py-2 sm:px-6 sm:py-3 rounded-r-md font-semibold text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-2 text-sm sm:text-base">
          <div class="space-y-1">
            <a href="#" class="block hover:underline">About us</a>
            <a href="#" class="block hover:underline">FAQ</a>
          </div>
          <div class="space-y-1">
            <a href="#" class="block hover:underline">Contact</a>
            <a href="#" class="block hover:underline">Services & Facilities</a>
          </div>
          <div class="space-y-1 col-span-2 md:col-span-1 mt-4 md:mt-0">
            <a href="#" class="block hover:underline">Terms of Use</a>
            <a href="#" class="block hover:underline">Privacy Policy</a>
            <a href="#" class="block hover:underline">How to book</a>
          </div>
        </div>
      </div>
      <div class="mt-8 text-center text-xs sm:text-sm">
        <p>© {{ currentYear }} © Copyright Lovelight. All rights reserved.</p>
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