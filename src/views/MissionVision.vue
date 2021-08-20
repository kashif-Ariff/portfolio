<template>
  <div class="missionVision">
    <div class="missionVision__item">
      <img src="@/assets/images/mission/shutterstock_370342301.png" alt="" />
      <div class="missionVision__item--detail">
        <span class="missionVision__item--title">OUR MISSION</span>
        <div class="missionVision__item--innerDetail">
          <div class="container">
            <p @click="closeModal()">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
              temporibus, vel rem aliquid velit nisi possimus eaque, omnis
              cumque non nesciunt error, laborum blanditiis repellat libero
              minima commodi ad!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="missionVision__item">
      <img src="@/assets/images/mission/shutterstock_370342301.png" alt="" />
      <div class="missionVision__item--detail">
        <span class="missionVision__item--title">OUR MISSION</span>
        <div class="missionVision__item--innerDetail">
          <div class="container">
            <p @click="closeModal()">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
              temporibus, vel rem aliquid velit nisi possimus eaque, omnis
              cumque non nesciunt error, laborum blanditiis repellat libero
              minima commodi ad!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="missionVision__item">
      <img src="@/assets/images/mission/shutterstock_370342301.png" alt="" />
      <div class="missionVision__item--detail">
        <span class="missionVision__item--title">OUR MISSION</span>
        <div class="missionVision__item--innerDetail">
          <div class="container">
            <p @click="closeModal()">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
              temporibus, vel rem aliquid velit nisi possimus eaque, omnis
              cumque non nesciunt error, laborum blanditiis repellat libero
              minima commodi ad!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="missionVision__item">
      <img src="@/assets/images/mission/shutterstock_370342301.png" alt="" />
      <div class="missionVision__item--detail">
        <span class="missionVision__item--title">OUR MISSION</span>
        <div class="missionVision__item--innerDetail">
          <div class="container">
            <p @click="closeModal()">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
              temporibus, vel rem aliquid velit nisi possimus eaque, omnis
              cumque non nesciunt error, laborum blanditiis repellat libero
              minima commodi ad!
            </p>
          </div>
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
      let cardItem = document.querySelectorAll(".missionVision__item");
      cardItem.forEach((cards) => cards.classList.remove("active"));
      item.classList.add("active");
    },
    closeModal: function () {
      let cardItem = document.querySelector(".missionVision__item.active");
      cardItem.classList.remove("active");
      console.log("clicked");
    },
  },
  mounted() {
    let cardItem = document.querySelectorAll(
      ".missionVision__item:not(.active)"
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
  // flex-wrap: wrap;
  &__item {
    // width:calc(100% / 4);
    width: 25%;
    height: 100vh;
    position: relative;
    transition: 0.5s ease all;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      position: absolute;
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

    &--detail {
      z-index: 2;
      position: relative;
      width: 100%;
      height: 100%;
    }
    &--title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: #fff;
      opacity: 0.5;
      font-size: rem(42px);
      font-weight: 500;
      @media screen and (max-width: 1600px) {
        font-size: rem(30px);
      }
    }
    &--innerDetail {
      display: none;
    }
    &:hover {
      cursor: pointer;
      &::before {
        opacity: 0.6;
      }
      .missionVision__item--title {
        opacity: 1;
      }
    }
    &.active {
      position: fixed;
      width: 100%;
      z-index: 3;
      cursor: unset;
      .missionVision__item--title {
        display: none;
      }
      .missionVision__item--innerDetail {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        p {
          color: #fff;
        }
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
