<template>
  <div class="o-services service retail">
    <div class="container">
      <h2>Our Services</h2>
      <p>Lorem Ipsum is simply dummy is the text of the printing .</p>
      <div class="services-slider">
        <div class="services-content position-relative">
          <carousel
            :carousel-settings="sliderOption"
            class="services-content-slider"
            navigation-layout="side"
            navigation-theme="simple"
            id="plo"
          >
            <div class="position-relative swiper-slide slider-item">
              <img src="@/assets/images/home/photo.png" alt="" />
              <h6>Supportive Center Services</h6>
              <span
                >Lorem Ipsum is simply dummy text of the printing and
                typesetting industry...
              </span>
              <a href="#" class="abs-link"></a>
            </div>

            <div class="position-relative swiper-slide slider-item">
              <img src="@/assets/images/home/img-2.png" alt="" />
              <h6>National Registry Services</h6>
              <span
                >Lorem Ipsum is simply dummy text of the printing and
                typesetting industry...
              </span>
              <a href="#" class="abs-link"></a>
            </div>

            <div class="position-relative swiper-slide slider-item">
              <img src="@/assets/images/home/img-3.png" alt="" />
              <h6>Financier Services</h6>
              <span
                >Lorem Ipsum is simply dummy text of the printing and
                typesetting industry...
              </span>
              <a href="#" class="abs-link"></a>
            </div>

            <div class="position-relative swiper-slide slider-item">
              <img src="@/assets/images/home/img-4.png" alt="" />
              <h6>Training and Mentoring</h6>
              <span
                >Lorem Ipsum is simply dummy text of the printing and
                typesetting industry...
              </span>
              <a href="#" class="abs-link"></a>
            </div>

            <div class="position-relative swiper-slide slider-item">
              <img src="@/assets/images/home/img-4.png" alt="" />
              <h6>Training and Mentoring</h6>
              <span
                >Lorem Ipsum is simply dummy text of the printing and
                typesetting industry...
              </span>
              <a href="#" class="abs-link"></a>
            </div>

            <div class="position-relative swiper-slide slider-item">
              <img src="@/assets/images/home/img-4.png" alt="" />
              <h6>Training and Mentoring</h6>
              <span
                >Lorem Ipsum is simply dummy text of the printing and
                typesetting industry...
              </span>
              <a href="#" class="abs-link"></a>
            </div>
          </carousel>
        </div>
      </div>
      <a href="#">Explore More<i class="fa fa-arrow-right"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        breakpoints: {
          1200: {
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
};
</script>

<style lang="scss" scoped>
.o-services {
  background-image: url("../../../assets/images/home/bg-services.png");
  .services-slider {
    @media screen and (max-width: 1600px) {
      margin: 0px rem(42px);
    }
  }
  .slider-item {
    margin: rem(25px) 0px;
  }
  /deep/ {
    .sideNavigation {
      height: 100%;
      z-index: 0;
      button {
        .fa {
          font-size: 30px;
        }
      }
    }
  }
}
</style>