<template>
  <div class="full-h position-relative" data-cursor-mix-blend-mode="difference">
    <div class="err"></div>
    <MarqueeText
      class="position-absolute index top-0"
      :repeat="6"
      :duration="8"
    >
      <h2>&nbsp;ERROR 404 ERROR 404&nbsp;</h2>
    </MarqueeText>
    <MarqueeText
      class="title-error position-absolute bottom-0"
      :repeat="6"
      :duration="8"
      reverse
      style="z-index: 1"
    >
      <h2>&nbsp;ERROR 404 ERROR 404&nbsp;</h2>
    </MarqueeText>
  </div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "Err",
  components: {
    MarqueeText,
  },
};
</script>

<style>
</style>