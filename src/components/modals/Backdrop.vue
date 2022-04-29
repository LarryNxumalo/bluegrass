<template>
   <div @click="modalStatus = false" class="backdrop">
    </div>
</template>

<script>
export default {
  name: 'Backdrop',
  methods: {
    modalStatus(){
      // this.$store.commit('toggleModalR')
      // this.$store.commit('toggleModalB')
      // console.log(this.$store.state.modalOpen.status, this.$store.commit('toggleModalB'))
      // console.log(this.$store.state.modalOpen.backdrop, 'App.vue 2')
      // if(this.$store.state.modalOpen.status !== ''){
      //  this.$store.state.modalOpen.backdrop = true;
      // } else {
      //  this.$store.state.modalOpen.backdrop = false;
      // }
      return this.$store.state.modalOpen.status;
    },
  },
}
</script>
