<template>
  <div class="our-services" :class="isOpen ? '' : 'd-none'">
    <div class="container">
      <div class="services-drop-down">
        <h2 class="mb-30">Our services</h2>
        <div class="row">
          <div class="col-12 col-md-9 drop-down-itmes">
            <div class="row">
              <div class="col-12 col-md-4">
                <div class="drop-down">
                  <p>Menu</p>
                  <vue-select :options="options_sub_one" v-model="selectOne" />
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="drop-down">
                  <p>Category</p>
                  <vue-select :options="options_sub_two" v-model="selectTwo" />
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div class="drop-down">
                  <p>Project Stage</p>
                  <vue-select
                    :options="options_sub_three"
                    v-model="selectThree"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <a class="services-search">
              <span>Search </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.49 81.49">
                <defs></defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Capa_1" data-name="Capa 1">
                    <path
                      class="cls-1"
                      d="M15.35,37.93a3,3,0,0,1-3-2.71,20.58,20.58,0,0,1,5.88-16.68A3,3,0,0,1,22.5,22.8a14.55,14.55,0,0,0-4.15,11.82,3,3,0,0,1-2.7,3.3Z"
                    />
                    <path
                      class="cls-1"
                      d="M34.42,68.84A34.42,34.42,0,1,1,68.84,34.42,34.46,34.46,0,0,1,34.42,68.84ZM34.42,6a28.4,28.4,0,1,0,28.4,28.4A28.43,28.43,0,0,0,34.42,6Z"
                    />
                    <path
                      class="cls-1"
                      d="M78.48,81.49a3,3,0,0,1-2.13-.89L54.47,58.73a3,3,0,1,1,4.26-4.26L80.6,76.35a3,3,0,0,1-2.12,5.14Z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="common">
      <div class="container">
        <div class="slider-header">
          <div class="row">
            <div class="col-12 col-md-9">
              <h2>Common interests</h2>
              <p>Lorem Ipsum is simply dummy is the text of the printing .</p>
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

    <div class="common">
      <div class="container">
        <div class="slider-header">
          <div class="row">
            <div class="col-12 col-md-9">
              <h2>Our Services</h2>
              <p>Lorem Ipsum is simply dummy is the text of the printing .</p>
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

    <div class="common">
      <div class="container">
        <div class="slider-header">
          <div class="row">
            <div class="col-12 col-md-9">
              <h2>Get to know the initiators</h2>
              <p>Lorem Ipsum is simply dummy is the text of the printing .</p>
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
  </div>
</template>

