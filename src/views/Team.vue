<template>
  <div class="about">
    <div class="container-fluid full-h" style="position: relative">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-11">
          <div class="py-3 px-5">
            <typewriter :type-interval="22" :replace-interval="200">
              <h2>
                The hard work and sheer determination of our team are at the
                root of our ability to push the boundaries of technology and
                provide digital products that cut through the noise.
              </h2>
            </typewriter>
          </div>
        </div>
        <div class="gap"></div>
        <div class="gap"></div>
        <div class="gap"></div>
        <div class="gap mb-3"></div>
        <Transition enter-active-class="fade-in">
          <div
            @click="showTeam = !showTeam"
            v-if="endedTypewriter"
            class="big-link ms-5"
          >
            KNOW MORE
          </div>
        </Transition>
      </div>
      <div class="box-character-img">
        <img
          src="../assets/images/ch2.png"
          alt=""
          style="width: 700px; heigh 100;"
        />
      </div>
    </div>
    <FooterExt />
  </div>
</template>

<script>
import FooterExt from "@/components/FooterExt.vue";
import Typewriter from "typewriter-vue";

export default {
  name: "team",
  components: {
    FooterExt,
    Typewriter,
  },
  data() {
    return {
      endedTypewriter: false,
      showTeam: false,
    };
  },
  mounted() {
    this.calculateTypewriter();
  },
  methods: {
    calculateTypewriter() {
      const app = this;
      setTimeout(function () {
        app.endedTypewriter = true;
      }, 5000);
    },
  },
};
</script>
