<template>
    <div
      :class="isMobile ? 'mb-2' : ''"
      class="d-flex align-items-center"
    >
      <a href="https://form.yomi.digital/" target="_blank">
        <p :class="{ 'mb-0': isMobile }" class="buble-text">
          {{ $t("menu.talk") }}
        </p>
      </a>

    </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
export default {
  name: "Talk",
  
  mixins: [checkViewport],

};
</script>

<style></style>
