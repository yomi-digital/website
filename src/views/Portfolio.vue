<template>
  <div :style="[!isMobile ? { marginTop: '80px' } : { marginTop: '50px' }]">
    <ButtonNav />
    <div class="container-fluid px-5">
      <div class="row">
        <div class="col-12">
          <h2 class="">{{ $t("portfolio.title") }}</h2>
        </div>
        <div class="col-12 col-md-4">
          <h6 class="mt-5 sub-title-project" :class="{ 'ps-4': !isMobile }">
            {{ $t("portfolio.description") }}.
          </h6>
        </div>
      </div>
    </div>
    <div :class="{ 'mb-5': isMobile }" class="container-fluid mt-5 p-0">
      <div class="text-center content-container">
        <div
          class="link-portfolio"
          v-for="(project, index) in projects"
          :key="index"
          :class="{
            'active-link-portfolio':
              $route.query.project != undefined
                ? decodeURIComponent($route.query.project) == project.name
                : false,
          }"
        >
          <a
            :class="{ 'list-portfolio': !isMobile }"
            :href="'/#/portfolio/' + project.name.split(' ').join('-')"
            >{{ project.name }}</a
          >
        </div>
      </div>
    </div>
    <div v-if="!isMobile" class="gap"></div>
    <a href="#/services" class="link-title">
      <MarqueeText
        class="title-project mt-3"
        :repeat="6"
        :duration="8"
        style="z-index: 1"
      >
        <h4>&nbsp;{{ $t("banner.portfolio") }}&nbsp;</h4>
      </MarqueeText>
    </a>
    <FooterExt />
    <Footer />
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import FooterExt from "@/components/FooterExt.vue";
import Footer from "@/components/Footer.vue";
import ButtonNav from "@/components/ButtonNav.vue";
import projects from "@/portfolio/projects.json";
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "portfolio-page",
  mixins: [checkViewport],
  components: {
    Footer,
    FooterExt,
    ButtonNav,
    MarqueeText,
  },
  data() {
    return {
      service: "",
      projects: projects,
      activeIndex: null,
    };
  },

  mounted() {
    const app = this;
    if (app.$route.query.project != undefined) {
      const activeLink = document.querySelector(".active-link-portfolio");
      setTimeout(function () {
        if (activeLink) {
          const linkPosition =
            activeLink.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: linkPosition - 200, behavior: "smooth" });
        }
      }, 500);
    }
  },
  methods: {},
};
</script>
<style></style>
