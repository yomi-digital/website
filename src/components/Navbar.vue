<template>
    <div>
      <div
        class="navbar-custom no-overflow-x"
        :style="[!isMobile ? { overflowY: 'hidden' } : {}]"
      >
        <div class="container-fluid height-navbar p-0">
          <div>
            <div
              class="p-0 bg-light vh16"
              
            >
              <div class="h-100">
                <a class="nav-link-dark" href="/">
                  <MarqueeText
                    class="marquee-rotated"
                    :repeat="20"
                    :duration="$t('menu.about').length * 0.7"
                  >
                    <div class="hoverPointer">{{ $t("menu.about") }}&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div
              class="p-0 bg-darker vh16"
              
            >
              <div :class="isMobile ? 'h-100' : 'h-100'">
                <a class="nav-link-light" href="/#/team">
                  <MarqueeText
                    class="marquee-rotated"
                    reverse
                    :repeat="20"
                    :duration="$t('menu.team').length * 0.7"
                  >
                    <div>{{ $t("menu.team") }}&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div
              class="p-0 bg-light vh16"
              
            >
              <div :class="isMobile ? 'h-100' : 'h-100'">
                <a class="nav-link-dark" href="/#/services">
                  <MarqueeText
                    class="marquee-rotated"
                    :repeat="20"
                    :duration="$t('menu.service').length * 0.7"
                  >
                    <div>{{ $t("menu.service") }}&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div
              class="p-0 bg-darker vh16"
              
            >
              <div :class="isMobile ? 'h-100' : 'h-100'">
                <a class="nav-link-light" href="/#/portfolio">
                  <MarqueeText
                    class="marquee-rotated"
                    reverse
                    :repeat="20"
                    :duration="$t('menu.portfolio').length * 0.7"
                  >
                    <div>{{ $t("menu.portfolio") }}&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
            <div
              class="p-0 bg-light vh16"
              
            >
              <div :class="isMobile ? 'h-100' : 'h-100'">
                <a class="nav-link-dark" href="/#/internal-project">
                  <MarqueeText
                    class="marquee-rotated"
                    :repeat="30"
                    :duration="$t('menu.internal').length * 0.7"
                  >
                    <div>{{ $t("menu.internal") }}&nbsp;</div>
                  </MarqueeText></a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="footer-nav">
          <div class="pt-3 d-flex justify-content-center">
            <Talk />
          </div>
          <div class="gap"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import checkViewport from "@/mixins/checkViewport";
  import MarqueeText from "vue-marquee-text-component";
  import Talk from "../components/Talk.vue";
  
  export default {
    name: "loader",
    topFooter: false,
    mixins: [checkViewport],
    props: ["isEnter"],
    components: {
      MarqueeText,
      Talk,
    },
    data() {
      return {};
    },
  };
  </script>
  
  