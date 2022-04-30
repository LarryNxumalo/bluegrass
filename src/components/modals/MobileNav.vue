<template>
  <div class="nav bg-primary-navy w-full p-4 fixed h-screen left-0 top-0">
    <div class="flex justify-between pb-4">
      <img src="../../assets/images/mobile/mobile_nav_logo.svg" alt="">
      <img @click="leftMenu" src="../../assets/images/mobile/mobile_nav_close_icon.svg" alt="">
    </div>
    <div class="flex flex-col justify-center items-center space-y-6">
      <router-link to="/" class="text-1xl text-primary-orange">Browse Classes</router-link>
      <router-link to="/" class="text-1xl text-primary-orange">Cart</router-link>
      <router-link to="/" class="text-1xl text-primary-orange mb-4">Log In</router-link>
      <router-link to="/" class="bg-gradient-to-t from-vivid-orange via-primary-orange to-bright-orange
      rounded-full text-white px-4 py-1
      w-128 max-h-200 text-center m-6">Get Started</router-link>
    </div>
  </div>
</template>

<script>
export default {
 methods: {
    leftMenu() {
      this.$store.commit('toggleModalMobile')
    },
  },
}
</script>
