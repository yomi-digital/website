import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vmodal from "vue-js-modal";
import i18n from "./i18n";


const lang = localStorage.getItem("lang") || "en";
document.documentElement.lang = lang;

import "./fonts/stylesheet.css";
import "./themes/style.scss";
import "./themes/resp.scss";
import "./themes/animation.scss";

import MarqueeText from "vue-marquee-text-component";
import VueProgressBar from "vue-progressbar";
import VueAgile from "vue-agile";
import './registerServiceWorker'

import CursorFx from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';

Vue.use(
  CursorFx
);

const options = {
  color: "#ffffff",
  failedColor: "#874b4b",
  thickness: "13px",
  transition: {
    speed: "0.4s",
    opacity: "0.1s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

Vue.use(VueProgressBar, options);
Vue.use(VueAgile);
Vue.component("marquee-text", MarqueeText);

Vue.use(require("vue-moment"));
Vue.config.productionTip = false;
Vue.use(vmodal);

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
