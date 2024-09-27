<template>
    <div class="max-w-4xl mx-auto p-4">
      <h2 class="text-3xl font-bold mb-2 mt-10 text-center">Top Trending Podcast</h2>
      <p class="text-gray-600 mb-6 text-center">Listen to the most popular episodes from our top creators</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="podcast in podcasts" :key="podcast.id" class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-4">
            <div class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 font-medium">{{ podcast.author }}</span>
            </div>
            <img :src="podcast.image" :alt="podcast.title" class="w-full h-48 object-cover rounded-lg mb-4">
            <h3 class="font-semibold text-lg mb-2">{{ podcast.title }}</h3>
            <div class="relative h-8 w-full">
              <div class="absolute inset-0 flex items-center justify-between space-x-0.5">
                <div v-for="i in 50" :key="i" class="h-full w-1 bg-purple-200 rounded-full">
                  <div class="w-full bg-purple-600 rounded-full" :style="{ height: getRandomHeight() }"></div>
                </div>
              </div>
              <div class="absolute inset-y-0 left-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-6">
        <a href="#" class="text-purple-600 hover:underline">Explore Podcasts →</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TrendingPodcasts',
    data() {
      return {
        podcasts: [
          { id: 1, title: 'How to develop confidence public speaking', image: 'https://via.assets.so/img.jpg?w=400&h=300&tc=%23cecece&bg=%23cecece', author: 'Sarah Thompson' },
          { id: 2, title: 'The best preparation for reaching out to the community', image: 'https://via.assets.so/img.jpg?w=400&h=300&tc=%23cecece&bg=%23cecece', author: 'John Davis' },
          { id: 3, title: 'Mental health in the face of intense work pressure', image: 'https://via.assets.so/img.jpg?w=400&h=300&tc=%23cecece&bg=%23cecece', author: 'Emma Wilson' },
          { id: 4, title: 'The power of exercise to nourish the body', image: 'https://via.assets.so/img.jpg?w=400&h=300&tc=%23cecece&bg=%23cecece', author: 'Michael Brown' },
        ]
      }
    },
    methods: {
      getRandomHeight() {
        return `${Math.random() * 100}%`;
      }
    }
  }
  </script>