<script>
import BaseDetailCard from "../components/base/BaseDetailCard.vue";
const categoryOne = {
  label: "All",
};
const categoryTwo = {
  label: "All",
};
const categoryThree = {
  label: "All",
};
export default {
  components: { BaseDetailCard },
  props: {
    isOpen: Boolean,
  },

  data() {
    return {
      openOrNot: this.isOpen,
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
      options_sub_one: [
        { code: null, label: "All" },
        { code: "a", label: "This is First option" },
        { code: "b", label: "Selected Option" },
        { code: "c", label: "Search for Idea" },
      ],
      options_sub_two: [
        { code: null, label: "All" },
        { code: "a", label: "This is First option" },
        { code: "b", label: "Selected Option" },
        { code: "c", label: "Search for Idea" },
      ],
      options_sub_three: [
        { code: null, label: "All" },
        { code: "a", label: "This is First option" },
        { code: "b", label: "Selected Option" },
        { code: "c", label: "Search for Idea" },
      ],
      selectOne: categoryOne,
      selectTwo: categoryTwo,
      selectThree: categoryThree,
      sliderOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        breakpoints: {
          1200: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
        },
      },
    };
  },
  watch: {
    isOpen: function (val) {
      if (val) {
        console.log("Child", val);
        document.querySelector("body main > div").classList.add("d-none");
        document.querySelector("body").style.backgroundColor = "#234156";
        document.querySelector("footer").classList.add("d-none");
      } else {
        console.log("Child", val);
        document.querySelector("body").removeAttribute("style");
        document.querySelector("body main > div").classList.remove("d-none");
        document.querySelector("footer").classList.remove("d-none");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.our-services {
  --toggleColor: #009cde;
  background-color: $thirdColor;
  height: auto;
  padding-top: 30px;
  position: absolute;
  top: 130px;
  left: 0;
  right: 0;
  z-index: 200000;
  @media screen and (min-width: 1600px) {
    top: 150px;
  }
  .container-right {
    position: relative;
    /deep/ {
      .sliderNavigation {
        top: -130px;
        z-index: 0;
        height: 0;
        --border: var(--swiper-theme-color);
        --arrow: var(--swiper-theme-color);
        @media screen and (max-width: 767px) {
          .container {
            padding: 0px 15px;
          }
        }
        @media screen and (max-width: 991px) {
          top: -100px;
        }
        @media screen and (max-width: 767px) {
          top: -50px;
          left: 0;
          right: auto;
        }
        &__controls {
          @media screen and (max-width: 767px) {
            margin-left: unset;
            margin-right: auto;
          }
          max-width: 340px;
          &--pagination,
          &--pause {
            display: none;
          }
          button {
            transition: 0.5s ease all;
            &:hover {
              opacity: 1;
              --border: #fff;
              --arrow: #000;
              background: #fff;
            }
          }
          #prevArrow {
            margin-right: 10px;
          }
        }
      }
    }
  }
  @include prefixer(transition, all 0.4s ease-in-out, o moz wibket);
  @media (max-width: 991.98px) {
    top: 183px;
  }
  @include xSmall {
    top: 144px;
  }
  h2 {
    color: $whiteColor;
    text-transform: uppercase;
    @include fonts($Gotham-bold, 42px);
    margin-bottom: 12px;
    z-index: 1;
    position: relative;
    @media (max-width: 991.98px) {
      font-size: 30px;
    }
  }
  .services-drop-down {
    margin-bottom: 90px;
    @include small_medium {
      margin-bottom: 40px;
    }

    > .row {
      align-items: center;
      @include small_medium {
        padding-inline-start: 5px;
        padding-inline-end: 5px;
      }
    }

    .drop-down-itmes {
      background-color: $whiteColor;
      border-radius: 44px;
      padding: 20px 50px;
      height: 110px;
      @media (max-width: 991.98px) {
        padding: 10px 20px;
        height: fit-content;
      }
      @include small_medium {
        margin-bottom: 15px;
      }

      .row {
        > div {
          &:nth-child(2) {
            position: relative;
            &::after {
              @include postionUrl(
                6px,
                auto,
                0,
                absolute,
                url("../../assets/images/home/separators-line.png")
              );
              @include small_medium {
                display: none;
              }
            }
            &::before {
              @include postionUrl(
                6px,
                0,
                auto,
                absolute,
                url("../../assets/images/home/separators-line.png")
              );
              @include small_medium {
                display: none;
              }
            }
          }
        }
      }
      p {
        @include fonts($Gotham-Book, 24px);
        color: $thirdColor;
        margin-bottom: -4px;
        @media (max-width: 991.98px) {
          font-size: 18px;
        }
        @include xSmall {
          font-size: 13px;
        }
      }

      .nice-select {
        border: none;
        width: 100%;
        padding-left: unset;
        padding-inline-start: 3px;
        @include xSmall {
          padding: 0;
        }
        &::after {
          content: "\f0dd";
          font-family: "FontAwesome";
          border: 0;
          transform: unset;
          top: 0;
          color: $mainColor;
          font-size: 30px;
        }
        span {
          color: $grayColor;
          @include fonts($Gotham-Light, 17px);

          @media (max-width: 991.98px) {
            font-size: 13px;
          }
        }
        .list {
          width: 100%;
          border: 0;
          border-radius: 0;
          top: 48px;
          border-bottom-left-radius: 25px;
          border-bottom-right-radius: 25px;
          @include small_medium {
            top: 32px;
          }

          li {
            position: relative;
            @media (max-width: 991.98px) {
              font-size: 14px;
              padding-left: 11px;
              padding-right: 25px;
            }

            &::after {
              @include postionUrl(
                5px,
                auto,
                11px,
                absolute,
                url("../../assets/images/home/icon/check-icon.png")
              );
              opacity: 0;
              @include prefixer(transition, all 0.3s ease-in-out, o moz wibket);
            }
            &:hover::after {
              opacity: 1;
            }
          }
        }
      }
    }
    .services-search {
      background-color: $mainColor;
      height: 82px;
      line-height: 82px;
      width: 180px;
      border-radius: 41px;
      text-align: center;
      color: $whiteColor;
      @media (max-width: 991.98px) {
        // height: fit-content;
        // width: fit-content;
        height: 65px;
        line-height: 70px;
        width: 150px;
      }
      @extend %d-flex-center;
      cursor: pointer;
      @include prefixer(transition, all 0.5s ease-in-out, o wibket moz);
      &:hover {
        background-color: $secondColor;
      }
      span {
        @include fonts($Gotham-Book, 24px);
        margin-inline-end: 7px;
      }
      svg {
        fill: $whiteColor;
        width: 30px;
      }
    }
  }

  .common {
    margin-bottom: 110px;
    @media (max-width: 991.8px) {
      margin-bottom: 0px;
    }
    .slider-services {
      .swiper-slide {
        margin: 25px 0px;
        @include prefixer(transition, all 0.4s ease-in-out, o moz wibket);
      }
    }
    .slick-slider {
      @include small_medium {
        padding-inline-start: 7px;
      }
    }

    p {
      color: $whiteColor;
      margin-bottom: 40px;
      @include fonts($AlegreyaSans-Regular, 24px);
      @media (max-width: 991.98px) {
        margin-top: 0;
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
    svg {
      width: 60px;
      color: $thirdColor;
      margin-bottom: 30px;
      margin-top: 19px;
      @media (max-width: 991.98px) {
        margin-bottom: 15px;
      }
    }
    .slider-header {
      @media screen and (max-width: 767px) {
        padding-bottom: 40px;
      }
      div {
        &:last-child {
          ul {
            //   @extend %d-flex-around;
            @include small_medium {
              display: flex;
            }
            li {
              display: inline-block;
              line-height: 50px;
              text-align: center;
              cursor: pointer;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background-color: transparent;
              border: 1px solid $mainColor;
              @include prefixer(transition, all 0.5s ease-in-out, o moz wibket);
              &:hover {
                background-color: $whiteColor;
                border: none;
                & i {
                  color: #000;
                }
              }
              &:last-child {
                margin-inline-start: 10px;
              }
              i {
                color: $mainColor;
                font-size: 20px;
              }
            }
          }
        }
      }
    }
    .slider-services {
      .swiper-slide-active {
        .slider-item {
          transform: translateY(-19px);
          /deep/ {
            a {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .container-right {
    margin-right: 0;
    margin-left: calc(50vw - 375px);
    max-width: auto;
  }
}

@media (min-width: 992px) {
  .container-right {
    margin-right: 0;
    margin-left: calc(50vw - 485px);
    max-width: auto;
  }
}

@media (min-width: 1200px) {
  .container-right {
    margin-right: 0;
    margin-left: calc(50vw - 585px);
  }
}
</style>