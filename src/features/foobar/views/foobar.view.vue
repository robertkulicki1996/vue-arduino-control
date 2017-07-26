<template>
  <div>
    <hr/> This is navigation:
    <div style="height: 50px; background-color: yellow; color: hotpink; margin: 20px;">
      <router-link to="/foo/alpha">Alpha</router-link>
      <router-link to="/foo/bravo">Bravo</router-link>
      |
      <router-link to="/login">Logout</router-link>
    </div>
    <hr/>
    This is content:
    <router-view></router-view>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
