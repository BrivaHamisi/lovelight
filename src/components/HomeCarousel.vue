<template>
  <div class="w-full bg-gray-100">
    <div class="relative w-full h-[28rem] sm:h-[32rem] md:h-[40rem] lg:h-[48rem] overflow-hidden">
      <div 
        class="absolute top-0 left-0 w-full h-full flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          v-for="(item, index) in items" 
          :key="index"
          class="w-full h-full flex-shrink-0 relative"
        >
          <img :src="item.imageSrc" :alt="item.topic" class="w-full h-full object-cover" />
        </div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div class="max-w-3xl">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">{{ items[currentIndex].topic }}</h2>
            <p class="text-lg sm:text-xl mb-6 sm:mb-8 text-white">{{ items[currentIndex].description }}</p>
            <button class="bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-3 px-8 rounded transition duration-300">
              {{ items[currentIndex].buttonText }}
            </button>
          </div>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <button
          v-for="(_, index) in items"
          :key="index"
          @click="goToSlide(index)"
          :class="[ 
            'w-3 h-3 rounded-full transition-all duration-300',
            index === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'
          ]"
          :aria-label="`Go to slide ${index + 1}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue';

export default {
  name: 'StandardWebsiteCarousel',
  props: {
    autoSlideInterval: {
      type: Number,
      default: 5000
    }
  },
  setup(props) {
    const currentIndex = ref(0);
    const isAnimating = ref(false);
    let intervalId = null;

    const items = [
      { 
        imageSrc: "/api/placeholder/1600/900?text=Experience+the+Future&bg=3b82f6&textcolor=ffffff", 
        topic: "Experience the Future",
        description: "Join us for an exciting upcoming event that will shape the future of technology.",
        buttonText: "Register Now" 
      },
      { 
        imageSrc: "/api/placeholder/1600/900?text=Introducing+Innovation&bg=10b981&textcolor=ffffff", 
        topic: "Introducing Innovation",
        description: "Discover our latest breakthrough product that's revolutionizing the industry.",
        buttonText: "Learn More" 
      },
      { 
        imageSrc: "/api/placeholder/1600/900?text=Explore+the+World&bg=f59e0b&textcolor=ffffff", 
        topic: "Explore the World",
        description: "Embark on unforgettable journeys with our exclusive travel packages.",
        buttonText: "Book Now" 
      }
    ];

    const nextSlide = () => {
      if (!isAnimating.value) {
        isAnimating.value = true;
        currentIndex.value = (currentIndex.value + 1) % items.length;
      }
    };

    const goToSlide = (index) => {
      if (!isAnimating.value && index !== currentIndex.value) {
        isAnimating.value = true;
        currentIndex.value = index;
      }
    };

    watch(currentIndex, () => {
      setTimeout(() => {
        isAnimating.value = false;
      }, 300);
    });

    onMounted(() => {
      intervalId = setInterval(nextSlide, props.autoSlideInterval);
    });

    onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });

    return {
      currentIndex,
      goToSlide,
      items
    };
  }
};
</script>