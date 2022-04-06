<template>
  <section class="intro">
    <h1>Yahoo Poetry Fortune Teller</h1>
    <p>Enter your name for a Yahoo Q&A poem to predict your future...</p>
  </section>
  <form id="name-form" v-show="showForm">
    <input
      v-model="userName"
      type="text"
      placeholder="enter name here"
      id="fname"
      autocomplete="off"
    />
    <button type="submit" @click="generatePoem">Generate</button>
  </form>

  <div
    class="poem"
    v-show="!showForm"
    v-for="(letter, index) in nameArray"
    :key="index"
  >
    {{ letter }}
  </div>
  <button class="reset-btn" v-show="!showForm" @click="resetForm">
    Try Again
  </button>
</template>

<script>
import yahooData from "../../data";
export default {
  name: "InputForm",
  data() {
    return {
      userName: "",
      showForm: true,
      nameArray: [],
      formatName: "",
    };
  },
  // computed: {
  //   disabledButton() {
  //     return this.userName ?
  //   }
  // }

  methods: {
    generatePoem(event) {
      event.preventDefault();
      this.formatName =
        this.userName.charAt(0).toUpperCase() + this.userName.slice(1);
      this.showForm = !this.showForm;
      this.userName = this.userName.toLowerCase();
      let result = [];
      for (let i = 0; i < this.userName.length; i++) {
        for (let key in yahooData) {
          if (this.userName[i] == key && yahooData[key][0]) {
            this.nameArray.push(
              yahooData[key][0].toLowerCase().charAt(0).toUpperCase() +
                yahooData[key][0].slice(1)
            );
          }
        }
      }
    },
    resetForm(event) {
      event.preventDefault();
      this.showForm = !this.showForm;
      this.nameArray = [];
    },
  },
};
</script>

<style scoped>
.poem {
  text-align: left;
}
</style>
