<template>
   <div @click="modalStatus" class="backdrop">
    </div>
</template>

<script>
export default {
  name: 'Backdrop',
  methods: {
    modalStatus(){
      this.$store.commit('toggleModalB')
    },
  },
}
</script>
