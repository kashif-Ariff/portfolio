<template>
  <div class="publication">
      <base-inner-banner :banner-detail="innerBannerDetail" />
      <div class="container">
        <section id="" data-color-theme="dark">
          <common-interest-slider
              section-title=""
              aria-label=""
          ></common-interest-slider>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerBannerDetail: {
        image: "BOD.png",
        title: "common interests",
      },
    };
  },
  components:{
    CommonInterestSlider: () => import('@/modules/common-interest/components/commonInterestSlider.vue'),
  }
}
</script>

<style lang="scss" scoped>

</style>
