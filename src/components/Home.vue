<template>
  <div id="Home">
    <div class="container-home">
      <!-- CHI SIAMO -->
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
            style="position: relative;"
          >
            <img
              v-class-on-scroll="{ class: 'rotating', offset: -510 }"
              src="/assets/img/scrollDown.svg"
            />
            <div class="scroll-down-btn">
              <a href="#services">
                <span class="scroll-down-text highlight">
                  SCROLL DOWN
                </span>
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
                style="height: 65px;"
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
                style="height: 65px;"
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
                style="height: 65px;"
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
                src="/assets/img/vector4.svg"
                alt="vector1"
                style="height: 65px;"
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
                style="height: 65px;"
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
                style="height: 65px;"
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
                style="height: 45px; margin-top:20px"
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
          <div class="col-12 col-lg-4 col-md-6 mt-mobile mb-5 mt-5">
            <div class="text-center">
              <img
                src="/assets/img/vector2.svg"
                alt="vector1"
                style="height: 65px;"
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
                <div
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
                    fourthOpen = !fourthOpen;
                    rotateArrow('5');
                  "
                  class="mt-4 portfolioToggle"
                >
                  <div class="d-flex justify-content-between">
                    <p>NFT STUDIO</p>
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
                        {{ $t("message.nftContent") }}
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
                <div
                  @click="
                    firstOpen = !firstOpen;
                    rotateArrow('1');
                  "
                  class="mt-4 portfolioToggle"
                >
                  <div class="d-flex justify-content-between">
                    <p>THE HUB</p>
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
                        {{ $t("message.theHubContent") }}
                      </p>
                    </div>
                  </transition>
                </div>

                <!-- <div class="mt-5">
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
              </div>
            </div>
            <div class="col-12 col-lg-7 col-md-6 text-center mt-5 ">
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
      <div id="team">
        <div class="row">
          <div class="col-12 col-lg-6 col-md-8">
            <div class="m-100 px-100 p-mobile p-ipad-50">
              <p class="blackText">{{ $t("message.team1") }}</p>
              <p class="blackText">{{ $t("message.team2") }}</p>
            </div>
          </div>
          <div class="mb-5">
            <!-- BANNER SERVICE -->
            <marquee-text>
              <img class="wave" src="/assets/img/team.svg" />
            </marquee-text>
            <!-- END | BANNER SERVICE -->
          </div>
        </div>
        <div class="row">
          <!-- SINGLE MEMBER -->
          <div
            class="col-12 col-lg-3 col-md-4 b-top b-bottom b-right member-box"
          >
            <a
              href="https://www.linkedin.com/in/livio-lombardo/"
              target="_blank"
            >
              <div class="text-center p-team">
                <p class="blackText teamText">
                  LIVIO LOMBARDO<br /><span class="blackText teamTextD">
                    Finance & Administration <br class="myBR" />
                    Co-founder</span
                  >
                </p>
              </div>
            </a>
          </div>
          <!-- END | SINGLE MEMBER -->

          <!-- SINGLE MEMBER -->
          <div
            class="col-12 col-lg-3 col-md-4 b-top b-bottom b-right member-box"
          >
            <a
              href="https://www.linkedin.com/in/roberto-diano-499031168/"
              target="_blank"
            >
              <div class="text-center p-team">
                <p class="blackText teamText">
                  Roberto Diano<br />
                  <span class="blackText teamTextD">
                    Sales <br />
                    Co-founder
                  </span>
                </p>
              </div>
            </a>
          </div>
          <!-- END | SINGLE MEMBER -->

          <!-- SINGLE MEMBER -->
          <div
            class="col-12 col-lg-3 col-md-4 b-top b-bottom b-right member-box"
          >
            <a
              href="https://www.linkedin.com/in/sebastiano-cataudo-1b404165/"
              target="_blank"
            >
              <div class="text-center p-team">
                <p class="blackText teamText">
                  Sebastiano Cataudo<br />
                  <span class="blackText teamTextD">
                    Blockchain Guru <br />Co-founder
                  </span>
                </p>
              </div>
            </a>
          </div>
          <!-- END | SINGLE MEMBER -->

          <!-- SINGLE MEMBER -->
          <div class="col-12 col-lg-3 col-md-4 b-bottom b-top member-box">
            <a
              href="https://www.linkedin.com/in/stefano-raniolo/"
              target="_blank"
            >
              <div class="text-center p-team">
                <p class="blackText teamText">
                  Stefano Raniolo<br /><span class="blackText teamTextD"
                    >CTO <br />CO-FOUNDER
                  </span>
                </p>
              </div>
            </a>
          </div>
          <!-- END | SINGLE MEMBER -->

          <!-- SINGLE MEMBER -->
          <div class="col-12 col-lg-3 col-md-4 b-bottom b-right member-box">
            <a
              href="https://www.linkedin.com/in/giorgia-guidetti-271a52194/"
              target="_blank"
            >
              <div class="text-center p-team">
                <p class="blackText teamText">
                  Giorgia Guidetti <br />
                  <span class="blackText teamTextD">Marketing Specialist</span>
                </p>
              </div>
            </a>
          </div>
          <!-- END | SINGLE MEMBER -->

          <!-- SINGLE MEMBER -->
          <div class="col-12 col-lg-3 col-md-4 b-bottom b-right member-box">
            <a
              href="https://www.linkedin.com/in/lulu-battelli/"
              target="_blank"
            >
              <div class="text-center p-team">
                <p class="blackText teamText">
                  Lucrezia Battelli<br />
                  <span class="blackText teamTextD">Frontend Developer</span>
                </p>
              </div>
            </a>
          </div>
          <!-- END | SINGLE MEMBER -->

          <!-- SINGLE MEMBER -->
          <div class="col-12 col-lg-3 col-md-4 b-bottom b-right member-box">
            <div class="text-center p-team">
              <p class="blackText teamText">
                Simone Calabrese<br />
                <span class="blackText teamTextD">Full-stack Developer</span>
              </p>
            </div>
          </div>
          <!-- END | SINGLE MEMBER -->

          <!-- SINGLE MEMBER -->
          <div class="col-12 col-lg-3 col-md-4 b-bottom b-right member-box">
            <a
              href="https://www.linkedin.com/in/giuseppe-napoli-591614218/"
              target="_blanl"
            >
              <div class="text-center p-team">
                <p class="blackText teamText">
                  Giuseppe Napoli<br />
                  <span class="blackText teamTextD">Frontend Developer</span>
                </p>
              </div>
            </a>
          </div>
          <!-- END | SINGLE MEMBER -->

          <!-- SINGLE MEMBER -->
          <div class="col-12 col-lg-3 col-md-4 b-bottom b-right member-box">
            <a href="https://twitter.com/hybridcode_" target="_blank">
              <div class="text-center p-team">
                <p class="blackText teamText">
                  Sergio Occhipinti<br />
                  <span class="blackText teamTextD">Art Director</span>
                </p>
              </div>
            </a>
          </div>
          <!-- END | SINGLE MEMBER -->

          <!-- SINGLE MEMBER -->
          <div class="col-12 col-lg-3 col-md-4 b-bottom b-right member-box">
            <a href="https://www.linkedin.com/in/marco-moshi/" target="_blank">
              <div class="text-center p-team">
                <p class="blackText teamText">
                  Marco Moshi<br /><span class="blackText teamTextD"
                    >Blockchain Advisor</span
                  >
                </p>
              </div>
            </a>
          </div>
          <!-- END | SINGLE MEMBER -->

          <!-- SINGLE MEMBER -->
          <div class="col-12 col-lg-3 col-md-4 b-bottom b-right member-box">
            <div class="text-center p-team">
              <p class="blackText teamText">
                @inactive<br />
                <span class="blackText teamTextD">Senior Anon Developer</span>
              </p>
            </div>
          </div>
          <!-- END | SINGLE MEMBER -->

          <!-- SINGLE MEMBER -->
          <div class="col-12 col-lg-3 col-md-4 b-bottom b-right member-box">
            <a href="mailto:hey@yomi.digital">
              <div class="text-center p-team">
                <p class="blackText teamText">Maybe you?</p>
              </div>
            </a>
          </div>
          <!-- END | SINGLE MEMBER -->
        </div>
      </div>

      <!-- END | TEAM -->

      <div class="divider bg-black"></div>

      <!-- PARTNERS -->
      <div class="bg-black px-100">
        <div class="text-left px-100 p-mobile p-ipad-50">
          <h1 class="partnerText">PARTNERS</h1>
          <div class="mt-5">
            <p>{{ $t("message.partnerContent") }}</p>
          </div>
          <div class="mt-5 mb-5">
            <div class="row">
              <div class="col-6 col-lg-4 col-md-6 text-center">
                <div style="padding: 30px 0">
                  <a href="https://polygon.technology/" target="_blank">
                    <div
                      class="partnerLogo"
                      style="background-image: url('/assets/img/partners/polygon-logo.png')"
                  /></a>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-md-6 text-center">
                <div style="padding: 30px 0">
                  <a href="https://quadrans.io/" target="_blank">
                    <div
                      class="partnerLogo"
                      style="background-image: url('/assets/img/partners/quadrans.svg')"
                  /></a>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-md-6 text-center">
                <div style="padding: 30px 0">
                  <a href="https://digitaloracles.com/" target="_blank">
                    <div
                      class="partnerLogo"
                      style="background-image: url('/assets/img/partners/oracles.png')"
                  /></a>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-md-6 text-center">
                <div style="padding: 30px 0">
                  <a href="https://nftstud.io/" target="_blank">
                    <div
                      class="partnerLogo"
                      style="background-image: url('/assets/img/partners/nftstudio.svg')"
                  /></a>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-md-6 text-center">
                <div style="padding: 30px 0">
                  <a href="https://www.impssbl.com/" target="_blank">
                    <div
                      class="partnerLogo"
                      style="background-image: url('/assets/img/partners/impssbl.png')"
                    />
                  </a>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-md-6 text-center">
                <div style="padding: 30px 0">
                  <a href="https://www.copystudio.it/" target="_blank">
                    <div
                      class="partnerLogo"
                      style="background-image: url('/assets/img/partners/copystudio.png')"
                    />
                  </a>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-md-6 text-center">
                <div style="padding: 30px 0">
                  <a href="https://labchain.it/" target="_blank">
                    <div
                      class="partnerLogo"
                      style="background-image: url('/assets/img/partners/labchain.svg')"
                    />
                  </a>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-md-6 text-center">
                <div style="padding: 30px 0">
                  <a href="https://labchain.it/" target="_blank">
                    <div
                      class="partnerLogo"
                      style="background-image: url('/assets/img/partners/floc.svg')"
                    />
                  </a>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-md-6 text-center">
                <div style="padding: 30px 0">
                  <a href="https://www.stargraph.it/" target="_blank">
                    <div
                      class="partnerLogo"
                      style="background-image: url('/assets/img/partners/stargraph.png')"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lineWhite"></div>
        <div class="mt-100">
          <div id="contact" class="row">
            <div class="col-12 col-lg-7 col-md-12">
              <div class="px-100 p-mobile p-ipad-50">
                <h1 class="partnerText">{{ $t("message.joinTeam") }}</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-10 col-md-10">
            <div
              class="m-100 px-100 d-flex justify-content-between p-mobile p-ipad-50"
            >
              <div>
                <p class="contactLabel m-0">E-MAIL</p>
                <a class="contactContent" href="mailto:hey@yomi.digital"
                  >hey@yomi.digital</a
                >
              </div>
              <!-- <div>
                <p class="contactLabel m-0">TELEFONO</p>
                <a class="contactContent" href="tel:+393331231234"
                  >+39 333 12 31 234</a
                >
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <!-- END | PARTNERS -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
    rotateArrow: function(elId) {
      document.getElementById("rotateArrow" + elId).classList.toggle("rotated");
    },
    pulsation() {
      document.getElementById("title-pulse").classList.add("pulsation");
    },
  },
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
