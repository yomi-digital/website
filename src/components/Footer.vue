<template>
  <div id="Footer">
    <div class="mt-5 px-100 text-mobile-center">
      <div class="hideMobile">
        <hr />
      </div>
      <div class="m-100">
        <div class="row">
          <div class="col-12 col-lg-4 col-md-12">
            <div class="text-left">
              <img style="height: 150px" src="/assets/img/yomi_square.png" />
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-12">
            <h2 class="footerTitle" style="color: black">NAVIGATE</h2>
            <a href="#who" class="footerLink">{{ $t("menu.chiSiamo") }} </a
            ><br />
            <a href="#services" class="footerLink">{{ $t("menu.services") }} </a
            ><br />
            <a href="#portfolio" class="footerLink"
              >{{ $t("menu.portfolio") }} </a
            ><br />
            <a href="#Home" class="footerLink"
              >{{ $t("message.returnHome") }} </a
            ><br /><br />
            <a href="" class="footerLink">{{ $t("message.politics") }} </a>
          </div>
          <div class="col-12 col-lg-4 col-md-12">
            <h2 class="footerTitle" style="color: black">CONTACT</h2>
            <a
              href="https://www.google.com/maps?q=Via+Ercolano,+62,+97100+Ragusa,+RG,+Italia"
              class="footerLink2"
              >VIA ERCOLANO 62, 97100 Ragusa
            </a>
            <a href="mailto:hey@yomi.digital" class="footerLink2"
              >HEY@YOMI.DIGITAL</a
            >
            <div class="text-mobile-center">
              <p class="footerLink2">P.IVA: 01652950880</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
