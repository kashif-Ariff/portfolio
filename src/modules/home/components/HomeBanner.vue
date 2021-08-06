<template>
  <div>
    <search-modal
      @closeSearch="isOpenSearch = false"
      :isSearch="isOpenSearch"
    ></search-modal>
    <div class="header-div service clinics" id="clinics">
      <div class="overlay"></div>
      <div class="container">
        <video-modal
          @CloseVideo="isShowVideo = false"
          :isVideo="isShowVideo"
        ></video-modal>
        <carousel
          class="header-slider"
          :fractionPagination="true"
          navigation-theme="simple"
          :carousel-settings="sliderOption"
          v-if="!isShowVideo"
        >
          <div class="swiper-slide heaer-slider-item">
            <h2>
              THE NATIONAL FUND FOR SMALL AND MEDIUM ENTERPRISE DEVELOPMENT
            </h2>
            <div
              @click="isOpenSearch = true"
              class="slider-search position-relative"
            >
              <p>
                <vue-typer
                  text="Enter Business, Investor or Project..."
                  erase-style="clear"
                ></vue-typer>
              </p>
              <span class="search-icon">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 81.49 81.49"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Capa_1" data-name="Capa 1">
                      <path
                        class="cls-1"
                        d="M15.35,37.93a3,3,0,0,1-3-2.71,20.58,20.58,0,0,1,5.88-16.68A3,3,0,0,1,22.5,22.8a14.55,14.55,0,0,0-4.15,11.82,3,3,0,0,1-2.7,3.3Z"
                      ></path>
                      <path
                        class="cls-1"
                        d="M34.42,68.84A34.42,34.42,0,1,1,68.84,34.42,34.46,34.46,0,0,1,34.42,68.84ZM34.42,6a28.4,28.4,0,1,0,28.4,28.4A28.43,28.43,0,0,0,34.42,6Z"
                      ></path>
                      <path
                        class="cls-1"
                        d="M78.48,81.49a3,3,0,0,1-2.13-.89L54.47,58.73a3,3,0,1,1,4.26-4.26L80.6,76.35a3,3,0,0,1-2.12,5.14Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
              <!-- <img src="img/home/icon/search-icon.png" alt=""> -->
            </div>

            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 116.03 96.69"
              >
                <defs></defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Capa_1" data-name="Capa 1">
                    <path
                      class="cls-1"
                      d="M106.36,14.5H82.19V9.67A9.68,9.68,0,0,0,72.52,0h-29a9.68,9.68,0,0,0-9.67,9.67V14.5H9.67A9.68,9.68,0,0,0,0,24.17V38.68a9.68,9.68,0,0,0,9.67,9.67H48.35V45.93a2.41,2.41,0,0,1,2.41-2.42H65.27a2.42,2.42,0,0,1,2.42,2.42v2.42h38.67A9.68,9.68,0,0,0,116,38.68V24.17A9.68,9.68,0,0,0,106.36,14.5Zm-62.85,0V9.67h29V14.5Z"
                    />
                    <path
                      class="cls-1"
                      d="M114.69,51a2.41,2.41,0,0,0-2.53.23,9.56,9.56,0,0,1-5.8,2H67.69v7.25a2.42,2.42,0,0,1-2.42,2.42H50.76a2.41,2.41,0,0,1-2.41-2.42V53.18H9.67a9.53,9.53,0,0,1-5.79-2A2.41,2.41,0,0,0,1.34,51,2.4,2.4,0,0,0,0,53.12V87a9.68,9.68,0,0,0,9.67,9.67h96.69A9.67,9.67,0,0,0,116,87V53.12A2.4,2.4,0,0,0,114.69,51Z"
                    />
                  </g>
                </g>
              </svg>
              <span> Do you want to see our <a href="#">services</a> ? </span>
            </p>
            <div class="watch-video">
              <div class="animate-video" @click="isShowVideo = true">
                <span>
                  <i class="fa fa-play fa-2x"></i>
                </span>
                <div></div>
              </div>
              <div>
                <span
                  >watching <br />
                  video</span
                >
                <span>02:34</span>
              </div>
            </div>
          </div>
          <!--slider-item-->
          <div class="swiper-slide heaer-slider-item">
            <h2>
              THE NATIONAL FUND FOR SMALL AND MEDIUM ENTERPRISE DEVELOPMENT
            </h2>
          </div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import SearchModal from "./partials/SearchModal.vue";
import VideoModal from "./partials/VideoModal.vue";
export default {
  components: { SearchModal, VideoModal },
  data() {
    return {
      sliderOption: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      isOpenSearch: false,
      isShowVideo: false,
    };
  },
  watch: {
    isShowVideo: function (val) {
      var vid = document.getElementById("player");
      if (val) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        vid.play();
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        vid.load();
        vid.pause();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-div {
  background-image: url("../../../assets/images/home/bg-home-new.jpg");
  /deep/ {
    .sliderNavigation {
      z-index: 1;
      padding: 0 25px;
      background-color: #0a2333;
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
        }
        &--pause {
          display: none;
        }
        button {
          position: relative;
          &#prevArrow {
            left: 0;
            &::before {
              content: "";
              height: 100%;
              width: 100%;
              position: absolute;
              top: 0px;
              left: 0px;
              background-color: #0a2333;
              transform: rotate(180deg);
              background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve' fill='%23fff'%3E%3Cg%3E%3Cg%3E%3Cpath d='M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068 c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557 l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104 c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
            }
          }
          &#nextArrow {
            right: 0;
            &::before {
              content: "";
              height: 100%;
              width: 100%;
              position: absolute;
              top: 0px;
              left: 0px;
              background-color: #0a2333;
              background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve' fill='%23fff'%3E%3Cg%3E%3Cg%3E%3Cpath d='M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068 c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557 l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104 c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
            }
          }
        }
      }
    }
  }
}
</style>