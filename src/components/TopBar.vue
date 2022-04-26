<template>
  <nav class="flex w-full p-4">
      <div class="flex items-center space-x-4 w-1/2">
        <img alt="rugby_masters_logo"
        src="../assets/images/header-icons/header_rugby_master_logo.svg">
        <span class="text-md font-normal">Browse Classes</span>
      </div>
      <div class="flex items-center space-x-4 w-1/2 justify-end">
        <ul class="flex items-center space-x-4 pointer">
          <li class="flex cursor-pointer">
          <img v-if="isLoggedIn" alt="rugby_masters_logo"
          class="mr-1"
          src="../assets/images/header-icons/header_cart_icon.svg">
            Search
          </li>
          <li class="flex cursor-pointer">
            <img v-if="isLoggedIn" alt="rugby_masters_logo"
            class="mr-1"
            src="../assets/images/header-icons/header_cart_icon.svg">
            Cart</li>
          <li v-if="!isLoggedIn" class="flex cursor-pointer">
            Log in</li>
        </ul>
        <button v-if="!isLoggedIn"
        class="bg-gradient-to-t from-vivid-orange via-primary-orange to-bright-orange
        rounded-full text-white px-4 py-2
        hover:bg-vivid-orange w-128">
          Sign up
        </button>
      </div>
  </nav>
</template>
<script>
export default {
  name: 'Section',
  props: {
    msg: String,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
};
</script>
