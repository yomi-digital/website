<template>
  <Transition enter-active-class="bounce-in-right">
    <div v-if="isEnter">
      <div class="navbar-custom no-overflow-x">
        <div class="container-fluid p-0">
          <div class="row p-0">
            <div
              class="col-12 col-md-6 col-lg-2 p-0 bg-light"
              :class="{ 'full-h': isDesktop }"
            >
              <div class="reverse-top">
                <a class="nav-link-dark" href="">
                  <MarqueeText :repeat="30">
                    <div>ABOUT&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-2 p-0 bg-darker"
              :class="{ 'full-h': isDesktop }"
            >
              <div class="reverse-bottom">
                <a class="nav-link-light" href="">
                  <MarqueeText :repeat="30">
                    <div>OUR TEAM&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-2 p-0 bg-light"
              :class="{ 'full-h': isDesktop }"
            >
              <div class="reverse-top">
                <a class="nav-link-dark" href="">
                  <MarqueeText :repeat="30">
                    <div>SERVICE&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-2 p-0 bg-darker"
              :class="{ 'full-h': isDesktop }"
            >
              <div class="reverse-bottom">
                <a class="nav-link-light" href="">
                  <MarqueeText :repeat="30">
                    <div>OUR BLOG&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-2 p-0 bg-light"
              :class="{ 'full-h': isDesktop }"
            >
              <div class="reverse-top">
                <a class="nav-link-dark" href="">
                  <MarqueeText :repeat="30">
                    <div>PORTFOLIO&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-2 p-0 bg-darker"
              :class="{ 'full-h': isDesktop }"
            >
              <div class="reverse-bottom">
                <a class="nav-link-light" href="">
                  <MarqueeText :repeat="30">
                    <div>INTERNAL&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "loader",
  mixins: [checkViewport],
  props: ["isEnter"],
  components: {
    MarqueeText,
  },
  data() {
    return {};
  },
};
</script>
