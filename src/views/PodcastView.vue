<template>
    <HomeCarousel/>
    <!-- <PodcastSection/> -->
     <PodcastSection/>
    <Footer/>
  
  </template>
  
  <script>
  
  import HomeCarousel from '../components/HomeCarousel.vue';
  import Footer from '../components/Footer.vue';
  // import PodcastSection from '../sections/PodcastSection.vue';
  import PodcastSection from '@/sections/PodcastSection.vue';
  
  export default {
    name:'PodcastView',
    components:{
      HomeCarousel,
      PodcastSection,
      Footer
    }
    
  }
  
  
  
  </script>
  