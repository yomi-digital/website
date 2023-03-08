<template>
  <div class="banner cta-banner">
    <div
      :class="
        isMobile
          ? 'flex-column justify-content-center'
          : 'justify-content-between'
      "
      class="d-flex align-items-center h-100"
    >
      <a class="w-auto h-auto mt-5" href="/#/portfolio">
        <div :class="{ 'mb-5 pb-5 ': !isMobile }" class="text-uppercase">
          <p style="min-width: 160px">{{ $t("banner.view") }}</p>
        </div>
      </a>
      <a
        class="w-75 text-center"
        data-cursor-hover
        :href="
          '/#/portfolio?project=' + encodeURIComponent(selectedProject.name)
        "
      >
        <h3
          id="nameProject"
          class="
            text-uppercase
            cta-title
            mb-0
            h-100
            d-flex
            align-items-center
            justify-content-center
          "
        >
          {{ selectedProject.name }}
        </h3>
      </a>

      <a
        v-if="!isMobile && !isTablet"
        class="text-end w-auto"
        data-cursor-hover
        :href="
          '/#/portfolio?project=' + encodeURIComponent(selectedProject.name)
        "
      >
        <div
          class="pb-3 h-100 d-flex align-items-center justify-content-center"
        >
          <img src="../assets/images/arrow-right.svg" alt="" />
        </div>
      </a>
    </div>
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
      selectedProject: {},
    };
  },

  mounted() {
    const app = this;
    app.randomProject();
  },
  methods: {
    randomProject() {
      const app = this;
      let randomProject = Math.floor(Math.random() * projects.length);
      app.selectedProject = projects[randomProject];
      setInterval(function () {
        randomProject = Math.floor(Math.random() * projects.length);
        app.selectedProject = projects[randomProject];
      }, 5000);
    },
  },
};
</script>

<style></style>
