<template>
  <div
    :class="{
      'p-4 d-flex justify-content-between align-items-center': !isMobile,
    }"
  >
    <div>
      <p class="buble-text">{{ $t("menu.talk") }}</p>
    </div>
    <div class="d-flex">
      <p @click="handleChangeIt()" class="text-lang">IT</p>
      <p style="cursor:default" class="text-lang">/</p>
      <p @click="handleChangeEn()" class="text-lang">EN</p>
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
