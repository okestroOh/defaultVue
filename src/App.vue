<template>
  <Navbar/>

  <v-container>
    <router-view/>
  </v-container>

  <Footer/>
</template>

<script>
// import AlertShow from "@/components/AlertShow";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  setup() {


  },

  name: 'App',

  components: {
    // AlertShow,
    Navbar,
    Footer,
  }
}
</script>

<style>

</style>
