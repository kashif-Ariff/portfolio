<template>
  <div class="publication">
      <base-inner-banner :banner-detail="innerBannerDetail" />
      <div class="container">
        <section id="" data-color-theme="dark">
          <publication-slider
              section-title="Corporate Governance"
              aria-label="Corporate Governance"
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
        title: "publications",
      },
    };
  },
  components:{
    PublicationSlider: () => import('@/modules/publication/components/PublicationSlider.vue'),
  }
}
</script>

<style lang="scss" scoped>

</style>
