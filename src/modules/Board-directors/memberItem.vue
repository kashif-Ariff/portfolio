<template>
  <div
    class="swiper-slide"
    @mouseenter="enter"
    @mouseleave="$emit('leave', member)"
    @click="
      $emit('itemClick', {
        member,
        idx,
        el: $event.target,
      })
    "
    :style="{
      backgroundImage: `url(${require(`@/assets/images/board-directors/${member.img}`)})`,
    }"
  >
    <!-- <span>{{$t('labels.readmore')}}</span>   -->
  </div>
</template>

<script>
export default {
  name: "memberItem",
  props: ["member", "idx"],

  methods: {
    enter() {
      if (window.innerWidth >= 992) {
        this.$emit("enter", this.member);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-slide {
  width: 110px !important;
  transition: all 0.3s ease;
  background-color: #ccc;
  height: 320px;
  position: relative;
  background-position: center top !important;
  background-size: cover;
  filter: unset !important;
  cursor: pointer;
  overflow: hidden;
  @media screen and (max-width: 575px) {
    height: 300px;
  }
  &:nth-child(2) {
    margin-top: 20px;
    @media screen and (max-width: 991px) {
      margin-top: 10px;
    }
  }

  &:nth-child(3) {
    margin-top: 40px;
    @media screen and (max-width: 991px) {
      margin-top: 20px;
    }
  }

  &:nth-child(5) {
    margin-top: 20px;
    @media screen and (max-width: 991px) {
      margin-top: 10px;
    }
  }

  &:nth-child(6) {
    margin-top: 40px;
    @media screen and (max-width: 991px) {
      margin-top: 20px;
    }
  }

  &:nth-child(8) {
    margin-top: 20px;
    @media screen and (max-width: 991px) {
      margin-top: 10px;
    }
  }
  span {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: -50px;
    text-align: center;
    font-size: rem(18px);
    font-weight: 600;
    transition: all 0.6s ease;
    background: rgba(0, 0, 0, 0.5);
    padding: 8px 0px;
    color: #fff;
    @media screen and (max-width: 991px) {
      bottom: 0px;
    }
  }
}

// @media (max-width: 991px) {
//   .swiper-slide-active {
//     width: 130px !important;
//     filter: grayscale(0%);
//   }
// }

// @media (min-width: 992px) {
//   .swiper-slide {
//     width: 100px !important;
//     height: 412px;

//     &:hover {
//       width: 150px !important;
//       filter: grayscale(0%);
//     }
//   }
// }

// @media (min-width: 1600px) {
//   .swiper-slide {
//     width: 120px !important;
//     height: 412px;

//     @media screen and (min-width:992px){
//       &:hover {
//         width: 150px !important;
//         filter: grayscale(0%);
//         span{
//             bottom: 0px;
//         }
//       }
//     }
//   }
// }
// @media (max-width: 1600px) {
//   .swiper-slide {
//     width: 110px !important;
//     height: 300px;
//     @media screen and (min-width:992px){
//       &:hover {
//         width: 140px !important;
//         filter: grayscale(0%);
//       }
//     }
//   }
// }
// @media (max-width: 991px) {
//   .swiper-slide {
//     width: 110px !important;
//     height: 320px;
//     filter: grayscale(0%) !important;
//   }
// }

@media (max-width: 991px) {
  .swiper-slide-active {
    width: 140px !important;
    filter: grayscale(0%);
  }
}

@media (min-width: 992px) {
  .swiper-slide {
    width: 100px !important;
    height: 412px;

    &:hover {
      width: 150px !important;
      filter: grayscale(0%);
    }
  }
}

@media (min-width: 1200px) {
  .swiper-slide {
    width: 120px !important;
    height: 412px;

    &:hover {
      width: 150px !important;
      filter: grayscale(0%);
    }
    @media screen and (max-width: 1600px) {
      height: 300px;
    }
  }
}
@media screen and (min-width: 500px) and (max-width: 991px) and (orientation: landscape) {
  .swiper-slide {
    height: 160px;
    width: 110px;
  }
  .swiper-slide-active {
    width: 130px !important;
  }
}
</style>
