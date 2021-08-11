<template>
  <div class="awardsRecognitions" :aria-label="ariaLabel" role="region">
    <div class="awardsRecognitions__slideHead">
      <carousel
        navigationTheme="simple"
        navigationLayout="side"
        :carousel-settings="sliderOption"
        @init="setThumbSlider"
      >
        <div class="swiper-slide awardsRecognitions__slideHead--slide">
          <a href="#" @click.prevent>
            <div class="logoHead">
              <img
                src="@/assets/images/tabs-icon/calendar.png"
                class="img-fluid unselect"
                alt=""
              />
              <img
                src="@/assets/images/tabs-icon/calendar-hover.png"
                class="img-fluid select"
                alt=""
              />
            </div>
            <span class="logoLabel">CommsMEA Awards</span>
          </a>
        </div>
        <div class="swiper-slide awardsRecognitions__slideHead--slide">
          <a href="#" @click.prevent>
            <div class="logoHead">
              <img
                src="@/assets/images/tabs-icon/calendar.png"
                class="img-fluid unselect"
                alt=""
              />
              <img
                src="@/assets/images/tabs-icon/calendar-hover.png"
                class="img-fluid select"
                alt=""
              />
            </div>
            <span class="logoLabel">Advertising Creativity Award</span>
          </a>
        </div>
        <div class="swiper-slide awardsRecognitions__slideHead--slide">
          <a href="#" @click.prevent>
            <div class="logoHead">
              <img
                src="@/assets/images/tabs-icon/calendar.png"
                class="img-fluid unselect"
                alt=""
              />
              <img
                src="@/assets/images/tabs-icon/calendar-hover.png"
                class="img-fluid select"
                alt=""
              />
            </div>
            <span class="logoLabel">Best Brand</span>
          </a>
        </div>
        <div class="swiper-slide awardsRecognitions__slideHead--slide">
          <a href="#" @click.prevent>
            <div class="logoHead">
              <img
                src="@/assets/images/tabs-icon/calendar.png"
                class="img-fluid unselect"
                alt=""
              />
              <img
                src="@/assets/images/tabs-icon/calendar-hover.png"
                class="img-fluid select"
                alt=""
              />
            </div>
            <span class="logoLabel">Sa lem Al Ali Informatics Award</span>
          </a>
        </div>
        <div class="swiper-slide awardsRecognitions__slideHead--slide">
          <a href="#" @click.prevent>
            <div class="logoHead">
              <img
                src="@/assets/images/tabs-icon/calendar.png"
                class="img-fluid unselect"
                alt=""
              />
              <img
                src="@/assets/images/tabs-icon/calendar-hover.png"
                class="img-fluid select"
                alt=""
              />
            </div>
            <span class="logoLabel">Telecom Review Leaders’ Summit</span>
          </a>
        </div>
        <div class="swiper-slide awardsRecognitions__slideHead--slide">
          <a href="#" @click.prevent>
            <div class="logoHead">
              <img
                src="@/assets/images/tabs-icon/calendar.png"
                class="img-fluid unselect"
                alt=""
              />
              <img
                src="@/assets/images/tabs-icon/calendar-hover.png"
                class="img-fluid select"
                alt=""
              />
            </div>
            <span class="logoLabel">Forbes’ World’s Employers list</span>
          </a>
        </div>
        <div class="swiper-slide awardsRecognitions__slideHead--slide">
          <a href="#" @click.prevent>
            <div class="logoHead">
              <img
                src="@/assets/images/tabs-icon/calendar.png"
                class="img-fluid unselect"
                alt=""
              />
              <img
                src="@/assets/images/tabs-icon/calendar-hover.png"
                class="img-fluid select"
                alt=""
              />
            </div>
            <span class="logoLabel">ISO 9001:2015 Award</span>
          </a>
        </div>
        <div class="swiper-slide awardsRecognitions__slideHead--slide">
          <a href="#" @click.prevent>
            <div class="logoHead">
              <img
                src="@/assets/images/tabs-icon/calendar.png"
                class="img-fluid unselect"
                alt=""
              />
              <img
                src="@/assets/images/tabs-icon/calendar-hover.png"
                class="img-fluid select"
                alt=""
              />
            </div>
            <span class="logoLabel">Entreprenuer ME award</span>
          </a>
        </div>
        <div class="swiper-slide awardsRecognitions__slideHead--slide">
          <a href="#" @click.prevent>
            <div class="logoHead">
              <img
                src="@/assets/images/tabs-icon/calendar.png"
                class="img-fluid unselect"
                alt=""
              />
              <img
                src="@/assets/images/tabs-icon/calendar-hover.png"
                class="img-fluid select"
                alt=""
              />
            </div>
            <span class="logoLabel">Brand Finance Middle East</span>
          </a>
        </div>
        <div class="swiper-slide awardsRecognitions__slideHead--slide">
          <a href="#" @click.prevent>
            <div class="logoHead">
              <img
                src="@/assets/images/tabs-icon/calendar.png"
                class="img-fluid unselect"
                alt=""
              />
              <img
                src="@/assets/images/tabs-icon/calendar-hover.png"
                class="img-fluid select"
                alt=""
              />
            </div>
            <span class="logoLabel">Best Tel ecom Brand</span>
          </a>
        </div>
      </carousel>
    </div>
    <div class="awardsRecognitions__main">
      <div class="container">
        <carousel
          navigation-layout="bottom"
          :carousel-settings="sliderOptionTwo"
          slider-type="slider"
        >
          <div class="swiper-slide">
            <div class="awardsRecognitions__details">
              <div class="awardsRecognitions__details--image">
                <img
                  src="@/assets/images/about/awardDetail.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="awardsRecognitions__details--detail">
                <h3 class="title" id="Zain_crowned">
                  Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World
                  Middle East Awards 2019
                </h3>
                <base-smooth-scrollbar height="170px">
                  <p class="detail" tabindex="-1">
                    Zain, the leading mobile telecom innovator in eight markets
                    across the Middle East and Africa, announces it has been
                    awarded the ‘Best Telecom Operator’ and ‘Best Brand’
                    accolade for 2019 at the prestigious Telecoms World Middle
                    East Awards event held in Dubai this week. This honor marks
                    a record sixth consecutive year that Zain has won the ‘Best
                    Brand’ award..
                  </p>
                </base-smooth-scrollbar>
                <router-link
                  to="/"
                  class="btn btn-primary"
                  aria-labelledby="Zain_crowned"
                  >explore more</router-link
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="awardsRecognitions__details">
              <div class="awardsRecognitions__details--image">
                <img
                  src="@/assets/images/about/awardDetail.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="awardsRecognitions__details--detail">
                <h3 class="title" id="Zain_crowned">
                  Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World
                  Middle East Awards 2019
                </h3>
                <base-smooth-scrollbar height="170px">
                  <p class="detail" tabindex="-1">
                    Zain, the leading mobile telecom innovator in eight markets
                    across the Middle East and Africa, announces it has been
                    awarded the ‘Best Telecom Operator’ and ‘Best Brand’
                    accolade for 2019 at the prestigious Telecoms World Middle
                    East Awards event held in Dubai this week. This honor marks
                    a record sixth consecutive year that Zain has won the ‘Best
                    Brand’ award..
                  </p>
                </base-smooth-scrollbar>
                <router-link
                  to="/"
                  class="btn btn-primary"
                  aria-labelledby="Zain_crowned"
                  >explore more</router-link
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="awardsRecognitions__details">
              <div class="awardsRecognitions__details--image">
                <img
                  src="@/assets/images/about/awardDetail.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="awardsRecognitions__details--detail">
                <h3 class="title" id="Zain_crowned">
                  Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World
                  Middle East Awards 2019
                </h3>
                <base-smooth-scrollbar height="170px">
                  <p class="detail">
                    Zain, the leading mobile telecom innovator in eight markets
                    across the Middle East and Africa, announces it has been
                    awarded the ‘Best Telecom Operator’ and ‘Best Brand’
                    accolade for 2019 at the prestigious Telecoms World Middle
                    East Awards event held in Dubai this week. This honor marks
                    a record sixth consecutive year that Zain has won the ‘Best
                    Brand’ award..
                  </p>
                </base-smooth-scrollbar>
                <router-link
                  to="/"
                  class="btn btn-primary"
                  aria-labelledby="Zain_crowned"
                  >explore more</router-link
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="awardsRecognitions__details">
              <div class="awardsRecognitions__details--image">
                <img
                  src="@/assets/images/about/awardDetail.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="awardsRecognitions__details--detail">
                <h3 class="title" id="Zain_crowned">
                  Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World
                  Middle East Awards 2019
                </h3>
                <base-smooth-scrollbar height="170px">
                  <p class="detail">
                    Zain, the leading mobile telecom innovator in eight markets
                    across the Middle East and Africa, announces it has been
                    awarded the ‘Best Telecom Operator’ and ‘Best Brand’
                    accolade for 2019 at the prestigious Telecoms World Middle
                    East Awards event held in Dubai this week. This honor marks
                    a record sixth consecutive year that Zain has won the ‘Best
                    Brand’ award..
                  </p>
                </base-smooth-scrollbar>
                <router-link
                  to="/"
                  class="btn btn-primary"
                  aria-labelledby="Zain_crowned"
                  >explore more</router-link
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="awardsRecognitions__details">
              <div class="awardsRecognitions__details--image">
                <img
                  src="@/assets/images/about/awardDetail.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="awardsRecognitions__details--detail">
                <h3 class="title" id="Zain_crowned">
                  Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World
                  Middle East Awards 2019
                </h3>
                <base-smooth-scrollbar height="170px">
                  <p class="detail">
                    Zain, the leading mobile telecom innovator in eight markets
                    across the Middle East and Africa, announces it has been
                    awarded the ‘Best Telecom Operator’ and ‘Best Brand’
                    accolade for 2019 at the prestigious Telecoms World Middle
                    East Awards event held in Dubai this week. This honor marks
                    a record sixth consecutive year that Zain has won the ‘Best
                    Brand’ award..
                  </p>
                </base-smooth-scrollbar>
                <router-link
                  to="/"
                  class="btn btn-primary"
                  aria-labelledby="Zain_crowned"
                  >explore more</router-link
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="awardsRecognitions__details">
              <div class="awardsRecognitions__details--image">
                <img
                  src="@/assets/images/about/awardDetail.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="awardsRecognitions__details--detail">
                <h3 class="title" id="Zain_crowned">
                  Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World
                  Middle East Awards 2019
                </h3>
                <base-smooth-scrollbar height="170px">
                  <p class="detail">
                    Zain, the leading mobile telecom innovator in eight markets
                    across the Middle East and Africa, announces it has been
                    awarded the ‘Best Telecom Operator’ and ‘Best Brand’
                    accolade for 2019 at the prestigious Telecoms World Middle
                    East Awards event held in Dubai this week. This honor marks
                    a record sixth consecutive year that Zain has won the ‘Best
                    Brand’ award..
                  </p>
                </base-smooth-scrollbar>
                <router-link
                  to="/"
                  class="btn btn-primary"
                  aria-labelledby="Zain_crowned"
                  >explore more</router-link
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="awardsRecognitions__details">
              <div class="awardsRecognitions__details--image">
                <img
                  src="@/assets/images/about/awardDetail.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="awardsRecognitions__details--detail">
                <h3 class="title" id="Zain_crowned">
                  Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World
                  Middle East Awards 2019
                </h3>
                <base-smooth-scrollbar height="170px">
                  <p class="detail">
                    Zain, the leading mobile telecom innovator in eight markets
                    across the Middle East and Africa, announces it has been
                    awarded the ‘Best Telecom Operator’ and ‘Best Brand’
                    accolade for 2019 at the prestigious Telecoms World Middle
                    East Awards event held in Dubai this week. This honor marks
                    a record sixth consecutive year that Zain has won the ‘Best
                    Brand’ award..
                  </p>
                </base-smooth-scrollbar>
                <router-link
                  to="/"
                  class="btn btn-primary"
                  aria-labelledby="Zain_crowned"
                  >explore more</router-link
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="awardsRecognitions__details">
              <div class="awardsRecognitions__details--image">
                <img
                  src="@/assets/images/about/awardDetail.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="awardsRecognitions__details--detail">
                <h3 class="title" id="Zain_crowned">
                  Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World
                  Middle East Awards 2019
                </h3>
                <base-smooth-scrollbar height="170px">
                  <p class="detail">
                    Zain, the leading mobile telecom innovator in eight markets
                    across the Middle East and Africa, announces it has been
                    awarded the ‘Best Telecom Operator’ and ‘Best Brand’
                    accolade for 2019 at the prestigious Telecoms World Middle
                    East Awards event held in Dubai this week. This honor marks
                    a record sixth consecutive year that Zain has won the ‘Best
                    Brand’ award..
                  </p>
                </base-smooth-scrollbar>
                <router-link
                  to="/"
                  class="btn btn-primary"
                  aria-labelledby="Zain_crowned"
                  >explore more</router-link
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="awardsRecognitions__details">
              <div class="awardsRecognitions__details--image">
                <img
                  src="@/assets/images/about/awardDetail.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="awardsRecognitions__details--detail">
                <h3 class="title" id="Zain_crowned">
                  Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World
                  Middle East Awards 2019
                </h3>
                <base-smooth-scrollbar height="170px">
                  <p class="detail">
                    Zain, the leading mobile telecom innovator in eight markets
                    across the Middle East and Africa, announces it has been
                    awarded the ‘Best Telecom Operator’ and ‘Best Brand’
                    accolade for 2019 at the prestigious Telecoms World Middle
                    East Awards event held in Dubai this week. This honor marks
                    a record sixth consecutive year that Zain has won the ‘Best
                    Brand’ award..
                  </p>
                </base-smooth-scrollbar>
                <router-link
                  to="/"
                  class="btn btn-primary"
                  aria-labelledby="Zain_crowned"
                  >explore more</router-link
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="awardsRecognitions__details">
              <div class="awardsRecognitions__details--image">
                <img
                  src="@/assets/images/about/awardDetail.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="awardsRecognitions__details--detail">
                <h3 class="title" id="Zain_crowned">
                  Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World
                  Middle East Awards 2019
                </h3>
                <base-smooth-scrollbar height="170px">
                  <p class="detail">
                    Zain, the leading mobile telecom innovator in eight markets
                    across the Middle East and Africa, announces it has been
                    awarded the ‘Best Telecom Operator’ and ‘Best Brand’
                    accolade for 2019 at the prestigious Telecoms World Middle
                    East Awards event held in Dubai this week. This honor marks
                    a record sixth consecutive year that Zain has won the ‘Best
                    Brand’ award..
                  </p>
                </base-smooth-scrollbar>
                <router-link
                  to="/"
                  class="btn btn-primary"
                  aria-labelledby="Zain_crowned"
                  >explore more</router-link
                >
              </div>
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionTitle: String,
    ariaLabel: String,
  },
  data() {
    return {
      sliderOption: {
        slidesPerView: 1,
        slideToClickedSlide: true,
        rtl: this.$i18n.locale == "en" ? false : true,
        breakpoints: {
          992: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          576: {
            slidesPerView: 3,
          },
          370: {
            slidesPerView: 2,
          },
        },
      },
      sliderOptionTwo: {
        slidesPerView: 1,
        simulateTouch: false,
        spaceBetween: 10,
        rtl: this.$i18n.locale == "en" ? false : true,
      },
      thumbSlider: null,
    };
  },
  methods: {
    setThumbSlider(slider) {
      this.thumbSlider = slider;
      var thumbs = { swiper: slider };
      this.sliderOptionTwo.thumbs = thumbs;
    },
  },
};
</script>

