<template>
  <div class="services pt-5">
    <ButtonNav />
    <div class="container-fluid pd-container mt-5">
      <div class="row margin-btm">
        <div class="col-12">
          <h2 class="">{{ $t("menu.service") }}</h2>
        </div>
      </div>
    </div>
    <div class="container-fluid p-0">
      <div class="row margin-btm pt-5">
        <div class="col-12 service-content">
          <MarqueeText
            @click="showTextFirst = ''"
            :repeat="10"
            :duration="$t('service.firstBanner').length * 0.5"
          >
            <h4>{{ $t("service.firstBanner") }}&nbsp;</h4>
          </MarqueeText>
          <div
          @click="
              if (showTextFirst === 'blockchain') {
                showTextFirst = '';
              } else {
                showTextFirst = 'blockchain';
                showTextSecond = '';
                showTextThird = '';
              }
            "
            :class="{
              active: showTextFirst === 'blockchain',
              'lft-40': !isMobile,
            }"
            class="single-service position-one transform-rotate-one"
          >
            <p class="text-strong">{{ $t("service.blockchain") }}</p>
          </div>
          <div
          @click="
              if (showTextFirst === 'metaverse') {
                showTextFirst = '';
              } else {
                showTextFirst = 'metaverse';
                showTextSecond = '';
                showTextThird = '';
              }
            "
            :class="{
              active: showTextFirst === 'metaverse',
              'lft-10': !isMobile,
            }"
            class="single-service position-two transform-rotate-two"
          >
            <p class="text-strong">{{ $t("service.metaverse") }}</p>
          </div>
          <div
            @click="
              if (showTextFirst === 'ai') {
                showTextFirst = '';
              } else {
                showTextFirst = 'ai';
                showTextSecond = '';
                showTextThird = '';
              }
            "
            :class="{
              active: showTextFirst === 'ai',
              'lft-75 me-5 mb-4': !isMobile && !isTablet,
            }"
            class="single-service position-five transform-rotate-three"
          >
            <p class="text-strong">{{ $t("service.ai") }}</p>
          </div>
        </div>
        <div class="col-8 offset-2 block-text">
          <p v-if="showTextFirst == ''">{{ $t("service.firstDescription") }}</p>
          <p class="active-text fade-in" v-if="showTextFirst == 'blockchain'">
            {{ $t("service.blockchain_description") }}
          </p>
          <p class="active-text fade-in" v-if="showTextFirst == 'ai'">
            {{ $t("service.ai_description") }}
          </p>
          <p class="active-text fade-in" v-if="showTextFirst == 'metaverse'">
            {{ $t("service.metaverse_description") }}
          </p>
        </div>
      </div>
      <div class="row margin-btm pt-5">
        <div class="col-12 service-content">
          <MarqueeText
            @click="showTextSecond = ''"
            :repeat="10"
            :duration="$t('service.secondBanner').length * 0.5"
            reverse
          >
            <h4>{{ $t("service.secondBanner") }}&nbsp;</h4>
          </MarqueeText>
          <div
          @click="
              if (showTextSecond === 'marketplace') {
                showTextSecond = '';
              } else {
                showTextSecond = 'marketplace';
                showTextFirst = '';
                showTextThird = '';
              }
            "
            :class="{
              active: showTextSecond === 'marketplace',
              'lft-15': !isMobile,
            }"
            class="single-service position-one transform-rotate-two"
          >
            <p class="text-strong">{{ $t("service.marketplace") }}</p>
          </div>
          <div
          @click="
              if (showTextSecond === 'app') {
                showTextSecond = '';
              } else {
                showTextSecond = 'app';
                showTextFirst = '';
                showTextThird = '';
              }
            "
            :class="{ active: showTextSecond === 'app', 'lft-40': !isMobile }"
            class="single-service position-three transform-rotate-two"
          >
            <p class="text-strong">{{ $t("service.app") }}</p>
          </div>
          <div
            @click="
              if (showTextSecond === 'website') {
                showTextSecond = '';
              } else {
                showTextSecond = 'website';
                showTextFirst = '';
                showTextThird = '';
              }
            "
            :class="{
              active: showTextSecond === 'website',
              'lft-75': !isMobile,
            }"
            class="single-service position-one transform-rotate-three"
          >
            <p class="text-strong">{{ $t("service.website") }}</p>
          </div>
        </div>
        <div class="col-8 offset-2 block-text">
          <p v-if="showTextSecond == ''">
            {{ $t("service.secondDescription") }}
          </p>
          <p class="active-text fade-in" v-if="showTextSecond == 'marketplace'">
            {{ $t("service.marketplace_description") }}
          </p>
          <p class="active-text fade-in" v-if="showTextSecond == 'app'">
            {{ $t("service.app_description") }}
          </p>
          <p class="active-text fade-in" v-if="showTextSecond == 'website'">
            {{ $t("service.website_description") }}
          </p>
        </div>
      </div>
      <div class="row margin-btm pt-5">
        <div class="col-12 service-content">
          <MarqueeText
            @click="showTextThird = ''"
            :repeat="10"
            :duration="$t('service.thirdBanner').length * 0.5"
          >
            <h4>{{ $t("service.thirdBanner") }}&nbsp;</h4>
          </MarqueeText>
          <div
         
             @click="
              if (showTextThird === 'design') {
                showTextThird = '';
              } else {
                showTextThird = 'design';
                showTextSecond = '';
                showTextFirst = '';
              }
            "
            :class="{ active: showTextThird === 'design' }"
            class="single-service position-one transform-rotate-one lft-50"
          >
            <p class="text-strong">{{ $t("service.design") }}</p>
          </div>
          <div
          @click="
              if (showTextThird === 'branding') {
                showTextThird = '';
              } else {
                showTextThird = 'branding';
                showTextSecond = '';
                showTextFirst = '';
              }
            "
            :class="{
              active: showTextThird === 'branding',
              'lft-40 ms-5': !isMobile && !isTablet,
            }"
            class="single-service position-three transform-rotate-two lft-25"
          >
            <p class="text-strong">{{ $t("service.branding") }}</p>
          </div>
        </div>
        <div class="col-8 offset-2 block-text">
          <p v-if="showTextThird == ''">{{ $t("service.thirdDescription") }}</p>
          <p class="active-text fade-in" v-if="showTextThird == 'design'">
            {{ $t("service.design_description") }}
          </p>
          <p class="active-text fade-in" v-if="showTextThird == 'branding'">
            {{ $t("service.branding_description") }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center link-portfolio">
          <Bubble
            :resizeHeightBubble="isMobile || isTablet ? 350 : 250"
            :resizeWidthBubble="isMobile || isTablet ? 200 : 480"
          />
          <a
            :class="{ 'w-50': !isMobile }"
            class="m-auto"
            href="#/internal-project"
            >{{ $t("service.mego_ticket") }}</a
          >
        </div>
      </div>

      <div class="gap"></div>
      <div v-if="isDesktop" class="gap"></div>
    </div>
    <FooterExt />
    <Footer />
  </div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";
import checkViewport from "@/mixins/checkViewport";
import Footer from "@/components/Footer.vue";
import Bubble from "@/components/Bubble.vue";
import FooterExt from "@/components/FooterExt.vue";
import ButtonNav from "@/components/ButtonNav.vue";

export default {
  name: "about",
  mixins: [checkViewport],
  components: {
    Footer,
    FooterExt,
    Bubble,
    MarqueeText,
    ButtonNav,
  },
  data() {
    return {
      showText: true,
      altroShowText: true,
      showTextFirst: "",
      showTextSecond: "",
      showTextThird: "",
    };
  },
  methods: {},
};
</script>
