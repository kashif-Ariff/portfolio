<template>
  <div class="slider-item cardDetail swiper-slide">
    <a :href="cardData.link">More <i class="fa fa-arrow-right"></i></a>
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
    margin-bottom: 30px;
    margin-top: 19px;
  }
  border: none;
  outline: none;
  background-color: $whiteColor;
  border-radius: 21px;
  padding: 22px 30px 25px 30px;
  //   margin: 25px 0;
  margin-inline-end: 20px;
  cursor: pointer;
  @include prefixer(transition, all 0.7s ease-in-out, o moz wibket);
  min-height: 278px;
  @media (max-width: 1199.98px) {
    padding: 12px 10px 15px 10px;
  }
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
    @include prefixer(transition, all 0.4s ease-in-out, o moz wibket);
    &:hover {
      color: $secondColor;
    }
  }

  h4 {
    @include fonts($Gotham-bold, 18px);
    color: $thirdColor;

    @media (max-width: 1299.98px) {
      font-size: 13px;
    }
  }
  span {
    @include truncate(2, 1.5);
    @include fonts($Gotham-Light, 16px);
    color: $thirdgray;
  }
}
</style>