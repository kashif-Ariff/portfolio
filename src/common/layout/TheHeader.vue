<template>
  <div>
    <BaseIcons />
    <the-menu @close="closeMenu"></the-menu>
    <FixedHeader :threshold="150">
      <header class="">
        <nav class="nav">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="nav-logo">
                  <img src="@/assets/images/home/logo-one.png" alt="" />
                  <img src="@/assets/images/home/logo-two.png" alt="" />
                </div>
              </div>

              <div class="col-12 col-lg-6">
                <div class="nav-content">
                  <div class="nav-login login-modal-btn">
                    <!-- <i class="fa fa-user-o"></i> -->
                    <vue-fontawesome icon="user-o"></vue-fontawesome>
                    <span>login</span>
                  </div>
                  <div class="nav-services" @click="isService = !isService">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 87.1 87.11"
                    >
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <path
                            d="M31.93,0H7.54A7.55,7.55,0,0,0,0,7.54V31.93a7.55,7.55,0,0,0,7.54,7.54H31.93a7.55,7.55,0,0,0,7.54-7.54V7.54A7.54,7.54,0,0,0,31.93,0Zm1.41,31.93a1.41,1.41,0,0,1-1.41,1.41H7.54a1.41,1.41,0,0,1-1.41-1.41V7.54A1.41,1.41,0,0,1,7.54,6.13H31.93a1.41,1.41,0,0,1,1.41,1.41Z"
                          />
                          <path
                            d="M79.56,0H55.17a7.55,7.55,0,0,0-7.54,7.54V31.93a7.55,7.55,0,0,0,7.54,7.54H79.56a7.55,7.55,0,0,0,7.54-7.54V7.54A7.55,7.55,0,0,0,79.56,0ZM81,31.93a1.41,1.41,0,0,1-1.41,1.41H55.17a1.41,1.41,0,0,1-1.41-1.41V7.54a1.41,1.41,0,0,1,1.41-1.41H79.56A1.41,1.41,0,0,1,81,7.54Z"
                          />
                          <path
                            d="M31.93,47.63H7.54A7.55,7.55,0,0,0,0,55.17V79.56a7.55,7.55,0,0,0,7.54,7.55H31.93a7.55,7.55,0,0,0,7.54-7.55V55.17a7.54,7.54,0,0,0-7.54-7.54Zm1.41,31.93A1.41,1.41,0,0,1,31.93,81H7.54a1.41,1.41,0,0,1-1.41-1.41V55.17a1.41,1.41,0,0,1,1.41-1.41H31.93a1.41,1.41,0,0,1,1.41,1.41Z"
                          />
                          <path
                            d="M79.56,47.63H55.17a7.55,7.55,0,0,0-7.54,7.54V79.56a7.55,7.55,0,0,0,7.54,7.54H79.56a7.54,7.54,0,0,0,7.54-7.54V55.17a7.55,7.55,0,0,0-7.54-7.54ZM81,79.56A1.41,1.41,0,0,1,79.56,81H55.17a1.41,1.41,0,0,1-1.41-1.41V55.17a1.41,1.41,0,0,1,1.41-1.41H79.56A1.41,1.41,0,0,1,81,55.17Z"
                          />
                        </g>
                      </g>
                    </svg>
                    <span><a href="#">our services</a></span>
                  </div>
                  <div class="nav-menu" @click="openMenu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 54.76 41.87"
                    >
                      <defs></defs>
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_4" data-name="Layer 4">
                          <path
                            class="cls-1"
                            d="M17.38,6.44H3.22A3.22,3.22,0,0,1,3.22,0H17.38a3.22,3.22,0,1,1,0,6.44Z"
                          />
                          <path
                            class="cls-1"
                            d="M51.54,24.16H3.22a3.22,3.22,0,0,1,0-6.44H51.54a3.22,3.22,0,0,1,0,6.44Z"
                          />
                          <path
                            class="cls-1"
                            d="M40.54,41.87H3.22a3.22,3.22,0,1,1,0-6.44H40.54a3.22,3.22,0,0,1,0,6.44Z"
                          />
                        </g>
                      </g>
                    </svg>
                    <span>menu</span>
                  </div>
                  <div class="nav-lang">
                    <span>
                      <a href="#">العربية</a>
                    </span>
                  </div>
                  <span v-if="isService" @click="isService = false">
                    <svg
                      id="close-srv"
                      viewBox="0 0 311 311.07733"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"
                      />
                      <path
                        d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <login-popup></login-popup>
      </header>
    </FixedHeader>
    <services :isOpen="isService"></services>
  </div>
