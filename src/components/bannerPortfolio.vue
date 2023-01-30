<template>
  <div class="banner cta-banner">
    <a href="/#/portfolio">
      <div class="d-flex align-items-center justify-content-between h-100">
        <div class="pb-5 mb-5 text-uppercase"><p>view portfolio</p></div>
        <div>
          <h3 id="nameProject" class="text-uppercase cta-title mb-0">Project</h3>
        </div>
        <div class="pb-3">
          <img src="../assets/images/arrow-right.svg" alt="">
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import projects from "@/portfolio/projects.json";

export default {
  name: "bannerPortfolio",
  data() {
    return {
      projects: projects,
    };
  },
  mounted() {
    const app = this;
    app.randomProject();
  },
  methods: {
    randomProject() {
      let randomProject = Math.floor(Math.random() * projects.length);
      setInterval(function () {
        randomProject = Math.floor(Math.random() * projects.length);
        document.getElementById('nameProject').innerHTML = projects[randomProject].name
        /* console.log(projects[randomProject].name); */
      }, 5000);
    },
  },
};
</script>

<style></style>
