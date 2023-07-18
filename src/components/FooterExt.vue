<template>
  <div>
    <div
      :class="{ 'd-flex flex-column justify-content-center': isMobile }"
      class="custom-card py-4 px-4 mb-2"
    >
      <div class="d-flex justify-content-between align-items-center">
        <h6 :class="{ 'text-center': isMobile }" class="title-carousel">
          {{ $t("footer.title_carousel") }}!
        </h6>
        <p class="text-uppercase">Partners</p>
      </div>
      <div class="mt-5 mb-5">
        <agile class="patners" :options="myOptions">
          <div class="slide">
            <a href="https://www.banklessconsulting.com/" target="_blank">
              <BCLogo />
            </a>
          </div>
          <div class="slide">
            <img src="../assets/partners/Frame.svg" alt="" />
          </div>
          <div class="slide">
            <a href="https://quadrans.io/" target="_blank">
              <img src="../assets/partners/Group (1).svg" alt="" />
            </a>
          </div>
          <div class="slide">
            <a href="https://niftyz.io/#/" target="_blank">
              <img src="../assets/partners/niftyz.png" alt="" />
            </a>
          </div>
          <div class="slide">
            <a href="https://nftberlin.org/#/" target="_blank">
              <img src="../assets/partners/nftberlin.svg" alt="" />
            </a>
          </div>
          <div class="slide">
            <a href="https://www.spaghett-eth.com/" target="_blank">
              <img src="../assets/partners/Spaghetteth.png" alt="" />
            </a>
          </div>
          <div class="slide">
            <a href="https://www.sewernation.xyz/" target="_blank">
              <img src="../assets/partners/sewernation.png" alt="" />
            </a>
          </div>
          <div class="slide">
            <a href="https://board4birds.ch/" target="_blank">
              <img src="../assets/partners/b4b.png" alt="" />
            </a>
          </div>
          <div class="slide">
            <a href="https://www.hyper-foundry.com/" target="_blank">
              <img src="../assets/partners/Logo.png" alt="" />
            </a>
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
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import BCLogo from "@/components/BCLogo.vue";
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
              centerMode: true,
              autoplaySpeed: 5000,
            },
          },

          {
            breakpoint: 600,
            settings: {
              navButtons: true,
              dots: false,
              infinite: true,
              slidesToShow: 2,
              centerMode: true,
              autoplaySpeed: 5000,
            },
          },
          {
            breakpoint: 900,
            settings: {
              navButtons: true,
              dots: false,
              infinite: true,
              slidesToShow: 3,
              centerMode: false,
              autoplaySpeed: 5000,
            },
          },
        ],
      },
    };
  },
  components: {
    BCLogo,
  },
};
</script>
