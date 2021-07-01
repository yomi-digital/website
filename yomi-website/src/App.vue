<template>
  <div>
    <Home></Home>
    <Menu></Menu>
    <Team></Team>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Team from './components/Team.vue'

export default {
  name: 'App',
  components: {
    Home,
    Menu,
    Team
  }
}
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
  html{
    background-color: black!important;
  }
</style>
