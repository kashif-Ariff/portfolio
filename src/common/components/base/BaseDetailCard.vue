<template>
  <div class="slider-item cardDetail swiper-slide">
    <a :href="cardData.link">More <img src="@/assets/images/svg/right-arrow.svg"></a>
    <img :src="require(`@/assets/images/icons/svg/${cardData.image}`)" />
    <h4>{{ cardData.title }}</h4>
    <span>{{ cardData.detail }}</span>
  </div>
</template>

<script>
export default {
  props: {
    cardData: Object,
  },
};
</script>

<style lang="scss" scoped>
.slider-item {
  img {
    max-width: 60px;
    margin-bottom: rem(30px);
    margin-top: rem(19px);
    @media screen and (max-width:575px){
      max-width:45px;
    }
  }
  border: none;
  outline: none;
  background-color: $whiteColor;
  border-radius: 21px;
  padding: rem(22px) rem(30px) rem(25px) rem(30px);
  //   margin: 25px 0;
  margin-inline-end: rem(20px);
  cursor: pointer;
  @include prefixer(transition, all 0.7s ease-in-out, o moz wibket);
  min-height: 278px;
  //   @media (max-width: 1199.98px) {
  //     padding: rem(12px) rem(10px) rem(15px) rem(10px);
  //   }
  &:hover {
    transform: translateY(-19px);
    a {
      opacity: 10;
    }
  }

  a {
    display: block;
    color: $mainColor;
    text-align: right;
    opacity: 0;
    text-transform: uppercase;
    @include prefixer(transition, all 0.4s ease-in-out, o moz wibket);
    &:hover {
      // color: $secondColor;
      opacity:.7;
    }
    img{
      margin:0;
    }
  }

  h4 {
    //     @include fonts($Gotham-bold, 18px);
    font-size: rem(18px);
    font-weight: 700;
    color: $thirdColor;
    margin-bottom:6px;
  @media (max-width: 1600px) {
      font-size: rem(16px);
    }
    @media (max-width: 1299.98px) {
      font-size: rem(13px);
    }
  }
  span {
    @include truncate(2, 1.5);
    //     @include fonts($Gotham-Light, 16px);
    font-size: rem(16px);
    font-weight: 300;
    color: $thirdgray;
  }
}
</style>