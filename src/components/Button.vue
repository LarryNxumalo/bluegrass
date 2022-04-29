<template>
  <div>
    <!-- <p>Secondary</p> -->
        <!-- <button class="bg-gradient-to-t from-primary-blue-light to-primary-navy
        rounded-full text-white px-4 py-2
        w-128 max-h-200 align-baseline">

         <slot></slot>
        </button> -->

         <button   class="bg-gradient-to-t from-vivid-orange via-primary-orange to-bright-orange
        rounded-full text-white px-4 py-2
        w-128 max-h-200">
           <slot class="btn__text"></slot>
        </button>
       <!-- <button  class="bg-gradient-to-t from-primary-blue-light to-primary-navy opacity-50 cursor-not-allowed
        rounded-full text-white px-4 py-2
        w-128 max-h-200">
         Disabled
        </button>
        <button   class="bg-gradient-to-t from-vivid-orange via-primary-orange to-bright-orange
        rounded-full text-white px-4 py-2
        w-128 max-h-200">
          Hover
        </button>
        <p>Primary</p>
         <button   class="bg-gradient-to-t from-vivid-orange via-primary-orange to-bright-orange
        rounded-full text-white px-4 py-2
        w-128 max-h-200">
          Enabled
        </button>
         <button   class="bg-gradient-to-t from-vivid-orange via-primary-orange to-bright-orange opacity-50 cursor-not-allowed
        rounded-full text-white px-4 py-2
        w-128 max-h-200">
          Disabled
        </button>

        <button  class="bg-gradient-to-t from-primary-blue-light to-primary-navy
        rounded-full text-white px-4 py-2
        w-128 max-h-200">
         Hover
        </button> -->
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      isLoggedIn: false,
    };
  },
}
</script>


