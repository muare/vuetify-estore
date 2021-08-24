<template>
  <v-app>
    <TopNav />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import TopNav from './components/TopNav';

export default {
  name: 'App',

  components: {
    TopNav,
  },

  data: () => ({
    //
  }),
};
</script>
