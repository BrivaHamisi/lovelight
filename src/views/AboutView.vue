<template>
  <HomeCarousel/>
  <AboutUsDescription/>
  <MeetTeam/>
  <HomeSectionOne/>
  <NeedHelpSectionVue/>
  <Footer/>

</template>

<script>

import HomeCarousel from '../components/HomeCarousel.vue';
import AboutUsDescription from '../sections/AboutUsDescription.vue';
import MeetTeam from '../sections/MeetTeam.vue';
import HomeSectionOne from '@/sections/HomeSectionOne.vue';
import NeedHelpSectionVue from '@/sections/NeedHelpSection.vue';
import Footer from '../components/Footer.vue';

export default {
  name:'HomeView',
  components:{
    HomeCarousel,
    AboutUsDescription,
    MeetTeam,
    HomeSectionOne,
    NeedHelpSectionVue,
    Footer
  }
  
}



</script>
