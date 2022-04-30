<template>
  <div>
    <section class="w-full bg-primary-navy text-white relative p-4 md:p-24">
      <Breadcrums/>
      <!-- <Description/> -->
      <h1 class="text-2xl text-left mb-4">Browse Classes </h1>
      <h2 class="text-4md">Purchase individual lessons from this Master Class</h2>
      <div class="w-full bg-primary-navy flex overflow-y-hidden pt-4">
        <SmallCard/>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrums from '@/components/Breadcrums.vue';
import Description from '@/components/Description.vue';
import SmallCard from '@/components/cards/SmallCard.vue';

export default {
  name: 'rugbyskills',
  components: {
    Breadcrums,
    Description,
    SmallCard
  },
};
</script>
