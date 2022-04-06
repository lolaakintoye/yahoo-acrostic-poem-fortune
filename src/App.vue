<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
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
  color: #2c3e50;
  margin-top: 60px;
}
@font-face {
  font-family: "Yahoo";
  src: url("../assets/Yahoo.ttf");
}
h1 {
  font-family: "Yahoo";
  color: #7f1f9b;
  /* font-family: 'Press Start 2P', cursive; */
}
</style>
