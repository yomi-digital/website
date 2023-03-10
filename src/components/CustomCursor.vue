<template>
  <div id="app">
    <div
      v-if="isDesktop"
      :class="[
        'g-cursor',
        { 'g-cursor_hover': hover },
        { 'g-cursor_hide': hideCursor },
      ]"
    >
      <div :style="cursorCircle" class="g-cursor__circle"></div>
      <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
    </div>
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
export default {
  mixins: [checkViewport],
  data() {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: false,
    };
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`;
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${
        this.yChild - 3
      }px) translateZ(0) translate3d(0, 0, 0);`;
    },
  },
  methods: {
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(() => {
        this.xParent = e.clientX - 15;
        this.yParent = e.clientY - 15;
      }, 100);
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener("mouseleave", () => {
      this.hideCursor = true;
    });
    document.addEventListener("mouseenter", () => {
      this.hideCursor = false;
    });

    document.addEventListener("mouseover", (event) => {
      const target = event.target;
      const clickableElements = document.querySelectorAll(
        "a, a *, button, button *, input[type='submit'], [role='button'], [tabindex='0'], .hoverPointer, .hoverPointer *, MarqueeText, MarqueeText *"
      );
      if (
        clickableElements &&
        clickableElements.length > 0 &&
        [...clickableElements].includes(target)
      ) {
        this.hover = true;
      }
    });

    document.addEventListener("mouseout", (event) => {
      const target = event.target;
      const clickableElements = document.querySelectorAll(
        "a, a *, button, button *, input[type='submit'], [role='button'], [tabindex='0'], .hoverPointer, .hoverPointer *, MarqueeText, MarqueeText *"
      );
      if (
        clickableElements &&
        clickableElements.length > 0 &&
        [...clickableElements].includes(target)
      ) {
        this.hover = false;
      }
    });
  },
};
</script>


<style lang="scss">
.g-cursor {
  &_hide {
    opacity: 0;
    width: 60px;
    height: 60px;
    transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  }

  &__circle {
    pointer-events: none;
    user-select: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 30px;
    height: 30px;
    border: 2px solid #fff;
    border-radius: 100%;
    z-index: 5555;
    backface-visibility: hidden;
    transition: opacity 0.6s ease;
    mix-blend-mode: difference;
  }

  &__point {
    top: 0;
    left: 0;
    position: fixed;
    width: 8px;
    height: 8px;
    pointer-events: none;
    user-select: none;
    border-radius: 100%;
    background: #fff;
    z-index: 55555555;
    backface-visibility: hidden;
    will-change: transform;
    mix-blend-mode: difference;
  }

  &_hover {
    .g-cursor__circle {
      opacity: 1;
      width: 50px;
      height: 50px;
      transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
      border: 2px solid fuchsia;
      mix-blend-mode: normal;
    }
    .g-cursor__point {
      background: fuchsia;
      width: 15px;
      height: 15px;
      mix-blend-mode: normal;
    }
  }
}
.hoverPointer {
  // use this class for change cursor
}
</style>