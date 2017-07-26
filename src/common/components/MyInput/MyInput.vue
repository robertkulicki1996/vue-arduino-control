<template>
  <input class="myinput" v-model="internalModel" v-on:input="change"/>
</template>

<script>
module.exports = {
  name: 'my-input',
  data: () => ({
    internalModel: '',
  }),
  methods: {
    change() {
      this.$emit('change', this.internalModel);
    },
  },
};
</script>

<style>
  .myinput {
    background-color: yellow;
    color: tomato;
    border: 1px solid hotpink;
  }
</style>
