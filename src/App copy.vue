<template>
<div id="app">
  <TopBar />
  <Nav />
  <router-view v-slot="{Component}" >
   <transition name="slide" mode="out-in">
     <TopBar :is="Component" :key="$route.path"/>
    </transition>
  </router-view>

 <amplify-authenticator>

    <p>{{sortedClasses}}?</p>
        <TopBar />
        <Nav />
         <router-view />
        <p>Authenticated View</p>
        <p>Authenticated View</p>
        <p>Authenticated View</p>
         <!-- <p>{{AuthState}}</p> -->
  </amplify-authenticator>
  </div>
</template>
<script>

import Nav from './components/Breadcrums.vue';
import TopBar from './components/Nav.vue';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

import { API, graphqlOperation } from 'aws-amplify';
import { listClasses } from './graphql/queries';
import { createClass, updateClass, deleteClass } from './graphql/mutations';
import { onCreateClass, onUpdateClass, onDeleteClass } from './graphql/subscriptions';

import "@aws-amplify/ui-vue/styles.css";

export default {

  name: 'home',
  components: {
    TopBar,
    Nav,

  },
   data() {
    return {
      user: {},
      rugbyClasses: [],
      loading: true,
    }
  },
  methods: {
    signOut(){
      console.log(AuthState)
    },
  },
  created(){
    console.log(AuthState.Loading, 'this is our auth state')
    this.loading = AuthState.Loading;
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
    transform: translateX(-30%);
  }
</style>
