<template>
  <div
    id="Header"
    style="position: relative; background-color: black !important"
  >
    <div class="video-container">
      <video
        id="myVideo"
        width="100%"
        height="100%"
        class="video-custom"
        preload="auto"
        autoplay
        loop
        playsinline
        muted
        defaultMuted
      >
        <source src="/assets/video/hole.mp4" type="video/mp4" />
        <source src="/assets/video/mind.webm" type="video/webm" />
      </video>
    </div>
    <div id="cover">
      <div id="logo" class="">
        <img class="logo flicker-1" src="/assets/img/logoStrange.svg" />
        <div class="text-strange">
          <span id="L">W</span>
          <span id="I">E</span>
          <span id="G">B</span>
          <span id="H">3</span>

          <span id="L">C</span>
          <span id="I">O</span>
          <span id="G">M</span>
          <span id="H">P</span>
          <span id="L">A</span>
          <span id="G">N</span>
          <span id="H">Y</span>
        </div>
      </div>
      <div id="arrow">
        <a href="#Menu" class="hideMobile flicker-1">
          <img src="/assets/img/arrow1.svg" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  mounted() {
    this.playTwo();
  },
  methods: {
    playTwo() {
      var vid = document.getElementById("myVideo");
      vid.playbackRate = 10;
    },
  },
};
</script>

<style lang="scss" scoped>
.video-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#cover {
  position: absolute;
  color: #ffffff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
}

@media (min-aspect-ratio: 16/9) {
  .video-container iframe {
    height: 56.25vw;
  }
}
@media (max-aspect-ratio: 16/9) {
  .video-container iframe {
    width: 177.78vh;
  }
}

.text-strange {
  font-size: 2.3rem;
  color: #961115;
  letter-spacing: 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  div > span {
    opacity: 0.15;
  }
  #I {
    opacity: 1;
    animation: flickerI 2s linear reverse infinite;
  }
  #I::after {
    content: "";
    width: 150%;
    -webkit-box-shadow: -35px 0px 60px 8px #961115;
    -moz-box-shadow: -35px 0px 60px 8px #961115;
    box-shadow: -35px 0px 60px 8px #961115;
  }
  #L,
  #G {
    animation: flickerLG 2s linear reverse infinite;
    position: relative;
  }
  #L::after,
  #L::before {
    content: " ";
    width: 100px;
    height: 100px;
    background: #961115;
    position: absolute;
    top: -50%;
    left: 100%;
    border-radius: 100%;
    opacity: 0.05;
    filter: blur(10px);
  }
  #L::after {
    width: 200px;
    height: 200px;
    top: -150%;
    left: -5%;
    opacity: 0.1;
    filter: blur(10px);
  }
  #H {
    animation: flickerH 2s linear reverse infinite;
  }

  #T {
    animation: flickerH 2s linear reverse infinite;
  }

  @keyframes flickerI {
    0% {
      opacity: 0.4;
    }
    5% {
      opacity: 0.5;
    }
    10% {
      opacity: 0.6;
    }
    15% {
      opacity: 0.85;
    }
    25% {
      opacity: 0.5;
    }
    30% {
      opacity: 1;
    }
    35% {
      opacity: 0.1;
    }
    40% {
      opacity: 0.25;
    }
    45% {
      opacity: 0.5;
    }
    60% {
      opacity: 1;
    }
    70% {
      opacity: 0.85;
    }
    80% {
      opacity: 0.4;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes flickerLG {
    0% {
      opacity: 0.19;
    }
    5% {
      opacity: 0.2;
    }
    10% {
      opacity: 0.25;
    }
    15% {
      opacity: 0.35;
    }
    25% {
      opacity: 0.2;
    }
    30% {
      opacity: 0.4;
    }
    35% {
      opacity: 0.1;
    }
    40% {
      opacity: 0.25;
    }
    45% {
      opacity: 0.2;
    }
    60% {
      opacity: 0.4;
    }
    70% {
      opacity: 0.35;
    }
    80% {
      opacity: 0.4;
    }
    90% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.4;
    }
  }

  @keyframes flickerH {
    0% {
      opacity: 0.15;
    }
    5% {
      opacity: 0.2;
    }
    10% {
      opacity: 0.12;
    }
    15% {
      opacity: 0.2;
    }
    25% {
      opacity: 0.15;
    }
    30% {
      opacity: 0.4;
    }
    35% {
      opacity: 0.05;
    }
    40% {
      opacity: 0.12;
    }
    45% {
      opacity: 0.15;
    }
    60% {
      opacity: 0.3;
    }
    70% {
      opacity: 0.2;
    }
    80% {
      opacity: 0.3;
    }
    90% {
      opacity: 0.18;
    }
    100% {
      opacity: 0.3;
    }
  }

  @keyframes flickerT {
    0% {
      opacity: 0.01;
    }
    5% {
      opacity: 0.05;
    }
    10% {
      opacity: 0.03;
    }
    15% {
      opacity: 0.1;
    }
    25% {
      opacity: 0.07;
    }
    30% {
      opacity: 0.1;
    }
    35% {
      opacity: 0.05;
    }
    40% {
      opacity: 0.06;
    }
    45% {
      opacity: 0.1;
    }
    60% {
      opacity: 0;
    }
    70% {
      opacity: 0.1;
    }
    80% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0.1;
    }
  }
}
</style>
