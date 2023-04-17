<template>
  <footer class="custom-card py-5 px-4">
    <div class="container-fluid h-100">
      <div class="row">
        <div class="col-12 col-md-7 order-1 order-md-0">
          <div class="d-flex h-100 flex-column justify-content-between">
            <div>
              <img
                v-if="!isMobile"
                style="width: 200px"
                src="../assets/images/YOMI-MARCHIO.png"
                alt=""
              />
            </div>
            <div
              :class="isMobile ? 'mt-4 justify-content-between' : null"
              class="d-flex align-items-end first-section"
            >
              <p class="footer-text mb-0" style="line-height: 150% !important">
                Viale Legioni Romane, <br v-if="isMobile"> 7 20147 Milano <br v-if="isMobile"> P. I 12188060961
              </p>
              <p class="ms-3 me-3 mb-1">|</p>
              <a
                v-if="$i18n.locale == 'en'"
                href="https://www.iubenda.com/privacy-policy/61064742"
                class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iub-legal-only iubenda-noiframe"
                title="Privacy Policy "
                >Privacy Policy /&nbsp;</a
              >
              <a
                v-if="$i18n.locale == 'it'"
                href="https://www.iubenda.com/privacy-policy/81694600"
                class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iub-legal-only iubenda-noiframe"
                title="Privacy Policy "
                >Privacy Policy /&nbsp;</a
              >
              <a
                v-if="$i18n.locale == 'en'"
                href="https://www.iubenda.com/privacy-policy/61064742/cookie-policy"
                class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe"
                title="Cookie Policy "
                >Legal Terms</a
              >
              <a
                v-if="$i18n.locale == 'it'"
                href="https://www.iubenda.com/privacy-policy/81694600/cookie-policy"
                class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe"
                title="Cookie Policy "
                >Legal Terms</a
              >
            </div>
          </div>
        </div>
        <div :class="isMobile ? 'mt-5 mb-4 flex-column' : null" class="col-12 col-md-5 d-flex  order-0 order-md-1">
          <div v-if="isMobile" class="mb-5">
            <img
                
                style="width: 150px"
                src="../assets/images/YOMI-MARCHIO.png"
                alt=""
              />
          </div>
          <div class="d-flex justify-content-between w-100">
            <div>
              <h6 class="mb-4">section</h6>
              <ul class="first-column" :class="{ 'mt-4': isMobile }">
                <li>
                  <router-link
                    class="text-capitalize"
                    to="/about"
                    @click.native="scrollUp"
                    >{{ $t("menu.about") }}</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="text-capitalize"
                    to="/team"
                    @click.native="scrollUp"
                    >{{ $t("menu.team") }}</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="text-capitalize"
                    to="/services"
                    @click.native="scrollUp"
                    >{{ $t("menu.service") }}</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="text-capitalize"
                    to="/portfolio"
                    @click.native="scrollUp"
                    >{{ $t("menu.portfolio") }}</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="text-capitalize"
                    to="/internal-project"
                    @click.native="scrollUp"
                    >{{ $t("menu.internal") }}</router-link
                  >
                </li>
              </ul>
            </div>
            <div>
              <h6 class="mb-4">social</h6>
              <ul class="first-column" :class="{ 'mt-4': isMobile }">
                <li>
                  <a href="https://discord.gg/w54Jbd4Qhz" target="_blank"
                    >Discord</a
                  >
                </li>
                <li>
                  <a href="https://github.com/yomi-digital" target="_blank"
                    >Github</a
                  >
                </li>
                <li>
                  <a href="https://twitter.com/YOMI_WEB3" target="_blank"
                    >Twitter</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/yomidigitalhub/"
                    target="_blank"
                    >Linkedin</a
                  >
                </li>
                <li>
                  <a href="https://www.instagram.com/yomi_web3/" target="_blank"
                    >Instagram</a
                  >
                </li>
              </ul>
            </div>
            <div :class="isMobile ? 'd-flex align-items-end ms-2' : null">
              <Talk />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import Talk from "../components/Talk.vue";
export default {
  name: "newFooter",
  mixins: [checkViewport],
  components: {
    Talk,
  },
};
</script>

<style></style>
