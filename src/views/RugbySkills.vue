<template>
  <div>
    <section class="w-full bg-primary-navy text-white p-4 md:p-24">
      <Breadcrums/>
      <Description/>
      <div class="w-full flex md:flex-nowrap flex-wrap md:space-x-4 space-x-0 space-y-2 md:space-y-0 pt-6 pb-8">
        <div class="md:w-3/5 w-full flex flex-col ">

          <img src="../assets/images/class_overview_video.png" alt="">
          <div class="bg-white w-full -mt-1">
            <div class="rounded-full bg-gradient-to-t from-vivid-orange via-primary-orange to-bright-orange w-2 h-2 cursor-pointer"></div>
          </div>
          <div class="bg-primary-navy w-full flex items-center p-2">
            <div class="w-full flex space-x-6">
              <img @click="Pause()" class="cursor-pointer" src="../assets/images/icons/class_details_video_pause_icon.svg" alt="">
              <div class="flex space-x-2">
                <img @click="Volume()" class="cursor-pointer" src="../assets/images/icons/class_details_video_volume_icon.svg" alt="">
                <div>
                  {{currentTime}} / {{duration}}
                </div>
              </div>
            </div>
              <img @click="FullScreen()" class="cursor-pointer" src="../assets/images/icons/video_full_screen_icon-ic_fullscreen.svg" alt="">
          </div>
          <div class="bg-tertiary-white w-full p-6 rounded-b-lg flex items-center">
            <p class="text-2md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed quis egestas sapien. Nam dignissim.</p>
          </div>
        </div>
        <div class="md:w-2/5 w-full bg-white rounded-lg flex flex-col h-full" >
        <div v-for="(accordion, index) in accrdions" :key="index">
          <accordion class="mb-4 p-4 border-t border-primary-navy">
            <template v-slot:title>
              <span class="text-4md text-primary-navy">{{accordion.title}}n</span>
            </template>
            <template v-slot:content >
              <p class="text-9md text-primary-navy">
                {{accordion.content}}
              </p>
            </template>
          </accordion>
        </div>

        </div>
      </div>
      <div class="bg-tertiary-white w-full p-6 rounded-lg flex flex-wrap h-full items-center justify-between space-y-6" >
        <div class="flex space-x-6 items-center">
          <img class="w-9 h-9 p-4 md:h-9 md:w-9" src="../assets/images/cobus_coach_image.png" alt="">
          <div class="space-y-2">
            <h1 class="text-5md">Cobus Reinach</h1>
            <h2 class="text-4md uppercase">Professional Rugby Union Player</h2>
          </div>
        </div>
        <p class="text-2md w-657">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed quis egestas sapien. Nam dignissim.</p>
      </div>
    </section>
    <section class="banner__img w-full h-full bg-secondary-white text-white relative flex items-center justify-center bg-vivid-orange ">
      <!-- <img class="relative h-full banner__img" alt=""> -->
      <div class="flex flex-wrap items-center justify-center space-y-4">
          <div class="flex flex-col space-y-4 w-96">
            <h1 class="text-4xl">Ready to go?</h1>
            <h3 class="text-6md mb-4">Purchase this class in just a few clicks!</h3>
          </div>
          <button class="bg-gradient-to-t from-vivid-orange via-primary-orange to-bright-orange rounded-full text-white px-4 py-2 w-128 h-111">
            Add to Cart
          </button>
      </div>
    </section>
    <section class="w-full bg-primary-navy text-white relative p-4 md:p-24">
      <h1 class="text-2xl text-left">Snapshots</h1>
      <h2 class="text-4md">Purchase individual lessons from this Master Class</h2>
      <div class="w-full bg-primary-navy flex overflow-y-hidden pt-4">
        <BigCard/>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrums from '@/components/Breadcrums.vue';
import Description from '@/components/Description.vue';
import Button from '@/components/Button.vue';
import BigCard from '@/components/cards/BigCard.vue';
import Accordion from '@/components/Accordion.vue';

export default {
  name: 'rugbyskills',
  components: {
    Breadcrums,
    Description,
    Button,
    BigCard,
    Accordion
  },
  data(){
    return{
      accrdions: [
        {
          title: '1. Introduction',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed quis egestas sapien. Nam dignissim.'
        },
        {
          title: '2. On-Field Decision Making',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed quis egestas sapien. Nam dignissim.'
        },
        {
          title: '3. Passing',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed quis egestas sapien. Nam dignissim.'
        },
        {
          title: '4. Kicking',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed'
        },
        {
          title: '5. Game Prep and Analysation',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed'
        },
        {
          title: '6. Tricks',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed'
        },
      ]
    }
  },
  //method for calculating class playback time and duration
  computed: {
    currentTime() {
      return '0:01'
    },
    duration() {
      return '0:40'
    },
    coaches(){
      return this.$store.state.coaches
    }
  },
};
</script>
