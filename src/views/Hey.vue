<template>
  <div>
    <Loader :isLoading="isLoading" />
    <Geisha v-if="geisha && isEnter" :enterGeisha="enterGeisha" />
    <div
      :class="geisha ? 'about pt-4 geisha' : 'about'"
      style="overlfow: hidden"
      :style="[!isMobile ? { marginTop: '80px' } : { marginTop: '50px' }]"
    >
      <div class="fade-in" v-show="!geisha && !isLoading">
        <ButtonNav />
        <div
          class="position-relative"
          :class="{ 'd-flex flex-column justify-content-between': !isMobile }"
          :style="[!isMobile ? { height: 'calc(100vh - 80px)' } : {}]"
        >
          <div class="container-fluid px-5">
            <div class="row">
              <div class="col-12">
                <h2>HEY!</h2>
              </div>
              <div
                :class="{ 'mt-5 ms-3': !isMobile }"
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
                  style="position: relative; z-index: 1"
                  class="cta underline"
                  href="#/team"
                  >{{ $t("about.link") }}</a
                >
              </div>
              <!-- <div :class="{ 'container-image': isMobile }">
                <div class="box-character-img position-first-box-charger">
                  <img src="../assets/images/about-img.webp" alt="" />
                </div>
              </div> -->
            </div>
          </div>
          <div class="">
            <div class="px-5 ms-3 py-4" style="position: relative">
              <div :class="{ 'container-image': isMobile }">
                <div class="box-character-img position-first-box-charger">
                  <img src="../assets/images/about-img-2.webp" alt="" />
                </div>
              </div>
              <a v-if="!isMobile" class="cta underline" href="#/team">{{
                $t("about.link")
              }}</a>
            </div>
            <MarqueeText
              class="title-project"
              :repeat="16"
              :duration="$t('banner.about').length * 0.4"
              style="z-index: 1"
            >
              <h4>&nbsp;{{ $t("banner.about") }}&nbsp;</h4>
            </MarqueeText>
          </div>
        </div>

        <newFooter />
      </div>
    </div>
  </div>
</template>

<script>
import newFooter from "@/components/newFooter.vue";
import ButtonNav from "@/components/ButtonNav.vue";
import Geisha from "@/components/Geisha.vue";
import checkViewport from "@/mixins/checkViewport";
import MarqueeText from "vue-marquee-text-component";

import Loader from "@/components/Loader.vue";

export default {
  name: "home",
  data() {
    return {
      geisha: false,

      isLoading: false,
      isEnter: false,
    };
  },

  mixins: [checkViewport],
  props: ["enterGeisha"],
  components: {
    newFooter,
    Geisha,
    ButtonNav,
    MarqueeText,
    Loader,
  },
  mounted() {
    this.checkIsEnter();
  },
  methods: {
    checkIsEnter() {
      const app = this;
      console.log("init check is enter");
      const entered = window.localStorage.getItem("entered");
      if (entered === null || entered.length === 0) {
        // console.log("isEnter is", app.isEnter);
        // console.log("NOT ENTERED YET, trigger loader");
        app.isEnter = false;
        app.loader();
      } else {
        app.isEnter = true;
        // console.log("isEnter is", app.isEnter);
        // console.log("ENTERED YET, trigger geisha");
        app.startGeisha();
      }
    },
    
    loader() {
      const app = this;
      let page = document.getElementsByTagName("html")[0];
      let bodyPage = document.getElementsByTagName("body")[0];
      const loaded = window.localStorage.getItem("loaded");
      if (loaded === null || loaded.length === 0) {
        app.isLoading = true;
        const timeout = this.isMobile ? 2500 : 5000;

        page.style.overflowY = "hidden";
        bodyPage.style.overflowY = "hidden";

        setTimeout(function () {
          app.isLoading = false;
          if (!app.isLoading) {
            window.localStorage.setItem("entered", "yes");
            page.style.overflowY = "auto";
            bodyPage.style.overflowY = "auto";
            // console.log(
            //   "oversrollY abilitated",
            //   page.style.overflowY,
            //   bodyPage.style.overflowY
            // );
          }
        }, timeout);
      } else {
        app.isLoading = false;
        window.localStorage.setItem("entered", null);
      }
    },

    startGeisha() {
      const app = this;
      // console.log("init geisha animation");
      let page = document.getElementsByTagName("html")[0];
      let bodyPage = document.getElementsByTagName("body")[0];

      if (app.isEnter) {
        page.style.overflowY = "hidden";
        bodyPage.style.overflowY = "hidden";
        app.geisha = true;
        setTimeout(function () {
          app.geisha = false;
          page.style.overflowY = "auto";
          bodyPage.style.overflowY = "auto";
          // console.log(
          //   "oversrollY abilitated",
          //   page.style.overflowY,
          //   bodyPage.style.overflowY
          // );
        }, 2000);
      }
    },
  },
};
</script>
