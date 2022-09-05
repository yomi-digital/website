<template>
  <div id="Home">
    <div class="container-home">
      <canvas
        class="scene"
        id="bubble"
        style="width: 100%; height: 100vh"
      ></canvas>
      <!-- CHI SIAMO -->
      <div></div>
      <div id="who" class="row">
        <div class="col-12 col-lg-7 col-md-6 bg-black pb-150">
          <div class="px-100">
            <div class="mt-200 px-80">
              <p>01</p>
              <h2>
                {{ $t("message.whoWeAre1") }} <br />{{
                  $t("message.whoWeAre2")
                }}
              </h2>
            </div>
            <div class="mt-4 px-80">
              <img src="/assets/img/arrow1.svg" />
            </div>
          </div>
          <div
            class="mt-5 scroll-container hideMobile"
            style="position: relative"
          >
            <img
              v-class-on-scroll="{ class: 'rotating', offset: -510 }"
              src="/assets/img/scrollDown.svg"
            />
            <div class="scroll-down-btn">
              <a href="#services">
                <span class="scroll-down-text highlight"> SCROLL DOWN </span>
              </a>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-lg-5 col-md-6 bg-black"
          style="padding-bottom: 150px"
        >
          <div class="mt-100 pr-100 p-mobile">
            <p>{{ $t("message.promote1") }}</p>
            <p>{{ $t("message.promote2") }}</p>
            <div class="mt-100">
              <em>{{ $t("message.ourHub") }}</em
              ><br /><br />
              <em>{{ $t("message.ourGoal") }}</em>
            </div>
          </div>
        </div>
      </div>
      <!-- END | CHI SIAMO -->

      <!-- BANNER SERVICE -->
      <div class="bg-black borderWhite">
        <div class="pt-3 pb-3">
          <marquee-text class="highlight">
            <span class="banner pulsation">
              {{ $t("message.service") }}>>>{{ $t("message.service") }}>>>{{
                $t("message.service")
              }}>>>{{ $t("message.service") }}>>>{{
                $t("message.service")
              }}>>>{{ $t("message.service") }}>>>
            </span>
          </marquee-text>
        </div>
      </div>
      <!-- END | BANNER SERVICE -->

      <!-- SERVICES -->
      <div id="services" class="bg-black" style="padding-bottom: 100px">
        <div class="row px-100">
          <div class="col-12 col-lg-6 col-md-6 p-5">
            <div class="mt-100">
              <h2 class="serviceText">
                {{ $t("message.serviceTitle1") }}
              </h2>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-md-6 p-5">
            <div class="mt-100">
              <p>{{ $t("message.serviceDescription1") }}</p>
            </div>
          </div>
          <div class="text-center">
            <img src="/assets/img/arrow1.svg" />
          </div>
        </div>
        <div class="row px-100 mt-5">
          <div class="col-12 col-lg-4 col-md-6 mt-mobile mb-5 mt-5">
            <div class="text-center">
              <img
                src="/assets/img/vector3.svg"
                alt="vector1"
                style="height: 65px"
              />
              <div class="mt-2" @click="toggle4 = !toggle4">
                <p class="serviceTitle highlight">
                  {{ $t("message.webDevTitle") }}
                </p>
              </div>
              <transition name="slide">
                <div v-show="toggle4">
                  <em>
                    {{ $t("message.webDevDescription") }}
                  </em>
                </div>
              </transition>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 mt-mobile mb-5 mt-5">
            <div class="text-center">
              <img
                src="/assets/img/vector1.svg"
                alt="vector1"
                style="height: 65px"
              />
              <div class="mt-2" @click="toggle = !toggle">
                <p class="serviceTitle highlight">BLOCKCHAIN</p>
              </div>
              <transition name="slide">
                <div v-show="toggle">
                  <em>
                    {{ $t("message.blockchain") }}
                  </em>
                </div>
              </transition>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 mt-mobile mb-5 mt-5">
            <div class="text-center">
              <img
                src="/assets/img/vector8.svg"
                alt="vector1"
                style="height: 65px"
              />
              <div class="mt-2" @click="toggle2 = !toggle2">
                <p class="serviceTitle highlight">
                  {{ $t("message.aiTitle") }}
                </p>
              </div>
              <transition name="slide">
                <div v-show="toggle2">
                  <em>
                    {{ $t("message.aiDescription") }}
                  </em>
                </div>
              </transition>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 mt-mobile mb-5 mt-5">
            <div class="text-center">
              <img
                src="/assets/img/vector2.svg"
                alt="vector1"
                style="height: 65px"
              />
              <div class="mt-2" @click="toggle8 = !toggle8">
                <p class="serviceTitle highlight">
                  {{ $t("message.researchTitle") }}
                </p>
              </div>
              <transition name="slide"
                ><div v-show="toggle8">
                  <em>
                    {{ $t("message.researchDescription") }}
                  </em>
                </div></transition
              >
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 mt-mobile mb-5 mt-5">
            <div class="text-center">
              <img
                src="/assets/img/vector7.svg"
                alt="vector1"
                style="height: 50px; margin-top: 15px"
              />
              <div class="mt-2" @click="toggle9 = !toggle9">
                <p class="serviceTitle highlight">
                  {{ $t("message.consultingTitle") }}
                </p>
              </div>
              <transition name="slide"
                ><div v-show="toggle9">
                  <em>
                    {{ $t("message.consultingDescription") }}
                  </em>
                </div></transition
              >
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 mt-mobile mb-5 mt-5">
            <div class="text-center">
              <img
                src="/assets/img/vector4.svg"
                alt="vector1"
                style="height: 65px"
              />
              <div class="mt-2" @click="toggle3 = !toggle3">
                <p class="serviceTitle highlight">
                  {{ $t("message.erpTitle") }}
                </p>
              </div>
              <transition name="slide">
                <div v-show="toggle3">
                  <em>
                    {{ $t("message.erpDescription") }}
                  </em>
                </div>
              </transition>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 mt-mobile mb-5 mt-5">
            <div class="text-center">
              <img
                src="/assets/img/vector6.svg"
                alt="vector1"
                style="height: 65px"
              />
              <div class="mt-2" @click="toggle5 = !toggle5">
                <p class="serviceTitle highlight">E-COMMERCE</p>
              </div>
              <transition name="slide">
                <div v-show="toggle5">
                  <em>
                    {{ $t("message.eCommerce") }}
                  </em>
                </div>
              </transition>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 mt-mobile mb-5 mt-5">
            <div class="text-center">
              <img
                src="/assets/img/vector5.svg"
                alt="vector1"
                style="height: 65px"
              />
              <div class="mt-2" @click="toggle6 = !toggle6">
                <p class="serviceTitle highlight">
                  {{ $t("message.websiteTitle") }}
                </p>
              </div>
              <transition name="slide">
                <div v-show="toggle6">
                  <em>
                    {{ $t("message.websiteDescription") }}
                  </em>
                </div>
              </transition>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 mt-mobile mb-5 mt-5">
            <div class="text-center">
              <img
                src="/assets/img/vector9.svg"
                alt="vector1"
                style="height: 45px; margin-top: 20px"
              />
              <div class="mt-2" @click="toggle7 = !toggle7">
                <p class="serviceTitle highlight">
                  {{ $t("message.mobileDevTitle") }}
                </p>
              </div>
              <transition name="slide">
                <div v-show="toggle7">
                  <em>
                    {{ $t("message.mobileDevContent") }}
                  </em>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <!-- END | SERVICES -->

      <!-- PORTFOLIO -->
      <div id="portfolio" class="bg-black">
        <div class="portfolio text-left">
          <h1 class="portfolioText">PORTFOLIO</h1>
        </div>
        <div class="px-100 mt-100 p-ipad-50">
          <div class="row">
            <div class="col-12 col-lg-7 col-md-9">
              <div class="p-mobile">
                <p>{{ $t("message.portfolioContent") }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="px-100 mt-80 p-ipad-50">
          <div class="row">
            <div class="col-12 col-lg-5 col-md-6">
              <div class="p-mobile">
                <!-- <div
                  @click="
                    fifthOpen = !fifthOpen;
                    rotateArrow('4');
                  "
                  class="mt-4 portfolioToggle"
                >
                  <div class="d-flex justify-content-between">
                    <p>UMI</p>
                    <img
                      id="rotateArrow4"
                      class="rightArrow"
                      src="/assets/img/Arrow4.svg"
                      alt="arrow"
                    />
                  </div>
                  <transition name="slide">
                    <div class="child" v-show="fifthOpen">
                      <p class="portofolioContent">
                        {{ $t("message.umiContent") }}
                        <a
                          class="linkUmi"
                          href="https://nft.stargraph.it/"
                          target="_blank"
                          >Stargraph</a
                        >,
                        <a
                          class="linkUmi"
                          href="https://www.impssbl.com/"
                          target="_blank"
                          >Impssbl</a
                        >,
                        <a
                          class="linkUmi"
                          href="https://hexarchia.com/"
                          target="_blank"
                          >Hexarchia</a
                        >
                        {{ $t("message.umiContent2") }}
                      </p>
                    </div>
                  </transition>
                </div>
                <div
                  @click="
                    firstOpen = !firstOpen;
                    rotateArrow('1');
                  "
                  class="mt-4 portfolioToggle"
                >
                  <div class="d-flex justify-content-between">
                    <p>IMPSSBL</p>
                    <img
                      id="rotateArrow1"
                      class="rightArrow"
                      src="/assets/img/Arrow4.svg"
                      alt="arrow"
                    />
                  </div>
                  <transition name="slide">
                    <div class="child" v-show="firstOpen">
                      <p class="portofolioContent">
                        {{ $t("message.impssbl") }}
                      </p>
                    </div>
                  </transition>
                </div>
                <div
                  @click="
                    fourthOpen = !fourthOpen;
                    rotateArrow('5');
                  "
                  class="mt-4 portfolioToggle"
                >
                  <div class="d-flex justify-content-between">
                    <p>THE HUB</p>
                    <img
                      id="rotateArrow5"
                      class="rightArrow"
                      src="/assets/img/Arrow4.svg"
                      alt="arrow"
                    />
                  </div>
                  <transition name="slide">
                    <div class="child" v-show="fourthOpen">
                      <p class="portofolioContent">
                        {{ $t("message.theHubContent") }}
                      </p>
                    </div>
                  </transition>
                </div>
                <div
                  @click="
                    secondOpen = !secondOpen;
                    rotateArrow('2');
                  "
                  class="mt-4 portfolioToggle"
                >
                  <div class="d-flex justify-content-between">
                    <p>QUADRANS</p>
                    <img
                      id="rotateArrow2"
                      class="rightArrow"
                      src="/assets/img/Arrow4.svg"
                      alt="arrow"
                    />
                  </div>
                  <transition name="slide">
                    <div class="child" v-show="secondOpen">
                      <p class="portofolioContent">
                        {{ $t("message.quadransContent") }}
                      </p>
                    </div>
                  </transition>
                </div>
                <div
                  @click="
                    thirdOpen = !thirdOpen;
                    rotateArrow('3');
                  "
                  class="mt-4 portfolioToggle"
                >
                  <div class="d-flex justify-content-between">
                    <p>DIGITAL ORACLES</p>
                    <img
                      id="rotateArrow3"
                      class="rightArrow"
                      src="/assets/img/Arrow4.svg"
                      alt="arrow"
                    />
                  </div>
                  <transition name="slide">
                    <div class="child" v-show="thirdOpen">
                      <p class="portofolioContent">
                        {{ $t("message.digitalOraclesContent") }}
                      </p>
                    </div>
                  </transition>
                </div>

                <div class="mt-5">
                  <div>
                    <span class="cta">
                      {{ $t("message.cta") }}
                    </span>
                  </div>
                  <div class="mt-5">
                    <a class="myBtn cta m-0" href="">
                      DOWNLOAD PDF
                    </a>
                  </div>
                </div> -->
                <ListPortfolio />
              </div>
            </div>
            <div class="col-12 col-lg-7 col-md-6 text-center mt-5">
              <img
                class="girandola hideMobile"
                src="/assets/img/girandola3.gif"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- END | PORTFOLIO -->

      <div class="divider bg-black"></div>

      <!-- BANNER TEAM -->
      <div class="borderBlack">
        <div class="pt-3 pb-3">
          <marquee-text class="highlight">
            <span class="banner2 pulsation2">
              {{ $t("message.team") }}>>>{{ $t("message.team") }}>>>{{
                $t("message.team")
              }}>>>{{ $t("message.team") }}>>>{{ $t("message.team") }}>>>{{
                $t("message.team")
              }}>>>{{ $t("message.team") }}>>>{{ $t("message.team") }}>>>
            </span>
          </marquee-text>
        </div>
      </div>
      <!-- END | BANNER TEAM -->

      <!-- TEAM -->
      <Team />

      <!-- END | TEAM -->

      <div class="divider bg-black"></div>

      <!-- PARTNERS -->
      <Partners />
      <!-- END | PARTNERS -->
    </div>
  </div>
</template>

<script>
import ListPortfolio from "@/components/ListPortfolio.vue";
import Team from "@/components/Team.vue";
import Partners from "@/components/Partners.vue";

export default {
  components: {
    ListPortfolio,
    Team,
    Partners,
  },
  data() {
    return {
      toggle: false,
      toggle2: false,
      toggle3: false,
      toggle4: false,
      toggle5: false,
      toggle6: false,
      toggle7: false,
      toggle8: false,
      toggle9: false,
      firstOpen: false,
      secondOpen: false,
      thirdOpen: false,
      fourthOpen: false,
      fifthOpen: false,
    };
  },

  methods: {
    rotateArrow: function (elId) {
      document.getElementById("rotateArrow" + elId).classList.toggle("rotated");
    },
    pulsation() {
      document.getElementById("title-pulse").classList.add("pulsation");
    },
  },
  name: "Home",
};
</script>
