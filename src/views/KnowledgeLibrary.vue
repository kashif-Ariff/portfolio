<template>
  <div class="knowledgeLibrary">
    <base-inner-banner :banner-detail="innerBannerDetail" />
    <div class="container">
      <div class="content-box">
        <h2>Information Sources</h2>
        <section id="">
          <filters />
        </section>
        <section id="">
          <information-Card />
        </section>
        <section id="">
          <base-pagination />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerBannerDetail: {
        image: "BOD.png",
        title: "Knowledge Library",
      },
    };
  },
  components:{
    Filters: () => import('@/modules/knowledgeLibrary/components/Filters.vue'),
    InformationCard: () => import('@/modules/knowledgeLibrary/components/InformationCard.vue'),
    BasePagination:() => import("@/common/components/base/BasePagination.vue")
  }
};
</script>

<style lang="scss" scoped>
.knowledgeLibrary {
  h2{
    font-size: rem(35px);
    font-weight: 400;
    color: var(--secondary);
    text-align: center;
    margin-bottom: rem(80px);
  }
}
</style>