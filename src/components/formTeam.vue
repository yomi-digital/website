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
              #{{$t("team.formTitle")}}
            </h5>
            <i @click="closeModal()" class="fa-solid fa-xmark pointer mb-1"></i>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-4">
        <div class="row justify-content-end">
          <div class="col-12">
            <div :class="isMobile ? 'mb-3' : 'mb-5'">
              <div class="label">{{$t("team.formName")}}</div>
              <input v-model="name" type="text" placeholder="" />
            </div>
            <div :class="isMobile ? 'mb-3' : 'mb-5'">
              <div class="label">{{$t("team.formEmail")}}</div>
              <input v-model="email" type="text" placeholder="" />
            </div>
            <div :class="isMobile ? 'mb-3' : 'mb-5'">
              <div class="label">{{$t("team.formPosition")}}</div>
              <input v-model="position" type="text" placeholder="" />
            </div>
            <div class="mb-5 dropZoneContainer">
              <div class="label">{{$t("team.formYou")}}</div>
              <!-- <label for="upload-photo"><i class="fa-regular fa-plus"></i></label>
              <input type="file" name="photo" id="upload-photo" /> -->
              <div :class="{'flex-column' : isMobile}" class="d-flex">
                <div :class="{'w-50 me-2' : !isMobile, 'mt-2' : isMobile}" >
                  <input
                    @change="onNftCover"
                    type="file"
                    id="drop_zone"
                    class="FileUpload"
                  />
                  <label  class="dropZoneOverlay"
                    ><i class="fa-regular fa-plus"></i
                  ></label>
                  <span v-if="coverUrl" style="color: black">{{
                    coverUrl.length > 37
                      ? coverUrl.substring(0, 37) + "..."
                      : coverUrl
                  }}</span>
                  <span v-else style="color:#757575f2">CV/Portfolio...</span>
                </div>
                <div :class="{'w-50 ms-2' : !isMobile}">
                  <input
                    type="text"
                    id=""
                    class=""
                    placeholder="Attach your link..."
                  />
                  <label class=""
                    ><i class="fa-regular fa-plus"></i
                  ></label>
                 
                </div>
              </div>
            </div>

            <div class="text-center">
              <button class="submit-form text-service-two primary-color">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
export default {
  name: "formTeam",
  mixins: [checkViewport],
  data() {
    return {
      name: "",
      email: "",
      position: "",
      aboutYou: "",
      selectedNftCover: null,
      coverUrl: null,
    };
  },
  methods: {
    closeModal() {
      const app = this;
      document.querySelector(".vm--modal").classList.add("slit-out-vertical");
      setTimeout(function () {
        app.$modal.hide("form");
      }, 800);
      this.$emit("onBackClick");
    },
    onNftCover(e) {
      this.selectedNftCover = e.target.files[0].name;
      console.log(this.selectedNftCover);
      this.coverUrl = this.selectedNftCover;
    },
  },
};
</script>

<style></style>
