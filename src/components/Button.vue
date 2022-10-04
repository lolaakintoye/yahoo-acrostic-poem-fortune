<template>
  <button class="cta-btn reset-btn" v-show="!showForm" @click="resetForm">
    Try Again
  </button>
</template>

<script>
export default {
  name: "Button",
  computed: {},
};
</script>
