<template>
  <header  v-if="showNavbar" id="head">
      <img class="logo" src="../assets/images/YOMI_MARCHIO.png" alt="">
    <a class="btn-close-custom" href="/">
      <svg
        width="72"
        height="15"
        viewBox="0 0 72 15"
        :fill="color"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 2H72" :stroke="color" stroke-width="3"  />
        <path d="M0 13H72" :stroke="color" stroke-width="3"  />
      </svg>
    </a>
  </header>
</template>
<script>
export default {
  data(){
    return{
      showNavbar: true,
      lastScrollPosition: 0,
    }
  },
  props: {
    color: {
      type: String,
      default: 'white'
    }
  },
  mounted() {
    const app = this;
    app.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", app.onScroll);
  },
  beforeDestroy() {
   
      document.body.style.overflow = "visible";
      document.body.style.height = "auto";
  
    window.removeEventListener("scroll", this.onScroll);
  },
  methods:{
    onScroll() {
      if (!this.isMobile) {
        if (window.pageYOffset < 0) {
          return;
        }
        if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 100) {
          return;
        }
        this.showNavbar = window.pageYOffset < this.lastScrollPosition;
        this.lastScrollPosition = window.pageYOffset;
      }
    },
  }
}
</script>
