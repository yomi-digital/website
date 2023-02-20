<template>
  <Transition leave-active-class="bounce-out-left">
    <div v-if="isLoading">
      <div class="loader px-3 no-overflow-x">
        <vue-progress-bar class="m-3"></vue-progress-bar>
        <typewriter v-if="!this.isMobile" :type-interval="22" :replace-interval="1000">
          <div  class="mt-4">
            LLLLLLLLLLLLLLLLLLLLOOOOOOOOOOOOOOOOOAAAAAAAAAAAAAAADDDDDDDDDDDDDDDDDIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIINNNNNNNNNNNNNNNNNNNGGGGGGGGGGGGGGGG.
          </div>
        </typewriter>
        <typewriter v-if="isMobile" :type-interval="22" :replace-interval="900">
          <div  class="mt-4">
            LLLLLLLLLOOOOOOOOAAAAAAAAADDDDDDDDIIIIIIIIIIIIIIIIIIINNNNNGGGGGG.
          </div>
        </typewriter>
      </div>
    </div>
  </Transition>
</template>

<script>
import Typewriter from "typewriter-vue";
import checkViewport from "@/mixins/checkViewport";
export default {
  name: "loader",
  mixins: [checkViewport],

  props: ["isLoading"],
  components: {
    Typewriter,
  },
  data() {
    return {};
  },
  mounted() {
    this.$Progress.start();
    if(!this.isMobile){
      setTimeout(() => {
      this.$Progress.finish();
    }, 5000);
    }else{
      setTimeout(() => {
        this.$Progress.finish();
      }, 2500);
    }
  },
};
</script>
