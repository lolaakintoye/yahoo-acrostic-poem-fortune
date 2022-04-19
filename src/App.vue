<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <img alt="Crystal Ball" src="./assets/crystal-ball.svg"/>
  <h2>Yahoo Poetry Fortune Teller</h2>
  <p>Enter your name for a Yahoo Q&A poem to predict your future...</p>
  <input-form />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputForm from "@/components/Form.vue";

export default defineComponent({
  name: "App",
  components: {
    InputForm,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 60px;
}
@font-face {
  font-family: "Yahoo";
  src: url("../assets/Yahoo.ttf");
}
h2 {
  font-family: "Yahoo";
  color: #7f1f9b;
  /* font-family: 'Press Start 2P', cursive; */
}
</style>
