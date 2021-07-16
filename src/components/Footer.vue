<template>
  <div id="Footer">
    <div class="mt-5 px-100 text-mobile-center">
      <div class="hideMobile">
        <hr />
      </div>
      <div class="m-100">
        <div class="row">
          <div class="col-12 col-lg-4 col-md-12">
            <a href="#Home" class="footerLink"
              >{{ $t("message.returnHome") }} </a
            ><br /><br /><br />
            <a href="" class="footerLink">{{ $t("message.politics") }} </a
            ><br />
            <a href="" class="footerLink">{{ $t("message.termsOfUse") }} </a>
          </div>
          <div class="col-12 col-lg-4 col-md-12">
            <a
              href="https://www.google.com/maps?q=Via+Ercolano,+62,+97100+Ragusa,+RG,+Italia"
              class="footerLink2"
              >VIA ERCOLANO 62, 97100 Ragusa </a
            ><br /><br /><br />
            <a href="mailto:hey@yomi.digital" class="footerLink2"
              >HEY@YOMI.DIGITAL</a
            ><br />
          </div>
          <div class="col-12 col-lg-4 col-md-12">
            <br /><br /><br />
            <div class="text-mobile-center" style="text-align: right">
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
