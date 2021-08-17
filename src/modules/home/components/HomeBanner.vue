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
                <base-svg-icon
                  icon-id="search-icon"
                  icon-viewbox="0 0 81.49 81.49"
                ></base-svg-icon>
              </span>
              <!-- <img src="img/home/icon/search-icon.png" alt=""> -->
            </div>

            <p>
              <base-svg-icon
                icon-id="bag-icon"
                icon-viewbox="0 0 116.03 96.69"
                class="bagIcon"
              ></base-svg-icon>
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
  .bagIcon {
    display: inline;
  }
  /deep/ {
    .sliderNavigation {
      z-index: 1;
      padding: 0 rem(25px);
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
          border:0 !important;
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