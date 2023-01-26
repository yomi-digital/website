<template>
  <div id="Menu" class="fixedElement">
    <div class="menu">
      <div class="row">
        <div
          class="col-12 col-lg-7 col-md-6 text-center justify-content-center"
          style="position: relative;"
        >
          <Slide :isOpen="open" :closeOnNavigation="true">
            <a class="sitebar" href="#who">CHI SIAMO</a>
            <a class="sitebar" href="#portfolio">PORTFOLIO</a>
            <a class="sitebar" href="#services">SERVIZI</a>
            <a class="sitebar" href="#contact">CONTATTI</a>
            <br />
            <a
              class="sitebar-contact"
              href="https://www.linkedin.com/company/yomiweb3/"
              target="_blank"
              >LINKEDIN</a
            >
            <a
              class="sitebar-contact"
              href="https://www.instagram.com/yomi_web3/"
              target="_blank"
              >INSTAGRAM</a
            >
            <a
              class="sitebar-contact"
              href="https://twitter.com/YOMI_WEB3"
              target="_blank"
            >
              TWITTER</a
            >
            <a
              class="sitebar-contact"
              href="https://discord.gg/w54Jbd4Qhz"
              target="_blank"
              >DISCORD</a
            >
            <a
              class="sitebar-contact mt-5"
              href="mailto:hey@yomi.digital"
              target="_blank"
              style="text-align: left;"
            >
              hey@yomi.digital</a
            >
          </Slide>
          <div
            @click="toogleMenu"
            class="py-desktop-3"
            style="cursor: pointer;"
          >
            <span class="menuLink m-0">MENU</span>
          </div>
        </div>
        <div class="col-12 col-lg-5 col-md-6 text-center b-menu-top">
          <div class="d-flex justify-content-between">
            <div class="flex-fill p-0 button-menu">
              <div class="b-menu-left no-borderLeft-m py-desktop-3">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/yomiweb3/"
                >
                  <span class="menuLink m-0">IN</span>
                </a>
              </div>
            </div>
            <div class="flex-fill p-0">
              <a href="https://discord.gg/w54Jbd4Qhz" target="_blank">
                <div class="b-menu-left py-desktop-3 button-menu">
                  <span class="menuLink">D</span>
                </div>
              </a>
            </div>
            <div class="flex-fill p-0">
              <div class="b-menu-left py-desktop-3 button-menu">
                <a target="_blank" href="https://www.instagram.com/yomi_web3/">
                  <span class="menuLink m-0">IG</span>
                </a>
              </div>
            </div>
            <div class="flex-fill p-0">
              <div
                class="b-menu-left b-menu-right py-desktop-3 button-menu py-desktop-3"
              >
                <a target="_blank" href="https://twitter.com/YOMI_WEB3">
                  <span class="menuLink m-0">TW</span>
                </a>
              </div>
            </div>
            <div class="flex-fill p-0 button-menu">
              <div class="py-desktop-3">
                <a
                  class="menuLink"
                  @click="
                    () => {
                      langBool = !langBool;
                      $i18n.locale = langBool ? 'it' : 'en';
                    }
                  "
                  v-html="!langBool ? 'it' : 'en'"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<script>
import { Slide } from "vue-burger-menu";
export default {
  data() {
    return {
      isComponentModalActive: false,
      langs: ["en", "it"],
      langBool: false,
      open: false,
    };
  },
  methods: {
    toogleMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      this.open = !this.open;
    },
  },
  name: "Menu",
  components: {
    Slide,
  },
  mounted() {
    console.log(this.$i18n.locale);
  },
};

$(window).scroll(function(e) {
  var offset = $("#Menu").position();
  var offset2 = $("#Home").position();
  var $el = $(".fixedElement");
  var isPositionFixed = $el.css("position") == "fixed";
  if ($(this).scrollTop() < parseInt(offset2.top) && isPositionFixed) {
    $el.css({ position: "static", top: "0px" });
  }
  if ($(this).scrollTop() > parseInt(offset.top) && !isPositionFixed) {
    $el.css({ position: "fixed", top: "0px" });
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
