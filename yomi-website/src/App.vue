<template>
  <div>
    <Home></Home>
    <Menu></Menu>
    <Service></Service>
    <Servizi></Servizi>
    <Portafolio></Portafolio>
    <Team></Team>
    <Members></Members>
    <Partner></Partner>
    <Join></Join>
    <Footer></Footer>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Team from './components/Team.vue'
import Members from './components/Members.vue'
import Service from './components/Service.vue'
import Portafolio from './components/Portafolio.vue'
import Partner from './components/Partner.vue'
import Join from './components/Join.vue'
import Footer from './components/Footer.vue'
import Servizi from './components/Servizi.vue'

export default {
  name: 'App',
  components: {
    Home,
    Menu,
    Team,
    Members,
    Service,
    Portafolio,
    Partner,
    Join,
    Footer,
    Servizi
  }
}
</script>

<style>
@font-face {
  font-family: "Obviously";
  src: local("Obviously"),
   url(/fonts/Obviously/Oviously-Regular.ttf) format("truetype");
}
#app {
  font-family: Obviously;
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
