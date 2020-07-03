<template>
    <div id="app">
      <nav id="navigation">
       <Navigation />
        <router-view></router-view>
      </nav>
    </div>
</template>

<script>
import Navigation from "./components/Navigation";

    export default {
        name: 'App',
        components: {
          Navigation
        }
    }
</script>

<style>
    html, body {
        margin: 0;
    }
    #app {
        background-color: #1A181B;
        height: 100vh;
    }
  .pagetitle {
    text-align: center;
      color:white;
  }



</style>
