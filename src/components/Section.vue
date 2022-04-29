<template>
  <div class="w-full bg-primary-navy h-screen text-white p-24">
    <Breadcrums/>
  </div>
</template>
<script>
import Breadcrums from './Breadcrums.vue'
export default {
  name: 'Section',
  props: {
    msg: String,
  },
  components:{
    Breadcrums,
  }
};
</script>
