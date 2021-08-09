<template>
  <div class="vedio-popup" :class="isVideo ? 'active' : ''">
    <p @click="$emit('CloseVideo')">
      <base-svg-icon
        icon-id="search-icon"
        icon-viewbox="0 0 81.49 81.49"
      ></base-svg-icon>
    </p>
    <video id="player" playsinline controls>
      <source src="@/assets/video/shopping.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  props: {
    isVideo: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.vedio-popup {
  display: none;
  position: relative;
  width: 70%;
  bottom: 0;
  top: 0;
  z-index: 99999;
  margin: auto;
  padding-top: rem(120px);
  &.active {
    display: block;
  }
  video {
    width: 100%;
  }
  @media screen and (max-width: 991px) {
    padding-top: rem(200px);
  }
  p {
    z-index: 12;
    position: absolute;
    left: -100px;
    bottom: -22px;
    cursor: pointer;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    background-color: $mainColor;
    @extend %d-flex-center;
    @include small_medium {
      width: 50px;
      height: 50px;
      left: 0;
      right: 0;
      margin: auto;
      bottom: -50px;
    }
    @include prefixer(transition, all 0.3s ease-in-out, o moz wibket);
    &:hover {
      transform: scale(0.7);
    }
    /deep/ {
      svg {
        fill: $whiteColor;
        width: 40px;
        @include small_medium {
          width: 25px;
        }
      }
    }
  }
}
.plyr--full-ui.plyr--video .plyr__control--overlaid {
  color: $secondGray;
  background-color: $secondGray;
}
</style>