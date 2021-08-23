<template>
  <div class="missionVision">
    <div class="missionVision__panel">
      <img src="@/assets/images/mission/shutterstock_370342301.png" alt="" />

      <div class="missionVision__panel--innerDetail">
        <div class="container">
          <div class="text-wrapper">
            <div class="d-flex">
              <h2 class="missionVision__panel--title">OUR MISSION</h2>
              <a href="#" @click="closeModal()" class="cross-icon">
                <base-svg-icon
                  icon-id="X"
                  icon-viewbox="0 0 32.991 32.992"
                ></base-svg-icon>
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
              temporibus, vel rem aliquid velit nisi possimus eaque, omnis
              cumque non nesciunt error, laborum blanditiis repellat libero
              minima commodi ad! 1
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="missionVision__panel">
      <img src="@/assets/images/mission/shutterstock_370342301.png" alt="" />

      <div class="missionVision__panel--innerDetail">
        <div class="container">
          <div class="text-wrapper">
            <div class="d-flex">
              <h2 class="missionVision__panel--title">OUR MISSION</h2>
              <a href="#" @click="closeModal()" class="cross-icon">
                <base-svg-icon
                  icon-id="X"
                  icon-viewbox="0 0 32.991 32.992"
                ></base-svg-icon>
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
              temporibus, vel rem aliquid velit nisi possimus eaque, omnis
              cumque non nesciunt error, laborum blanditiis repellat libero
              minima commodi ad! 2
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="missionVision__panel">
      <img src="@/assets/images/mission/shutterstock_370342301.png" alt="" />

      <div class="missionVision__panel--innerDetail">
        <div class="container">
          <div class="text-wrapper">
            <div class="d-flex">
              <h2 class="missionVision__panel--title">OUR MISSION</h2>
              <a href="#" @click="closeModal()" class="cross-icon">
                <base-svg-icon
                  icon-id="X"
                  icon-viewbox="0 0 32.991 32.992"
                ></base-svg-icon>
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
              temporibus, vel rem aliquid velit nisi possimus eaque, omnis
              cumque non nesciunt error, laborum blanditiis repellat libero
              minima commodi ad! 3
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="missionVision__panel">
      <img src="@/assets/images/mission/shutterstock_370342301.png" alt="" />

      <div class="missionVision__panel--innerDetail">
        <div class="container">
          <div class="text-wrapper">
            <div class="d-flex">
              <h2 class="missionVision__panel--title">OUR MISSION</h2>
              <a href="#" @click="closeModal()" class="cross-icon">
                <base-svg-icon
                  icon-id="X"
                  icon-viewbox="0 0 32.991 32.992"
                ></base-svg-icon>
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
              temporibus, vel rem aliquid velit nisi possimus eaque, omnis
              cumque non nesciunt error, laborum blanditiis repellat libero
              minima commodi ad! 4
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="missionVision__item">
      <div class="missionVision__item--detail">
        <img src="@/assets/images/mission/shutterstock_370342301.png" alt="" />
        <span class="missionVision__item--title">OUR MISSION</span>
        <div class="missionVision__item--innerDetail">
          <div class="container">
            <div class="text-wrapper">
              <div class="d-flex">
                <h5>Our Story</h5>

                <router-link to="" @click="closeModal()" class="cross-icon">
                  <span>
                    <base-svg-icon
                      icon-id="X"
                      icon-viewbox="0 0 32.991 32.992"
                    ></base-svg-icon>
                  </span>
                </router-link>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
                temporibus, vel rem aliquid velit nisi possimus eaque, omnis
                cumque non nesciunt error, laborum blanditiis repellat libero
                minima commodi ad! 4
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="missionVision__item">
      <img src="@/assets/images/mission/shutterstock_370342301.png" alt="" />
      <div class="missionVision__item--detail">
        <span class="missionVision__item--title">OUR MISSION</span>
        <div class="missionVision__item--innerDetail">
          <div class="container">
            <div class="text-wrapper">
              <div class="d-flex">
                <h5>Our Story</h5>

                <router-link to="" @click="closeModal()" class="cross-icon">
                  <span>
                    <base-svg-icon
                      icon-id="X"
                      icon-viewbox="0 0 32.991 32.992"
                    ></base-svg-icon>
                  </span>
                </router-link>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
                temporibus, vel rem aliquid velit nisi possimus eaque, omnis
                cumque non nesciunt error, laborum blanditiis repellat libero
                minima commodi ad! 4
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenModal: false,
    };
  },
  methods: {
    openModal: function (item) {
      let cardItem = document.querySelectorAll(".missionVision__panel");
      cardItem.forEach((cards) => cards.classList.remove("active"));
      item.classList.add("active");
    },
    closeModal: function () {
      let cardItem = document.querySelector(".missionVision__panel.active");
      cardItem.classList.remove("active");
      console.log("clicked");
      //   let closebtn = document.querySelector(".missionVision__item .closebtn");
      //   closebtn.classList.remove("active");
      //   console.log("clicked");
    },
  },
  mounted() {
    let cardItem = document.querySelectorAll(
      ".missionVision__panel:not(.active)"
    );
    cardItem.forEach((card) => {
      card.addEventListener("click", () => {
        console.log(cardItem);
        this.openModal(card);
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.missionVision {
  display: flex;
  position: relative;
  height: 100vh;
  overflow-y: hidden;
  // flex-wrap: wrap;
  &__panel {
    width: 25%;
    height: 100%;
    position: absolute;
    transition: 0.8s ease all;
    left: 0;
    overflow: hidden;
    &:nth-child(2) {
      left: 25%;
      &.active {
        left: 0%;
      }
    }
    &:nth-child(3) {
      left: 50%;
      &.active {
        left: 0%;
      }
    }
    &:nth-child(4) {
      left: 75%;
      &.active {
        left: 0%;
      }
    }
    img {
      width: 100%;
      height: 100%;
      //   object-fit: cover;
      //   object-position: center;
      //   position: absolute;
      z-index: 0;
    }
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      background: #224156;
      opacity: 0.8;
      z-index: 1;
      transition: 0.3s ease all;
    }

    &--title {
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      width: 100%;
      height: 100%;
      color: #fff;
      opacity: 0.5;
      font-size: rem(42px);
      font-weight: 500;
      text-align: center;
      margin-bottom: 0;

      @media screen and (max-width: 1600px) {
        font-size: rem(30px);
      }
    }
    &--innerDetail {
      //   visibility: hidden;
      //   opacity: 0;
      //   width: 0;
      //   height: 0;
      overflow-y: hidden;
      position: absolute;
      top: 50%;
      z-index: 2;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;

      .text-wrapper {
        max-width: 1000px;
        margin: auto;

        .d-flex {
          align-items: flex-start;
          justify-content: space-between;
        }
        .cross-icon {
          display: inline-block;
          //   height: max-content;
          height: 25px;
          width: 25px;
          right: calc((100% - 1145px) / 2);
          position: absolute;
          &:hover {
            opacity: 0.6;
          }
          path {
            fill: #ffffff !important;
          }
        }

        .cross-icon {
          visibility: hidden;
          opacity: 0;
          width: 0;
          height: 0;
        }
        p {
          visibility: hidden;
          opacity: 0;
          //   display: none;
          position: absolute;
          bottom: -100%;
          z-index: -99;
          transition: 0.7s all ease-in-out;
        }
      }
    }
    &:hover {
      cursor: pointer;
      &::before {
        opacity: 0.6;
      }
      .missionVision__panel--title {
        opacity: 1;
      }
    }
    &.active {
      //   position: fixed;
      width: 100%;
      //   z-index: 3;
      cursor: unset;
      z-index: 99;
      .missionVision__panel--title {
        // display: none;
        opacity: 1;
        text-align: left;
        margin-bottom: rem(42px);
      }
      .missionVision__panel--detail {
        // position: fixed;
        // z-index: 99;
        // width: 100vw;
        // left: 0;

        // transition: 6s all ease-in-out;
      }
      .missionVision__panel--innerDetail {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;

        overflow-y: auto;
        transition: 2s all ease-in-out;
        p {
          color: #fff;
          font-size: rem(20px);
          margin-right: 30px;

          opacity: 1;
          visibility: visible;
          //   display: block;
          position: static;
          bottom: unset;
          z-index: unset;
          //   height: 100%;
          //   width: 100%;
        }
        .cross-icon {
          opacity: 1;
          visibility: visible;
          height: 25px;
          width: 25px;
        }
        // h5 {
        //   text-transform: uppercase;
        //   color: #ffffff;
        //   font-weight: 600;
        //   margin-bottom: rem(30px);
        //   font-size: rem(30px);
        //   margin-right: 30px;
        // }
      }
      &:hover {
        &::before {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
