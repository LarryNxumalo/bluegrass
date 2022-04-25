<template>
  <div id="app">
    <TopBar/>
    <Nav/>
    <router-view/>
  </div>
</template>

<script>

import Nav from './components/Nav.vue';
import TopBar from './components/TopBar.vue';

export default {
  name: 'Home',
  components: {
    TopBar,
    Nav,

  },
};
</script>
