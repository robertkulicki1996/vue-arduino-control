<template>
  <button class="mybutton" v-on:click="click">
    {{ caption }}
  </button>
</template>

<script>

export default {
  props: ['caption'],
  name: 'my-button',
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.mybutton {
  background-color: tomato;
  color: yellow;
  border: 0;
}
</style>
