<template>
  <div data-cursor-mix-blend-mode="difference">
    <Loader :isLoading="isLoading" />
    <Geisha v-if="geisha" :enterGeisha="enterGeisha" />
    <div
      :isLoading="isLoading"
      :isEnter="isEnter"
      :class="geisha ? 'about pt-4 geisha' : 'about'"
      style="overlfow: hideen"
      :style="[!isMobile ? { marginTop: '80px' } : {}]"
    >
      <div class="fade-in" v-show="!geisha">
        <ButtonNav />
        <div class="full-h position-relative">
          <div class="container-fluid">
            <div class="row pd-container">
              <div class="col-12">
                <div class="" :class="{ 'mt-3': isMobile }">
                  <h2>HEY!</h2>
                </div>
              </div>
              <div
                :class="{ 'mt-5': !isMobile }"
                class="col-11 col-md-6 col-lg-6"
              >
                <p class="text-service-one" :class="{ 'mt-3': isMobile }">
                  {{ $t("about.firstText") }}
                </p>
                <p class="text-service-one mt-5" :class="{ 'mt-3': isMobile }">
                  {{ $t("about.secondText") }}
                </p>
              </div>
              <div v-if="isMobile" class="col-12 mt-4">
                <a
                  style="position: relative; z-index: 100"
                  class="cta underline"
                  href="#/team"
                  >{{ $t("about.link") }}</a
                >
              </div>
              <div :class="{ 'container-image': isMobile }">
                <div class="box-character-img position-first-box-charger">
                  <img src="../assets/images/about-img.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="position-absolute" style="bottom: 0px">
            <div v-if="!isMobile" class="pd-container mb-4">
              <a data-cursor-hover class="cta underline" href="#/team">{{
                $t("about.link")
              }}</a>
            </div>
            <MarqueeText
              class="title-project"
              :repeat="6"
              :duration="$t('banner.about').length * 0.4"
              style="z-index: 1"
            >
              <h4 data-cursor-hover>&nbsp;{{ $t("banner.about") }}&nbsp;</h4>
            </MarqueeText>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import ButtonNav from "@/components/ButtonNav.vue";
import Geisha from "@/components/Geisha.vue";
import checkViewport from "@/mixins/checkViewport";
import MarqueeText from "vue-marquee-text-component";

import Loader from "@/components/Loader.vue";

export default {
  name: "home",
  data() {
    return {
      geisha: true,

      isLoading: false,
      isEnter: false,
    };
  },

  mixins: [checkViewport],
  props: ["enterGeisha"],
  components: {
    Footer,
    Geisha,
    ButtonNav,
    MarqueeText,
    Loader,
  },
  mounted() {
    const app = this;
    this.loader();
    this.checkIsEnter();
    setTimeout(function () {
      app.geisha = false;
    }, 2000);
  },
  methods: {
    loader() {
      const app = this;
      const loaded = window.localStorage.getItem("loaded");
      if (loaded === null || loaded.length === 0) {
        app.isLoading = true;
        const timeout = this.isMobile ? 2500 : 5000;
        setTimeout(function () {
          app.isLoading = false;
          window.localStorage.setItem("loaded", "yes");
          if (!app.isLoading) {
            app.enterWebsite();
          }
        }, timeout);
      } else {
        app.isLoading = false;
        app.enterWebsite();
      }
    },
    enterWebsite() {
      const app = this;
      app.isEnter = true;
      window.localStorage.setItem("entered", "yes");
    },
    checkIsEnter() {
      const app = this;
      const entered = window.localStorage.getItem("entered");
      if (entered === null || entered.length === 0) {
        app.isEnter = false;
      } else {
        app.isEnter = true;
      }
    },
  },
};
</script>
