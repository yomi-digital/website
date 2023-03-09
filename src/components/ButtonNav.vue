<template>
  <div data-cursor-mix-blend-mode="difference">
    <header id="head">
      <a href="/">
        <img
          class="logo hoverPointer"
          src="../assets/images/YOMI_MARCHIO.png"
          alt=""
      /></a>
      <div class="btn-close-custom hoverPointer" @click="showNav()">
        <svg class="hoverPointer"
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
    showNavbar() {
      const app = this;
      let page = document.getElementsByTagName("html")[0];
      let bodyPage = document.getElementsByTagName("body")[0];
      if (app.showNavbar) {
        page.style.overflowY = "hidden";
        bodyPage.style.overflowY = "hidden";
      } else {
        page.style.overflowY = "auto";
        bodyPage.style.overflowY = "auto";
      }
    },
  },
  mounted() {
    const app = this;
    app.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", app.onScroll);

    // RESET SCROLL
    let page = document.getElementsByTagName("html")[0];
    let bodyPage = document.getElementsByTagName("body")[0];
    page.style.overflowY = "auto";
    bodyPage.style.overflowY = "auto";
  },
  beforeDestroy() {
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  },
  methods: {
    showNav() {
      const app = this;
      app.showNavbar = !app.showNavbar;
    },
  },
};
</script>
