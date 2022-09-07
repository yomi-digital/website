import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./fonts/stylesheet.css";
import "./themes/style.scss";
import "./themes/resp.scss";
import "./themes/animation.scss";

import MarqueeText from "vue-marquee-text-component";
import VueProgressBar from "vue-progressbar";

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

Vue.component("marquee-text", MarqueeText);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
