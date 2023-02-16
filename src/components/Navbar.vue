<template>
  <Transition enter-active-class="bounce-in-right">
    <div v-if="isEnter">
      <div class="navbar-custom no-overflow-x" style="overflow-y: hidden">
        <div class="container-fluid height-navbar p-0">
          <div :class="{ 'p-0 m-0 row': !isMobile }">
            <div
              class="p-0 bg-light"
              :class="{
                'column-navbar': !isMobile,
                'vh16': isMobile,
              }"
            >
              <div :class="isMobile ? 'h-100' : 'vh-100'">
                <a class="nav-link-dark" href="/#/about">
                  <MarqueeText
                    class="marquee-rotated"
                    :repeat="20"
                    :duration="7"
                  >
                    <div>{{ $t("menu.about") }}&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div
              class="p-0 bg-darker"
              :class="{
                'column-navbar': !isMobile,
                'vh16': isMobile,
              }"
            >
              <div :class="isMobile ? 'h-100' : 'vh-100'">
                <a class="nav-link-light" href="/#/team">
                  <MarqueeText
                    class="marquee-rotated"
                    reverse
                    :repeat="20"
                    :duration="7"
                  >
                    <div>{{ $t("menu.team") }}&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div
              class="p-0 bg-light"
              :class="{
                'column-navbar': !isMobile,
                'vh16': isMobile,
              }"
            >
              <div :class="isMobile ? 'h-100' : 'vh-100'">
                <a class="nav-link-dark" href="/#/services">
                  <MarqueeText
                    class="marquee-rotated"
                    :repeat="20"
                    :duration="7"
                  >
                    <div>{{ $t("menu.service") }}&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <!-- <div
              class="p-0 bg-darker"
              :class="{
                'col-12 col-md-2 col-lg-2': !isMobile,
                'vh16': isMobile,
              }"
            >
              <div :class="isMobile ? 'h-100' : 'vh-100'">
                <a class="nav-link-light" href="/#/blog">
                  <MarqueeText
                    class="marquee-rotated"
                    reverse
                    :repeat="20"
                    :duration="7"
                  >
                    <div>OUR BLOG&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div> -->
            <div
              class="p-0 bg-darker"
              :class="{
                'column-navbar': !isMobile,
                'vh16': isMobile,
              }"
            >
              <div :class="isMobile ? 'h-100' : 'vh-100'">
                <a class="nav-link-light" href="/#/portfolio">
                  <MarqueeText
                    class="marquee-rotated"
                    reverse
                    :repeat="20"
                    :duration="7"
                  >
                    <div>{{ $t("menu.portfolio") }}&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div
              class="p-0 bg-light"
              :class="{
                'column-navbar': !isMobile,
                'vh16': isMobile,
              }"
            >
              <div :class="isMobile ? 'h-100' : 'vh-100'">
                <a class="nav-link-dark" href="/#/internal-project">
                  <MarqueeText
                    class="marquee-rotated"
                    :repeat="30"
                    :duration="7"
                  >
                    <div>{{ $t("menu.internal") }}&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="footer-top">
         <changeLanguage />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import MarqueeText from "vue-marquee-text-component";
import changeLanguage from "../components/changeLanguage.vue";

export default {
  name: "loader",
  topFooter: false,
  mixins: [checkViewport],
  props: ["isEnter"],
  components: {
    MarqueeText,
    changeLanguage
  },
  data() {
    return {};
  },
};
</script>

