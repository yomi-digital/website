<template>
  <div>
    <Transition
      leave-active-class="slide-out-blurred-top"
      enter-active-class="slide-in-blurred-top"
    >
      <div v-if="!stranger">
        <Header />
        <Menu @switch="stranger = !stranger" />
        <Home />
        <Footer />
      </div>
    </Transition>
    <Transition enter-active-class="slide-out-blurred-top">
      <div v-if="stranger">
        <HeaderStrange />
        <Menu @switch="stranger = !stranger" />
      </div>
    </Transition>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HeaderStrange from "./components/HeaderStrange.vue";
import Home from "./components/Home.vue";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      stranger: false,
    };
  },
  components: {
    Header,
    HeaderStrange,
    Menu,
    Home,
    Footer,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Obviously";
  overflow-x: hidden !important;
}

html,
body {
  scroll-behavior: smooth;
}
</style>
