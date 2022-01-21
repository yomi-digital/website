<template>
  <div id="Footer">
    <div class="mt-5 px-100 text-mobile-center">
      <div class="hideMobile">
        <hr />
      </div>
      <div class="m-100">
        <div class="row p-ipad-50">
          <div class="col-12 col-lg-4 col-md-4">
            <div class="mb-5">
              <img style="height: 120px" src="/assets/img/yomi_square.svg" />
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-4">
            <h2 class="footerTitle">MENU</h2>
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
          <div class="col-12 col-lg-4 col-md-4">
            <h2 class="footerTitle mt-mobile-30">{{ $t("menu.contacts") }}</h2>
            <a href="mailto:hey@yomi.digital" class="footerLink"
              >HEY@YOMI.DIGITAL</a
            ><br /><br />
            <a
              href="https://goo.gl/maps/Du12UPN75cFw7TXS9"
              class="footerLink"
              >VIALE LEGIONI ROMANE 7,<br />
              20147 MILANO
            </a>
            <div class="text-mobile-center">
              <p class="blackText footerLink">P.IVA: 12188060961</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="p-ipad-50">
        <p class="copyright">
          &copy; Copyright {{ new Date().getFullYear() }}
          © All Rights Reserved – YOMI.
        </p>
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
