<template>
  <div data-cursor-mix-blend-mode="difference">
    <header id="head">
      <a href="/" data-cursor-hover>
        <img class="logo" src="../assets/images/YOMI_MARCHIO.png" alt=""
      /></a>
      <div data-cursor-hover class="btn-close-custom" @click="showNav()">
        <svg
          width="72"
          height="15"
          viewBox="0 0 72 15"
          :fill="color"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 2H72" :stroke="color" stroke-width="3" />
          <path d="M0 13H72" :stroke="color" stroke-width="3" />
        </svg>
      </div>
    </header>
    <div v-if="showNavbar" class="container-navbar-custom">
      <div class="bounce-in-right" v-if="showNavbar">
        <Navbar />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  data() {
    return {
      showNavbar: false,
      lastScrollPosition: 0,
    };
  },
  components: {
    Navbar,
  },

  props: {
    color: {
      type: String,
      default: "white",
    },
  },
  watch: {
    $route(to, from) {
      const app = this;
      if (from.name === to.name) {
        app.showNavbar = !app.showNavbar;
        console.log("trigger close nav from route");
      }
    },
  },
  mounted() {
    const app = this;
    app.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", app.onScroll);
  },
  beforeDestroy() {
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  },
  methods: {
    showNav() {
      const app = this;
      app.showNavbar = !app.showNavbar;
      let page = document.getElementsByTagName("html")[0];
      let bodyPage = document.getElementsByTagName("body")[0];
      if (app.showNavbar) {
        page.style.overflow = "hidden";
        bodyPage.style.overflow = "hidden";
      } else {
        page.style.overflow = "auto";
        bodyPage.style.overflow = "auto";
      }
    },
  },
};
</script>
