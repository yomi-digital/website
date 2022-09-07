<template>
  <Transition enter-active-class="bounce-in-right">
    <div v-if="!isLoading && !isEnter">
      <div class="welcome-screen no-overflow-x">
        <div class="d-flex align-items-end px-5 mb-5">
          <h2 class="big-title">WELCOME TO YOMI</h2>
          <div
            class="btn-primary negative-position"
            @click="$emit('enterWebsite')"
          >
            ENTER
          </div>
        </div>
        <MarqueeText :repeat="10" reverse>
          <div class="marquee-title">WELCOME TO YOMI&nbsp;</div>
        </MarqueeText>
        <MarqueeText :repeat="10">
          <div class="marquee-title-2">WELCOME TO YOMI&nbsp;</div>
        </MarqueeText>
      </div>
    </div>
  </Transition>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "loader",
  props: ["isLoading", "isEnter"],
  components: {
    MarqueeText,
  },
  data() {
    return {};
  },
};
</script>
