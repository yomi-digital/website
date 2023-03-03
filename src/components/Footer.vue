<template>
  <div>
    <footer class="custom-card">
      <changeLanguage />
      
      <div
        class=""
        :class="{
          'd-flex align-items-end justify-content-between ps-4 pe-4 pb-4':
            !isMobile,
          'top-btm': isMobile,
        }"
      >
      <!-- <a v-if="!isMobile"  class="btn-social mt-4 d-inline-block text-uppercase" href="https://form.yomi.digital/" target="_blank">
          
          {{ $t("menu.talk") }}
     
      </a> -->
        <div
          :class="isMobile ? 'mt-5 mb-5' : null"
          class="d-flex"
        >
          <ul :class="{ 'mt-4 first-column': isMobile }">
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
          <ul class="ms-4 ps-3">
            <!-- <li v-if="!isMobile"><a href="/">Menu</a></li> -->
            <li :class="isMobile ? 'mt-4' : null"><a href="/">Privacy Policy</a></li>
            <li><a href="/">Legal Terms</a></li>
            <li>
              <p class="link-footer footer-text">
                Copyright© {{ new Date().getFullYear() }} <br />
                <span v-if="!isMobile"> All right reserved YOMI </span>
              </p>
            </li>
          </ul>
          <div :class="isMobile ? 'mt-4' : null" class="ms-4 ps-3">
            <p class="footer-text">
              Viale Legioni Romane, 7 <br>
              20147 Milano <br>
              P. I 12188060961
            </p>
          </div>
        </div>
        <div
          class="d-flex align-items-center"
          :class="isMobile ? 'mt-4 pt-4 justify-content-center' : null || isTablet ? 'me-1' : null"
        >
          <a v-if="!isMobile" class="btn-social me-3 text-uppercase" href="https://form.yomi.digital/" target="_blank">
          
              {{ $t("menu.talk") }}
         
          </a>

          <a
            class="btn-social "
            :class="isTablet ? 'me-1' : 'me-3'"
            href="https://discord.gg/w54Jbd4Qhz"
            target="_blank"
            >DS</a
          >
          <a
            class="btn-social"
            :class="isTablet ? 'me-1' : 'me-3'"
            href="https://www.instagram.com/yomi_web3/"
            target="_blank"
            >IG</a
          >
          <a
            class="btn-social "
            :class="isTablet ? 'me-1' : 'me-3'"
            href="https://twitter.com/YOMI_WEB3"
            target="_blank"
            >TW</a
          >
          <a
            class="btn-social"
            href="https://www.linkedin.com/company/yomidigitalhub/"
            target="_blank"
            >IN</a
          >
        </div>
      </div>
    </footer>
    <div v-if="isMobile || isTablet" class="custom-card small-card">
      <p>All Rights Reserved – YOMI.</p>
    </div>
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import changeLanguage from "@/components/changeLanguage.vue";
export default {
  name: "Footer",

  mixins: [checkViewport],
  components: {
    changeLanguage,
  },
  methods: {
    scrollUp() {
      const app = this;
      if (app.$route.path !== window.location.pathname) {
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>

<style></style>
