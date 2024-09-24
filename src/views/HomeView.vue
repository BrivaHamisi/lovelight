<template>
  <HomeCarousel/>
  <HomeSectionOne/>
  <HomeSectionTwo/>
  <BlogSection/>
  <Footer/>
</template>

<script>

import HomeCarousel from '../components/HomeCarousel.vue';
import HomeSectionOne from '../sections/HomeSectionOne.vue';
import HomeSectionTwo from '../sections/HomeSectionTwo.vue';
import BlogSection from '@/sections/BlogSection.vue';
import Footer from '../components/Footer.vue';

export default {
  name:'HomeView',
  components:{
    HomeCarousel,
    HomeSectionOne,
    HomeSectionTwo,
    BlogSection,
    Footer
  }
  
}



</script>
