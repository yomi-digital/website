<template>
  <div class="contacts bg-white">
    <ButtonNav color="black" />
    <div class="container-fluid full-h pd-container pt-5">
      <div class="row">
        <div class="col-12">
          <h5>
            {{$t('form.contactTitle')}}
          </h5>
        </div>
      </div>
      <div class="row mt-5 pt-4">
        <div class="col-12 col-md-6">
          <input
            class="text-service-two"
            v-model="name"
            type="text"
            :placeholder="$t('form.formName')"
          />
        </div>
        <div class="col-12 col-md-6">
          <input
            class="text-service-two"
            v-model="company"
            type="text"
            :placeholder="$t('form.formCompany')"
          />
        </div>
        <div class="col-12 col-md-6">
          <input
            class="text-service-two"
            v-model="mobile"
            type="number"
            :placeholder="$t('form.formMobile')"
          />
        </div>
        <div class="col-12 col-md-6">
          <input
            class="text-service-two"
            v-model="email"
            type="text"
            :placeholder="$t('form.formEmail')"
          />
        </div>
        <div class="col-12">
          <textarea
            class="text-service-two"
            name=""
            id=""
            :placeholder="$t('form.formMessage')"
            cols="30"
            rows="8"
            v-model="message"
          ></textarea>
        </div>
      </div>
      <div class="row mt-5">
        <div :class="{ 'text-center': isMobile }" class="col-12">
          <button
            :class="
              email != '' &&
              name != '' &&
              company != '' &&
              mobile != '' &&
              message != ''
                ? null
                : 'btn-disabled'
            "
            v-if="!sending"
            @click="submit()"
            class="submit-form text-service-two primary-color"
          >
            {{$t('form.submit')}}
          </button>
          <p v-if="sending" style="color: #fff">
            Sending application, please wait..
          </p>
        </div>
      </div>
      <div class="gap"></div>
      <modal name="sendEmail" class="team-card">
        <div
          class="w-100 d-flex justify-content-between flex-row-reverse align-top-model"
        >
          <i @click="closeModalSuccess()" class="fa-solid fa-circle-xmark pointer"></i>
        </div>
        <div class="mt-5 mb-5 text-center">
          <div class="card-sent">
            <img src="../assets/images/Check_ring.png" alt="">
            <h6 class="text-uppercase">{{ $t("email.title") }}</h6>
            <p>{{ $t("email.subtitle") }}</p>
          </div>
        </div>
        
      </modal>
      <div class="row">
        <div class="col-12">
          <h5>{{$t('menu.talk')}}</h5>
        </div>
        <div class="col-12 mt-5">
          <p class="text-dark">
            Viale Legioni Romane <br />
            20147 MILANO <br />
            <br />

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
import axios from "axios";
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
      message: "",
      sending: false,
      success: false,
    };
  },
  components: {
    ButtonNav,
  },
  methods: {
    async submit() {
      const app = this;
      if (!app.sending) {
        if (
          app.name == undefined ||
          app.name == "" ||
          app.company == undefined ||
          app.company == "" ||
          app.mobile == undefined ||
          app.mobile == "" ||
          app.email == undefined ||
          app.email == "" ||
          app.message == undefined ||
          app.message == ""
        ) {

          alert("Enter all Fields");
        } else {
          app.sending = true;
          try {
            let response = await axios.post(
              "https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-fccddf11-6a59-4e85-879a-9e3580d3b18c/sample/sendMail",
              {
                form: "contacts",
                name: app.name,
                company: app.company,
                mobile: app.mobile,
                email: app.email,
                message: app.message,
              }
            );
            if (response.data.error === true) {
              alert(response.data.message);
            } else {
              this.$modal.show("sendEmail");
              setTimeout(() => {
                this.closeModalSuccess();
              }, 5000);
            }
          } catch (e) {
            console.log(e);
          }
          app.sending = false;
          app.name = "";
          app.company = "";
          app.mobile = "";
          app.email = "";
          app.message = "";
        }
      }
    },
    closeModalSuccess() {
      this.$modal.hide("sendEmail");
    },
  },
};
</script>

<style>

</style>
