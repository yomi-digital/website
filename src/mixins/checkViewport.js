export default {
  data() {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      isMiddleScreen: false,
    };
  },
  async mounted() {
    const app = this;
    app.checkViewport();
    window.addEventListener("resize", function () {
      app.checkViewport();
    });
  },
  methods: {
    checkViewport() {
      const app = this;
      if (window.innerWidth < 768) {
        app.isMobile = true;
        app.isTablet = false;
        app.isDesktop = false;
      } else if (window.innerWidth < 992 && window.innerWidth > 768) {
        app.isMobile = false;
        app.isTablet = true;
        app.isDesktop = false;
      } else if (window.innerWidth > 993 && window.innerWidth < 1279) {
        app.isMobile = false;
        app.isTablet = false;
        app.isMiddleScreen = true;
        app.isDesktop = false;
      } else if (window.innerWidth > 1280) {
        app.isMobile = false;
        app.isTablet = false;
        app.isMiddleScreen = false;
        app.isDesktop = true;
      }
    },
  },
};
