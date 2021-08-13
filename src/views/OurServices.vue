<template>
  <div class="ourServices">
    <base-inner-banner :banner-detail="innerBannerDetail" />
    <div class="container">
      <services-type></services-type>
      <base-media-slider :mediaSlides="images"></base-media-slider>
    </div>
  </div>
</template>

<script>
import BaseMediaSlider from "@/common/components/base/BaseMediaSlider.vue";
import ServicesType from "../modules/services/ServicesType.vue";
export default {
  components: { ServicesType, BaseMediaSlider },
  data() {
    return {
      images: [
        {
          image: "shutterstock_597162353.png",
        },
        {
          image: "shutterstock_597162353.png",
        },
        {
          image: "shutterstock_597162353.png",
        },
      ],
      innerBannerDetail: {
        image: "BOD.png",
        title: "Our services",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>