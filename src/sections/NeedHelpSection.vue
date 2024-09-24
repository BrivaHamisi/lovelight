<template>
    <div class="w-full bg-gray-100 py-12 sm:py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl shadow-lg overflow-hidden"> <!-- Increased roundedness here -->
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-indigo-700">Need Help?</h2>
              <p class="text-lg sm:text-xl mb-6 text-gray-600">
                Experience Fantastic Benefits and Obtain Better Rates When You Make a Direct Booking on Our Official Website
              </p>
              <div>
                <button class="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-full transition duration-300">
                  Contact Us
                </button>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <img src="https://via.assets.so/img.jpg?w=800&h=600&tc=%23cecece&bg=%23cecece&t=%22%22" alt="Business person with clasped hands" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NeedHelpSection'
  }
  </script>