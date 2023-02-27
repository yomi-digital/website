<template>
  <modal name="form" class="team-card form">
    <div>
      <div class="pb-4">
        <div>
          <div class="mb-4 label">MEMBER IN PROGRESS</div>
          <div
            class="d-flex justify-content-between align-items-center align-content-center w-100"
          >
            <h5 class="mb-0 w-75 text-uppercase">
              #{{ $t("team.formTitle") }}
            </h5>
            <i @click="closeModal()" class="fa-solid fa-xmark pointer mb-1"></i>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-4">
        <div class="row justify-content-end">
          <div class="col-12">
            <div :class="isMobile ? 'mb-3' : 'mb-5'">
              <div class="label">{{ $t("team.formName") }}</div>
              <input v-model="name" type="text" placeholder="" />
            </div>
            <div :class="isMobile ? 'mb-3' : 'mb-5'">
              <div class="label">{{ $t("team.formEmail") }}</div>
              <input v-model="email" type="text" placeholder="" />
            </div>
            <div :class="isMobile ? 'mb-3' : 'mb-5'">
              <div class="label">{{ $t("team.formPosition") }}</div>
              <input v-model="position" type="text" placeholder="" />
            </div>
            <div class="mb-5 dropZoneContainer">
              <div class="label">{{ $t("team.formYou") }}</div>
              <!-- <label for="upload-photo"><i class="fa-regular fa-plus"></i></label>
              <input type="file" name="photo" id="upload-photo" /> -->
              <div :class="{ 'flex-column': isMobile }" class="d-flex">
                <div :class="{ 'w-50 me-2': !isMobile, 'mt-2': isMobile }">
                  <span style="color: red" v-if="showError"
                    >Error. Size limit: 30MB</span
                  >
                  <input
                    @change="onCover"
                    type="file"
                    id="drop_zone"
                    class="FileUpload"
                  />
                  <label class="dropZoneOverlay"
                    ><i class="fa-regular fa-plus"></i
                  ></label>
                  <span v-if="coverUrl" style="color: black">{{
                    coverUrl.length > 37
                      ? coverUrl.substring(0, 37) + "..."
                      : coverUrl
                  }}</span>
                  <span v-if="!coverUrl && !showError" style="color: #757575f2"
                    >CV/Portfolio...</span
                  >
                </div>
                <div :class="{ 'w-50 ms-2': !isMobile }">
                  <input
                    type="text"
                    id=""
                    class=""
                    placeholder="Attach your link..."
                  />
                  <label class=""><i class="fa-regular fa-plus"></i></label>
                </div>
              </div>
            </div>

            <div class="text-center">
              <button
                @click="submit()"
                :class="
                  email != '' &&
                    name != '' &&
                    position != '' &&
                    (selectedCover != '' ||
                  coverUrl != '')
                    ? null
                    : 'btn-disabled'
                "
                class="submit-form text-service-two primary-color"
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal name="sendEmail" class="team-card">
      <div
        class="w-100 d-flex justify-content-between align-top-model p-1 mb-3"
      >
        <i @click="closeModalSuccess()" class="fa-solid fa-circle-xmark"></i>
      </div>
      <div class="mt-5 mb-5 text-center">
        <div class="">
          <h5 class="text-uppercase">Email send</h5>
        </div>
      </div>
      <div
        class="round-time-bar mt-5 pt-5"
        data-style="smooth"
        style="--duration: 7"
      >
        <div></div>
      </div>
    </modal>
  </modal>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
import axios from "axios";
export default {
  name: "formTeam",
  mixins: [checkViewport],
  data() {
    return {
      name: "",
      email: "",
      position: "",
      aboutYou: "",
      selectedCover: null,
      coverUrl: null,
      showError: false,
      sending: false,
    };
  },
  methods: {
    async submit() {
      const app = this;
      if (!app.sending) {
        if (
          app.name == undefined ||
          app.name == "" ||
          app.position == undefined ||
          app.position == "" ||
          app.aboutYou == undefined ||
          app.aboutYou == "" ||
          app.email == undefined ||
          app.email == "" ||
          app.selectedCover == undefined ||
          app.selectedCover == "" ||
          app.coverUrl == undefined ||
          app.coverUrl == ""
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
                position: app.position,
                aboutYou: app.aboutYou,
                email: app.email,
                selectedCover: app.selectedCover,
                coverUrl: app.coverUrl,
              }
            );
            if (response.data.error === true) {
              alert(response.data.message);
            } else {
              app.$modal.hide("form");
              app.$modal.show("sendEmail");
              setTimeout(() => {
                app.closeModalSuccess();
              }, 5000);
            }
          } catch (e) {
            console.log(e);
          }
          app.sending = false;
          app.name = "";
          app.position = "";
          app.aboutYou = "";
          app.email = "";
          app.selectedCover = "";
          app.coverUrl = "";
        }
      }
    },
    closeModalSuccess() {
      const app = this;
      app.$modal.hide("sendEmail");
    },
    closeModal() {
      const app = this;
      document.querySelector(".vm--modal").classList.add("slit-out-vertical");
      setTimeout(function () {
        app.$modal.hide("form");
      }, 800);
      this.$emit("onBackClick");
    },
    onCover(e) {
      const file = e.target.files[0];
      if (file && file.size > 30000000) {
        this.coverUrl = null;
        this.selectedCover = null;
        this.showError = true;
      } else {
        this.selectedCover = file.name;
        console.log(this.selectedCover);
        this.coverUrl = this.selectedCover;
        this.showError = false;
      }
    },
  },
};
</script>

<style></style>
