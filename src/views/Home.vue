<template>
<div>
  <!-- <section class="w-full bg-primary-navy text-white p-24 px-md-4">
    <Breadcrums/>
    <Description/>
    <div class="flex pt-6 pb-8 flex-wrap">
      <div class="w-3/5 h-screen bg-primary-orange flex flex-col">

      </div>
      <div class="w-2/5 h-screen bg-primary-blue-light">

      </div>
    </div>
  </section> -->
  <section class="w-full bg-primary-navy text-white relative p-24 px-md-4">
     <Breadcrums/>
    <!-- <Description/> -->
    <h1 class="text-2xl text-left">Browse Classes </h1>
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
