<template>
  <div>
    <Loader :isLoading="isLoading" />
    <Welcome
      :isLoading="isLoading"
      :isEnter="isEnter"
      @enterWebsite="enterWebsite()"
    />
    <Navbar :isEnter="isEnter" />
  </div>
</template>
<script>
import checkViewport from "@/mixins/checkViewport";
import Loader from "@/components/Loader.vue";
import Welcome from "@/components/Welcome.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "home",
  mixins: [checkViewport],
  components: {
    Loader,
    Welcome,
    Navbar,
  },
  data() {
    return {
      isLoading: false,
      isEnter: true,
    };
  },
  mounted() {
    this.loader();
  },
  methods: {
    loader() {
      const app = this;
      setTimeout(function () {
        app.isLoading = false;
      }, 5000);
    },
    enterWebsite() {
      const app = this;
      app.isEnter = true;
    },
  },
};
</script>