<style lang="scss" scoped>
.awardsRecognitions {
  /deep/ {
    .sideWrapper {
      margin-top: rem(0px);
    }
  }
  padding: 0px 0px rem(25px);
  //   background: url(../../../assets/images/banners/awards.png);
  background-size: cover;
  background-repeat: no-repeat;
  .sectionTitle {
    color: #fff;
    padding-top: 0px;
    padding-bottom: 20px;
  }
  &__detail {
    color: #fff;
    font-weight: 600;
    margin-bottom: 0px;
  }
  &__slideHead {
    position: relative;
    padding-left: calc((100% - 1198px) / 2);
    @media screen and (max-width: 1199px) {
      padding-left: 15px;
    }
    @media screen and (max-width: 370px) {
      padding-left: 0;
    }
    /deep/ {
      .swiper-wrapper {
        padding: 20px 7px;
        padding-top: 35px;
        @media screen and (max-width: 370px) {
          padding-left: 0;
          padding-right: 0;
        }
      }
      > div {
        .sliderNavigation {
          display: none;
        }
      }
    }
    &--slide {
      text-align: center;
      transform: scale(0.8);
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        &:focus {
          outline-width: 3px;
          outline-offset: 4px;
        }
      }
      .logoHead {
        height: 170px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
        box-shadow: 0px 0px 12px 2px rgba($color: black, $alpha: 0.1);
        border: 2px solid #e6eaec;

        img {
          width: 0px;
          height: 0px;
        }
        img.unselect {
          width: auto;
          height: auto;
        }
      }
      .logoLabel {
        font-size: rem(18px);
        color: var(--secondary);
        text-transform: uppercase;
        font-weight: 500;
        margin-top: rem(20px);
        display: inline-block;
        @media screen and (max-width: 767px) {
          font-size: rem(16px);
        }
      }
      &.swiper-slide-thumb-active {
        transform: scale(0.9);

        @media screen and (max-width: 991px) {
          transform: scale(0.9);
        }
        @media screen and (max-width: 575px) {
          transform: scale(0.9);
        }
        .logoHead {
          background: var(--secondary);
          img {
            width: 0;
            height: 0;
          }
          img.select {
            width: auto;
            height: auto;
          }
        }
      }
    }
  }
  &__main {
    position: relative;
    margin-top: rem(32px);
    /deep/ {
      .sliderNavigation {
        --color: var(--highlight);
        --arrow: var(--secondary);
        --border: var(--secondary);
        --topborder: #fff;
        button {
          transition: 0.3s ease all;
          &:hover {
            background: var(--secondary);
            --arrow: #fff;
            opacity: 1;
          }
        }
        @media screen and (min-width: 1200px) {
          z-index: 1;
          width: max-content;
          right: calc((100% - 1230px) / 2);
        }
        @media screen and (max-width: 1199px) {
          .sliderNavigation__controls {
            text-align: right;
            button#prevArrow {
              margin-right: 10px;
            }
          }
        }
      }
      @media screen and (min-width: 1200px) {
        .swiper-wrapper {
          padding-bottom: rem(30px) !important;
        }
        .sliderNavigation {
          position: absolute;
          max-width: 1200px !important;
          bottom: 10px;
          left: auto !important;
          @media screen and (max-width: 1600px) {
            bottom: 38px !important;
          }
          @media screen and (max-width: 1200px) {
            padding: 0px 10px !important;
          }

          .container {
            padding-inline: 15px !important;
            @media screen and (max-width: 575px) {
              padding: 0 !important;
            }
          }
          &__controls {
            max-width: 450px !important;
            margin-left: auto !important;
            @media screen and (min-width: 1200px) {
              #prevArrow {
                margin-right: rem(15px);
              }
            }
            @media screen and (max-width: 1600px) {
              max-width: 400px !important;
            }
            &--pagination {
              flex: unset !important;
              max-width: 260px !important;
              @media screen and (min-width: 1601px) {
                font-size: rem(25px) !important;
              }
            }
          }
          @media screen and (max-width: 414px) {
            bottom: -9px;
          }
        }
      }
    }
  }
  &__details {
    display: flex;
    &--image {
      flex: 0 0 490px;
      max-width: 490px;
      height: 285px;
      margin-right: 25px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &--detail {
      flex: 1;
      .title {
        font-size: rem(22px);
        font-weight: 500;
        color: var(--secondary);
        margin-bottom: rem(12px);
      }
      .detail {
        color: #82919c;
        font-size: rem(18px);
      }
      /deep/ .scrollArea {
        --h: 170px;
        margin-bottom: 10px;
        @media screen and (max-width: 852px) {
          --h: 150px;
          margin-bottom: 15px;
        }
      }
      a {
        visibility: hidden;
        @media screen and (max-width: 767px) {
          margin-left: rem(15px);
          margin-bottom: rem(10px);
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    &__details {
      &--image {
        flex: 0 0 400px;
        max-width: 400px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    &__details {
      flex-direction: column;
      &--image {
        flex: none;
        max-width: 100%;
        height: 300px;
        margin: 0 0 rem(30px) 0 !important;
      }
      &--detail {
        .title {
          font-size: rem(20px);
        }
        .detail {
          font-size: rem(19px);
        }
        /deep/.scrollArea {
          --h: 130px;
        }
      }
    }
  }
  /deep/ {
    .swiper-slide-active {
      .awardsRecognitions__details--detail a {
        visibility: visible;
      }
    }
  }
}
[lang="ar"] {
  .awardsRecognitions {
    &__slideHead {
      padding-right: calc((100% - 1198px) / 2);
      padding-left: 0;
      @media screen and (max-width: 1199px) {
        padding-right: 15px;
        padding-left: 0;
      }
      @media screen and (max-width: 370px) {
        padding-right: 0;
      }
    }
    &__main {
      /deep/ {
        .sliderNavigation {
          @media screen and (min-width: 1200px) {
            left: calc((100% - 1230px) / 2);
            right: auto;
          }
        }
        @media screen and (min-width: 1200px) {
          .sliderNavigation {
            right: auto !important;
            left: calc((100% - 1230px) / 2) !important;
            &__controls {
              margin-right: auto !important;
              margin-left: 0 !important;
              &--arrow {
                transform: rotate(180deg);
              }
              @media screen and (min-width: 1200px) {
                #prevArrow {
                  margin-left: rem(15px);
                  margin-right: 0;
                }
              }
            }
          }
        }
      }
    }
    &__details {
      &--image {
        margin-left: 25px;
        margin-right: 0;
      }
      &--detail {
        a {
          @media screen and (max-width: 767px) {
            margin-right: rem(15px);
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
