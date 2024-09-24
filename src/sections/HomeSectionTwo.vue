<template>
    <div class="w-full bg-gray-100 flex items-center justify-center" style="min-height: 400px;">
      <div class="container mx-auto px-4 py-16 sm:py-24">
        <div class="flex flex-col-reverse md:flex-row items-center justify-center">
          <div class="flex-grow text-center md:text-left max-w-xl mt-8 md:mt-0 md:mr-12">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">{{ title }}</h2>
            <p class="text-lg sm:text-xl mb-6 text-gray-600">{{ description }}</p>
            <!-- <button class="bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-3 px-8 rounded transition duration-300">
              {{ buttonText }}
            </button> -->
          </div>
          <div class="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0">
            <img 
              :src="imageSrc" 
              :alt="title" 
              class="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CenteredTextImage',
    props: {
      imageSrc: {
        type: String,
        default: "https://via.assets.so/img.jpg?w=800&h=800&tc=%23cecece&bg=%23cecece&t=%22%22"
      },
      title: {
        type: String,
        default: "Welcome to Our Platform"
      },
      description: {
        type: String,
        default: "Discover a world of possibilities with our innovative solutions. We're here to help you achieve your goals and transform your ideas into reality."
      },
      buttonText: {
        type: String,
        default: "Get Started"
      }
    }
  };
  </script>
  
  