<template>
  <div>
    <ButtonNav />
    <div class="container-fluid pd-container mt-5">
      <div class="row">
        <div class="col-12">
          <h2 class="">Mego</h2>
        </div>
        <div class="col-12 col-lg-5">
          <h6 class="mt-5 sub-title-project">
            MEGO is our answer to traditional ticketing processes, with high
            costs, inauthenticity, and limited options for customizing landing
            pages, ticket and email.
          </h6>
        </div>
      </div>
      <div class="row mt-5 mb-5">
        <div class="col-12 text-center mt-5 mb-5">
          <Bubble :resizeHeightBubble="isMobile || isTablet ? 320 : 500" :resizeWidthBubble="isMobile || isTablet ? 200 : 960"   />
        </div>
      </div>
      <MarqueeText :repeat="8" :duration="6">
        <h4 class="text-uppercase">nft cross-chain ticketing system&nbsp;</h4>
      </MarqueeText>
      <div class="row mt-5">
        <div class="col-12 col-md-8 offset-0 offset-md-2 text-center link-internal">
          <p>IF YOU WANT TO KNOW MORE</p>
          <a href=""
            >try now
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
              /></svg
          ></a>
        </div>
      </div>
    </div>
    <!-- <div class="container-fluid pd-container mt-5">
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
    </div> -->
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
import projectsInternal from "@/portfolio/projectsInternal.json";
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
    return {
      projects: projectsInternal,
    };
  },
};
</script>
