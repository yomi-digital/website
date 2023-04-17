<template>
    <div
      class="d-flex justify-content-between align-items-center mt-2 me-4"
    >
      <!-- <a href="https://form.yomi.digital/" target="_blank">
        <p :class="{ 'mb-0': isMobile }" class="buble-text">
          {{ $t("menu.talk") }}
        </p>
      </a> -->
      <div class="d-flex">
        <p @click="handleChangeIt()" class="text-lang color-link hoverPointer">
          IT
        </p>
        <p style="cursor: default" class="text-lang">/</p>
        <p @click="handleChangeEn()" class="text-lang color-link hoverPointer">
          EN
        </p>
      </div>
    </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
export default {
  name: "changeLanguage",
  data() {
    const lang = localStorage.getItem("lang");
    return {
      lang: lang,
    };
  },
  mixins: [checkViewport],
  methods: {
    handleChangeEn() {
      localStorage.setItem("lang", "en");
      window.location.reload();
    },
    handleChangeIt() {
      localStorage.setItem("lang", "it");
      window.location.reload();
    },
  },
};
</script>

<style></style>
