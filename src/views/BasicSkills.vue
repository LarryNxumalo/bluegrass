<template>
<div>
  <section class="w-full bg-primary-navy h-screen text-white  p-4 md:p-24">
    <Breadcrums/>
    <main>

    </main>
  </section>
</div>

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
