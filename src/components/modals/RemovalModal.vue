<template>
  <div class="modal__container">
    <div class="position-relative modal bg-white p-4 flex flex-col items-center space-y-1">
      <img class="ml-auto cursor-pointer" @click="openModal" src="../../assets/images/icons/modal_close_icon.svg" alt="close">
      <h1 class="are-you-sure">
        Are you sure that you would like to remove this saved payment method?
      </h1>
      <Button>
        <p>Remove</p>
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '../Button.vue'
export default {
  name: 'RemovalModal',
  data() {
    return {
      remove: false,
    };
  },
  components: {
    Button,
  },
  methods: {
    openModal() {
      console.log(this.$store.state.modalOpen.removal, 'modal component')
      this.$store.commit('toggleModalR')
    },
  }
}
</script>
