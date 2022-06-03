<template>
<!--  <AlertShow/>-->
  <div class="container">
    <Navbar/>

    <div class="container d-flex flex-column">
      <router-view/>
    </div>
  </div>
  <Footer/>
</template>

<script>
// import AlertShow from "@/components/AlertShow";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import AlertShow from "@/components/AlertShow"


export default {
  setup() {


  },

  name: 'App',

  components: {
    // AlertShow,
    Navbar,
    Footer,
    // AlertShow,
  }
}
</script>

<style>

</style>
