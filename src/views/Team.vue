<template>
  <div>
    <ButtonNav />
    <!-- TEAM SECTION -->
    <div
      v-if="!showTeam"
      class="container-fluid full-h pd-container"
      style="position: relative"
    >
      <div class="row">
        <div class="col-12 col-md-12 col-lg-12">
          <div class="" :class="{ 'mt-3': isMobile }">
            <h2 class="enter-page">{{ $t("menu.team") }}</h2>
          </div>
        </div>
        <div class="col-12 col-lg-6 ms-2 mt-5">
          <p
            class="text-service-one"
            :class="{ 'mt-3': isMobile }"
          >
            {{ $t("team.text") }}
          </p>
        
        </div>
        <!-- <Transition enter-active-class="fade-in">
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
      <div class="box-character-img position-second-box-charger" style="width: 475px; ">
          <img class="imgTeam" src="../assets/images/team-img.png" alt="" />
        </div>
    </div>
    <MarqueeText class="title-project" :repeat="6" :duration="8" style="z-index:1">
        <h4>&nbsp;KNOW MORE ABOUT US&nbsp;</h4>
      </MarqueeText>
    <!-- TEAM SHOW -->
    <div v-if="!showTeam" class="container-fluid">
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

      <div class="mt-5">
        <div class="row">
          <div
            v-for="(member, index) in members"
            :key="index"
            class="col-12 col-md-3 col-lg-3"
            @click="toggleTeam(member)"
          >
            <div
              class="box-team-container justify-content-center d-flex my-5 pointer"
            ></div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <div class="cta">
          contact us to <br />
          join the team
        </div>
      </div>
      <div class="gap"></div>
      <div v-if="!isMobile" class="gap"></div>
      <modal name="team" class="team-card">
        <div class="d-flex align-items-end justify-content-between">
          <i @click="closeModal()" class="fa-solid fa-xmark pointer"></i>
          <div>
            <div class="ms-4 mb-2 label">MEMBER #{{ selected.id }}</div>
            <h5>#{{ selected.name }} //</h5>
          </div>
        </div>
        <div class="container-fluid mt-5">
          <div class="row justify-content-end">
            <div class="col-12 col-md-6 col-lg-6">
              <div class="mb-5">
                <div class="label">ALIAS</div>
                <div class="title-team mt-2">{{ selected.alias }}</div>
              </div>
              <div class="mb-5">
                <div class="label">ROLE</div>
                <div class="title-team mt-2">{{ selected.role }}</div>
              </div>
              <div class="mb-5">
                <div class="label">DISORDER</div>
                <div class="title-team mt-2">{{ selected.disorder }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="team-img-card">
          <img src="../assets/images/team1.png" alt="" />
        </div>
      </modal>
    </div>

    <Footer />
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";

import MarqueeText from "vue-marquee-text-component";

import Footer from "@/components/Footer.vue";
import ButtonNav from "@/components/ButtonNav.vue";

export default {
  name: "team",
  mixins: [checkViewport],
  components: {
    Footer,

    MarqueeText,
    ButtonNav,
  },
  data() {
    return {
      endedTypewriter: false,
      showTeam: false,
      scrollPosition: 0,
      changeSection: false,
      selected: {},
      members: [
        {
          id: "001",
          name: "Mario Rossi",
          alias: "Lorem Ipsum",
          role: "CO-FOUNDER",
          disorder: "Lore Ipsum",
        },
        {
          id: "002",
          name: "Giorgia Meloni",
          alias: "Lorem Ipsum",
          role: "CO-FOUNDER",
          disorder: "Lore Ipsum",
        },
        {
          id: "003",
          name: "Matteo Salvini",
          alias: "Lorem Ipsum",
          role: "CO-FOUNDER",
          disorder: "Lore Ipsum",
        },
        {
          id: "004",
          name: "Silvio Berluscah",
          alias: "Lorem Ipsum",
          role: "CO-FOUNDER",
          disorder: "Lore Ipsum",
        },
        {
          id: "005",
          name: "Giuseppe Conte",
          alias: "Lorem Ipsum",
          role: "CO-FOUNDER",
          disorder: "Lore Ipsum",
        },
        {
          id: "006",
          name: "Letta",
          alias: "Lorem Ipsum",
          role: "CO-FOUNDER",
          disorder: "Lore Ipsum",
        },
        {
          id: "007",
          name: "Mario Rossi",
          alias: "Lorem Ipsum",
          role: "CO-FOUNDER",
          disorder: "Lore Ipsum",
        },
        {
          id: "008",
          name: "Mario Rossi",
          alias: "Lorem Ipsum",
          role: "CO-FOUNDER",
          disorder: "Lore Ipsum",
        },
        {
          id: "009",
          name: "Mario Rossi",
          alias: "Lorem Ipsum",
          role: "CO-FOUNDER",
          disorder: "Lore Ipsum",
        },
        {
          id: "010",
          name: "Mario Rossi",
          alias: "Lorem Ipsum",
          role: "CO-FOUNDER",
          disorder: "Lore Ipsum",
        },
        {
          id: "011",
          name: "Mario Rossi",
          alias: "Lorem Ipsum",
          role: "CO-FOUNDER",
          disorder: "Lore Ipsum",
        },
        {
          id: "012",
          name: "Gioveppe Lupe",
          alias: "Lorem Ipsum",
          role: "CO-FOUNDER",
          disorder: "Lore Ipsum",
        },
      ],
    };
  },

  mounted() {
    this.calculateTypewriter();
  },
  methods: {
    calculateTypewriter() {
      const app = this;
      setTimeout(function () {
        app.endedTypewriter = true;
      }, 5000);
    },
    toggleTeam(member) {
      const app = this;
      app.selected = member;
      app.$modal.show("team");
      console.log(app.selected);
    },
    closeModal() {
      const app = this;
      app.$modal.hide("team");
    },
  },
};
</script>
