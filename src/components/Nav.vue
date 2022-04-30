<template>
  <nav class="flex w-full p-4 fixed bg-white nav md:d-none">
      <div class="flex items-center space-x-4 w-full">
        <img alt="rugby_masters_logo"
        src="../assets/images/icons/header_rugby_master_logo.svg">
        <span class="text-md font-normal">Browse Classes</span>
      </div>
      <div v-if="!isMobile" class="flex space-y-4 items-center space-x-4 w-full justify-end">
        <ul class="flex items-center space-x-4 py-4">
          <li class="flex cursor-pointer">
          <img v-if="authStatus" alt="rugby_masters_logo"
          class="mr-1"
          src="../assets/images/icons/header_search_icon.svg">
            Search
          </li>
          <li class="flex cursor-pointer">
            <img v-if="authStatus" alt="rugby_masters_logo"
            class="mr-1"
            src="../assets/images/icons/header_cart_icon.svg">
            Cart</li>
          <li v-if="authStatus" class="flex cursor-pointer">
            Log in
          </li>
          <Button>
            <p>Sign Up</p>
          </Button>
        </ul>

      </div>
      <div v-else class="flex items-center">
        <img @click="leftMenu" class="cursor-pointer" src="../assets/images/mobile_menu_icon.svg" alt="">
      </div>
  </nav>
</template>
<script>

import Button from './Button.vue'
export default {
  name: 'Section',
  components: {
    Button,

  },
  props: {
    msg: String,
  },
  data() {
    return {
      isLoggedIn: false,
      isMobile: false,
    };
  },
  methods: {
    logout() {
      this.isLoggedIn = false;
    },
    login() {
      this.isLoggedIn = true;
    },
    leftMenu() {
      this.$store.commit('toggleModalMobile')
    },
  },
  computed:{
    modalStatus(){
      return this.$store.state.modalOpen
    },
    authStatus(){
      return this.$store.state.userAuth.isLoggedIn
    },

  },
  mounted() {
        if (window.innerWidth <= 768) {
            this.isMobile = true;
        }

    }
};
</script>
