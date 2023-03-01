<template>
  <div class="pt-5">
    <ButtonNav />
    <div class="container-fluid pd-container mt-5">
      <div class="row">
        <div class="col-12">
          <h2 class="">{{ $t("portfolio.title") }}</h2>
        </div>
        <div class="col-12col-md-4">
          <h6 class="mt-5 sub-title-project">
            {{ $t("portfolio.description") }}
          </h6>
        </div>
      </div>
    </div>
    <div :class="{'mb-5' : isMobile}" class="container-fluid mt-5 p-0">
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
/* import { gsap } from "gsap"; */
/* import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; */

export default {
  name: "about",
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
    if (this.$route.query.project != undefined) {
      const activeLink = document.querySelector(".active-link-portfolio");
      setTimeout(function () {
        activeLink.scrollIntoView();
      }, 500);
    }
    
    /* if (window.innerWidth < 767) {
      setTimeout(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        app.callGsap();
      }, 150);
    } */
    console.log(app.projects);
  },
  methods: {
    /* callGsap() {
      const ST = ScrollTrigger.create({
        trigger: "",
        start: "top top",
        scroller: ".content-container",
        end: "bottom bottom",
        onUpdate: this.getCurrentSection,
      });

      this.getCurrentSection();

      const media = window.matchMedia("screen and (max-width: 100px)");
      ScrollTrigger.addEventListener("refreshInit", checkSTState);
      checkSTState();
      function checkSTState() {
        if (media.matches) {
          ST.disable();
        } else {
          ST.enable();
        }
      }
    }, */

    /* getCurrentSection() {
      const contentMarkers = gsap.utils.toArray(".link-portfolio");
      let activeIndex = null;
      const containerBounds = document
        .querySelector(".content-container")
        .getBoundingClientRect();
      const containerTop = containerBounds.top;
      const containerHeight = containerBounds.height;

      contentMarkers.forEach((marker, index) => {
        const bounds = marker.getBoundingClientRect();
        const markerTop = bounds.top - containerTop;
        if (markerTop < containerHeight * 0.5 && markerTop > 0) {
          activeIndex = index;
        }
      });

      if (activeIndex === null) {
        if (contentMarkers[0].getBoundingClientRect().top >= containerTop) {
          activeIndex = 0;
        } else if (
          contentMarkers[contentMarkers.length - 1].getBoundingClientRect()
            .bottom <=
          containerTop + containerHeight
        ) {
          activeIndex = contentMarkers.length - 1;
        } else {
          contentMarkers.forEach((marker, index) => {
            const bounds = marker.getBoundingClientRect();
            const markerTop = bounds.top - containerTop;
            if (markerTop < containerHeight * 0.5) {
              activeIndex = index;
            }
          });
        }
      }

      this.activeIndex = activeIndex;
    }, */

    /* getClass(index) {
      return {
        "active-link-portfolio": index === this.activeIndex,
      };
    }, */
    /* scrollToProject(index) {
      const project = this.projects[index];
      const target = document.querySelector(
        `#${project.name.split(" ").join("-")}`
      );
      if (target) {
        gsap.to(window, { duration: 0.5, scrollTo: target });
      }
    }, */
  },
};
</script>
<style></style>
