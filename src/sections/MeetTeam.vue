<template>
    <div class="w-full bg-white flex items-center justify-center py-12 sm:py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-gray-800 text-center">{{ title }}</h2>
        <div class="flex flex-col sm:flex-row sm:justify-center sm:items-start">
          <div v-for="(member, index) in teamMembers" :key="index" class="flex flex-col items-center p-4 w-full sm:w-1/3">
            <img :src="member.avatarUrl" :alt="member.name" class="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-6 object-cover shadow-lg">
            <h3 class="text-xl sm:text-2xl font-bold mb-2 text-gray-800">{{ member.name }}</h3>
            <p class="text-lg text-gray-600 font-medium mb-2">{{ member.title }}</p>
            <p class="text-lg text-gray-600 text-center">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MeetTheTeam',
    props: {
      title: {
        type: String,
        default: "Meet the Team"
      }
    },
    data() {
      return {
        teamMembers: [
          {
            name: "Jane Doe",
            title: "CEO & Founder",
            description: "With over 15 years of experience in tech, Jane leads our company vision and strategy.",
            avatarUrl: "https://via.assets.so/img.jpg?w=160&h=160&tc=%23cecece&bg=%23cecece&t=%22%22"
          },
          {
            name: "John Smith",
            title: "CTO",
            description: "John brings cutting-edge technical expertise to drive our product innovation.",
            avatarUrl: "https://via.assets.so/img.jpg?w=160&h=160&tc=%23cecece&bg=%23cecece&t=%22%22"
          },
          {
            name: "Emily Chen",
            title: "Head of Design",
            description: "Emily ensures our products are not just functional, but beautifully crafted and user-friendly.",
            avatarUrl: "https://via.assets.so/img.jpg?w=160&h=160&tc=%23cecece&bg=%23cecece&t=%22%22"
          }
        ]
      }
    }
  }
  </script>