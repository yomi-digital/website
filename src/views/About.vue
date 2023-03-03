<template>
  <div
    :style="{ overflow: 'hidden' }"
    :class="geisha ? 'about pt-4 geisha' : 'about pt-4'"
  >
    <Geisha v-if="geisha" :enterGeisha="enterGeisha" />
    <div class="fade-in" v-show="!geisha">
      <ButtonNav />
      <div class="full-h position-relative">
        <div class="container-fluid">
          <div class="row pd-container">
            <div class="col-12">
              <div class="" :class="{ 'mt-3': isMobile }">
                <h2>{{ $t("menu.about") }}</h2>
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
            <a class="cta underline" href="#/team">{{ $t("about.link") }}</a>
          </div>
          <MarqueeText
            class="title-project"
            :repeat="6"
            :duration="$t('banner.about').length * 0.4"
            style="z-index: 1"
          >
            <h4>&nbsp;{{ $t("banner.about") }}&nbsp;</h4>
          </MarqueeText>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import ButtonNav from "@/components/ButtonNav.vue";
import Geisha from "@/components/Geisha.vue";
import checkViewport from "@/mixins/checkViewport";
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "about",
  data() {
    return {
      geisha: true,
    };
  },

  mixins: [checkViewport],
  props: ["enterGeisha"],
  components: {
    Footer,
    Geisha,
    ButtonNav,
    MarqueeText,
  },
  mounted() {
    const app = this;

    setTimeout(function () {
      app.geisha = false;
    }, 2000);
  },
  methods: {

  },
};
</script>
