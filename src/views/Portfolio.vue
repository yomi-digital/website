<template>
  <div>
    <ButtonNav />
    <div class="container mt-5 pt-5">
      <h4 class="text-center">PROUD OF</h4>
      <h6 class="mt-5 text-center">
        explore our portfolio and discover the latest projects
      </h6>
      <div class="gap"></div>
    </div>
    <div class="container-fluid p-0">
      <div class="text-center">
        <div
          class="link-portfolio"
          v-for="project in projects"
          :key="project.name"
        >
          <div v-if="!isMobile" class="left-img">
            <img :src="'/portfolio/' + project.imgLinkFirst" alt="" />
          </div>
          <div v-if="!isMobile" class="right-img">
            <img :src="'/portfolio/' + project.imgLinkSecond" alt="" />
          </div>
          <a :href="'/#/portfolio/' + project.name.split(' ').join('-')">{{
            project.name
          }}</a>
        </div>
      </div>
    </div>
    <div class="gap"></div>
    <FooterExt />
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import FooterExt from "@/components/FooterExt.vue";
import ButtonNav from "@/components/ButtonNav.vue";
import projects from "@/portfolio/projects.json";

export default {
  name: "about",
  mixins: [checkViewport],
  components: {
    FooterExt,
    ButtonNav,
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
