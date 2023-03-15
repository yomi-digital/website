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
          !isMobile
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
          <p v-if="!isTablet" style="min-width: 160px">
            {{ $t("banner.view") }}
          </p>
          <p v-if="isTablet" style="min-width: 160px">
            {{ $t("banner.view").split(" ")[0] }}<br />
            {{ $t("banner.view").split(" ")[1] }}
          </p>
        </div>
      </a>
      <a
        class=" cta-title" :class="{'text-center': !isTablet}"
        :href="'/#/portfolio/' + selectedProject.name"
      >
        <span v-if="!isTablet">{{ selectedProject.name }}</span>
        <span v-if="isTablet"
          >{{ selectedProject.name.split(" ")[0] }}
          <span v-if="selectedProject.name.split(' ')[1]"
            ><br />{{ selectedProject.name.split(" ")[1] }}</span
          >
            <span v-if="selectedProject.name.split(' ')[2]"
            ><br />{{ selectedProject.name.split(" ")[2] }}</span
          >
        </span>
      </a>

      <a
        v-if="!isMobile && !isTablet"
        class="text-end w-auto h-auto"
        :href="
          '/#/portfolio?project=' + encodeURIComponent(selectedProject.name)
        "
        :style="[
          isDesktop
            ? { position: 'absolute', right: '0', margin: '-10px 3rem 0 0' }
            : {},
        ]"
      >
        <a
          :href="'/#/portfolio/' + selectedProject.name"
          class="d-flex align-items-center justify-content-center"
        >
          <img height="52px" src="../assets/images/arrow-right.svg" alt="" />
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
  watch: {
    $route(to, from) {
      if (from.name == "single_project" && to.name == "single_project") {
        this.$emit("forceClose");
      }
    },
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
