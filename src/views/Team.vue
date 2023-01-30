<template>
  <div>
    <ButtonNav />
    <!-- TEAM SECTION -->
    <div class="container-fluid full-h pd-container" style="position: relative">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-12">
          <div class="" :class="{ 'mt-3': isMobile }">
            <h2 class="enter-page">{{ $t("menu.team") }}</h2>
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
            @click="showTeam = !showTeam"
            v-if="endedTypewriter"
            class="big-link ms-5"
          >
            KNOW MORE
          </div>
        </Transition> -->
      </div>
      <div
        class="box-character-img position-second-box-charger"
        style="width: 475px"
      >
        <img
          class="imgTeam fade-in-max"
          src="../assets/images/team-img.png"
          alt=""
        />
      </div>
    </div>
    <MarqueeText
      class="title-project"
      :repeat="6"
      :duration="8"
      style="z-index: 1"
    >
      <h4>&nbsp;KNOW MORE ABOUT US&nbsp;</h4>
    </MarqueeText>
    <!-- TEAM SHOW -->
    <div v-show="teams != ''" class="container-fluid">
      <!-- <div class="my-5 text-start">
        <div
          @click="showTeam = !showTeam"
          class="d-flex align-items-center pointer"
        >
          <i
            class="fa-solid fa-arrow-left color-primary ms-3 me-3 heartbeat"
            style="font-size: 3rem"
          ></i>
        </div>
      </div> -->

      <div class="mt-5 ">
        <div class="row">
          <div
            v-for="(team, index) in teams"
            :key="index"
            class="col-12 col-md-3 col-lg-3"
          >
            <div
              @click="toggleTeam(team)"
              class="box-team-container justify-content-center d-flex my-5 pointer"
              :class="{'border-image' : !showImage}"
            >
              <div class="bk-team"><p>MORE ABOUT</p></div>
              <img :src="'/team/' + team.imageProfile" alt="" />
            </div>
          </div>
          <div
            class="box-team-container justify-content-center d-flex my-5 pointer"
            :class="{'border-image' : !showImage}"
          >
            <div class="bk-team opacity-100 text-uppercase"><p>maybe you?</p></div>
          </div>
        </div>
      </div>
      <div class="mt-5 text-center">
        <a href="#" class="cta underline">
          contact us to
          join the team
        </a>
      </div>
      <div class="gap"></div>
      <div v-if="!isMobile" class="gap"></div>
      <modal name="team" class="team-card">
        <div class="pb-4">
          <div>
            <div class=" mb-3 label">MEMBER #{{ selected.id }}</div>
            <div class="d-flex justify-content-between align-items-center align-content-center w-100">
              <h5 class="mb-0">#{{ selected.name }} //</h5>
              <i @click="closeModal()" class="fa-solid fa-xmark pointer mb-1"></i>
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
          <img :src="'/team/' + selected.imageProfile" alt="" />
        </div>
      </modal>
    </div>
    <bannerPortfolio />
    <Footer />
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";

import MarqueeText from "vue-marquee-text-component";

import Footer from "@/components/Footer.vue";
import bannerPortfolio from "@/components/bannerPortfolio.vue";
import ButtonNav from "@/components/ButtonNav.vue";
import teams from "@/team/teams.json";

export default {
  name: "team",
  mixins: [checkViewport],
  components: {
    Footer,
    MarqueeText,
    ButtonNav,
    bannerPortfolio
  },
  data() {
    return {
      endedTypewriter: false,
      showTeam: false,
      scrollPosition: 0,
      changeSection: false,
      showImage: true,
      selected: {},
      teams: "",
    };
  },

  mounted() {
    const app = this;
    app.calculateTypewriter();
    app.teams = teams;
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
      console.log('click');
      document.querySelector('.vm--modal').classList.add('slide-out-right');
      setTimeout(function () {
        app.$modal.hide("team");
      }, 800);
      app.showImage = true;
   
    },
    toggleTeam(team) {
      const app = this;
      app.selected = team;
      app.showImage = false;
      app.$modal.show("team");
     
    },

  },
};
</script>
<style scoped></style>
