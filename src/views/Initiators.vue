<template>
  <div class="initiators">
       <base-inner-banner :banner-detail="innerBannerDetail" />
       <div class="container">
            <div aria-label="Initiators" role="region">
                <initiator-slider
                    section-title="Corporate Governance"
                    aria-label="Corporate Governance"
                ></initiator-slider>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  components:{
    InitiatorSlider: ()=>import('@/modules/Initiators/components/InitiatorSlider.vue')
  },
  data() {
      return {
          innerBannerDetail: {
              image: "BOD.png",
              title: "Get to Know The Initiators",
          },
      };
  },
}
</script>

<style lang="scss" scoped>
.initiators{
  
}
</style>