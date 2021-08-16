<template>
  <div class="Faq">
    <base-inner-banner :banner-detail="innerBannerDetail" />
    <faq-detail></faq-detail>
  </div>
</template>

<script>
import FaqDetail from "@/modules/Faq/FaqDetail.vue";
export default {
  components: { FaqDetail },
  data() {
    return {
      innerBannerDetail: {
        image: "BOD.png",
        title: "FAQS",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>