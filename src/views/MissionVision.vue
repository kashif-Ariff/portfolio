<template>
  <div class="missionVision">
    <a href="#" @click="closeModal()" class="missionVision__closePanel">
      <base-svg-icon
        icon-id="X"
        icon-viewbox="0 0 32.991 32.992"
      ></base-svg-icon>
    </a>
    <div class="missionVision__panel">
      <img src="@/assets/images/mission/shutterstock_370342301.png" alt="" />

      <div class="missionVision__panel--innerDetail">
        <div class="container">
          <h2 class="missionVision__panel--title">OUR MISSION</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
            temporibus, vel rem aliquid velit nisi possimus eaque, omnis cumque
            non nesciunt error, laborum blanditiis repellat libero minima
            commodi ad! 1
          </p>
        </div>
      </div>
    </div>

    <div class="missionVision__panel">
      <img src="@/assets/images/mission/shutterstock_370342301.png" alt="" />

      <div class="missionVision__panel--innerDetail">
        <div class="container">
          <h2 class="missionVision__panel--title">OUR MISSION</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
            temporibus, vel rem aliquid velit nisi possimus eaque, omnis cumque
            non nesciunt error, laborum blanditiis repellat libero minima
            commodi ad! 2
          </p>
        </div>
      </div>
    </div>

    <div class="missionVision__panel">
      <img src="@/assets/images/mission/shutterstock_370342301.png" alt="" />

      <div class="missionVision__panel--innerDetail">
        <div class="container">
          <h2 class="missionVision__panel--title">OUR MISSION</h2>
          <!-- <a href="#" @click="closeModal()" class="cross-icon">
            <base-svg-icon
              icon-id="X"
              icon-viewbox="0 0 32.991 32.992"
            ></base-svg-icon>
          </a> -->

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
            temporibus, vel rem aliquid velit nisi possimus eaque, omnis cumque
            non nesciunt error, laborum blanditiis repellat libero minima
            commodi ad! 3
          </p>
        </div>
      </div>
    </div>

    <div class="missionVision__panel">
      <img src="@/assets/images/mission/shutterstock_370342301.png" alt="" />

      <div class="missionVision__panel--innerDetail">
        <div class="container">
          <h2 class="missionVision__panel--title">OUR MISSION</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
            temporibus, vel rem aliquid velit nisi possimus eaque, omnis cumque
            non nesciunt error, laborum blanditiis repellat libero minima
            commodi ad! 4
          </p>
        </div>
      </div>
    </div>
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
      cardItem.addEventListener("click", this.closePanel());
    },
    closeModal: function () {
      let closeBtn = document.querySelector(".missionVision__closePanel");
      let cardItem = document.querySelector(".missionVision__panel.active");
      cardItem.classList.remove("active");
      closeBtn.classList.remove("show");
    },

    closePanel: function () {
      let closeBtn = document.querySelector(".missionVision__closePanel");
      closeBtn.classList.add("show");
    },
  },
  created() {
    document.body.classList.add("mission-vission");
  },
  mounted() {
    document.body.classList.add("mission-vission");
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
  destroyed() {
    document.body.classList.remove("mission-vission");
  },
};
</script>

<style lang="scss">
  .mission-vission{
    footer{
      margin-top:0;
    }
  }
</style>
<style lang="scss" scoped>
.missionVision {
  display: flex;
  position: relative;
  height: 100vh;
  overflow-y: hidden;

  &__panel {
    width: 25%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease all;
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
      object-fit: cover;
      object-position: 60% center;
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
      //   transition: 0.3s ease all;
    }

    &--title {
      width: 100%;
      height: 100%;
      color: #fff;
      opacity: 0.5;
      font-size: rem(42px);
      font-weight: 400;
      text-align: center;
      margin-bottom: 0;
      @media screen and (max-width:1600px){
        font-size:rem(35px);
      }
      @media screen and (max-width:1199px){
        font-size:rem(30px);
      }

      @media screen and (max-width: 991px) {
        font-size: rem(28px);
      }
      @media screen and (max-width: 575px) {
        font-size: rem(22px);
      }
    }
    &--innerDetail {
      overflow-y: hidden;
      position: absolute;
      top: 50%;
      z-index: 2;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      @media screen and (max-width:991px) and (min-width:576px) and (orientation: landscape){
        top: 65%;
      }
      .container {
        max-width: 1000px;
        margin: auto;
        @media screen and (max-width:991px){
          max-width:720px;
        }
        @media screen and (max-width:767px){
          max-width:540px;
        }
        @media screen and (max-width:575px){
          max-width:100%;
        }
        p {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          bottom: -100%;
          z-index: -99;
          //   transition: 0.7s all ease-in-out;
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
      width: 100%;

      cursor: unset;
      z-index: 99;
      .missionVision__panel--title {
        opacity: 1;
        text-align: left;
        margin-bottom: rem(42px);
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

          position: static;
          bottom: unset;
          z-index: unset;
        }
      }
      &:hover {
        &::before {
          opacity: 0.8;
        }
      }
    }
  }

  &__closePanel {
    height: 25px;
    width: 25px;
    right: calc((100% - 1145px) / 2);
    position: absolute;
    top: 36%;
    z-index: 100;
    display: none;
    &.show {
      display: inline-block;
    }
    &:hover {
      opacity: 0.6;
    }
    path {
      fill: #ffffff !important;
    }
    @media screen and (max-width:1200px){
      right: calc((100% - 960px) / 2);
    }
    @media screen and (max-width:991px){
      right: calc((100% - 720px) / 2);
    }
    @media screen and (max-width:767px){
      right: calc((100% - 540px) / 2);
    }
    @media screen and (max-width:575px){
      right: 15px;
    }
  }
}
</style>
