<template>
  <div class="slider-item">
    <div class="slider-item-photo">
      <img
        :src="require(`@/assets/images/home/${initiatorsCard.mainImage}`)"
        alt=""
      />
    </div>
    <div class="slider-item-content">
      <div>
        <img
          src="@/assets/images/initiators/icons/1.png"
          class="img-fluid"
          alt=""
        />
        <a :href="initiatorsCard.link">Veiw More</a>
      </div>
      <div>
        <h6>{{ initiatorsCard.title }}</h6>
        <p>
          {{ initiatorsCard.detail }}
        </p>
      </div>
    </div>
    <a :href="initiatorsCard.MainLInk" class="abs-link"></a>
  </div>
</template>

<script>
export default {
  props: {
    initiatorsCard: Object,
  },
};
</script>

<style lang="scss" scoped>
.slider-item {
  outline: none;
  border: none;
  margin-inline-end: rem(15px);
  cursor: pointer;
  @include prefixer(transition, all 0.7s ease-in-out, o moz wibket);
  filter: drop-shadow(2px 4px 6px #ccc);
  .slider-item-photo {
    img {
      width: 100%;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      max-height: 260px;
    }
  }
  .slider-item-content {
    display: flex;
    justify-content: center;
    background-color: $whiteColor;
    padding: 0 rem(30px);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    @media (max-width: 1299.98px) {
      padding: 0 7px;
    }
    & > div {
      &:first-child {
        width: 35%;
        padding-top: rem(30px);
        padding-inline-end: rem(25px);
        margin-inline-end: rem(25px);
        border-inline-end: 1px dashed;
        border-color:#aaaaaa;
        position: relative;
        @media (max-width: 1199.98px) {
          padding-inline-end: rem(13px);
          margin-inline-end: rem(14px);
        }
        @media screen and (max-width:575px){
          min-width:70px;
        }
        img {
          max-width: 72px;
          margin-bottom: rem(17px);
          @media (max-width: 1199.98px) {
            margin-bottom: 7px;
          }
          @media screen and (max-width:767px){
            max-width:45px;
          }
        }
        a {
          //     @include fonts($Gotham-bold, 13px);
          font-size: rem(13px);
          font-weight: 700;
          color: $mainColor;
          display: block;
          @include prefixer(transition, all 0.3s ease-in-out, o wibket moz);
          text-align: center;
          &:hover {
            color: $secondColor;
          }
        }
      }
      &:last-child {
        padding-top: rem(30px);
        padding-bottom: rem(30px);
        h6 {
          //     @include fonts($Gotham-bold, 20px);
          font-size: rem(20px);
          font-weight: 700;
          margin-bottom: rem(20px);
          min-height: 48px;
          color: var(--secondary);
          @media screen and (max-width:767px){
            font-size:rem(18px);
          }
          @media (max-width: 1299.98px) {
            //  font-size: 15px;
            margin-bottom: 8px;
          }
        }
        p {
          //     @include fonts($AlegreyaSans-Regular, 15px);
          font-size: rem(15px);
          font-weight: 400;
          margin-bottom: 0;
          color: var(--secondary);
          @media (max-width: 1199.98px) {
            //  font-size: 13px;
          }
          @media screen and (max-width:767px){
            font-size:rem(14px);
          }
        }
      }
    }
  }
  &:hover {
    transform: translateY(-19px);
  }
}
</style>