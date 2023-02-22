<template>
  <div>
    <ButtonNav />
    <div class="container-fluid pd-container mt-5 ">
      <div class="row">
        <div class="col-12">
          <h2 class="">{{$t('portfolio.title')}}</h2>
        </div>
        <div class="col-12col-md-4">
          <h6  class="mt-5 sub-title-project">
            {{$t('portfolio.description')}}
          </h6>

        </div>
      </div>
    </div>
    <div class="container-fluid mt-5 p-0">
      <div class="text-center">
        <div
          class="link-portfolio"
          v-for="project in projects"
          :key="project.name"
        >
          <!-- <div v-if="!isMobile" class="left-img">
            <img :src="'/portfolio/' + project.imgLinkFirst" alt="" />
          </div>
          <div v-if="!isMobile" class="right-img">
            <img :src="'/portfolio/' + project.imgLinkSecond" alt="" />
          </div> -->
          <a class="list-portfolio" :href="'/#/portfolio/' + project.name.split(' ').join('-')">{{
            project.name
          }}</a>
        </div>
      </div>
    </div>
    <div class="gap"></div>
    <a href="#/services">
      <MarqueeText
        class="title-project"
        :repeat="6"
        :duration="8"
        style="z-index: 1"
      >
        <h4>&nbsp;DISCOVER OUR SERVICES&nbsp;</h4>
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
  name: "about",
  mixins: [checkViewport],
  components: {
    Footer,
    FooterExt,
    ButtonNav,
    MarqueeText
  },
  data() {
    return {
      service: "",
      projects: projects,
    };
  },
  mounted() {
    const app = this;
    console.log(app.projects);
  },
  methods: {},
};
</script>
