<template>
  <div class="about">
    <a href="/"><h1>This is an about page</h1></a>
    <FooterExt />
  </div>
</template>

<script>
import FooterExt from "@/components/FooterExt.vue";

export default {
  name: "about",
  components: {
    FooterExt,
  },
};
</script>
