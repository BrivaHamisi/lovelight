<template>
    <div class="w-full bg-gray-100 flex items-center justify-center" style="min-height: 300px;">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div class="max-w-5xl mx-auto"> <!-- Increased max-width from 4xl to 5xl -->
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 text-left">{{ title }}</h2>
          <p class="text-lg sm:text-xl mb-8 text-gray-600 text-left">{{ description }}</p>
          <div class="text-left">
            <!-- <button class="bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-3 px-8 rounded transition duration-300">
              {{ buttonText }}
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextDescriptionComponent',
    props: {
      title: {
        type: String,
        default: "Welcome to Our Platform"
      },
      description: {
        type: String,
        default: "Discover a world of possibilities with our innovative solutions. We're here to help you achieve your goals and transform your ideas into reality. Our team of experts is dedicated to providing cutting-edge technologies and unparalleled support to ensure your success in today's fast-paced digital landscape. Discover a world of possibilities with our innovative solutions. We're here to help you achieve your goals and transform your ideas into reality. Our team of experts is dedicated to providing cutting-edge technologies and unparalleled support to ensure your success in today's fast-paced digital landscape.Discover a world of possibilities with our innovative solutions. We're here to help you achieve your goals and transform your ideas into reality. Our team of experts is dedicated to providing cutting-edge technologies and unparalleled support to ensure your success in today's fast-paced digital landscape."
      },
      buttonText: {
        type: String,
        default: "Get Started"
      }
    }
  };
  </script>