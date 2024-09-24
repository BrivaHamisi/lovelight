<template>
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-center text-blue-700 mb-6">Top Blogs</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(blog, index) in blogs" :key="index" class="relative overflow-hidden rounded-lg shadow-md">
          <img :src="blog.image" :alt="blog.title" class="w-full h-48 object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <p class="text-white text-lg font-semibold p-4">{{ blog.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blogs: [
          { title: "Thy will and Not Mine", image: "https://via.assets.so/img.jpg?w=800&h=800&tc=%23cecece&bg=%23cecece&t=%22%22" },
          { title: "Yield not to thee", image: "https://via.assets.so/img.jpg?w=800&h=800&tc=%23cecece&bg=%23cecece&t=%22%22" },
          { title: "The Bride Who Knows Not Her Wedding Date", image: "https://via.assets.so/img.jpg?w=800&h=800&tc=%23cecece&bg=%23cecece&t=%22%22" },
          { title: "He had me in mind", image: "https://via.assets.so/img.jpg?w=800&h=800&tc=%23cecece&bg=%23cecece&t=%22%22" },
          { title: "I Lost guard", image: "https://via.assets.so/img.jpg?w=800&h=800&tc=%23cecece&bg=%23cecece&t=%22%22" },
        ]
      }
    }
  }
  </script>