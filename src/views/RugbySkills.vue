<template>
  <section class="w-full bg-primary-navy h-screen text-white p-24">
    <Breadcrums/>
  </section>
</template>

<script>
// @ is an alias to /src
import Breadcrums from '@/components/Breadcrums.vue';

export default {
  name: 'rugbyskills',
  components: {
    Breadcrums,
  },
};
</script>
