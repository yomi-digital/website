<template>
  <div
    class="portfolio-inner"
    :style="[!isMobile ? { marginTop: '80px' } : { marginTop: '60px' }]"
  >
    <ButtonNav />
    <div v-if="Object.keys(project).length > 0">
      <div class="container-fluid px-4">
        <div class="row">
          <div class="col-12">
            <h2 class="">{{ $t("portfolio.title") }}</h2>
          </div>
          <div class="col-12 col-md-4">
            <h6 class="mt-5 sub-title-project" :class="{ 'ps-4': !isMobile }">
              {{ $t("portfolio.description") }}
            </h6>
          </div>
        </div>
        <div class="row">
          <div class="col-12 mt-5 ms-4">
            <a class="btn-back" href="/#/portfolio">Back</a>
          </div>
        </div>
      </div>
      <div class="container mt-5 pt-5">
        <div class="row">
          <div class="col-12 mb-5">
            
          </div>
          <div
            :class="{ 'p-0': isMobile }"
            class="col-12 col-lg-10 offset-0 offset-lg-1"
          >
            <div
              class="project-header"
              :class="{ 'mt-5 glitch': !isDesktop, 'glitch-hover': isDesktop }"
            >
              <div class="preview-img">
                <img
                  v-if="isDesktop || isMiddleScreen"
                  :src="'/portfolio/' + project.imgCover"
                  alt=""
                  :style="{
                    'max-width':
                      project.imgCover === 'aristoil logo.png' && !isMobile
                        ? '400px'
                        : '',
                  }"
                  :class="
                    project.imgCover == 'nftberlin_smooth.png' ||
                    project.imgCover == 'PIM.png'
                      ? 'p-4'
                      : null
                  "
                />
                <img v-if="!isDesktop && !isMiddleScreen"
                  :src="'/portfolio/' + project.imgCoverMobile"
                  alt=""
                  :style="{
                    'max-width':
                      project.imgCover === 'aristoil logo.png' && !isMobile
                        ? '400px'
                        : '',
                  }"
                  :class="
                    project.imgCover == 'nftberlin_smooth.png' ||
                    project.imgCover == 'PIM.png'
                      ? 'p-4'
                      : null
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MarqueeText :repeat="8" :duration="project.name.length * 0.5">
        <h4 style="color: #84ff9d" class="text-uppercase mt-5">
          {{ project.name }}&nbsp;
        </h4>
      </MarqueeText>
      <div class="container">
        <div class="row">
          <div
            :class="isMobile ? 'px-4 py-5' : ' pt-5 pb-5 px-2'"
            class="
              col-12 col-lg-10
              offset-0 offset-lg-1
              d-flex
              justify-content-between
              align-items-center
              b-bottom-light
            "
          >
            <div class="d-flex align-items-center">
              <a :href="project.link" target="_blank"
                ><h6
                  style="text-underline-offset: 4px"
                  class="underline"
                  :style="[isMobile ? { lineHeight: '1.3' } : {}]"
                >
                  {{ project.name }}
                </h6></a
              >
              <h6 class="ms-3 pt-2">
                <i
                  class="fa-solid fa-arrow-up"
                  style="transform: rotate(45deg)"
                ></i>
              </h6>
              
            </div>
            <h6 v-if="$i18n.locale == 'en'" v-html="project.category_en"></h6>
            <h6 v-if="$i18n.locale == 'it'" v-html="project.category_it"></h6>
          </div>
          <div class="row mt-5 pb-5 px-2">
            <div
              :class="{ 'px-4 py-5': isMobile }"
              class="
                col-12 col-md-6 col-lg-5
                offset-0 offset-lg-1
                order-1 order-md-0
              "
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
          </div>
        </div>
      </div>
      <div class="gap"></div>
    </div>
    <div class="mb-2">
      <bannerPortfolio />
    </div>
    <FooterExt />
    <newFooter />
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import newFooter from "@/components/newFooter.vue";
import FooterExt from "@/components/FooterExt.vue";
import bannerPortfolio from "@/components/bannerPortfolio.vue";
import ButtonNav from "@/components/ButtonNav.vue";
import projects from "@/portfolio/projects.json";
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "single_project",
  mixins: [checkViewport],
  components: {
    FooterExt,
    newFooter,
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
    this.glictchMobile();
  },
  methods: {
    fetchProjects() {
      const app = this;
      let result = {};
      /* console.log("projects", app.projects); */
      let slugProjects = app.$route.params.id;
      slugProjects = slugProjects.split(" ").join("-");
      /* console.log("slug of the project is", slugProjects); */
      Object.keys(app.projects).forEach((key) => {
        const item = app.projects[key];
        if (item.name.split(" ").join("-") === slugProjects) {
          result[key] = item;
          app.project = item;
          /* console.log("project project is", app.project); */
        }
      });
      app.nextProject = app.projects[app.projects.indexOf(app.project) + 1];
    },
    showProject(uri) {
      location.href = uri;
      location.reload();
    },
    glictchMobile() {
      const app = this;
      if (app.project) {
        setTimeout(function () {
          let imgProject = document.getElementsByClassName("project-header");
          console.log(imgProject);
          imgProject[0].classList.remove("glitch");
        }, 1000);
      }
    },
  },
};
</script>

