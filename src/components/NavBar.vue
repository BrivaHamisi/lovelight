<template>
    <nav class="bg-white p-4 sticky top-0 z-50 shadow">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <img src="/api/placeholder/40/40" alt="Logo" class="h-10 w-10 mr-2" />
          <span class="text-blue-900 text-xl font-bold">Your Logo</span>
        </div>
  
        <!-- Hamburger button for mobile -->
        <button @click="toggleMenu" class="text-blue-900 md:hidden focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
  
        <!-- Desktop Menu -->
        <div class="hidden md:flex md:items-center space-x-8"> <!-- Increased space between items -->
          <a
            v-for="route in routes"
            :key="route.path"
            :href="route.path"
            :class="[ 
              'text-blue-900 hover:text-blue-600 transition duration-300', 
              { 'font-bold': isActive(route.path) } 
            ]"
            @click="handleLinkClick"
          >
            {{ route.name }}
          </a>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div class="md:hidden" v-if="isMenuOpen">
        <div class="flex flex-col space-y-4 mt-2"> <!-- Increased space between items -->
          <a
            v-for="route in routes"
            :key="route.path"
            :href="route.path"
            :class="[ 
              'block text-blue-900 hover:text-blue-600 transition duration-300', 
              { 'font-bold': isActive(route.path) } 
            ]"
            @click="handleLinkClick"
          >
            {{ route.name }}
          </a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    data() {
      return {
        isMenuOpen: false, // To toggle the mobile menu
        routes: [
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
          { name: 'Blogs', path: '/blogs' },
          { name: 'Podcast', path: '/podcasts' },
        ],
      };
    },
    methods: {
      isActive(path) {
        return this.$route.path === path;
      },
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen; // Toggle the mobile menu
      },
      handleLinkClick() {
        this.isMenuOpen = false; // Close the mobile menu when a link is clicked
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Add any additional styles if needed */
  </style>
  