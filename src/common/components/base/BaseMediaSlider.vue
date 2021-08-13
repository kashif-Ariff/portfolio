<template>
  <div class="mediaSlider">
    <carousel
      class="mediaSlider__slides"
      fractionPagination
      slider-type="slider"
      :carousel-settings="basicSearchSlider"
    >
      <div
        class="swiper-slide"
        v-for="(data, index) in mediaSlides"
        :key="index"
      >
        <div class="mediaSlider__item">
          <img
            :src="require(`@/assets/images/${data.image}`)"
            alt="zain world"
            class="img-fluid"
          />
        </div>
        <h2 v-if="data.thumb">{{ data.thumb }}</h2>
      </div>
    </carousel>
  </div>
</template>

<script>
export default {
  props: { mediaSlides: Array },
  data() {
    return {
      basicSearchSlider: {
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        speed: 1500,
        rtl: this.$i18n.locale == "en" ? false : true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.mediaSlider {
  position: relative;
  z-index: 1;
  border-bottom-right-radius: 50px;
  overflow: hidden;
  &__slides {
    background: #e9e9e9;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    > div {
      > div > div {
        outline-offset: -8px;
      }
    }
  }
  .swiper-slide {
    h2 {
      text-align: center;
      font-size: rem(24px);
      font-weight: 700;
      color: var(--secondary);
      padding-top: rem(30px);
      word-spacing: rem(3px);
      padding-left: rem(8px);
      padding-right: rem(8px);
      @media screen and (max-width: 767px) {
        font-size: rem(20px);
        padding-top: rem(25px);
      }
      @media screen and (max-width: 575px) {
        font-size: rem(17px);
        padding-top: rem(20px);
      }
    }
  }
  /deep/ {
    .sliderNavigation {
      border-bottom-right-radius: 50px;
      z-index: 1;
      padding: 0 rem(25px);
      background-color: rgba(10, 35, 51, 0.9);
      width: 350px;
      height: 130px;
      right: 0;
      position: absolute;
      bottom: 0;
      border-top-left-radius: 45px;
      left: auto;
      @media (max-width: 991.98px) {
        width: 185px;
        height: 70px;
      }
      @media (max-width: 330px) {
        width: 132px;
        height: 46px;
      }
      .container {
        height: 100%;
      }
      &__controls {
        max-width: 270px;
        margin: 0 auto 0 auto;
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: space-between;
        &--pagination {
          order: 3;
          font-size: rem(18px);
          font-weight: 700;
        }
        &--pause {
          display: none;
        }
        button {
          position: relative;
          border: none !important;
          width: 40px;
          i {
            font-size: 0px;
          }
          &#prevArrow {
            left: 0;
            &::before {
              content: "";
              height: 100%;
              width: 100%;
              position: absolute;
              top: 0px;
              left: 0px;
              //     background-color: rgba(10, 35, 51, 0.9);
              transform: rotate(180deg);
              background-repeat: no-repeat;
              background-position: center;
              background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve' fill='%23fff'%3E%3Cg%3E%3Cg%3E%3Cpath d='M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068 c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557 l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104 c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
            }
          }
          &#nextArrow {
            right: 0;
            i {
              font-size: 0px;
            }
            &::before {
              content: "";
              height: 100%;
              width: 100%;
              position: absolute;
              top: 0px;
              left: 0px;
              //     background-color: rgba(10, 35, 51, 0.9);
              background-repeat: no-repeat;
              background-position: center;
              background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve' fill='%23fff'%3E%3Cg%3E%3Cg%3E%3Cpath d='M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068 c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557 l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104 c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
            }
          }
        }
      }
    }
  }
}
[lang="ar"] {
  .mediaSlider {
    &::before {
      left: -10px;
      right: auto;
    }
    &::after {
      left: -20px;
      right: auto;
    }
    /deep/ {
      .sliderNavigation {
        &__controls {
          &--arrow {
            transform: rotate(180deg);
          }
          &--pagination {
            direction: ltr;
          }
          &--pause {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
}
</style>
