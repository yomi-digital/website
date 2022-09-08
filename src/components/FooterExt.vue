<template>
  <div>
    <div class="custom-card py-4 px-4">
      <h3>Partners</h3>
      <div class="mt-5 mb-5">
        <agile infinite :autoplay-speed="5000" :dots="false" :slidesToShow="3" :centerMode="true">
          <div class="slide">
            <img src="../assets/partners/polygon-logo.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/partners/bankless.png" alt="" />
          </div>
          <template slot="prevButton"><i class="fa-solid fa-chevron-left"></i></template>
          <template slot="nextButton"><i class="fa-solid fa-chevron-right"></i></template>
        </agile>
      </div>
    </div>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  components: {
    agile: VueAgile,
  },
};
</script>
