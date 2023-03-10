<template>
  <div class="pt-4">
    <ButtonNav />
    <div
      class="container-fluid"
      :style="[!isMobile ? { marginTop: '80px' } : { marginTop: '50px' }]"
    >
      <div class="row pb-0 pd-container">
        <div class="col-12">
          <h2>Mego</h2>
        </div>
        <div class="col-12 col-lg-5">
          <h6 class="mt-5 sub-title-project">
            {{ $t("mego.sub-title") }}
          </h6>
        </div>
      </div>
      <div class="row mt-0 mb-1">
        <div class="col-12 text-center">
          <Bubble
            :resizeHeightBubble="isMobile || isTablet ? 390 : 650"
            :resizeWidthBubble="isMobile || isTablet ? 230 : 1150"
          />
        </div>
      </div>
    </div>
    <MarqueeText :repeat="8" :duration="6">
      <h4 class="text-uppercase">{{ $t("banner.internal") }}&nbsp;</h4>
    </MarqueeText>

    <div class="text-center link-internal mt-5">
      <p>{{ $t("mego.demo") }}</p>
      <a href="https://mego.cx/" target="_blank"
        >{{ $t("mego.btn") }}
        <svg
          width="69"
          height="64"
          viewBox="0 0 69 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.0794 14.6405L46.6993 25.748L-1.67205e-06 25.748L-1.12661e-06 38.2262L46.8353 38.2262L27.0794 49.3595L27.0794 64L69 38.4L69 25.6837L27.0794 6.44572e-06L27.0794 14.6405Z"
            fill="white"
          />
        </svg>
      </a>
    </div>

    <div class="gap"></div>
    <div v-if="isDesktop" class="gap"></div>
    <FooterExt />
    <Footer />
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import Footer from "@/components/Footer.vue";
import FooterExt from "@/components/FooterExt.vue";
import Bubble from "@/components/Bubble.vue";
import ButtonNav from "@/components/ButtonNav.vue";

import MarqueeText from "vue-marquee-text-component";

export default {
  name: "project",
  mixins: [checkViewport],
  components: {
    FooterExt,
    Footer,
    ButtonNav,
    MarqueeText,
    Bubble,
  },
  data() {
    return {};
  },
};
</script>
