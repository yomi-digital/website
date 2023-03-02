<template>
  <div>
    <footer class="custom-card">
      <changeLanguage />
      <div
          class=""
          :class="{ 'd-flex align-items-end justify-content-between ps-4 pe-4 pb-4': !isMobile, 'top-btm' : isMobile }"
        >
        <div :class="isMobile ? 'flex-column  mt-5' : 'align-items-center'" class="d-flex">
  
            <ul  :class="{ 'me-5 pe-5': !isMobile }">
              <li v-if="!isMobile"><a href="/">Menu</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Legal Terms</a></li>
              <li>
                  <p class="link-footer copyright">
                    Copyright© {{ new Date().getFullYear() }} <br> 
                    <span v-if="!isMobile">
                      All right reserved
                      YOMI
                    </span>
                  </p>
              </li>
            </ul>
            <ul :class="{'mt-5' : isMobile}">
              <li><a class="text-capitalize" href="/#/team">{{$t("menu.team")}}</a></li>
              <li><a class="text-capitalize" href="/#/services">{{$t("menu.service")}}</a></li>
              <li><a class="text-capitalize" href="/#/portfolio">{{$t("menu.portfolio")}}</a></li>
              <li><a class="text-capitalize" href="/#/mego">{{$t("menu.internal")}}</a></li>
            </ul>
        </div>
          <div class="d-flex align-items-center" :class="{ 'mt-5 pt-4 justify-content-center': isMobile }">
            <a
              class="btn-social me-3"
              href="https://discord.gg/w54Jbd4Qhz"
              target="_blank"
              >DIS</a
            >
            <a
              class="btn-social me-3"
              href="https://www.instagram.com/yomi_web3/"
              target="_blank"
              >IG</a
            >
            <a
              class="btn-social me-3"
              href="https://twitter.com/YOMI_WEB3"
              target="_blank"
              >TW</a
            >
            <a
              class="btn-social "
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
    name:'Footer',
    mixins: [checkViewport],
    components:{
        changeLanguage
    }

}
</script>

<style>

</style>