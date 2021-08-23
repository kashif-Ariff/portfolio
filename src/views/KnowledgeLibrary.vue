<template>
  <div class="knowledgeLibrary">
    <base-inner-banner :banner-detail="innerBannerDetail" />
    <div class="container">
        <div class="content-box">
            <h2>Information Sources</h2> 
            <section>
                <filters />
            </section>
            <section>
                <information-Card />
            </section>
            <section>
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
    @media screen and (max-width:1199px) {
        margin-bottom: rem(50px);
    }
    @media screen and (max-width:1199px) {
        font-size: rem(30px);
    }
  }
  /deep/{
    .pagination{
      padding-bottom: 0px;
    }
  }
}
</style>