<template>
  <div class="about">
    <div class="container-fluid full-h" style="position: relative">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-8">
          <div class="py-3 px-5">
            <typewriter :type-interval="22" :replace-interval="200">
              <h2>
                Imagine the possibilities. We realize them. <br /><br />
                We bridge the gap between ideas and reality through top-notch
                Web3 solutions.
              </h2>
            </typewriter>
          </div>
        </div>

        <div class="gap"></div>
        <div class="gap"></div>
        <div class="gap mb-3"></div>
        <div class="gap mb-5"></div>
      </div>
      <div class="box-character-img" style="width: 360px; height: 100%">
        <img src="../assets/images/ch1.png" alt="" />
      </div>
    </div>

    <FooterExt />
  </div>
</template>

<script>
import FooterExt from "@/components/FooterExt.vue";
import Typewriter from "typewriter-vue";

export default {
  name: "about",
  components: {
    FooterExt,
    Typewriter,
  },
  data() {
    // return {
    //   replace: [{ from: "the", to: "sto cazzo?" }],
    // };
  },
};
</script>
