<template>
  <div class="portfolio-inner pt-5">
    <ButtonNav />
    <div v-if="Object.keys(project).length > 0">
      <div class="container-fluid pd-container mt-5">
        <div class="row">
          <div class="col-12">
            <h2 class="">{{ $t("portfolio.title") }}</h2>
          </div>
          <div class="col-12 col-md-4">
            <h6 class="mt-5 sub-title-project">
              {{ $t("portfolio.description") }}
            </h6>
          </div>
        </div>
      </div>
      <div class="container mt-5 pt-5">
       <!--  <div v-if="!isMobile" class="gap"></div> -->
        <div class="row">
          <div
            :class="{ 'p-0': isMobile }"
            class="col-12 col-lg-10 offset-0 offset-lg-1"
          >
            <div class="project-header glitch" :class="{ 'mt-5': isMobile }">
              <div class="preview-img">
                <img
                  :src="'/portfolio/' + project.imgCover"
                  alt=""
                  class=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MarqueeText :repeat="8" :duration="project.name.length * 0.5">
        <h4 style="color:#84FF9D" class="text-uppercase mt-5">{{ project.name }}&nbsp;</h4>
      </MarqueeText>
      <div class="container">
        <div class="row">
          <div
            :class="isMobile ? 'px-4 py-5' : ' pt-5 pb-5 px-2'"
            class="col-12 col-lg-10 offset-0 offset-lg-1 d-flex justify-content-between align-items-center b-bottom-light"
          >
            <div class="d-flex align-items-center">
              <h6 class="me-3">
                <i
                  class="fa-solid fa-arrow-up"
                  style="transform: rotate(45deg)"
                ></i>
              </h6>
              <a :href="project.link" target="_blank"
                ><h6 style="text-underline-offset: 4px;" class="underline">{{ project.name }}</h6></a
              >
            </div>
            <h6 v-if="$i18n.locale == 'en'" v-html="project.category_en"></h6>
            <h6 v-if="$i18n.locale == 'it'" v-html="project.category_it"></h6>
          </div>
          <div class="row mt-5 pb-5 px-2">
            <!-- <div class="col-12 col-lg-10 offset-0 offset-lg-1 mb-5">
            <h6 class="mb-4">OUR CONTRIBUTION</h6>
            <div class="d-flex">
              <i
                class="fa-solid fa-circle me-2"
                style="color: white; font-size: 0.5rem"
              ></i>
              <i
                class="fa-solid fa-circle me-2"
                style="color: white; font-size: 0.5rem"
              ></i>
            </div>
          </div> -->
            <!-- <div class="col-12 col-lg-10 offset-0 offset-lg-1 d-flex justify-content-between"> -->
            <div
              :class="{ 'px-4 py-5': isMobile }"
              class="col-12 col-md-6 col-lg-5 offset-0 offset-lg-1 order-1 order-md-0"
            >
              <h6 style="font-weight: 500" :class="isMobile ? 'mb-5' : 'mb-4'">
                {{ $t("portfolio.contribution") }}
              </h6>
              <div v-if="!isMobile" class="d-flex mb-4">
                <i
                  class="fa-solid fa-circle me-2"
                  style="color: white; font-size: 0.5rem"
                ></i>
                <i
                  class="fa-solid fa-circle me-2"
                  style="color: white; font-size: 0.5rem"
                ></i>
              </div>
              <div v-if="$i18n.locale == 'en'">
                <p
                  class="m-0"
                  :class="isMobile ? 'grey-text mb-3' : null"
                  v-for="service in Object.keys(project.services_en)"
                  :key="service"
                >
                  {{ project.services_en[service] }}
                </p>
              </div>
              <div v-if="$i18n.locale == 'it'">
                <p
                  class="m-0"
                  :class="isMobile ? 'grey-text mb-3' : null"
                  v-for="service in Object.keys(project.services_it)"
                  :key="service"
                >
                  {{ project.services_it[service] }}
                </p>
              </div>
            </div>
            <div
              :class="{ 'ms-3': !isMobile && !isTablet, 'px-4 py-4': isMobile }"
              class="col-12 col-md-6 col-lg-5 order-0 order-lg-1"
            >
              <div
                :class="isMobile ? 'text-start mb-5' : 'text-end'"
                class="mt-4"
              >
                <p v-if="$i18n.locale == 'en'">{{ project.description_en }}</p>
                <p v-if="$i18n.locale == 'it'">{{ project.description_it }}</p>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>

      <!-- <div class="row mt-5 pb-5 px-2 b-bottom-light">
          <div class="col-6">
            <div class="d-flex align-items-center">
              <h6 class="me-3">
                <i
                  class="fa-solid fa-arrow-up"
                  style="transform: rotate(45deg)"
                ></i>
              </h6>
              <a :href="project.link" target="_blank"
                ><h6 class="underline">{{ project.name }}</h6></a
              >
            </div>
          </div>
          <div v-if="project.category" class="col-6 text-end">
            <h6 v-html="project.category.replace(' ', '<br/>')"></h6>
          </div>
        </div> -->

      <div class="gap"></div>
    </div>
    <div class="mb-2">
      <bannerPortfolio />
    </div>
    <FooterExt />
    <Footer />
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import FooterExt from "@/components/FooterExt.vue";
import Footer from "@/components/Footer.vue";
import bannerPortfolio from "@/components/bannerPortfolio.vue";
import ButtonNav from "@/components/ButtonNav.vue";
import projects from "@/portfolio/projects.json";
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "project",
  mixins: [checkViewport],
  components: {
    FooterExt,
    Footer,
    bannerPortfolio,
    ButtonNav,
    MarqueeText,
  },
  data() {
    return {
      projects: projects,
      project: {},
      nextProject: {},
    };
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    fetchProjects() {
      const app = this;
      let result = {};
      console.log("projects", app.projects);
      let slugProjects = app.$route.params.id;
      slugProjects = slugProjects.split(" ").join("-");
      console.log("slug of the project is", slugProjects);
      Object.keys(app.projects).forEach((key) => {
        const item = app.projects[key];
        if (item.name.split(" ").join("-") === slugProjects) {
          result[key] = item;
          app.project = item;
          console.log("project project is", app.project);
        }
      });
      app.nextProject = app.projects[app.projects.indexOf(app.project) + 1];
    },
    showProject(uri) {
      location.href = uri;
      location.reload();
    },
  },
};
</script>
<style lang="scss">
.glitch{
  &:hover img{
    animation: animate 0.2s linear infinite;
  }
}
@keyframes animate {
  0% {
    object-position: 50% calc(50% + 10px);
    filter: hue-rotate(0deg);
    border-radius: 7px;
  }
  10% {
    object-position: calc(50% + 5px) calc(50% - 10px);
    filter: hue-rotate(1080deg);
    border-radius: 7px;
  }
  20% {
    object-position: calc(50% - 5px) calc(50% + 10px);
    filter: hue-rotate(0deg);
    border-radius: 7px;
  }
  30% {
    object-position: calc(50% + 15px) calc(50% - 10px);
    filter: hue-rotate(1080deg);
    border-radius: 7px;
  }
  40% {
    object-position: calc(50% + 5px) calc(50% + 10px);
    filter: hue-rotate(0deg);
    border-radius: 7px;
  }
  50% {
    object-position: calc(50% - 20px) calc(50% - 10px);
    filter: hue-rotate(1080deg);
    border-radius: 7px;
  }
  60% {
    object-position: calc(50% - 30px) calc(50% + 10px);
    filter: hue-rotate(0deg);
    border-radius: 7px;
  }
  70% {
    object-position: 50% calc(50% - 20px);
    filter: hue-rotate(1080deg);
    border-radius: 7px;
  }
  80% {
    object-position: calc(50% - 40px) calc(50% - 20px);
    filter: hue-rotate(0deg);
    border-radius: 7px;
  }
  81% {
    background-position: 10px 0;
    filter: hue-rotate(1080deg);
    border-radius: 7px;
  }
  100% {
    background-position: 0 0;
    filter: hue-rotate(360deg);
    border-radius: 7px;
  }
}




</style>
