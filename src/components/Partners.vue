<template>
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
              <a href="https://protocol.ai/" target="_blank">
                <div
                  class="partnerLogo"
                  style="
                    background-image: url('/assets/img/partners/protocol.svg');
                  "
              /></a>
            </div>
          </div>
          <div class="col-6 col-lg-4 col-md-6 text-center">
            <div style="padding: 30px 0">
              <a href="https://niftyz.io/#/" target="_blank">
                <div
                  class="partnerLogo"
                  style="
                    background-image: url('/assets/img/partners/niftyz.svg');
                  "
              /></a>
            </div>
          </div>

          <div class="col-6 col-lg-4 col-md-6 text-center">
            <div style="padding: 30px 0">
              <a href="https://quadrans.io/" target="_blank">
                <div
                  class="partnerLogo"
                  style="
                    background-image: url('/assets/img/partners/quadrans.svg');
                  "
              /></a>
            </div>
          </div>
          <div class="col-6 col-lg-4 col-md-6 text-center">
            <div style="padding: 30px 0">
              <a href="https://digitaloracles.com/" target="_blank">
                <div
                  class="partnerLogo"
                  style="
                    background-image: url('/assets/img/partners/oracles.png');
                  "
              /></a>
            </div>
          </div>
          <div class="col-6 col-lg-4 col-md-6 text-center">
            <div style="padding: 30px 0">
              <a href="https://ibizatoken.com/" target="_blank">
                <div
                  class="partnerLogo"
                  style="
                    background-image: url('/assets/img/partners/ibztoken.svg');
                  "
              /></a>
            </div>
          </div>

          <div class="col-6 col-lg-4 col-md-6 text-center">
            <div style="padding: 30px 0">
              <a href="https://nftberlin.org/" target="_blank">
                <div
                  class="partnerLogo"
                  style="
                    background-image: url('/assets/img/partners/nftberlin.svg');
                  "
              /></a>
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
</template>
