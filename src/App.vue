<template>
  <container />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/components/Container.vue";

export default defineComponent({
  name: "App",
  components: {
    Container,
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
