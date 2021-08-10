<template>
  <div>
    <div class="swiper-container" ref="members" v-show="!showModal">
      <div class="swiper-wrapper">
        <memberItem
          v-for="(member, index) in members"
          :key="member.id"
          :idx="index"
          :member="member"
          @enter="enterHandler"
          @leave="leaveHandler"
          @itemClick="openModal"
        />
      </div>
    </div>

    <transition name="fade">
      <div v-if="showName" class="member">
        <div class="text-center mt-md">
          <h2 class="heading-secondary" v-html="currentMember.name"></h2>
          <p class="mt-sm" v-html="currentMember.position"></p>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <memberModal
        v-if="showModal"
        :member="currentMember"
        :members="members"
        @memberClick="modalMemberClick"
        @close="showModal = false"
      />
    </transition>
  </div>
</template>

<script>
import Swiper from "swiper";
import memberItem from "./memberItem";
import memberModal from "./memberModal";
import "swiper/swiper-bundle.css";
export default {
  name: "Members",
  props: {
    members: Array,
  },
  components: {
    memberItem,
    memberModal,
  },
  data() {
    return {
      currentMember: null,
      showModal: false,
      showName: false,
      swiper: null,
    };
  },

  methods: {
    enterHandler(member) {
      this.currentMember = member;
      this.showName = true;
    },
    leaveHandler() {
      this.showName = false;
    },

    openModal({ member, idx, el }) {
      if (window.innerWidth < 992) {
        if (el.classList.contains("swiper-slide-active")) {
          this.showModal = true;
          this.currentMember = member;
        } else {
          this.swiper.slideTo(idx);
        }
      } else {
        this.showModal = true;
        this.currentMember = member;
      }
    },

    modalMemberClick(member) {
      this.currentMember = member;
    },
  },

  mounted() {
    this.swiper = new Swiper(this.$refs.members, {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      freeModeSticky: true,
      centeredSlides: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        992: {
          spaceBetween: 30,
          allowTouchMove: false,
          slidesPerView: 3,
          centeredSlides: false,
        },
        1200: {
          spaceBetween: 30,
          allowTouchMove: false,
          centeredSlides: false,
          slidesPerView: 3,
        },
      },
    });

    if (window.innerWidth < 992) {
      this.currentMember = this.members[this.swiper.activeIndex];
      this.showName = true;
    }

    this.swiper.on("slideChange", () => {
      this.currentMember = this.members[this.swiper.activeIndex];
      this.showName = true;
    });
  },
  watch: {
    showModal: function () {
      console.log("test");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-wrapper {
  padding-bottom: 30px;
}
@media (min-width: 992px) {
  .swiper-wrapper {
    display: flex;
    justify-content: center;
  }
}
.member {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 7%;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
  h2 {
    font-size: rem(30px);
    font-weight: 900;
    line-height: 1;
    margin-bottom: 5px;
  }
  p {
    font-size: rem(18px);
    font-weight: 600;
    margin: 0;
    line-height: 1.2;
  }
  @media screen and (max-width: 1600px) {
    bottom: -8%;
    h2 {
      font-size: rem(25px);
    }
  }
  @media screen and (max-width: 991px) {
    bottom: 1%;
    h2 {
      font-size: rem(20px);
    }
  }
}
</style>
