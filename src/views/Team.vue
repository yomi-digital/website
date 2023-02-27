<template>
  <div class="pt-5">
    <ButtonNav />
    <!-- TEAM SECTION -->
    <div :class="{ 'full-h': !isMobile }" class="container-fluid pd-container">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-12">
          <div class="" :class="{ 'mt-3': isMobile }">
            <h2 :class="isMobile ? 'enter-page-mobile' : 'enter-page'" >{{ $t("menu.team") }}</h2>
          </div>
        </div>
        <div class="col-12 col-lg-6 ms-2 mt-5">
          <p class="text-service-one fade-in-max" :class="{ 'mt-3': isMobile }">
            {{ $t("team.text") }}
          </p>
        </div>
        <!-- <Transition enter-active-class="fade-in-max">
          <div
            style="position: absolute; bottom: 50px; left: 0"
            @clicMember Member"
            v-if="endedTypewriter"
            class="big-link ms-5"
          >
            KNOW MORE
          </div>
        </Transition> -->
      </div>
      <div :class="{ 'container-image': isMobile }">
        <div class="box-character-img position-second-box-charger">
          <LazyComponent>
            <img
              class="imgTeam fade-in-max"
              src="../assets/images/team-img.webp"
              alt=""
            />
          </LazyComponent>
        </div>
      </div>
    </div>
    <MarqueeText
      class="title-project"
      :repeat="6"
      :duration="$t('banner.team').length * 0.4"
      style="z-index: 1"
    >
      <h4>&nbsp;{{ $t("banner.team") }}&nbsp;</h4>
    </MarqueeText>
    <!-- TEAM SHOW -->
    <div v-show="teams != ''" class="container-fluid">
      <div class="mt-5">
        <div v-if="!isMobile" class="row">
          <div
            v-for="(team, index) in teams"
            :key="index"
            class="col-12 col-md-4 col-lg-3"
          >
            <div
              @click="toggleTeam(team)"
              class="box-team-container justify-content-center d-flex my-5"
              :class="{ 'border-image': !showImage, 'fade-in' : showImage }"
            >
              <div class="bk-team">
                <p class="text-strong">{{ $t("team.more") }}</p>
              </div>
              <LazyComponent>
                <img :src="'/team/' + team.imageProfilePreview" alt="" />
              </LazyComponent>
            </div>
          </div>

          <div
            v-if="!isMobile"
            @click="toggleForm()"
            class="box-team-container justify-content-center d-flex my-5 pointer"
            :class="{ 'border-image': !showImage }"
          >
            <div class="bk-team opacity-100 text-uppercase">
              <p class="text-strong">{{ $t("team.you") }}?</p>
            </div>
          </div>
        </div>
        <agile v-else :options="myOptions">
          <div
            v-for="(team, index) in teams"
            :key="index"
            class="slide position-relative"
          >
            <div
              class="box-team-container justify-content-center d-flex my-5 pointer"
              :class="{ 'border-image': !showImage }"
            >
              <LazyComponent>

                <img :src="'/team/' + team.imageProfile" alt="" />
              </LazyComponent>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <h5 @click="showMember(team)" class="color-primary">
                {{ team.name }}
              </h5>
              <i
                @click="closeMember()"
                v-if="checkedMobile"
                class="fa-solid fa-xmark pointer close-icon"
              ></i>
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
        <div class="info-member" v-if="checkedMobile && isMobile">
          <p class="">alias</p>
          <h6>{{ selected.alias }}</h6>
          <p class="">role</p>
          <h6>{{ selected.role }}</h6>
          <p class="">disorder</p>
          <h6>{{ selected.disorder }}</h6>
        </div>
      </div>

      <div class="gap"></div>
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
                class="fa-solid fa-xmark pointer mb-1"
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
                <div class="label">ROLE</div>
                <div class="title-team mt-3">{{ selected.role }}</div>
              </div>
              <div class="mb-5">
                <div class="label">DISORDER</div>
                <div class="title-team mt-3">{{ selected.disorder }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="team-img-card">
          <LazyComponent>
            <img :src="'/team/' + selected.imageProfile" alt="" />
          </LazyComponent>
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
    <Footer />
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import LazyComponent from "v-lazy-component";
import MarqueeText from "vue-marquee-text-component";

import Footer from "@/components/Footer.vue";
import bannerPortfolio from "@/components/bannerPortfolio.vue";
import formTeam from "@/components/formTeam.vue";
import ButtonNav from "@/components/ButtonNav.vue";
import teams from "@/team/teams.json";

export default {
  name: "team",
  mixins: [checkViewport],
  components: {
    LazyComponent,
    Footer,
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
        autoplaySpeed: 5000,
      },
    };
  },

  mounted() {
    const app = this;
    app.calculateTypewriter();
    /* setTimeout(function () {
    }, 300); */
  },
  methods: {
    calculateTypewriter() {
      const app = this;
      setTimeout(function () {
        app.endedTypewriter = true;
      }, 5000);
    },
    closeModal() {
      const app = this;
      console.log("click");
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
      console.log("click", app.checkedMobile);
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
