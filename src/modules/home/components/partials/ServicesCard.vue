<template>
  <div class="position-relative servicesCard">
    <img
      :src="require(`@/assets/images/home/${cardData.image}`)"
      :alt="cardData.title"
    />
    <h6>{{ cardData.title }}</h6>
    <span>{{ cardData.detail }} </span>
    <a :href="cardData.link" class="abs-link"></a>
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
.servicesCard {
  img {
    display: inline-block;
  }
  h6 {
    margin-top: rem(25px);
    font-size: rem(20px);
    font-weight: 700;
    margin-bottom: 10px;
  }
  span {
    font-weight: 400;
    font-size: rem(16px);
    display: inline-block;
    padding: 10px 0px;
    @include truncate(2.8);
    line-height: 1.5;
    max-height: 3.5em;
  }
}
</style>