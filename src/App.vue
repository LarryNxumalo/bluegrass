<template>
  <div id="app" class="position-relative">
    <button class="bg-gradient-to-t from-vivid-orange via-primary-orange to-bright-orange
        rounded-full text-white px-4 py-1
        max-h-200" @click="openModalR">Remove Payment Modal</button>
    <button class="bg-gradient-to-t from-primary-blue-light to-primary-navy
        rounded-full text-white px-4 py-1
        max-h-200" @click="openModalT">Password Change Modal</button>
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
    <Teleport to="body">
      <transition name="slide-fade" mode="out-in">
          <MobileNav v-if="modalStatus === 'mobile-nav' "/>
      </transition>
    </Teleport>
    <Footer/>
    <!-- <amplify-authenticator>
    </amplify-authenticator> -->
  </div>
</template>

<script>


import Toast from './components/Toast.vue';
import Nav from './components/Nav.vue';
import RemovalModal from  './components/modals/RemovalModal.vue';
import Backdrop from  './components/modals/Backdrop.vue';
import MobileNav from  './components/modals/MobileNav.vue';
import Footer from  './components/Footer.vue';


import "@aws-amplify/ui-vue/styles.css";

export default {

  name: 'home',
  components: {
    Nav,
    Toast,
    RemovalModal,
    Backdrop,
    MobileNav,
    Footer,
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

