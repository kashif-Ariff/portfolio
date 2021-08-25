<template>
  <div class="loginModal">
    <div id="loginModal" class="modal">
      <div class="login">
        <div class="">
          <div class="row">
            <div class="col-12 col-md-7 login-info">
              <h2>Sign in to Nf</h2>
              <!-- <img src="img/home/icon/close.svg" alt="" id="close-login"> -->
              <base-svg-icon
                icon-id="close-btn"
                icon-viewbox="0 0 512 512"
                id="close-login"
                class="close"
              ></base-svg-icon>

              <form action="">
                <div class="singleItem">
                  <base-svg-icon
                    icon-id="idCard"
                    icon-viewbox="0 0 384 275.55"
                  ></base-svg-icon>
                  <input type="text" placeholder="Civil ID" />
                </div>
                <div>
                  <svg
                    class="lock"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          d="M166.79,354.31l-6.73,60.51a10.69,10.69,0,0,0,10.61,11.85h42.66a10.69,10.69,0,0,0,10.61-11.85l-6.73-60.51A42.19,42.19,0,0,0,234.67,320a42.67,42.67,0,1,0-85.34,0A42.19,42.19,0,0,0,166.79,354.31ZM192,298.67a21.26,21.26,0,0,1,9.21,40.46,10.67,10.67,0,0,0-6,10.78l6.17,55.42H182.58l6.17-55.42a10.67,10.67,0,0,0-6-10.78A21.26,21.26,0,0,1,192,298.67Z"
                        />
                        <path
                          d="M373.33,192h-32V149.33C341.33,67,274.34,0,192,0S42.67,67,42.67,149.33V192h-32A10.66,10.66,0,0,0,0,202.67V469.33A42.72,42.72,0,0,0,42.67,512H341.33A42.72,42.72,0,0,0,384,469.33V202.67A10.66,10.66,0,0,0,373.33,192ZM64,149.33a128,128,0,0,1,256,0V192H298.67V149.33a106.67,106.67,0,0,0-213.34,0V192H64ZM277.33,192H106.67V149.33a85.33,85.33,0,1,1,170.66,0Zm85.34,277.33a21.37,21.37,0,0,1-21.34,21.34H42.67a21.37,21.37,0,0,1-21.34-21.34v-256H362.67Z"
                        />
                      </g>
                    </g>
                  </svg>
                  <input
                    :type="isPassword ? 'password' : 'text'"
                    placeholder="Password"
                  />
                  <span class="eye" @click="changeType">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 353.63 192.45"
                    >
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <g class="cls-2">
                            <path
                              d="M176.82,192.45c-39.77,0-82.57-15.55-123.77-45-30.8-22-49.82-43.79-50.61-44.71a10,10,0,0,1,0-13.09C3.23,88.76,22.25,67,53.05,45c41.2-29.43,84-45,123.77-45s82.56,15.55,123.77,45c30.8,22,49.81,43.78,50.6,44.7a10,10,0,0,1,0,13.09c-.79.92-19.8,22.71-50.6,44.71-41.21,29.42-84,45-123.77,45ZM23.71,96.23a315.49,315.49,0,0,0,41.36,35.25c26.26,18.69,67,41,111.75,41s85.48-22.28,111.75-41a315.16,315.16,0,0,0,41.35-35.25A315.83,315.83,0,0,0,288.57,61c-26.27-18.69-67-41-111.75-41S91.33,42.28,65.07,61A315.39,315.39,0,0,0,23.71,96.23Z"
                              transform="translate(0)"
                            />
                          </g>
                          <path
                            d="M176.82,158.23A62,62,0,1,1,217.66,49.58a10,10,0,1,1-13.18,15,42,42,0,1,0,14.34,31.61,10,10,0,0,1,20,0,62.08,62.08,0,0,1-62,62Z"
                            transform="translate(0)"
                          />
                          <path
                            d="M176.82,116.23a20,20,0,1,1,20-20,20,20,0,0,1-20,20Z"
                            transform="translate(0)"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                </div>
                <a href="#">Forgot your password?</a>
                <button class="custom-btn">sign in</button>
                <button href="#" class="custom-btn" id="sing-up">
                  sign up
                </button>
              </form>
            </div>
            <div class="col-5 login-img">
              <!-- <img src="img/home/icon/close-login.png" alt=""> -->
              <base-svg-icon
                icon-id="close-btn"
                icon-viewbox="0 0 512 512"
                id="close-login"
                class="close"
              ></base-svg-icon>
              <h2>Hello,friend</h2>
              <p>
                Enter your personal details<br />
                and start journey with us
              </p>
              <button href="#" class="custom-btn">sign up</button>
            </div>
          </div>
        </div>
      </div>
      <div class="back-drop"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPassword: true,
    };
  },
  methods: {
    changeType: function () {
      this.isPassword = !this.isPassword;
      console.log(this.isPassword);
    },
    modalShow: function () {
      var modal = document.getElementById("loginModal");
      var body = document.querySelector("body");
      modal.style.display = "block";
      modal.classList.add("OpenModal");
      body.classList.add("no-scroll");
    },
    modalHide: function () {
      var body = document.querySelector("body");
      var modal = document.getElementById("loginModal");
      modal.style.display = "none";
      modal.classList.remove("OpenModal");
      body.classList.remove("no-scroll");
    },
  },
  mounted() {
    var modal = document.getElementById("loginModal");
    document.querySelectorAll(".login-modal-btn").forEach((element) => {
      element.addEventListener("click", this.modalShow);
    });
    document.querySelectorAll(".close").forEach((item) => {
      item.addEventListener("click", this.modalHide);
    });
    window.addEventListener("click", function (event) {
      var modal = document.getElementById("loginModal");
      var background = document.getElementsByClassName("back-drop")[0];
      if (event.target == background) {
        modal.style.display = "none";
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.loginModal {
  position: relative;
  z-index: 999999999999999;
  .modal {
    //     position: fixed;
    width: 100%;
    height: 100%;
    //     overflow: auto;
    //     position: relative;
    //     //     display: none;
    overflow: auto;
    padding-top: 50px;
    padding-bottom: 50px;
    .back-drop {
      position: fixed;
      z-index: -1;
      padding-top: rem(100px);
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0, 0, 0);
      background-color: rgba(0, 0, 0, 0.7);
      @media screen and (max-width: 991px) {
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        width: 100vw;
        height: 100vh;
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
          padding: rem(15px) 0;
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
          display: none;
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
            width: rem(15px);
          }
          @include xxSmall {
            display: none;
          }
        }
        span {
          text-transform: uppercase;
          // @include fonts($Gotham-Book, 16px);
          font-size: rem(16px);
          font-weight: 400;
          @include xSmall {
            font-size: rem(13px);
          }
          @include xxSmall {
            font-size: rem(12px);
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
          }
          i {
            font-size: rem(18px);
            margin-inline-end: rem(10px);
            @include xSmall {
              margin-inline-end: 2px;
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
      //  display: none;
      position: absolute;
      //  top: 40px;
      max-width: 1200px;

      margin: auto;
      left: 0;
      right: 0;
      //  padding-bottom: 40px;
      top: 50%;
      transform: translateY(-50%);
      @media screen and (max-width: 1199px) {
        width: 93%;
      }
     @media screen and (max-width:1025px){
        margin:40px auto;
     }
      @media screen and (max-width: 767px) {
        width: 80%;
      }
      //  @include medium {
      //    max-width: 80%;
      //  }
      //  @include xSmall {
      //    width: 95%;
      //    .row {
      //      padding: 0 10px;
      //    }
      //  }
      .login-info {
        padding: rem(110px) rem(96px);
        background-color: $whiteColor;
        text-align: center;
        border-top-left-radius: 33px;
        border-bottom-left-radius: 33px;
        display: flex;
        flex-direction: column;
        @media screen and (max-width:1600px){
          padding: rem(70px);
        }
        @media (max-width: 991.98px) {
          padding-bottom: rem(35px);
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
            width: 30px;
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
          // @include fonts($Gotham-bold, 42px);
          font-weight: 700;
          font-size: rem(42px);
          color: $thirdColor;
          margin-bottom: rem(85px);
          text-transform: uppercase;
           @media (max-width: 1600px) {
            font-size: rem(38px);
            margin-bottom: rem(50px);
          }
          @media (max-width: 991.98px) {
            font-size: rem(30px);
            margin-bottom: rem(38px);
          }
          @include small_medium {
            margin-bottom: rem(25px);
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
              /deep/ {
                svg {
                  top: 22px;
                }
              }
            }
            &:last-of-type:not(.singleItem) {
              margin-top: rem(39px);
              margin-bottom: rem(39px);
              @include small_medium {
                margin-top: rem(20px);
                margin-bottom: rem(20px);
              }
              /deep/ {
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
            }
            input {
              //     @include fonts($Gotham-Book, 21px);
              font-weight: 400;
              font-size: rem(21px);
              background-color: inherit;
              color: $thirdColor;
              padding-inline-start: rem(70px);
              padding-inline-end: rem(65px);
              border-radius: 10px;
              height: 62px;
              margin: auto;
              width: 100%;
              position: relative;
              @include small_medium {
                padding-inline-start: rem(65px);
                padding-inline-end: rem(65px);
              }
              &::placeholder {
                //  @include fonts($Gotham-Book, 21px);
                font-size: rem(21px);
                font-weight: 400;
                color: $thirdColor;
                @include small_medium {
                  font-size: rem(14px);
                }
              }
            }
            /deep/ {
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
          }
          a {
            //   @include fonts($Gotham-bold, 24px);
            font-weight: 700;
            font-size: rem(24px);
            color: $thirdColor;
            // margin-top: 28px;
            margin-top: 2px;
            &:hover {
              text-decoration: underline;
            }
            @include small_medium {
              margin-top: rem(15px);
              font-size: 18px;
            }
          }
          button {
            @extend %d-flex-center;
            margin-top: rem(35px);
            background-color: $mainColor;
            //   @include fonts($Gotham-Book, 18px);
            font-size: rem(18px);
            font-weight: 400;
            @include prefixer(transition, all 0.3s ease-in-out, o wibket moz);
            &:hover {
              background-color: $thirdColor;
            }
            @include small_medium {
              margin-top: rem(15px);
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
        border-top-right-radius: 33px;
        border-bottom-right-radius: 33px;
        text-align: center;
        display: flex;
        flex-direction: column;
        z-index: 1;
        /deep/{
          .close{
            opacity:1;
          }
        }
        .close-login{
          opacity:1;
        }
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
        /deep/ {
          svg {
            width: 50px;
            fill: $whiteColor;
            display: block;
            margin-left: auto;
            cursor: pointer;
            margin-inline-end: rem(15px);
            margin-top: rem(30px);
            @include prefixer(transition, all 0.3s ease-in-out, o wibket moz);
            &:hover {
              transform: scale(0.7);
            }
          }
        }
        h2 {
          text-transform: uppercase;
          // margin-top: 150px;
          margin-top: rem(90px);
          // @include fonts($Gotham-bold, 42px);
          font-size: rem(40px);
          font-weight: 700;
          color: $whiteColor;
          @media (max-width: 991.98px) {
            font-size: rem(30px);
            margin-top: rem(61px);
          }
        }
        p {
          // @include fonts($Gotham-Light, 24px);
          font-size: rem(24px);
          font-weight: 300;
          line-height:1.4;
          @include medium {
            font-size: rem(18px);
          }
          color: $whiteColor;
          margin: rem(34px) 0;
        }
        button {
          border: 1px solid $whiteColor;
          background-color: transparent;
          @extend %d-flex-center;
          margin: auto;
          margin-top:rem(20px);
          // @include fonts($Gotham-Book, 18px);
          font-size: rem(18px);
          font-weight: 400;
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
  }
  .lock {
    fill: #0a2333 !important;
    width: 22px !important;
    position: absolute !important;
    top: 16px !important;
    z-index: 1 !important;
    left: 17px !important;
  }
  .singleItem {
    /deep/ {
      div {
        margin: 0 !important;
        padding: 0 !important;
        svg {
          right: auto !important;
          left: 18px !important;
        }
      }
    }
  }
}
</style>
