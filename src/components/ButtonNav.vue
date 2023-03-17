<template>
  <div>
    <header id="head">
      <a href="/">
        <img
          class="logo hoverPointer"
          src="../assets/images/YOMI_MARCHIO.png"
          alt=""
      /></a>
      <div class="btn-close-custom hoverPointer" @click="showNav()">
        <svg
          class="hoverPointer"
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
        <div>
          <div
            class="navbar-custom no-overflow-x"
            :style="[!isMobile ? { overflowY: 'hidden' } : {}]"
          >
            <div class="container-fluid height-navbar p-0">
              <div :class="{ 'p-0 m-0 row': !isMobile }">
                <div @click="showNavbar = false"
                  class="p-0 bg-light"
                  :class="{
                    'column-navbar': !isMobile,
                    vh16: isMobile,
                  }"
                >
                  <div :class="isMobile ? 'h-100' : 'vh-100'">
                    <a class="nav-link-dark" href="/">
                      <MarqueeText
                        class="marquee-rotated"
                        :repeat="20"
                        :duration="$t('menu.about').length * 0.5"
                      >
                        <div class="hoverPointer">
                          {{ $t("menu.about") }}&nbsp;
                        </div>
                      </MarqueeText></a
                    >
                  </div>
                </div>
                <div @click="showNavbar = false"
                  class="p-0 bg-darker"
                  :class="{
                    'column-navbar': !isMobile,
                    vh16: isMobile,
                  }"
                >
                  <div :class="isMobile ? 'h-100' : 'vh-100'">
                    <a class="nav-link-light" href="/#/team">
                      <MarqueeText
                        class="marquee-rotated"
                        reverse
                        :repeat="20"
                        :duration="$t('menu.team').length * 0.5"
                      >
                        <div>{{ $t("menu.team") }}&nbsp;</div>
                      </MarqueeText></a
                    >
                  </div>
                </div>
                <div @click="showNavbar = false"
                  class="p-0 bg-light"
                  :class="{
                    'column-navbar': !isMobile,
                    vh16: isMobile,
                  }"
                >
                  <div :class="isMobile ? 'h-100' : 'vh-100'">
                    <a class="nav-link-dark" href="/#/services">
                      <MarqueeText
                        class="marquee-rotated"
                        :repeat="20"
                        :duration="$t('menu.service').length * 0.5"
                      >
                        <div>{{ $t("menu.service") }}&nbsp;</div>
                      </MarqueeText></a
                    >
                  </div>
                </div>
                <div @click="showNavbar = false"
                  class="p-0 bg-darker"
                  :class="{
                    'column-navbar': !isMobile,
                    vh16: isMobile,
                  }"
                >
                  <div :class="isMobile ? 'h-100' : 'vh-100'">
                    <a class="nav-link-light" href="/#/portfolio">
                      <MarqueeText
                        class="marquee-rotated"
                        reverse
                        :repeat="20"
                        :duration="$t('menu.portfolio').length * 0.5"
                      >
                        <div>{{ $t("menu.portfolio") }}&nbsp;</div>
                      </MarqueeText></a
                    >
                  </div>
                </div>
                <div @click="showNavbar = false"
                  class="p-0 bg-light"
                  :class="{
                    'column-navbar': !isMobile,
                    vh16: isMobile,
                  }"
                >
                  <div :class="isMobile ? 'h-100' : 'vh-100'">
                    <a class="nav-link-dark" href="/#/internal-project">
                      <MarqueeText
                        class="marquee-rotated"
                        :repeat="30"
                        :duration="$t('menu.internal').length * 0.5"
                      >
                        <div>{{ $t("menu.internal") }}&nbsp;</div>
                      </MarqueeText></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-nav">
              <changeLanguage />
              <div class="gap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import checkViewport from "@/mixins/checkViewport";
import MarqueeText from "vue-marquee-text-component";
import changeLanguage from "../components/changeLanguage.vue";

export default {
  mixins: [checkViewport],
  data() {
    return {
      showNavbar: false,
      lastScrollPosition: 0,
    };
  },
  components: {
    changeLanguage,
    MarqueeText,
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
        app.showNavbar = false;
        console.log("trigger close nav from route");
        window.location.reload();
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
