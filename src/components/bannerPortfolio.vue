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
      <a class="w-auto h-auto mt-5 hover-underline" href="/#/portfolio">
        <div :class="{ 'mb-5 pb-5 ': !isMobile }" class="text-uppercase">
          <p style="min-width: 160px">{{ $t("banner.view") }}</p>
        </div>
      </a>
      <a
        v-if="$route.name === 'single_project'"
        class="w-75 text-center"
        href="#"
        @click.prevent="reloadAndGoToPortfolio"
      >
        <h3
          id="nameProject"
          class="hover-underline text-uppercase cta-title mb-0 h-100 d-flex align-items-center justify-content-center"
        >
          {{ selectedProject.name }}
          <svg
            class="ms-3 mb-1"
            style="transform: rotate(35deg)"
            width="69"
            height="64"
            viewBox="0 0 69 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.0794 14.6405L46.6993 25.748L-1.67205e-06 25.748L-1.12661e-06 38.2262L46.8353 38.2262L27.0794 49.3595L27.0794 64L69 38.4L69 25.6837L27.0794 6.44572e-06L27.0794 14.6405Z"
              fill="currentColor"
            />
          </svg>
        </h3>
      </a>
      <a
        v-else
        class="w-75 text-center"
        :href="'/#/portfolio/' + selectedProject.name"
      >
        <h3
          id="nameProject"
          class="hover-underline text-uppercase cta-title mb-0 h-100 d-flex align-items-center justify-content-center"
        >
          {{ selectedProject.name }}
          <svg
            class="ms-3 mb-1"
            style="transform: rotate(35deg)"
            width="69"
            height="64"
            viewBox="0 0 69 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.0794 14.6405L46.6993 25.748L-1.67205e-06 25.748L-1.12661e-06 38.2262L46.8353 38.2262L27.0794 49.3595L27.0794 64L69 38.4L69 25.6837L27.0794 6.44572e-06L27.0794 14.6405Z"
              fill="currentColor"
            />
          </svg>
        </h3>
      </a>

      <div
        v-if="!isMobile && !isTablet"
        class="pb-3 h-100 d-flex align-items-center justify-content-center"
        style="opacity: 0"
      >
        <img src="../assets/images/arrow-right.svg" alt="" />
      </div>
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
    console.log("ecco", this.$route.name);
  },
  methods: {
    reloadAndGoToPortfolio() {
  const projectUrl = "/#/portfolio/" + this.selectedProject.name;
  window.location.href = projectUrl;
  setTimeout(() => {
    window.location.reload();
  }, 100);
},

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