</template>
<script>
import BaseIcons from "@/common/components/base/BaseSvgIcons.vue";
import FixedHeader from "vue-fixed-header";
import LoginPopup from "@/common/layout/LoginPopup.vue";
import Services from "@/common/layout/Services.vue";
import TheMenu from "./TheMenu.vue";
import Menu from "@/common/layout/mixin/Menu";
export default {
  mixins: [Menu],
  components: {
    BaseIcons,
    FixedHeader,
    LoginPopup,
    Services,
    TheMenu,
  },
  data() {
    return {
      isService: false,
      isMenuOpen: false,
    };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
      this.$router.go();
    },
  },
  computed: {
    otherLangText() {
      return this.$i18n.locale === "ar" ? "English" : "العربية";
    },
    otherLocale() {
      return this.$i18n.locale === "en" ? "ar" : "en";
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 999999;
  transition: 0.4s ease all;
  &.vue-fixed-header--isFixed {
    background: #224156;
    border-bottom: 1px solid #224156;
    .nav-logo {
      transform: scale(0.99);
      img {
        height: 73px;
        transform: scale(0.9);
        @media screen and (max-width: 575.98px) {
          height: auto;
        }
      }
    }
    nav {
      .nav-content {
        transform: scale(0.9);
      }
    }
  }
}

.header-div {
  // background-image: url("../img/home/bg-home.jpg");
  background-image: url("../../assets/images/home/bg-home-new.jpg");
  height: auto;
  background-size: cover;
  background-position: center;
  padding-bottom: 40px;
  position: relative;
  z-index: 1;
  @media (max-width: 991.98px) {
    height: auto;
    padding-bottom: 55px;
  }
  @include small_medium {
    // height: 85vh;
  }
  &::after {
    // @include postionEle(0, 0, 0, absolute, #0a2333ad, 100%, 100%);
    content: "";
    z-index: -1;
    // @include postionEle(0, 0, 0, absolute, #265c71d1, 100%, 100%);
    @include postionEle(0, 0, 0, absolute, #0a233375, 100%, 100%);
  }
  &.bg-opaciy {
    &::after {
      background-color: #0b1a21e6;
    }
  }
  .header-slider {
    // margin-top: 134px;
    // @media (max-width: 1600px) {
    //     margin-top: 65px;
    // }
    // @media (max-width: 991.98px) {
    //     margin-top: 50px;
    // }
    // @include small_medium {
    //     margin-top: 30px;
    // }
    .heaer-slider-item {
      outline: none;
      margin-top: 250px;
      @media screen and (max-width: 1600px) {
        margin-top: 160px;
      }
      @media screen and (max-width: 991px) {
        margin-top: 235px;
      }
      @media screen and (max-width: 575px) {
        margin-top: 175px;
      }
      h2 {
        color: $whiteColor;
        width: 67%;
        text-align: center;
        margin: auto;
        line-height: 1.4;
        font-size: 42px;
        margin-bottom: 60px;
        @media (max-width: 991.98px) {
          width: 90%;
          margin-bottom: 15px;
          font-size: 35px;
          line-height: 1.2;
        }
        @include small_medium {
          font-size: 20px;
        }
      }
      .slider-search {
        cursor: pointer;
        @extend %d-flex-center;
        background-color: $whiteColor;
        border-radius: 45px;
        width: 90%;
        height: 105px;
        text-align: center;
        margin: auto;
        // line-height: 105px;
        padding-inline-start: 63px;
        padding-inline-end: 28px;
        position: relative;
        @media (max-width: 1600px) {
          height: 90px;
          border-radius: 30px;
        }
        @media (max-width: 991.98px) {
          width: 100%;
          height: 80px;
          line-height: 80px;
        }
        @include xSmall {
          height: 60px;
          line-height: 60px;
          padding-inline-start: 26px;
          padding-inline-end: 13px;
        }
        @media (max-width: 350px) {
          padding-inline-start: 14px;
        }
        // new
        span.search-icon {
          background-color: #009cde;
          width: 75px;
          height: 75px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            color: #ffffff;
            width: 32px;
          }
          @media (max-width: 991.98px) {
            width: 60px;
            height: 60px;
          }
          @include xSmall {
            width: 40px;
            height: 40px;
            svg {
              width: 22px;
            }
          }
          @include xxSmall {
            width: 30px;
            height: 30px;
            svg {
              width: 18px;
            }
          }
        }
        // new
        img {
          width: 75px;
          @media (max-width: 991.98px) {
            width: 60px;
          }
          @include xSmall {
            width: 40px;
          }
          @include xxSmall {
            width: 30px;
          }
        }
        &::before {
          @include textAbsolute(23px, 63px, absolute, $mainColor, 24px);
          content: "Search";
          z-index: 666;
          color: $thirdColor;
          @include fonts($Gotham-Book, 24px);
          @media (max-width: 1600px) {
            top: 13px;
          }
          @media (max-width: 991.98px) {
            top: -17px;
            font-size: 18px;
          }
          @include xSmall {
            font-size: 14px;
            top: -11px;
            left: 25px;
          }
        }
        p {
          flex-grow: 3;
          margin-top: 25px;
          @include fonts($Gotham-Light, 22px);
          color: $grayColor;
          position: relative;
          text-align: left;
          margin-bottom: 0;
          @include small_medium {
            font-size: 14px;
            margin-top: 13px;
          }
          @include xxSmall {
            font-size: 10px;
          }
        }
      }
      > p {
        text-align: center;
        @include fonts($Gotham-bold, 17px);
        color: $whiteColor;
        margin-top: 60px;
        text-transform: uppercase;
        @media (max-width: 991.8px) {
          margin-top: 20px;
        }
        @include small_medium {
          font-size: 14px;
        }
        svg {
          margin-inline-end: 15px;
          display: inline-block;
          width: 50px;
          fill: $mainColor;
          @include xSmall {
            width: 30px;
          }
        }
        a {
          text-decoration: underline;
          @include prefixer(transition, all 0.3s ease-in-out, o wibket moz);
          &:hover {
            color: $mainColor;
          }
        }
      }
      .watch-video {
        display: flex;
        margin-top: 80px;
        padding-bottom: 7px;
        @media (max-width: 991.8px) {
          margin-top: 45px;
        }
        @include xSmall {
          margin-top: 20px;
        }
        .animate-video {
          position: relative;
          cursor: pointer;
          @include prefixer(transition, all 0.3s ease-in-out, o moz wibket);
          &:hover {
            transform: scale(0.7);
            div {
              display: block;
              opacity: 0;
              animation: pulse 1s ease-out infinite;
            }
          }
          span {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $mainColor;
            text-align: center;
            @include small_medium {
              width: 60px;
              height: 60px;
              i {
                font-size: 20px;
              }
            }
          }
          div {
            @include postionEle(
              // -8px,
              // 16px,
              // auto,
              // absolute,
              // transparebt,
              // 100px,
              // 100px
              -2.5px,
              16px,
              auto,
              absolute,
              transparebt,
              95px,
              95px
            );
            right: 16px;
            border: 2px solid $mainColor;
            border-radius: 50%;
            // opacity: 0;
            // animation: pulse 1s ease-out infinite;
            // display: none;
            @include small_medium {
              width: 70px;
              height: 70px;
              left: 7px;
              // right: 10px;
              top: 0px;
            }
          }
        }
        div {
          span {
            text-transform: uppercase;
            display: block;
            color: $whiteColor;
            margin-top: 5px;
            text-align: center;
            margin-inline-start: 24px;
            text-align: left;
            &:first-child {
              @include fonts($Gotham-bold, 16px);
            }
            &:last-child {
              @include fonts($Gotham-Book, 16px);
            }
            @include small_medium {
              margin-inline-start: 12px;
              font-size: 14px !important;
            }
          }
        }
      }
    }
  }
  .slider-arrows {
    @extend %d-flex-between;
    padding: 0 25px;
    background-color: $secondColor;
    width: 350px;
    height: 130px;
    right: 0;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 45px;
    @media (max-width: 991.98px) {
      width: 185px;
      height: 70px;
    }
    @media (max-width: 330px) {
      width: 132px;
      height: 46px;
    }
    ul {
      @extend %d-flex-around;
      width: 50%;
      margin-top: 20px;
      li {
        cursor: pointer;
        opacity: 0.5;
        @include prefixer(transition, all 0.3s ease-in-out, o wibket moz);
        &:hover {
          opacity: 1;
        }
        i {
          color: $whiteColor;
          font-size: 30px;
          @media (max-width: 330px) {
            font-size: 15px;
          }
        }
      }
    }
    span {
      width: 50%;
      font-size: 20px;
      font-weight: bold;
      color: $whiteColor;
      text-align: center;
      @media (max-width: 330px) {
        font-size: 16px;
      }
    }
  }
}

/*-------- Animate -------------*/

@keyframes pulse {
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2, 1.2);
    opacity: 0;
  }
}
nav {
  position: relative;
  border-bottom: 0.5px solid #f8f9fa15;
  padding-bottom: 5px;
  @include prefixer(transition, all 0.2s ease, o moz wibket);
  &::after {
    @include postionEle(0, 0, 0, absolute, $whiteColor, 45%, 100%);
    border-bottom-right-radius: 50px;
    content: "";
    z-index: 0;
    @media (max-width: 991.98px) {
      display: none;
    }
  }
  .row {
    div {
      &:last-child {
        @include xxSmall {
          padding-left: 5px;
          padding-right: 5px;
        }
      }
    }
  }
  .nav-logo {
    position: relative;
    z-index: 1;
    padding: 7px 0;
    transition: 0.4s ease all;
    img {
      transition: 0.4s ease all;
      @include xSmall {
        width: 168px;
        &:last-child {
          @include xSmall {
            width: 50px;
          }
        }
      }
    }
    @media (max-width: 991.98px) {
      text-align: center;
      padding: 15px 0;
    }
  }
  .nav-content {
    @extend %d-flex-between;
    max-height: 100%;
    height: 100%;
    color: $whiteColor;
    transition: 0.4s ease all;
    .nav-services {
      cursor: pointer;
      &.poniter {
        pointer-events: none;
        opacity: 0.5;
      }
    }
    #close-srv {
      width: 18px;
      fill: $whiteColor;
      cursor: pointer;
      margin-right: 0;
    }
    svg {
      margin-inline-end: 10px;
      width: 22px;
      fill: $whiteColor;
      @media (max-width: 1199.98px) {
        margin-inline-end: 0px;
      }
      @include xSmall {
        width: 15px;
      }
      @include xxSmall {
        display: none;
      }
    }
    span {
      text-transform: uppercase;
      @include fonts($Gotham-Book, 16px);
      @include xSmall {
        font-size: 13px;
      }
      @include xxSmall {
        font-size: 12px;
        font-weight: bold;
      }
    }
    .nav-login {
      @extend %d-flex-center;
      background-color: $mainColor;
      height: 50px;
      width: 138px;
      line-height: 50px;
      text-align: center;
      border-radius: 25px;
      position: relative;
      cursor: pointer;
      @include prefixer(transition, all 0.3s ease-in-out, o moz wibket);
      @include xSmall {
        height: 49px;
        width: 67px;
      }
      i {
        font-size: 18px;
        margin-inline-end: 10px;
        @include xSmall {
          margin-inline-end: 2px;
          font-size: 14px;
        }
      }
      // svg {
      //   @include prefixer(transition, all 0.3s ease-in-out, o moz wibket);
      // }
      &:hover {
        background-color: #fff;
        color: $secondColor;
      }
      // &:hover svg {
      //   fill: $secondColor;
      // }
    }
    .nav-menu {
      cursor: pointer;
      position: relative;
      &::before {
        @include postionEle(
          6px,
          -20px,
          // -22%,
          auto,
          absolute,
          $whiteColor,
          0.5px,
          17px
        );
        content: "";
        @include large {
          left: -9px;
        }
        @include xSmall {
          display: none;
        }
      }
      &::after {
        @include postionEle(
          6px,
          auto,
          -20px,
          // -21%,
          absolute,
          $whiteColor,
          0.5px,
          17px
        );
        content: "";
        right: -20px;
        @include large {
          right: -9px;
        }
        @include xSmall {
          display: none;
        }
      }
    }
    .nav-lang {
      a {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

.login {
  display: none;
  position: absolute;
  top: 22px;
  width: 75%;
  z-index: 9999;
  margin: auto;
  left: 0;
  right: 0;
  @include medium {
    width: 90%;
  }
  @include xSmall {
    width: 95%;
    .row {
      padding: 0 10px;
    }
  }
  .login-info {
    padding: 0px 60px;
    padding-top: 39px;
    padding-bottom: 85px;
    background-color: $whiteColor;
    text-align: center;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    @media (max-width: 991.98px) {
      padding-bottom: 56px;
    }
    @include small_medium {
      border-radius: 25px !important;
      padding-inline-end: 20px;
      padding-inline-start: 20px;
    }
    #close-login {
      display: none;
      width: 50px;
      fill: $secondColor;
      @include small_medium {
        cursor: pointer;
        display: inline-block;
        position: absolute;
        right: 8px;
        top: 6px;
        @include prefixer(transition, all 0.3s ease-in-out, o wibket moz);
        &:hover {
          transform: scale(0.7);
        }
      }
      @include xSmall {
        width: 35px;
      }
    }
    h2 {
      @include fonts($Gotham-bold, 42px);
      color: $thirdColor;
      margin-bottom: 60px;
      text-transform: uppercase;
      @media (max-width: 991.98px) {
        font-size: 30px;
        margin-bottom: 38px;
      }
      @include small_medium {
        margin-bottom: 25px;
      }
    }
    form {
      @extend %d-flex-center-column;
      div {
        width: 100%;
        background-color: $bg-input;
        position: relative;
        border-radius: 20px;
        &:first-child {
          svg {
            top: 22px;
          }
        }
        &:last-of-type {
          margin-top: 39px;
          margin-bottom: 39px;
          @include small_medium {
            margin-top: 20px;
            margin-bottom: 20px;
          }
          svg {
            width: 22px;
            fill: $secondColor;
            &:last-of-type {
              left: auto;
              right: 18px;
              cursor: pointer;
              width: 25px;
              top: 23px;
            }
          }
        }
        input {
          @include fonts($Gotham-Book, 21px);
          background-color: inherit;
          color: $thirdColor;
          padding-inline-start: 53px;
          padding-inline-end: 50px;
          border-radius: 10px;
          height: 62px;
          margin: auto;
          width: 100%;
          position: relative;
          @include small_medium {
            padding-inline-start: 44px;
            padding-inline-end: 44px;
          }
          &::placeholder {
            @include fonts($Gotham-Book, 21px);
            color: $thirdColor;
            @include small_medium {
              font-size: 14px;
            }
          }
        }
        svg {
          fill: $secondColor;
          width: 25px;
          position: absolute;
          top: 16px;
          z-index: 1;
          left: 17px;
          @include small_medium {
            width: 20px;
            top: 24px;
          }
        }
      }
      a {
        @include fonts($Gotham-bold, 24px);
        color: $thirdColor;
        // margin-top: 28px;
        margin-top: 2px;
        &:hover {
          text-decoration: underline;
        }
        @include small_medium {
          margin-top: 15px;
          font-size: 18px;
        }
      }
      button {
        @extend %d-flex-center;
        margin-top: 35px;
        background-color: $mainColor;
        @include fonts($Gotham-Book, 18px);
        @include prefixer(transition, all 0.3s ease-in-out, o wibket moz);
        &:hover {
          background-color: $thirdColor;
        }
        @include small_medium {
          margin-top: 15px;
        }
      }
      #sing-up {
        display: none;
        @include small_medium {
          display: block;
        }
      }
    }
  }
  .login-img {
    padding: 0;
    background-image: url("../../assets/images/home/login-img.png");
    // height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    text-align: center;
    z-index: 1;
    @include small_medium {
      display: none;
    }
    &::after {
      @include postionEle(0, 0, 0, absolute, $opacity-color, 100%, 100%);
      content: "";
      z-index: -1;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    }
    svg {
      width: 50px;
      fill: $whiteColor;
      display: block;
      margin-left: auto;
      cursor: pointer;
      margin-inline-end: 15px;
      margin-top: 30px;
      @include prefixer(transition, all 0.3s ease-in-out, o wibket moz);
      &:hover {
        transform: scale(0.7);
      }
    }
    h2 {
      text-transform: uppercase;
      // margin-top: 150px;
      margin-top: 75px;
      @include fonts($Gotham-bold, 42px);
      color: $whiteColor;
      @media (max-width: 991.98px) {
        font-size: 30px;
        margin-top: 61px;
      }
    }
    p {
      @include fonts($Gotham-Light, 24px);
      @include medium {
        font-size: 18px;
      }
      color: $whiteColor;
      margin: 34px 0;
    }
    button {
      border: 1px solid $whiteColor;
      background-color: transparent;
      @extend %d-flex-center;
      margin: auto;
      @include fonts($Gotham-Book, 18px);
      @include prefixer(transition, all 0.3s ease-in-out, o wibket moz);
      &:hover {
        // background-color: #009bde9a;
        // border: none;
        // opacity: .5;
        border: 1px solid rgba(255, 255, 255, 0.5);
      }
    }
  }
}
</style>
