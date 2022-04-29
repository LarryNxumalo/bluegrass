<template>
<div>
  <section class="w-full bg-primary-navy text-white p-24 px-md-4">
    <Breadcrums/>
    <Description/>
    <div class="flex space-x-5 pt-6 pb-8">
      <div class="w-3/5 bg-primary-orange flex flex-col">
        <iframe height="669" src="https://www.youtube.com/embed/acPEMmW9rz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      <div class="w-2/5 bg-primary-blue-light ">

      </div>
    </div>
    <div v-for="(coach, index ) in coaches" :key="index" class="bg-tertiary-white w-full p-6 rounded-lg flex flex-nowrap h-full items-center" >
      <div class="flex space-x-6 w-full items-center">
        <img class="w-9 h-9" src="../assets/images/cobus_coach_image.png" alt="">
        <div class="space-y-2">
          <h1 class="text-5md">{{coach.name}}</h1>
          <h2 class="text-4md uppercase">{{coach.subtitle}}</h2>
        </div>
      </div>
      <p class="text-2md">{{coach.description}}</p>
    </div>
  </section>
  <section class="w-full bg-secondary-white text-white relative flex items-center justify-center bg-vivid-orange">
    <img class="relative h-full banner__img" src="../assets/images/home_ready_to_go_image.png" alt="">
    <div class="absolute flex space-x-8 items-center">
        <div class="flex flex-col space-y-4 w-96 ">
           <h1 class="text-4xl">Ready to go?</h1>
          <h3 class="text-6md">Purchase this class in just a few clicks!</h3>
        </div>
        <button class="bg-gradient-to-t from-vivid-orange via-primary-orange to-bright-orange rounded-full text-white px-4 py-2
        w-300 h-111">
          Add to Cart
        </button>
    </div>
  </section>
  <section class="w-full bg-primary-navy text-white relative p-24 px-md-4">
    <h1 class="text-2xl text-left">Snapshots</h1>
    <h2 class="text-4md">Purchase individual lessons from this Master Class</h2>
    <div class="w-full bg-primary-navy flex overflow-y-hidden pt-4">
      <BigCard/>
    </div>
  </section>
  <footer class="w-full bg-white text-white relative p-24 px-md-4 flex flex-col">
    <div class="flex justify-between items-center">
      <img src="../assets/images/footer/footer_rugby_masters_logo.svg" alt="">
      <div class="flex flex-col text-primary-navy space-y-2">
        <a>Home</a>
        <a>Browse Classes</a>
        <a>Create an Account</a>
        <a>Terms & Conditions</a>
      </div>
      <div class="flex flex-col space-y-4">
        <p class="text-primary-navy text-6md">Get in touch</p>
        <div class="flex flex-wrap space-x-3">
          <img src="../assets/images/footer/footer_facebook_icon.svg" alt="">
          <img src="../assets/images/footer/footer_instagram_icon.svg"  alt="">
          <img src="../assets/images/footer/footer_twitter_icon.svg"  alt="">
        </div>
        <a class="text-4md text-primary-navy" href="mailto:webmaster@example.com">hello@rugbymasters.co.za</a>

      </div>
    </div>

    <div class="bg-primary-navy h-88 w-full">

    </div>
  </footer>
</div>


</template>

<script>
// @ is an alias to /src
import Breadcrums from '@/components/Breadcrums.vue';
import Description from '@/components/Description.vue';
import Button from '@/components/Button.vue';
import BigCard from '@/components/cards/BigCard.vue';

export default {
  name: 'rugbyskills',
  components: {
    Breadcrums,
    Description,
    Button,
    BigCard,
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
      this.$store.state.coaches.forEach(coach => {
        if(coach.id == this.$route.params.id){
          this.coach = coach;
          return coach
        }
      });
    }
  },
};
</script>
