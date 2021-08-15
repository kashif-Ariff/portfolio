<template>
  <div class="publication">
      <base-inner-banner :banner-detail="innerBannerDetail" />
      <div class="container">
        <section id="" data-color-theme="dark">
          <publication-slider
              section-title=""
              aria-label=""
          ></publication-slider>
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
    PublicationSlider: () => import('@/modules/common-interest/components/commonInterestSlider.vue'),
  }
}
</script>

<style lang="scss" scoped>

</style>
