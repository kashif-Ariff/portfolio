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
  .Faq{
    /deep/{
      .baseInnerBanner{
        margin-bottom:rem(90px);
        @media screen and (max-width:1600px){
          margin-bottom:rem(70px);
        }
        @media screen and (max-width:991px){
          margin-bottom:rem(40px);
        }
      }
    }
  }
</style>