<template>
  <div class="suportCenter">
      <base-inner-banner :banner-detail="innerBannerDetail" />
      <div class="container">
        <section id="corporate-governance" data-color-theme="dark">
          <corporate-governance
              section-title="Corporate Governance"
              aria-label="Corporate Governance"
          ></corporate-governance>
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
    CorporateGovernance: () => import('@/modules/support-center/components/CorporateGovernance.vue'),
  }
}
</script>

<style lang="scss" scoped>

</style>
