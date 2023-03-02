<template>
  <div class="blog">
    <div class="gap-2"></div>
    <ButtonNav />
    <div class="container p-5 mt-5 mb-5">
      <h4 class="text-center">BLOG NEWS</h4>
      <h6 class="mt-5 text-center">Latest news update</h6>
      <div v-if="!isMobile" class="gap"></div>
      <div
        v-for="post in posts"
        :key="post.index"
        :class="{ 'mt-5': isMobile }"
      >
        <div class="row justify-content-between align-items-center">
          <div class="col-12 col-md-6 col-lg-5">
            <!-- <router-link :to="{ name: 'Article', params: { id: post.slug } }"> -->
            <div class="blog-card p-4" @click="togglePost(post)">
              <div
                class="bg-image"
                v-bind:style="{
                  backgroundImage:
                    'url(' +
                    ipfs +
                    '/ipfs/' +
                    post.metadata.preview_img.replace('ipfs://', '') +
                    ')',
                }"
              ></div>
              <div class="blog-card-content">
                <div class="blog-title">{{ post.metadata.title }}</div>
                <!-- <div class="blog-category mt-3">
                  <em>{{ post.category }}</em>
                </div> -->
                <div
                  class="d-flex align-items-center justify-content-between mt-5"
                >
                  <img src="../assets/images/arrow.svg" alt="" />
                  <p class="blog-cta">read more</p>
                </div>
              </div>
            </div>
            <!-- </router-link> -->
          </div>
          <div class="col-12 col-md-6 col-lg-5" :class="{ 'mt-5': isMobile }">
            <div>
              <div class="d-flex align-items-center mt-1 mb-3">
                <div class="blog-date secondary-color">
                  {{ moment(post.metadata.timestamp).format("MMM D, YYYY") }}
                </div>
              </div>
              <div class="blog-title secondary-color">
                {{ post.metadata.title }}
              </div>
              <div v-if="!isMobile" class="gap"></div>
              <div
                @click="togglePost(post)"
                class="btn-blog"
                :class="{ 'mt-5': isMobile }"
              >
                READ
              </div>
            </div>
          </div>
        </div>
        <Transition name="slide">
          <div v-if="isOpen === post.title" class="row mt-5">
            <div class="col-12 col-md-10 col-lg-8 pt-5">
              <p class="blog-text" v-html="post.metadata.body_text"></p>
            </div>
          </div>
        </Transition>
        <div class="divider mt-5 mb-5"></div>
      </div>
    </div>
    <FooterExt />
  </div>
</template>

<script>
// @ is an alias to /src

// import Loader from "@/components/Loader.vue";
import checkViewport from "@/mixins/checkViewport.js";
import ButtonNav from "@/components/ButtonNav.vue";
import axios from "axios";
import FooterExt from "@/components/FooterExt.vue";
import moment from "moment";

export default {
  name: "Blog",
  mixins: [checkViewport],
  components: {
    ButtonNav,
    FooterExt,
  },
  data() {
    return {
      posts: [],
      author: [],
      contents: process.env.VUE_APP_API_CONTENTS_URL,
      isOpen: "",
      ipfs: process.env.VUE_APP_IPFS,
    };
  },
  mounted() {
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      const app = this;
      try {
        const api_blog = await axios.get(process.env.VUE_APP_API_BLOG_URL);
        app.posts = api_blog.data;
        /* console.log(app.posts); */
      } catch (e) {
        alert(e.message);
      }
    },
    togglePost(post) {
      const app = this;
      /* console.log("opening"); */
      if (app.isOpen === post.title) {
        app.isOpen = "";
      } else {
        app.isOpen = post.title;
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
