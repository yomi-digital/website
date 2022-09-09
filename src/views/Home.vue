<template>
  <div>
    <Loader :isLoading="isLoading" />
    <Welcome
      :isLoading="isLoading"
      :isEnter="isEnter"
      @enterWebsite="enterWebsite()"
    />
    <Section :isEnter="isEnter" />
  </div>
</template>
<script>
import checkViewport from "@/mixins/checkViewport";
import Loader from "@/components/Loader.vue";
import Welcome from "@/components/Welcome.vue";
import Section from "@/components/Section.vue";

export default {
  name: "home",
  mixins: [checkViewport],
  components: {
    Loader,
    Welcome,
    Section,
  },
  data() {
    return {
      isLoading: false,
      isEnter: false,
    };
  },
  mounted() {
    this.loader();
    this.checkIsEnter();
  },
  methods: {
    loader() {
      const app = this;
      const loaded = window.localStorage.getItem("loaded");
      if (loaded === null || loaded.length === 0) {
        app.isLoading = true;
        setTimeout(function () {
          app.isLoading = false;
          window.localStorage.setItem("loaded", "yes");
        }, 5000);
      } else {
        app.isLoading = false;
      }
    },
    enterWebsite() {
      const app = this;
      app.isEnter = true;
      window.localStorage.setItem("entered", "yes");
    },
    checkIsEnter() {
      const app = this;
      const entered = window.localStorage.getItem("entered");
      if (entered === null || entered.length === 0) {
        app.isEnter = false;
      } else {
        app.isEnter = true;
      }
    },
  },
};
</script>
