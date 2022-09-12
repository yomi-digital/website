<template>
  <Transition enter-active-class="bounce-in-right">
    <div v-if="isEnter">
      <div class="navbar-custom no-overflow-x" style="overflow-y: hidden">
        <div class="container-fluid p-0">
          <div class="row p-0">
            <div class="col-12 col-md-2 col-lg-2 p-0 bg-light">
              <div class="vh100">
                <a class="nav-link-dark" href="/#/about">
                  <MarqueeText
                    class="marquee-rotated"
                    :repeat="20"
                    :duration="3"
                  >
                    <div>ABOUT&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div class="col-12 col-md-2 col-lg-2 p-0 bg-darker">
              <div class="vh100">
                <a class="nav-link-light" href="/#/team">
                  <MarqueeText
                    class="marquee-rotated"
                    reverse
                    :repeat="20"
                    :duration="3"
                  >
                    <div>OUR TEAM&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div class="col-12 col-md-2 col-lg-2 p-0 bg-light">
              <div class="vh100">
                <a class="nav-link-dark" href="">
                  <MarqueeText
                    class="marquee-rotated"
                    :repeat="20"
                    :duration="3"
                  >
                    <div>SERVICE&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div class="col-12 col-md-2 col-lg-2 p-0 bg-darker">
              <div class="vh100">
                <a class="nav-link-light" href="">
                  <MarqueeText
                    class="marquee-rotated"
                    reverse
                    :repeat="20"
                    :duration="3"
                  >
                    <div>OUR BLOG&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div class="col-12 col-md-2 col-lg-2 p-0 bg-light">
              <div class="vh100">
                <a class="nav-link-dark" href="">
                  <MarqueeText
                    class="marquee-rotated"
                    :repeat="20"
                    :duration="3"
                  >
                    <div>PORTFOLIO&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div class="col-12 col-md-2 col-lg-2 p-0 bg-darker">
              <div class="vh100">
                <a class="nav-link-light" href="">
                  <MarqueeText
                    class="marquee-rotated"
                    reverse
                    :repeat="30"
                    :duration="3"
                  >
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
