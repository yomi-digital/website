<template>
  <div id="app">
    <router-view />
    <CustomCursor />
  </div>
</template>
<script>
import CustomCursor from "@/components/CustomCursor.vue";
export default {
  components: {
    CustomCursor,
  },
  mounted() {
    const scriptIubenda = document.createElement("script");
    scriptIubenda.type = "text/javascript";
    if (this.$i18n.locale == "en") {
      scriptIubenda.innerHTML = `
      var _iub = _iub || [];
      _iub.csConfiguration = {
        askConsentAtCookiePolicyUpdate: true,
        cookiePolicyInOtherWindow: true,
        countryDetection: true,
        enableLgpd: true,
        enableUspr: true,
        floatingPreferencesButtonCaptionColor: "#000000",
        floatingPreferencesButtonColor: "#84FF9D",
        floatingPreferencesButtonDisplay: "anchored-bottom-right",
        lang: "en",
        lgpdAppliesGlobally: false,
        perPurposeConsent: true,
        siteId: 3014160,
        cookiePolicyId: 61064742,
        banner: {
          acceptButtonCaptionColor: "#FFFFFF",
          acceptButtonColor: "#000000",
          acceptButtonDisplay: true,
          backgroundColor: "#84FF9D",
          backgroundOverlay: true,
          closeButtonDisplay: false,
          customizeButtonCaptionColor: "#000000",
          customizeButtonColor: "#FFFFFF",
          customizeButtonDisplay: true,
          explicitWithdrawal: true,
          fontSizeBody: "16px",
          listPurposes: true,
          logo: null,
          linksColor: "#1B1B1B",
          position: "float-top-center",
          prependOnBody: true,
          rejectButtonCaptionColor: "#000000",
          rejectButtonColor: "#FFFFFF",
          rejectButtonDisplay: true,
          showPurposesToggles: true,
          textColor: "#000000",
        },
      };
      `;
    } else {
      scriptIubenda.innerHTML = `
      var _iub = _iub || [];
      _iub.csConfiguration = {
        askConsentAtCookiePolicyUpdate: true,
        cookiePolicyInOtherWindow: true,
        countryDetection: true,
        enableLgpd: true,
        enableUspr: true,
        floatingPreferencesButtonCaptionColor: "#000000",
        floatingPreferencesButtonColor: "#84FF9D",
        floatingPreferencesButtonDisplay: "anchored-bottom-right",
        lang: "it",
        lgpdAppliesGlobally: false,
        perPurposeConsent: true,
        siteId: 3014160,
        cookiePolicyId: 81694600,
        banner: {
          acceptButtonCaptionColor: "#FFFFFF",
          acceptButtonColor: "#000000",
          acceptButtonDisplay: true,
          backgroundColor: "#84FF9D",
          backgroundOverlay: true,
          closeButtonDisplay: false,
          customizeButtonCaptionColor: "#000000",
          customizeButtonColor: "#FFFFFF",
          customizeButtonDisplay: true,
          explicitWithdrawal: true,
          fontSizeBody: "16px",
          listPurposes: true,
          logo: null,
          linksColor: "#1B1B1B",
          position: "float-top-center",
          prependOnBody: true,
          rejectButtonCaptionColor: "#000000",
          rejectButtonColor: "#FFFFFF",
          rejectButtonDisplay: true,
          showPurposesToggles: true,
          textColor: "#000000",
        },
      }`;
    }
    document.head.append(scriptIubenda);
    const scriptIubenda2 = document.createElement("script");
    scriptIubenda2.type = "text/javascript";
    scriptIubenda2.src = "//cdn.iubenda.com/cs/gpp/stub.js";
    document.head.append(scriptIubenda2);
    const scriptIubenda3 = document.createElement("script");
    scriptIubenda3.type = "text/javascript";
    scriptIubenda3.src = "//cdn.iubenda.com/cs/iubenda_cs.js";
    scriptIubenda3.charset = "UTF-8";
    document.head.append(scriptIubenda3);
  },
};
</script>