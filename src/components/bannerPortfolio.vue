<template>
  <div class="banner cta-banner">
    <div
      :class="isMobile ? 'flex-column' : ''"
      class="d-flex align-items-center justify-content-center h-100"
    >
      <a
        class="w-auto hover-undeline"
        href="/#/portfolio"
        style="color: black"
        :class="{ 'mt-4': isMobile }"
        :style="[
          isDesktop
            ? {
                position: 'absolute',
                left: '0',
                top: '4rem',
                margin: '0 0 0 3rem',
              }
            : { height: '40%' },
        ]"
      >
        <div class="text-uppercase">
          <p style="min-width: 160px">{{ $t("banner.view") }}</p>
        </div>
      </a>
      <a
        class="w-75 text-center"
        :href="'/#/portfolio/' + encodeURIComponent(selectedProject.name)"
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
        class="text-end w-auto h-auto"
        :href="
          '/#/portfolio?project=' + encodeURIComponent(selectedProject.name)
        "
        :style="[
          isDesktop
            ? { position: 'absolute', right: '0', margin: '0 3rem 0 0' }
            : {},
        ]"
      >
        <a
          :href="
            '/#/portfolio?project=' + encodeURIComponent(selectedProject.name)
          "
          class="pb-3 h-100 d-flex align-items-center justify-content-center"
        >
          <img src="../assets/images/arrow-right.svg" alt="" />
        </a>
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
