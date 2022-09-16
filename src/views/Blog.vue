<template>
  <div class="blog">
    <div class="gap-2"></div>
    <ButtonNav />
    <div class="container p-5 mt-5 mb-5">
      <div class="row justify-content-center">
        <div
          v-for="post in posts"
          :key="post.title"
          class="col-12 -col-md-6 col-lg-5 mb-5"
        >
          <router-link :to="{ name: 'Article', params: { id: post.slug } }">
            <div class="preview-post">
              <div class="preview-img">
                <img :src="'/contents/' + post.preview_pic" alt="" />
              </div>
              <div class="d-flex align-items-center mt-1 mb-3">
                <p>{{ moment(post.post_date).format("MMM D, YYYY") }}</p>
                <p>.</p>
                <p>{{ post.read_time }}</p>
              </div>
              <h2>{{ post.title }}</h2>
              <div class="d-flex align-items-center mt-4">
                <div class="author-pic">
                  <img :src="'/contents/' + post.author_img" alt="" />
                </div>
                <p>{{ post.author }}</p>
              </div>
            </div>
          </router-link>
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
import axios from "axios";
import FooterExt from "@/components/FooterExt.vue";
import moment from "moment";

export default {
  name: "Blog",
  components: {
    ButtonNav,
    FooterExt,
  },
  data() {
    return {
      posts: [],
      author: [],
    };
  },
  mounted() {
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      const app = this;
      try {
        const api_blog = await axios.get(
          process.env.VUE_APP_API_BLOG_URL + "news"
        );
        app.posts = api_blog.data;
        console.log(app.posts);
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
