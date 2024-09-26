<template>
    <HomeCarousel/>
    <TopBlogSection/>
    <BlogPost/>
    <Footer/>
  
  </template>
  
  <script>
  
  import HomeCarousel from '../components/HomeCarousel.vue';
  import Footer from '../components/Footer.vue';
  import BlogPost from '../components/BlogPost.vue';
  import TopBlogSection from '../sections/TopBlogsSection.vue'
  
  export default {
    name:'BlogsView',
    components:{
      HomeCarousel,
      TopBlogSection,
      BlogPost,
      Footer
    }
    
  }
  
  
  
  </script>
  