<template>
  <div>
    <div class="custom-card py-4 px-4 mb-2">
      <h6 class="title-carousel">Build better together!</h6>
      <div class="mt-5 mb-5">
        <agile
          infinite
          :autoplay-speed="5000"
          :dots="false"
          :slidesToShow="3"
          :centerMode="true"
        >
          <div class="slide">
            <img src="../assets/partners/polygon-logo.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/partners/bankless.png" alt="" />
          </div>
          <template slot="prevButton"
            ><i class="fa-solid fa-chevron-left"></i
          ></template>
          <template slot="nextButton"
            ><i class="fa-solid fa-chevron-right"></i
          ></template>
        </agile>
      </div>
    </div>
    <!-- <div class="custom-card mt-1 py-4 px-4">
      <h3 class="border-bottom-light pb-3 mb-5">
        Contact Us
        <i class="fa-regular fa-paper-plane ms-3" style="font-size: 3rem"></i>
      </h3>
      <div
        class="mt-5 mb-5"
        :class="{ 'd-flex align-items-end justify-content-between': !isMobile }"
      >
        <ul>
          <li><a href="/">Menu</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Legal Terms</a></li>
          <li>
            <a href="/"
              >Copyright© {{ new Date().getFullYear() }} all right reserved
              YOMI</a
            >
          </li>
        </ul>
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
            class="btn-social me-3"
            href="https://www.linkedin.com/company/yomidigitalhub/"
            target="_blank"
            >IN</a
          >
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";

export default {
  mixins: [checkViewport],
  components: {},
};
</script>
