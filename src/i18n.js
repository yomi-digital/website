import en from "./locales/en.json";
import it from "./locales/it.json";
import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n);

export default new VueI18n({
  locale:
    localStorage.getItem("lang") !== null ? localStorage.getItem("lang") : "en",
  messages: {
    en: en,
    it: it,
  },
});
