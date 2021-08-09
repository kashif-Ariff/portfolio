<template>
  <div class="initiators service entertainment">
    <div class="container">
      <div class="slider-header">
        <div class="row">
          <div class="col-12 col-md-9">
            <h2>Get to know the initiators</h2>
            <p>Lorem Ipsum is simply dummy is the text of the printing .</p>
          </div>
          <div class="col-12 col-lg-3">
            <a href="#">View All</a>
            <ul class="list-unstyled" style="visibility: hidden">
              <li class="initiators-prev">
                <i class="fa fa-angle-left"></i>
              </li>
              <li class="initiators-next">
                <i class="fa fa-angle-right"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container-right position-relative">
      <carousel
        :carousel-settings="sliderOption"
        class="slider-services"
        id="initiators-slider"
      >
        <div class="swiper-slide slider-item">
          <div class="slider-item-photo">
            <img src="@/assets/images/home/photo-2.png" alt="" />
          </div>
          <div class="slider-item-content">
            <div>
              <base-svg-icon
                icon-id="book-icon"
                icon-viewbox="0 0 188.31 188.31"
              ></base-svg-icon>
              <a href="#">Veiw More</a>
            </div>
            <div>
              <h6>Small and Medium Enterprises Guide</h6>
              <p>
                Lorem Ipsum is simply dummy is the text of the printing and the
                typesetting industry since 1500.
              </p>
            </div>
          </div>
          <a href="#" class="abs-link"></a>
        </div>

        <div class="swiper-slide slider-item">
          <div class="slider-item-photo">
            <img src="@/assets/images/home/phot-3.png" alt="" />
          </div>
          <div class="slider-item-content">
            <div>
              <base-svg-icon
                icon-id="success-icon"
                icon-viewbox="0 0 174.79 194.23"
              ></base-svg-icon>
              <a href="#">Veiw More</a>
            </div>
            <div>
              <h6>Success Stories</h6>
              <p>
                Lorem Ipsum is simply dummy is the text of the printing and the
                typesetting industry since 1500.
              </p>
            </div>
          </div>

          <a href="#" class="abs-link"></a>
        </div>

        <div class="swiper-slide slider-item">
          <div class="slider-item-photo">
            <img src="@/assets/images/home/photo-4.png" alt="" />
          </div>
          <div class="slider-item-content">
            <div>
              <base-svg-icon
                icon-id="inform-icon"
                icon-viewbox="0 0 187.35 178.3"
              ></base-svg-icon>
              <a href="#">Veiw More</a>
            </div>
            <div>
              <h6>Advertisements of initiators</h6>
              <p>
                Lorem Ipsum is simply dummy is the text of the printing and the
                typesetting industry since 1500.
              </p>
            </div>
          </div>
          <a href="#" class="abs-link"></a>
        </div>

        <div class="swiper-slide slider-item">
          <div class="slider-item-photo">
            <img src="@/assets/images/home/photo-2.png" alt="" />
          </div>
          <div class="slider-item-content">
            <div>
              <base-svg-icon
                icon-id="book-icon"
                icon-viewbox="0 0 188.31 188.31"
              ></base-svg-icon>
              <a href="#">Veiw More</a>
            </div>
            <div>
              <h6>Small and Medium Enterprises Guide</h6>
              <p>
                Lorem Ipsum is simply dummy is the text of the printing and the
                typesetting industry since 1500.
              </p>
            </div>
          </div>
          <a href="#" class="abs-link"></a>
        </div>

        <div class="swiper-slide slider-item">
          <div class="slider-item-photo">
            <img src="@/assets/images/home/photo-4.png" alt="" />
          </div>
          <div class="slider-item-content">
            <div>
              <base-svg-icon
                icon-id="book-icon"
                icon-viewbox="0 0 188.31 188.31"
              ></base-svg-icon>
              <a href="#">Veiw More</a>
            </div>
            <div>
              <h6>Small and Medium Enterprises Guide</h6>
              <p>
                Lorem Ipsum is simply dummy is the text of the printing and the
                typesetting industry since 1500.
              </p>
            </div>
          </div>
          <a href="#" class="abs-link"></a>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          992: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 2,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.initiators {
  background-image: url("../../../assets/images/home/bg-initators.png");
  .slider-item {
    margin-top: rem(25px) !important;
    margin-bottom: rem(25px) !important;
  }
  .slider-header {
    @media screen and (max-width: 991px) {
      .row {
        margin-bottom: 0px !important;
      }
    }
  }
  /deep/ {
    .swiper-slide-active {
      transform: translateY(-19px);
    }
    .sliderNavigation {
      top: -130px;
      z-index: 0;
      height: 0;
      --border: var(--swiper-theme-color);
      --arrow: var(--swiper-theme-color);
      bottom: 0;
      left: 150px;
      @media screen and (min-width: 1600px) {
        left: 70px;
        top: -162px;
      }
      @media screen and (max-width: 1200px) {
        top: -140px;
        left: 200px;
      }
      @media screen and (max-width: 1042px) {
        left: 200px;
      }
      @media screen and (max-width: 991px) {
        left: 220px;
        top: -100px;
      }
      @media screen and (max-width: 767px) {
        //    left: 220px;
        top: -106px;
      }
      &__controls {
        max-width: 340px;
        @media screen and (max-width: 991px) {
          max-width: 530px;
          margin: auto;
        }
        @media screen and (max-width: 844px) {
          max-width: 480px;
        }
        @media screen and (max-width: 767px) {
          max-width: 340px;
          margin-left: auto;
          margin-right: unset;
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
          margin-right: 10px;
        }
      }
    }
  }
}
</style>