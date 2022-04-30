<template>
  <footer class="w-full bg-white text-white relative flex flex-col h-full pt-4">
    <div class="flex flex-wrap flex-col md:flex-row justify-between items-center px-4 py-0 md:py-14 md:px-24 space-y-3">
      <div class="flex flex-wrap flex-col md:flex-row space-x-4">
        <img src="../assets/images/footer/footer_rugby_masters_logo.svg" alt="">
        <div class="flex flex-col text-primary-navy space-y-2 text-4md text-center md:text-left">
          <a>Home</a>
          <a>Browse Classes</a>
          <a>Create an Account</a>
          <a>Terms & Conditions</a>
        </div>
      </div>
      <div class="flex flex-wrap flex-col md:flex-col md:space-y-4 md:items-start items-center space-y-3 pb-4" >
        <p class="text-primary-navy text-6md text-center md:text-left">Get in touch</p>
        <div class="flex flex-wrap space-x-3">
          <img src="../assets/images/footer/footer_facebook_icon.svg" alt="">
          <img src="../assets/images/footer/footer_instagram_icon.svg"  alt="">
          <img src="../assets/images/footer/footer_twitter_icon.svg"  alt="">
        </div>
        <a class="text-4md text-primary-navy mt-4 text-center md:text-left" href="mailto:webmaster@example.com">hello@rugbymasters.co.za</a>
      </div>
    </div>

    <div class="bg-primary-navy h-88 w-full flex items-center justify-center">
        <p class="text-sm text-white">
          Copyright Rugby Masters 2020, All Rights Reserved.
        </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
