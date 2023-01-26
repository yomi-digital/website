<template>
  <footer class="custom-card">
    <changeLanguage />>
    <div
        class=""
        :class="{ 'd-flex align-items-end justify-content-between ps-4 pe-4 pb-4': !isMobile }"
      >
      <div class="d-flex align-items-center">

          <ul  :class="{ 'me-5 pe-5': !isMobile }">
            <li><a href="/">Menu</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Legal Terms</a></li>
            <li>
              <a href="/"
                >Copyright© {{ new Date().getFullYear() }} <br> All right reserved
                YOMI</a
              >
            </li>
          </ul>
          <ul>
            <li><a class="text-capitalize" href="/#/team">{{$t("menu.team")}}</a></li>
            <li><a class="text-capitalize" href="/#/services">{{$t("menu.service")}}</a></li>
            <li><a class="text-capitalize" href="/#/portfolio">{{$t("menu.portfolio")}}</a></li>
            <li><a class="text-capitalize" href="/#/mego">{{$t("menu.internal")}}</a></li>
          </ul>
      </div>
        <div class="d-flex-align-items-center" :class="{ 'mt-5': isMobile }">
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