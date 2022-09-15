<template>
  <div>
    <Bubble />
    <h6>{{ project.name }}</h6>
  </div>
</template>

<script>
import Bubble from "@/components/Bubble.vue";

export default {
  props: ["project"],
  components: {
    Bubble,
  },
};
</script>
