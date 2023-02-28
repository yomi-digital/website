<template>
  <div class="banner cta-banner">
    <a :href="'/#/portfolio?project=' + encodeURIComponent(selectedProject.name)">
      <div
        :class="
          isMobile
            ? 'flex-column justify-content-center'
            : 'justify-content-between'
        "
        class="d-flex align-items-center h-100"
      >
        <div :class="{ 'mb-5': !isMobile }" class="pb-5 text-uppercase">
          <p style="min-width: 160px">{{ $t("banner.view") }}</p>
        </div>
        <div>
          <h3 id="nameProject" class="text-uppercase cta-title mb-0">
            {{ selectedProject.name }}
          </h3>
        </div>
        <div v-if="!isMobile && !isTablet" class="pb-3">
          <img src="../assets/images/arrow-right.svg" alt="" />
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import projects from "@/portfolio/projects.json";
import checkViewport from "@/mixins/checkViewport";
export default {
  name: "bannerPortfolio",
  mixins: [checkViewport],
  data() {
    return {
      projects: projects,
      selectedProject:{}
    };
  },

  mounted() {
    const app = this;
    app.randomProject();
  },
  methods: {
    randomProject() {
      let randomProject = Math.floor(Math.random() * projects.length);
      this.selectedProject = projects[randomProject];
      setInterval(function () {
        randomProject = Math.floor(Math.random() * projects.length);
        this.selectedProject = projects[randomProject];
      }, 5000);
    },
  },
};
</script>

<style></style>
