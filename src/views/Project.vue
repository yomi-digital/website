<template>
  <div>
    <ButtonNav />
    <div v-if="Object.keys(project).length > 0">
      <div class="container mt-5 pt-5">
        <h4 class="text-center">PROUD OF</h4>
        <h6 class="mt-5 text-center">
          explore our portfolio and discover the latest projects
        </h6>
        <div class="gap"></div>
        <div class="project-header">
          <div class="preview-img">
            <img :src="contents + project.imgCover" alt="" />
            <MarqueeText class="title-project" :repeat="10" :duration="5">
              {{ project.name }}&nbsp;
            </MarqueeText>
          </div>
        </div>
        <div class="row mt-5 pb-5 px-2 b-bottom-light">
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
        </div>

        <div class="row mt-5 pb-5 px-2">
          <div class="mb-5">
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
          </div>
          <div class="col-6">
            <div class="">
              <p
                class="m-0"
                v-for="service in Object.keys(project.services)"
                :key="service"
              >
                {{ project.services[service] }}
              </p>
            </div>
          </div>
          <div class="col-6 text-end mt-3">
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
      <div class="cta-banner mt-5">
        <a
          v-if="nextProject"
          @click="
            showProject('/#/portfolio/' + nextProject.name.split(' ').join('-'))
          "
        >
          <div
            class="d-flex align-items-start justify-content-around pt-5 pb-4 px-5"
          >
            <div class="cta-text">[view others]</div>
            <div class="cta-title">{{ nextProject.name }}</div>
            <div class="cta-title">
              <i class="fa-solid fa-arrow-right"></i>
            </div></div
        ></a>
      </div>
      <div class="gap"></div>
    </div>
    <FooterExt />
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import FooterExt from "@/components/FooterExt.vue";
import ButtonNav from "@/components/ButtonNav.vue";
import projects from "@/portfolio/projects.json";
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "project",
  mixins: [checkViewport],
  components: {
    FooterExt,
    ButtonNav,
    MarqueeText,
  },
  data() {
    return {
      contents: process.env.VUE_APP_API_CONTENTS_URL,
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
