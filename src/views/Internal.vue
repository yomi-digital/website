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
        <div class="col-12 col-lg-6">
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
      <a class="" href="https://mego.tickets/#/" target="_blank"
        >{{ $t("mego.btn") }}
     
      </a>
    </div>

    <div class="gap"></div>
    <div v-if="isDesktop" class="gap"></div>
    <FooterExt />
    <newFooter />
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import newFooter from "@/components/newFooter.vue";
import FooterExt from "@/components/FooterExt.vue";
import Bubble from "@/components/Bubble.vue";
import ButtonNav from "@/components/ButtonNav.vue";

import MarqueeText from "vue-marquee-text-component";

export default {
  name: "project",
  mixins: [checkViewport],
  components: {
    FooterExt,
    newFooter,
    ButtonNav,
    MarqueeText,
    Bubble,
  },
  data() {
    return {};
  },
};
</script>
