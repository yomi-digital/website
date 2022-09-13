<template>
  <div class="pt-5">
    <ButtonNav />
    <div class="container-fluid p-0">
      <div class="mt-5 mb-5">
        <MarqueeText :repeat="10" :duration="5">
          <h4>OUR SERVICES&nbsp;</h4>
        </MarqueeText>
      </div>
      <div class="mt-5 mb-5">
        <h6 class="text-center">
          DISCOVER OUR SERVICES AND START A PROJECT WITH US
        </h6>
      </div>
      <div class="mb-5">
        <div>
          <div
            class="d-flex justify-content-center"
            :class="{ 'pointer-link': service !== 'web3' }"
          >
            <h1 @click="service = 'web3'" class="text-center m-0">WEB3</h1>
            <div
              v-show="service === 'web3'"
              class="toggler-service pointer"
              @click="resetService()"
            >
              <img src="../assets/images/close.svg" alt="" />
            </div>
          </div>
          <Transition name="slide">
            <div
              v-if="service === 'web3'"
              class="mt-5 row justify-content-center"
            >
              <div class="col-12 col-md-8 col-lg-7">
                <p class="text-service-one text-center">
                  We provide efficient tools by building decentralized
                  ecosystems based on blockchain technology.
                </p>
                <p class="text-service-two text-center mt-5">
                  Smart Contracts, Minting Button, Web3/Web2 Integration,
                  Generative Layering Script, UMI - NFT, Minting Interface ,
                  Consulting, Technical, Documentation, API Integration, FIAT
                  Payments, Security Audit, Notarization System, Tokenization
                  System
                </p>
              </div>
            </div>
          </Transition>
        </div>
        <div>
          <div
            class="d-flex justify-content-center"
            :class="{ 'pointer-link': service !== 'web2' }"
          >
            <h1 @click="service = 'web2'" class="text-center m-0">WEB2</h1>
            <div
              v-show="service === 'web2'"
              class="toggler-service pointer"
              @click="resetService()"
            >
              <img src="../assets/images/close.svg" alt="" />
            </div>
          </div>
          <Transition name="slide">
            <div
              v-if="service === 'web2'"
              class="mt-5 row justify-content-center"
            >
              <div class="col-12 col-md-8 col-lg-7">
                <p class="text-service-one text-center">
                  We provide efficient tools by building decentralized
                  ecosystems based on blockchain technology.
                </p>
                <p class="text-service-two text-center mt-5">
                  Smart Contracts, Minting Button, Web3/Web2 Integration,
                  Generative Layering Script, UMI - NFT, Minting Interface ,
                  Consulting, Technical, Documentation, API Integration, FIAT
                  Payments, Security Audit, Notarization System, Tokenization
                  System
                </p>
              </div>
            </div>
          </Transition>
        </div>
        <div>
          <div
            class="d-flex justify-content-center"
            :class="{ 'pointer-link': service !== 'consulting' }"
          >
            <h1 @click="service = 'consulting'" class="text-center m-0">
              CONSULTING
            </h1>
            <div
              v-show="service === 'consulting'"
              class="toggler-service pointer"
              @click="resetService()"
            >
              <img src="../assets/images/close.svg" alt="" />
            </div>
          </div>
          <Transition name="slide">
            <div
              v-if="service === 'consulting'"
              class="mt-5 row justify-content-center"
            >
              <div class="col-12 col-md-8 col-lg-7">
                <p class="text-service-one text-center">
                  We provide efficient tools by building decentralized
                  ecosystems based on blockchain technology.
                </p>
                <p class="text-service-two text-center mt-5">
                  Smart Contracts, Minting Button, Web3/Web2 Integration,
                  Generative Layering Script, UMI - NFT, Minting Interface ,
                  Consulting, Technical, Documentation, API Integration, FIAT
                  Payments, Security Audit, Notarization System, Tokenization
                  System
                </p>
              </div>
            </div>
          </Transition>
        </div>
        <div>
          <div
            class="d-flex justify-content-center"
            :class="{ 'pointer-link': service !== 'design' }"
          >
            <h1 @click="service = 'design'" class="text-center m-0">DESIGN</h1>
            <div
              v-show="service === 'design'"
              class="toggler-service pointer"
              @click="resetService()"
            >
              <img src="../assets/images/close.svg" alt="" />
            </div>
          </div>
          <Transition name="slide">
            <div
              v-if="service === 'design'"
              class="mt-5 row justify-content-center"
            >
              <div class="col-12 col-md-8 col-lg-7">
                <p class="text-service-one text-center">
                  We provide efficient tools by building decentralized
                  ecosystems based on blockchain technology.
                </p>
                <p class="text-service-two text-center mt-5">
                  Smart Contracts, Minting Button, Web3/Web2 Integration,
                  Generative Layering Script, UMI - NFT, Minting Interface ,
                  Consulting, Technical, Documentation, API Integration, FIAT
                  Payments, Security Audit, Notarization System, Tokenization
                  System
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <div class="gap"></div>
      <div v-if="isDesktop" class="gap"></div>
    </div>
    <FooterExt />
  </div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";
import checkViewport from "@/mixins/checkViewport";

import FooterExt from "@/components/FooterExt.vue";
import ButtonNav from "@/components/ButtonNav.vue";

export default {
  name: "about",
  mixins: [checkViewport],
  components: {
    FooterExt,
    MarqueeText,
    ButtonNav,
  },
  data() {
    return {
      service: "",
    };
  },
  methods: {
    resetService() {
      const app = this;
      app.service = "unset";
      console.log("service is:", app.service);
    },
  },
};
</script>
