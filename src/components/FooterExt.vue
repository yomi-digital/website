<template>
  <div>
    <div :class="{'d-flex flex-column justify-content-center' : isMobile}" class="custom-card py-4 px-4 mb-2">
      <h6 :class="{'text-center' : isMobile}" class="title-carousel">{{$t("footer.title_carousel")}}!</h6>
      <div class="mt-5 mb-5">
        <agile
        :options="myOptions"
        >
          <div class="slide">
            <img src="../assets/partners/BC_logo_twitter.svg" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/partners/Frame.svg" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/partners/Group (1).svg" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/partners/logo-full-colour-dark.svg" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/partners/nftberlin.svg" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/partners/Rectangle.svg" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/partners/Untitled-Artwork.webp" alt="" />
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
  data() {
    return {
      myOptions: {
        navButtons: false,

        responsive: [
          {
            breakpoint: 300,
            settings: {
              dots: false,
              slidesToShow: 1,
              navButtons: true,
              centerMode:true,
              autoplaySpeed: 5000,
            },
          },

          {
            breakpoint: 600,
            settings: {
              navButtons: true,
              dots: false,
              infinite : true,
              slidesToShow: 2,
              centerMode:true,
              autoplaySpeed: 5000,
            },
          },
          {
            breakpoint: 900,
            settings: {
              navButtons: true,
              dots: false,
              infinite : true,
              slidesToShow: 3,
              centerMode:false,
              autoplaySpeed: 5000,
            },
          },
        ],
      },
    };
  },
  components: {},
};
</script>
