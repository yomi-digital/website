<template>
  <div class="contacts bg-white">
    <ButtonNav color="black" />
    <div class="container-fluid full-h pd-container pt-5">
      <div class="row">
        <div class="col-12">
          <h5>
            Tell us more about your project and explore all the possibilities to
            bring it to the next level!
          </h5>
        </div>
      </div>
      <div class="row mt-5 pt-4">
        <div class="col-12 col-md-6">
          <input
            class="text-service-two"
            v-model="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="col-12 col-md-6">
          <input
            class="text-service-two"
            v-model="company"
            type="text"
            placeholder="Company"
          />
        </div>
        <div class="col-12 col-md-6">
          <input
            class="text-service-two"
            v-model="mobile"
            type="text"
            placeholder="Mobile"
          />
        </div>
        <div class="col-12 col-md-6">
          <input
            class="text-service-two"
            v-model="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div class="col-12">
          <textarea
            class="text-service-two"
            name=""
            id=""
            placeholder="Your Message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      <div class="row mt-5">
        <div :class="{'text-center' : isMobile}" class="col-12">
          <button class="submit-form text-service-two primary-color">
            submit
          </button>
        </div>
      </div>
      <div class="gap"></div>
      <div class="row">
        <div class="col-12">
          <h5>Get in touch!</h5>
        </div>
        <div class="col-12 mt-5">
          <p class="text-dark">
            Viale Legioni Romane <br />
            20147 MILANO <br /> <br>

            P.IVA: 12188060961
          </p>
        </div>
        <div class="col-12 mt-5 pt-4 mb-5">
          <a
            class="btn-social me-3"
            href="https://discord.gg/w54Jbd4Qhz"
            target="_blank"
            >DIS</a
          >
          <a
            class="btn-social me-3"
            href="https://www.instagram.com/yomi_web3/"
            target="_blank"
            >IG</a
          >
          <a
            class="btn-social me-3"
            href="https://twitter.com/YOMI_WEB3"
            target="_blank"
            >TW</a
          >
          <a
            class="btn-social"
            href="https://www.linkedin.com/company/yomidigitalhub/"
            target="_blank"
            >IN</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import ButtonNav from "@/components/ButtonNav.vue";
export default {
  name: "Contacts",
  mixins: [checkViewport],

  data() {
    return {
      name: "",
      company: "",
      mobile: "",
      email: "",
    };
  },
  components: {
    ButtonNav,
  },
};
</script>

<style></style>
