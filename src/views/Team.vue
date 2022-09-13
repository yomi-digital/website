<template>
  <div>
    <ButtonNav />
    <!-- TEAM SECTION -->
    <div
      v-if="!showTeam"
      class="container-fluid full-h"
      style="position: relative"
    >
      <div class="row">
        <div class="col-12 col-md-12 col-lg-11">
          <div class="py-3 px-5">
            <typewriter :type-interval="22" :replace-interval="200">
              <h2>
                The hard work and sheer determination of our team are at the
                root of our ability to push the boundaries of technology and
                provide digital products that cut through the noise.
              </h2>
            </typewriter>
          </div>
        </div>
        <Transition enter-active-class="fade-in">
          <div
            style="position: absolute; bottom: 50px; left: 0"
            @click="showTeam = !showTeam"
            v-if="endedTypewriter"
            class="big-link ms-5"
          >
            KNOW MORE
          </div>
        </Transition>
      </div>
      <div class="box-character-img">
        <img
          src="../assets/images/ch2.png"
          alt=""
          style="width: 700px; heigh 100;"
        />
      </div>
    </div>

    <!-- TEAM SHOW -->
    <div v-if="showTeam" class="container-fluid">
      <div class="my-5 text-start">
        <div
          @click="showTeam = !showTeam"
          class="d-flex align-items-center pointer"
        >
          <i
            class="fa-solid fa-arrow-left color-primary ms-3 me-3 heartbeat"
            style="font-size: 3rem"
          ></i>
        </div>
      </div>
      <div class="mt-5">
        <MarqueeText :repeat="10" reverse :duration="5">
          <h4>KNOW MORE ABOUT US</h4>
        </MarqueeText>
      </div>
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
            <p class="ms-4 label">MEMBER #{{ selected.id }}</p>
            <h5>#{{ selected.name }} //</h5>
          </div>
        </div>
        <div class="container-fluid mt-5">
          <div class="row justify-content-end">
            <div class="col-12 col-md-6 col-lg-6">
              <div class="mb-5">
                <p class="label">ALIAS</p>
                <p class="mt-2">{{ selected.alias }}</p>
              </div>
              <div class="mb-5">
                <p class="label">ROLE</p>
                <p class="mt-2">{{ selected.role }}</p>
              </div>
              <div class="mb-5">
                <p class="label">DISORDER</p>
                <p class="mt-2">{{ selected.disorder }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="team-img-card">
          <img src="../assets/images/team1.png" alt="" />
        </div>
      </modal>
    </div>

    <FooterExt />
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import Typewriter from "typewriter-vue";
import MarqueeText from "vue-marquee-text-component";

import FooterExt from "@/components/FooterExt.vue";
import ButtonNav from "@/components/ButtonNav.vue";

export default {
  name: "team",
  mixins: [checkViewport],
  components: {
    FooterExt,
    Typewriter,
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
