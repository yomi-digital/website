<template>
  <div class="pt-5">
    <ButtonNav />
    <div class="container-fluid p-0">
      <div class="mt-5 mb-5">
        <MarqueeText :repeat="10" :duration="5">
          <h4>OUR INTERNAL PROJECT&nbsp;</h4>
        </MarqueeText>
      </div>
      <div class="mt-5 mb-5">
        <h6 class="text-center">EXPLORE OUR PROJECTS</h6>
      </div>
      <div class="mb-5">
        <div class="row">
          <div class="col-6 text-center">
            <Bubble />
            <h6>Try It</h6>
          </div>
        </div>
      </div>
      <div class="gap"></div>
      <div v-if="isDesktop" class="gap"></div>
    </div>
    <FooterExt />
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import FooterExt from "@/components/FooterExt.vue";
import Bubble from "@/components/Bubble.vue";
import ButtonNav from "@/components/ButtonNav.vue";
import projectsInternal from "@/portfolio/projectsInternal.json";
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "project",
  mixins: [checkViewport],
  components: {
    FooterExt,
    ButtonNav,
    MarqueeText,
    Bubble,
  },
  data() {
    return {
      projects: projectsInternal,
    };
  },
};
</script>
