<template>
  <Transition leave-active-class="bounce-out-left">
    <div v-if="isLoading">
      <div class="loader px-3 no-overflow-x">
        <vue-progress-bar class="m-3"></vue-progress-bar>
        <typewriter :type-interval="22" :replace-interval="1000">
          <div class="mt-4">
            LLLLLLLLLLLLLLLLLLLLOOOOOOOOOOOOOOOOOAAAAAAAAAAAAAAADDDDDDDDDDDDDDDDDIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIINNNNNNNNNNNNNNNNNNNGGGGGGGGGGGGGGGG.
          </div>
        </typewriter>
      </div>
    </div>
  </Transition>
</template>

<script>
import Typewriter from "typewriter-vue";
export default {
  name: "loader",
  props: ["isLoading"],
  components: {
    Typewriter,
  },
  data() {
    return {};
  },
  mounted() {
    this.$Progress.start();
    setTimeout(() => {
      this.$Progress.finish();
    }, 5000);
  },
};
</script>
