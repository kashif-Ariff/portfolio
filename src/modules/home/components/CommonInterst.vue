<template>
  <div class="main-common service offices">
    <div class="container">
      <div class="slider-header">
        <div class="row">
          <div class="col-12 col-lg-9">
            <h2>Common interests</h2>
            <p>Lorem Ipsum is simply dummy is the text of the printing .</p>
          </div>
          <div class="col-12 col-lg-3">
            <a href="#">View All</a>
          </div>
        </div>
      </div>
    </div>

    <div class="container-right">
      <carousel :carousel-settings="sliderOption" class="slider-services">
        <div
          class="swiper-slide"
          v-for="cardData in listDetail"
          :key="cardData.id"
        >
          <base-detail-card :cardData="cardData"></base-detail-card>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import BaseDetailCard from "../../../common/components/base/BaseDetailCard.vue";
export default {
  components: { BaseDetailCard },
  data() {
    return {
      sliderOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          1200: {
            slidesPerView: 5,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
        },
      },
      listDetail: [
        {
          id: 0,
          link: "/",
          image: "Asset2.svg",
          title: "Knowledge Library",
          detail: "Lorem Ipsum is simply dummy is the text of the printing.",
        },
        {
          id: 1,
          link: "/",
          image: "Asset2.svg",
          title: "Knowledge Library",
          detail: "Lorem Ipsum is simply dummy is the text of the printing.",
        },
        {
          id: 2,
          link: "/",
          image: "Asset2.svg",
          title: "Knowledge Library",
          detail: "Lorem Ipsum is simply dummy is the text of the printing.",
        },
        {
          id: 3,
          link: "/",
          image: "Asset2.svg",
          title: "Knowledge Library",
          detail: "Lorem Ipsum is simply dummy is the text of the printing.",
        },
        {
          id: 4,
          link: "/",
          image: "Asset2.svg",
          title: "Knowledge Library",
          detail: "Lorem Ipsum is simply dummy is the text of the printing.",
        },
        {
          id: 5,
          link: "/",
          image: "Asset2.svg",
          title: "Knowledge Library",
          detail: "Lorem Ipsum is simply dummy is the text of the printing.",
        },
        {
          id: 6,
          link: "/",
          image: "Asset2.svg",
          title: "Knowledge Library",
          detail: "Lorem Ipsum is simply dummy is the text of the printing.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-common {
  @media screen and (max-width: 767px) {
    margin: 0px rem(20px);
  }
}
.main-common .slider-services .slider-item {
  margin-left: unset;
}
.slider-header {
  @media screen and (max-width: 991px) {
    margin-bottom: rem(40px);
  }
}
.container-right {
  position: relative;
  /deep/ {
    .swiper-container {
      padding-left: 10px;
      @media screen and (max-width: 575px) {
        padding-right: 10px;
      }
    }
    .sliderNavigation {
      top: -130px;
      z-index: 0;
      height: 0;
      --border: var(--swiper-theme-color);
      --arrow: var(--swiper-theme-color);
      bottom: 0;
      left: 120px;
      @media screen and (min-width: 1600px) {
        left: 70px;
        top: -135px;
      }
      @media screen and (max-width: 1200px) {
        //    top: -132px;
        left: 160px;
      }
      @media screen and (max-width: 1042px) {
        left: 180px;
        top: -115px;
      }
      @media screen and (max-width: 991px) {
        left: 30px;
        top: -62px;
      }
      @media screen and (max-width: 859px) {
        left: 90px;
      }
      &__controls {
        max-width: 340px;
        @media screen and (max-width: 991px) {
          max-width: 100%;
        }
        &--pagination,
        &--pause {
          display: none;
        }
        button {
          transition: 0.5s ease all;
          &:hover {
            opacity: 1;
            --border: var(--gray-dark);
            --arrow: var(--swiper-theme-color);
            background: var(--gray-dark);
          }
        }
        #prevArrow {
          margin-right: rem(10px);
        }
      }
    }
  }
}
</style>