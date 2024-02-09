<template>
  <div>
    <div :style="[!isMobile ? { marginTop: '80px' } : { marginTop: '50px' }]">
      <ButtonNav />
      <!-- TEAM SECTION -->
      <div class="">
        <div
          :class="{ 'full-h': !isMobile }"
          class="container-fluid pd-container position-relative"
        >
            <div class="row ">
              <div class="col-12 col-md-12 col-lg-12">
                <div class="" :class="{ 'mt-3': isMobile }">
                  <h2 :class="isMobile ? 'enter-page-mobile' : 'enter-page'">
                    {{ $t("menu.team") }}
                  </h2>
                </div>
              </div>
              <div class="col-12 col-lg-6 ms-2 mt-5">
                <p
                  class="text-service-one fade-in-max"
                  :class="{ 'mt-3': isMobile }"
                >
                  {{ $t("team.text") }}
                </p>
              </div>
            </div>
            <div class="container-image">
              <div class="box-character-img position-second-box-charger">
                <img
                  class="imgTeam fade-in-max"
                  src="../assets/images/team-img.webp"
                  alt=""
                />
              </div>
            </div>
            <div class="ps-special" style="bottom:30px; left: 0px; z-index: 99;">
              <div v-if="!isMobile" class="pd-container mb-4">
                <button @click="scrollDown" class="cta underline ps-0">{{ $t("team.link") }}</button>
              </div>
              <MarqueeText
                class="title-project"
                :repeat="6"
                :duration="$t('banner.team').length * 0.4"
              >
                <h4>&nbsp;{{ $t("banner.team") }}&nbsp;</h4>
              </MarqueeText>
            </div>
          </div>

        <!-- TEAM SHOW -->
        <div
          v-show="teams != ''"
          class="container-fluid"
          :class="{ 'ps-0': isMobile }"
        >
          <div id="allTeam" class="mt-5">
            <div v-if="!isMobile" class="row">
              <div
                v-for="(team, index) in teams"
                :key="index"
                class="col-12 col-md-4 col-lg-3"
              >
                <div
                  @click="toggleTeam(team)"
                  class="box-team-container justify-content-center d-flex my-5"
                  :class="{ 'border-image': !showImage, 'fade-in': showImage }"
                >
                  <div class="bk-team hoverPointer">
                    <p class="text-strong">{{ $t("team.more") }}</p>
                  </div>

                  <img :src="'/team/' + team.imageProfilePreview" alt="" />
                </div>
              </div>
              <div v-if="!isMobile" class="col-12 col-md-4 col-lg-3">
                  <div
                    @click="toggleForm()"
                    class="box-team-container justify-content-center d-flex my-5 pointer"
                    :class="{ 'border-image': !showImage }"
                  >
                    <div class="bk-team opacity-100 text-uppercase">
                      <p class="text-strong">{{ $t("team.you") }}?</p>
                    </div>
                  </div>
              </div>
            </div>
            <agile
              v-if="isMobile"
              :style="{ 'pointer-events': checkedMobile ? 'none' : 'all' }"
              
              :options="myOptions"
            >
              <div v-for="(team, index) in teams" :key="index" class="slide">
                <div
                  class="
                    box-team-container
                    justify-content-center
                    d-flex
                    my-5
                    pointer
                  "
                  :class="{
                    'border-image': !showImage,
                    'invertFilter': checkedMobile,
                  }"
                >
                  <img
                    @click="showMember(team)"
                    :src="'/team/' + team.imageProfilePreview"
                    alt=""
                  />
                </div>
                <div class="d-flex justify-content-center align-items-center">
                  <h5 @click="showMember(team)" class="color-primary">
                    {{ team.name }}
                  </h5>
                </div>
              </div>

              <div class="slide">
                <div
                  @click="toggleForm()"
                  class="box-team-container justify-content-center d-flex my-5 pointer"
                  :class="{ 'border-image': !showImage }"
                >
                  <div class="bk-team opacity-100 text-uppercase">
                    <p class="text-strong">{{ $t("team.you") }}?</p>
                  </div>
                </div>
              </div>

              <template v-if="!checkedMobile" slot="prevButton"
                ><i class="fa-solid fa-chevron-left"></i
              ></template>
              <template v-if="!checkedMobile" slot="nextButton"
                ><i class="fa-solid fa-chevron-right"></i
              ></template>
            </agile>
            <div
              class="info-member position-relative"
              v-if="checkedMobile && isMobile"
            >
              <i
                @click="closeMember()"
                v-if="checkedMobile"
                class="fa-solid fa-xmark pointer close-icon"
              ></i>
              <p class="">alias</p>
              <h6>{{ selected.alias }}</h6>
              <p class="">{{ $t("team.role") }}</p>
              <h6>{{ selected.role }}</h6>
            </div>
          </div>
          <div :class="isMobile ? 'mb-5' : null" class="link-internal mt-5 text-center">
            <a class="" href="mailto:hey@yomi.digital" target="_blank">{{ $t("team.btn") }}</a>
          </div>

          <div v-if="!isMobile" class="gap"></div>
          <modal name="team" class="team-card">
            <div class="pb-4">
              <div>
                <div class="mb-3 label">MEMBER #{{ selected.id }}</div>
                <div
                  class="d-flex justify-content-between align-items-center align-content-center w-100"
                >
                  <h5 class="mb-0">#{{ selected.name }} //</h5>
                  <i
                    @click="closeModal()"
                    class="fa-solid fa-xmark mb-1 hoverPointer"
                  ></i>
                </div>
              </div>
            </div>
            <div class="container-fluid mt-5">
              <div class="row justify-content-end">
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="mb-5">
                    <div class="label">ALIAS</div>
                    <div class="title-team mt-3">{{ selected.alias }}</div>
                  </div>
                  <div class="mb-5">
                    <div class="label">{{ $t("team.role") }}</div>
                    <div class="title-team mt-3">{{ selected.role }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="team-img-card">
              <img :src="'/team/' + selected.imageProfile" alt="" />
            </div>
          </modal>
          <formTeam
            @onBackClick="
              () => {
                showImage = !showImage;
              }
            "
          />
        </div>
        <bannerPortfolio />
      </div>
      <newFooter />
    </div>
  </div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";
import newFooter from "@/components/newFooter.vue";
import bannerPortfolio from "@/components/bannerPortfolio.vue";
import formTeam from "@/components/formTeam.vue";
import ButtonNav from "@/components/ButtonNav.vue";
import teams from "@/team/teams.json";
import checkViewport from "@/mixins/checkViewport";


export default {
  name: "team",
  
  components: {
    newFooter,
    MarqueeText,
    ButtonNav,
    bannerPortfolio,
    formTeam,
  },
  data() {
    return {
      endedTypewriter: false,
      Member: false,
      scrollPosition: 0,
      checkedMobile: false,
      changeSection: false,
      showImage: true,
      selected: {},
      teams: teams,
      myOptions: {
        dots: false,
        slidesToShow: 1,
        navButtons: true,
        centerMode: true,
        swipe: false,
      },
    };
  },
  mixins: [checkViewport],

  mounted() {
    const app = this;
    console.log(this.isMobile);
    app.calculateTypewriter();
    document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      this.closeModal();
    }
  });
  },
  methods: {
    scrollDown() {
      const element = document.getElementById('allTeam');
      element.scrollIntoView({ behavior: 'smooth' });
    },
    calculateTypewriter() {
      const app = this;
      setTimeout(function () {
        app.endedTypewriter = true;
      }, 5000);
    },
    closeModal() {
      const app = this;
      document.querySelector(".vm--modal").classList.add("slit-out-vertical");
      setTimeout(function () {
        app.$modal.hide("team");
      }, 800);
      setTimeout(function () {
        app.showImage = true;
      }, 100);
    },
    toggleTeam(team) {
      const app = this;
      app.selected = team;
      app.showImage = false;
      app.$modal.show("team");
    },
    showMember(team) {
      const app = this;
      app.checkedMobile = true;
      app.selected = team;
    },
    closeMember() {
      const app = this;
      app.checkedMobile = false;
      /* console.log("click", app.checkedMobile); */
    },
    toggleForm() {
      const app = this;
      app.showImage = false;
      app.$modal.show("form");
    },
  },
};
</script>
<style scoped></style>
