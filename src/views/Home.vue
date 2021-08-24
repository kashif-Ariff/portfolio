<template>
  <div class="home">
    <base-sections-scroll :page-sections="pageSections"></base-sections-scroll>
    <section id="header" data-color-theme="light">
      <home-banner />
    </section>
    <section id="main-common" data-color-theme="dark">
      <common-interst />
    </section>
    <section id="services" data-color-theme="light">
      <services></services>
    </section>
    <section id="initiators" data-color-theme="dark">
      <Initiators></Initiators>
    </section>
  </div>
</template>

<script>
import CommonInterst from "../modules/home/components/CommonInterst.vue";
import HomeBanner from "../modules/home/components/HomeBanner.vue";
import Services from "../modules/home/components/Services.vue";
import Initiators from "../modules/home/components/Initiators.vue";
import BaseSectionsScroll from "@/common/components/base/BaseSectionsScroll";
export default {
  name: "Home",
  components: {
    HomeBanner,
    CommonInterst,
    Services,
    Initiators,
    BaseSectionsScroll,
  },
  data() {
    return {
      pageSections: [
        {
          title: "Header",
          id: "header",
        },
        {
          title: "COMMON INTERESTS",
          id: "main-common",
        },
        {
          title: "Services",
          id: "services",
        },
        {
          title: "initiators",
          id: "initiators",
        },
      ],
    };
  },
  created() {
    document.body.classList.add("front-page");
  },
  mounted() {
    document.body.classList.add("front-page");
  },
  destroyed() {
    document.body.classList.remove("front-page");
  },
};
</script>
<style lang="scss" scoped>
</style>
