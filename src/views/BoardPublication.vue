<template>
  <div class="boardPublication">
      <base-inner-banner :banner-detail="innerBannerDetail" />
      <div class="container">
        <section id="" data-color-theme="dark">
          <main-component
              section-title=""
              aria-label=""
          ></main-component>
        </section>
    </div>
  </div>
</template>

<script>
export default {
     components:{
        MainComponent: () => import('@/modules/boardPublication/components/MainComponent.vue'),
    },
    data(){
        return{
            innerBannerDetail: {
              image: "BOD.png",
              title: "board publications",
            },
        }
    }
}
</script>

<style lang="scss" scoped>
.boardPublication{

}
</style>
