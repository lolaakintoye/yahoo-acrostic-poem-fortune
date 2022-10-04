<template>
    <div
    class="poem-container"
    v-show="!showForm"
    v-for="(letter, index) in nameArray"
    :key="index"
  >
    {{ letter }}
  </div>
  <button class="cta-btn reset-btn" v-show="!showForm" @click="resetForm">
    Try Again
  </button>
</template>
<script>
export default {
    name: "DisplayPoem",

}
</script>