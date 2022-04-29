<template>
<div id="app">
  <button @click="openModal">Open Modal</button>
  <Nav />
  <router-view v-slot="{BasicSkills}" >
   <transition name="slide" mode="out-in">
     <BasicSkills :is="BasicSkills" :key="$route.path"/>
    </transition>
  </router-view>
  <Teleport to="body">
     <transition name="slide" mode="out-in">
      <RemovalModal  v-if="modalStatus"/>]
     </transition>
  </Teleport>
  <amplify-authenticator>
  </amplify-authenticator>
</div>
</template>

<script>

import BasicSkills from './views/BasicSkills.vue';
import Nav from './components/Nav.vue';
import RemovalModal from  './components/modals/RemovalModal.vue';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

import { API, graphqlOperation } from 'aws-amplify';
import { listClasses } from './graphql/queries';
import { createClass, updateClass, deleteClass } from './graphql/mutations';
import { onCreateClass, onUpdateClass, onDeleteClass } from './graphql/subscriptions';

import "@aws-amplify/ui-vue/styles.css";

export default {

  name: 'home',
  components: {
    Nav,
    RemovalModal,
    BasicSkills
  },
   data() {
    return {
      user: {},
      rugbyClasses: [],
      loading: true,
    }
  },
  methods: {
    openModal() {
      console.log('toggling')
      console.log(this.$store.state.modalOpen)
      this.$store.commit('toggleModal')
    },
  },
  created(){
    console.log(AuthState.Loading, 'this is our auth state')
    //auth state
    onAuthUIStateChange((state, user) => {
      //set current user and load payload after sign in
      if(state === AuthState.SignedIn){
        this.user = user;
        this.getData();
        console.log(this.user)
      }
    });

    // API.graphql(graphqlOperation(onCreateClass)).subscribe({
    //   next: (eventData) => {
    //     const newclassData = eventData.value.data.onCreateClass;
    //     if(newclassData){
    //       //skin our own mutations and duplicates
    //       if(this.rugbyClasses.some(r => r.id === newclassData.id)){

    //        return this.rugbyClasses = [newclassData, ...this.rugbyClasses];
    //       }
    //     }
    //   }
    // });
  },
  computed:{
    modalStatus(){
      return this.$store.state.modalOpen
    },
    sortedClasses(){
      let rugbyClasses = [...this.rugbyClasses]
      return rugbyClasses.sort((a,b) => {
        return a.name > b.name ? 1 : -1
      })
    }
  }
};
</script>


<style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 1s, transform 1s;
  }

  .slide-enter-form,
  .slide-leave-to {
    opacity: 0;
    transform: translateZ(-30%);
  }
</style>
