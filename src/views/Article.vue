<template>
  <div class="post">
    <div class="gap-2"></div>
    <ButtonNav />
    <div class="container p-5 mt-5 mb-5">
      <div class="row justify-content-center">
        <div v-if="post" class="col-12 col-md-12 col-lg-9 col-xl-8">
          <a href="/blog">
            <div class="d-flex justify-content-center align-items-center mb-5">
              <i
                class="fa-solid fa-arrow-right-long"
                style="transform: rotate(90deg)"
              ></i>
              <p>back to blog</p>
            </div>
          </a>
          <div class="preview-img">
            <img :src="'/contents/' + post.header_image" alt="" />
          </div>
          <div class="body">
            <div class="d-flex align-items-center mt-3 mb-3 details">
              <p>{{ moment(post.post_date).format("MMM D, YYYY") }}</p>
              <p>.</p>
              <p>{{ post.read_time }}</p>
            </div>
            <h1>{{ post.title }}</h1>
            <p class="body-text mt-4" v-html="post.body_text"></p>
          </div>
        </div>
      </div>
      <div class="gap-2"></div>
      <div class="pag">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-4 prev-box">
                <a v-if="prev.length !== 0" :href="prev.slug">
                  <div
                    class="control-pag d-flex align-items-baseline justify-content-end"
                  >
                    <div class="d-flex align-items-center me-3">
                      <i class="fa-solid fa-arrow-right-long"></i>
                      <p>read now</p>
                    </div>
                    <div class="little-img">
                      <img :src="'/contents/' + prev.preview_pic" alt="" />
                    </div>
                  </div>
                  <h2 class="text-end mt-3">{{ prev.title }}</h2>
                </a>
              </div>
              <div
                class="col-12 col-md-6 col-lg-4 offset-lg-4 next-box text-end"
              >
                <a v-if="next.length !== 0" :href="'/blog/' + next.slug">
                  <div class="control-pag d-flex align-items-baseline">
                    <div class="little-img">
                      <img :src="'/contents/' + next.preview_pic" alt="" />
                    </div>
                    <div class="d-flex align-items-center ms-3">
                      <p>read now</p>
                      <i
                        class="fa-solid fa-arrow-right-long"
                        style="transform: rotate(90deg)"
                      ></i>
                    </div>
                  </div>
                  <h2 class="text-start mt-3">
                    {{ next.title }}
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterExt />
  </div>
</template>

<script>
// @ is an alias to /src

// import Loader from "@/components/Loader.vue";
import ButtonNav from "@/components/ButtonNav.vue";
import FooterExt from "@/components/FooterExt.vue";
import moment from "moment";
import axios from "axios";

export default {
  name: "Article",
  components: {
    ButtonNav,
    FooterExt,
  },
  data() {
    return {
      post: {},
      next: {},
      prev: {},
    };
  },
  mounted() {
    this.fetchPost();
  },

  methods: {
    async fetchPost() {
      const app = this;
      try {
        const post = await axios.post(
          process.env.VUE_APP_API_BLOG_URL + "post",
          {
            slug: app.$route.params.id,
          }
        );
        app.post = post.data.post;
        app.next = post.data.next;
        app.prev = post.data.prev;
        /* console.log("posts:", post.data); */
      } catch (e) {
        alert(e.message);
      }
    },
    moment: function (date) {
      return moment(date);
    },
    date: function (date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>
