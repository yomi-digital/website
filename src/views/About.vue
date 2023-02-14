<template>
  <div class="about pt-5">
    <Geisha v-if="geisha" :enterGeisha="enterGeisha" />
    <div class="fade-in" v-show="!geisha">
      <ButtonNav />
      <div
        class="container-fluid full-h pd-container"
        style="position: relative"
      >
        <div class="row">
          <div class="col-12">
            <div class="" :class="{ 'mt-3': isMobile }">
              <!--  <typewriter :type-interval="22" :replace-interval="200"> -->
              <h2>{{ $t("menu.about") }}</h2>
              <!--  </typewriter> -->
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-5 mt-5">
            <p class="text-service-one" :class="{ 'mt-3': isMobile }">
              {{ $t("about.firstText") }}
            </p>
            <p class="text-service-one mt-5" :class="{ 'mt-3': isMobile }">
              {{ $t("about.secondText") }}
            </p>
          </div>
        </div>
        <div
          class="box-character-img position-first-box-charger"
          style="width: 475px; height: 100%"
        >
          <img src="../assets/images/about-img.png" alt="" />
        </div>
      </div>
      <div class="pd-container mb-4">
        <a class="cta underline" href="#/team">{{ $t("about.link") }}</a>
      </div>
      <MarqueeText
        class="title-project"
        :repeat="6"
        :duration="8"
        style="z-index: 1"
      >
        <h4>&nbsp;{{$t("banner.about")}}&nbsp;</h4>
      </MarqueeText>

      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
/* import Typewriter from "typewriter-vue"; */
import ButtonNav from "@/components/ButtonNav.vue";
import Geisha from "@/components/Geisha.vue";
import checkViewport from "@/mixins/checkViewport";
import MarqueeText from "vue-marquee-text-component";
/* import ResizeText from 'vue-resize-text' */

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
    /* Typewriter, */
    ButtonNav,
    MarqueeText,
  },
  mounted() {
    const app = this;
    /*  app.showText(); */

    setTimeout(function () {
      app.geisha = false;
    }, 2000);
  },
  methods: {
    /* showText(){
      setTimeout(() => {
        document.getElementById("firstText").classList.add("d-none");
        document.getElementById("secondText").classList.remove("d-none");
        document.getElementById("secondText").classList.add("d-block");
        document.getElementById("secondText").classList.add("fade-in");
      }, 6000);
    } */
  },
};
</script>
