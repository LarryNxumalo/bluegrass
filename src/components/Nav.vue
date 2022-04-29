<template>
  <nav class="flex w-full p-4 fixed bg-white nav">
      <div class="flex items-center space-x-4 w-1/2">
        <img alt="rugby_masters_logo"
        src="../assets/images/icons/header_rugby_master_logo.svg">
        <span class="text-md font-normal">Browse Classes</span>
      </div>
      <div class="flex space-y-4 items-center space-x-4 w-1/2 justify-end">
        <ul class="flex items-center space-x-4 pointer ">
          <li class="flex cursor-pointer">
          <img v-if="authStatus" alt="rugby_masters_logo"
          class="mr-1"
          src="../assets/images/icons/header_cart_icon.svg">
            Search
          </li>
          <li class="flex cursor-pointer">
            <img v-if="isLoggedIn" alt="rugby_masters_logo"
            class="mr-1"
            src="../assets/images/icons/header_cart_icon.svg">
            Cart</li>
          <li v-if="!isLoggedIn" class="flex cursor-pointer">
            Log in</li>
        </ul>
        <Button>
          <p>Sign Up</p>
        </Button>
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
    };
  },
  methods: {
    logout() {
      this.isLoggedIn = false;
    },
    login() {
      this.isLoggedIn = true;
    },
    openModal() {
      console.log('toggling')

      console.log(this.$store.state.modalOpen)
      this.$store.commit('toggleModal')
    },
  },
  computed:{
    modalStatus(){
      return this.$store.state.modalOpen
    },
    authStatus(){
      return this.$store.state.authStatus
    },
  }
};
</script>
