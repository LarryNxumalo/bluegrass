<template>
  <div id="app" class="position-relative">
    <button @click="openModalR">Open Modal</button>
    <button @click="openModalT">Open Toast</button>
    <Nav />
    <router-view />
    <Teleport to="body">
      <transition name="fade" mode="out-in">
        <Backdrop  v-if="modalBackdrop === true "/>
      </transition>
    </Teleport>
    <Teleport to="body">
      <transition name="fade" mode="out-in">
        <RemovalModal  v-if="modalStatus === 'removal' "/>
      </transition>
    </Teleport>
    <Teleport to="body">
      <transition name="slide" mode="out-in">
          <Toast v-if="modalStatus === 'toast' "/>
      </transition>
    </Teleport>
    <amplify-authenticator>
    </amplify-authenticator>
  </div>
</template>

<script>


import Toast from './components/Toast.vue';
import Nav from './components/Nav.vue';
import RemovalModal from  './components/modals/RemovalModal.vue';
import Backdrop from  './components/modals/Backdrop.vue';

import "@aws-amplify/ui-vue/styles.css";

export default {

  name: 'home',
  components: {
    Nav,
    Toast,
    RemovalModal,
    Backdrop,
  },
   data() {
    return {
      user: {},
      rugbyClasses: [],
      loading: true,
    }
  },
  methods: {
    openModalR() {
      this.$store.commit('toggleModalR')
    },
    openModalT() {
      this.$store.commit('toggleModalT')
    },
  },
  computed:{
    modalStatus(){
      return this.$store.state.modalOpen.status;
    },
    modalBackdrop(){
      return this.$store.state.modalOpen.backdrop;
    },
    sortedClasses(){
      let rugbyClasses = [...this.rugbyClasses]
      return rugbyClasses.sort((a,b) => {
        return a.name > b.name ? 1 : -1
      })
    }
  },
};
</script>

