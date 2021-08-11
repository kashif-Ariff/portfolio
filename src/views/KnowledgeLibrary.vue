<template>
  <div class="knowledgeLibrary">
    <base-inner-banner :banner-detail="innerBannerDetail" />
    <div class="container">
      <div class="content-box">
          <filters />
          <information-Card />
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
    Filters : () => import('@/modules/knowledgeLibrary/components/Filters.vue'),
    InformationCard : () => import('@/modules/knowledgeLibrary/components/InformationCard.vue'),
  }
};
</script>

<style lang="scss" scoped>
.knowledgeLibrary {
 
}
</style>