<template>
  <div class="suportCenter">
      <base-inner-banner :banner-detail="innerBannerDetail" />
      <div class="container">
        <section id="" data-color-theme="dark">
          <support-center-slider
              section-title="Corporate Governance"
              aria-label="Corporate Governance"
          ></support-center-slider>
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
        title: "Support Centers",
      },
    };
  },
  components:{
    SupportCenterSlider: () => import('@/modules/support-center/components/SupportCenterSlider.vue'),
  }
}
</script>

<style lang="scss" scoped>

</style>
