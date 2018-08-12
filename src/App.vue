<template>
  <div id="app">
    <router-link to="/" class="margin-right">home</router-link>
    <router-link to="/radialForce">radialForce</router-link>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.margin-right {
    margin-right: 30px;
}

</style>
