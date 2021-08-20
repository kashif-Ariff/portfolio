<template>
  <div class="baseInnerBanner">
    <div class="baseInnerBanner__image">
      <img
        :src="require(`@/assets/images/banners/${bannerDetail.image}`)"
        alt=""
      />
    </div>
    <div class="container">
      <div
        class="baseInnerBanner__detail"
        :class="
          bannerDetail.subTitle && bannerDetail.subTitle != ''
            ? ''
            : 'baseInnerBanner__detail--justTitle'
        "
      >
        <h1 v-if="bannerDetail.title" class="baseInnerBanner__detail--title">
          {{ bannerDetail.title }}
        </h1>
        <p v-if="bannerDetail.subTitle" class="baseInnerBanner__detail--info">
          {{ bannerDetail.subTitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bannerDetail: Object,
  },
};
</script>

<style lang="scss" scoped>
.baseInnerBanner {
  height: 340px;
  margin-bottom: rem(60px);
  position: relative;
  @media screen and (max-width:991px){
    height:275px;
  }
  &__image {
    height: 100%;
    position: absolute;
    z-index: -1;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
  &__detail {
    padding-top: rem(180px);
    text-align: center;
    z-index: 1;
    @media screen and (max-width: 1600px) {
      padding-top: rem(230px);
    }
    &--justTitle {
      padding-top: rem(200px);
      @media screen and (max-width: 1600px) {
        padding-top: rem(250px);
      }
      @media screen and (max-width: 991px) {
        padding-top: rem(225px);
      }
    }
    &--title {
      font-size: rem(42px);
      color: #fff;
      text-transform: uppercase;
      font-weight: 500;
      @media screen and (max-width:991px){
        font-size:rem(35px);
      }
      @media screen and (max-width:575px){
        font-size:rem(30px);
      }
    }
    &--info {
      color: #fff;
      font-size: rem(22px);
      margin-top: rem(20px);
      margin-bottom: rem(10px);
      font-weight: 400;
      @media screen and (max-width:767px){
        font-size:rem(19px);
      }
    }
  }
}
</style>