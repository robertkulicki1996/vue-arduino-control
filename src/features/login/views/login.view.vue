<template>
  <div>
    <h3>This is login!</h3>
    <div>
      <my-input placeholder="login" v-on:change="(e) => this.userLogin = e" />
    </div>
    <div>
      <my-input placeholder="password" v-on:change="(e) => this.userPassword = e" />
    </div>
    <div>
      <my-button caption="afsgas" v-on:click="login" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-view',
  data: () => ({
    userLogin: '',
    userPassword: '',
  }),
  components: {

  },
  methods: {
    login() {
      window.console.log(`Logging in with login ${this.userLogin} and password ${this.userPassword}`);

      // example of usage of programmatic route change
      // all components have access to this.$router
      this.$router.push('/foo');
    },
  },
};
</script>

<style>

</style>
