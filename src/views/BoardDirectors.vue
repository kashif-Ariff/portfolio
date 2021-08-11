<template>
  <div class="boardDirector">
    <base-inner-banner :banner-detail="innerBannerDetail" />
    <div class="container">
      <MoardDetail />
    </div>
  </div>
</template>

<script>
import MoardDetail from "@/modules/Board-directors/MoardDetail.vue";
export default {
  components: { MoardDetail },
  data() {
    return {
      innerBannerDetail: {
        image: "BOD.png",
        title: "Board of directors",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.boardDirector {
  position: relative;
  padding-bottom: rem(80px);
}
</style>