<template>
  <div class="vedio-popup" :class="isVideo ? 'active' : ''">
    <p @click="$emit('CloseVideo')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.49 81.49">
        <defs></defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Capa_1" data-name="Capa 1">
            <path
              class="cls-1"
              d="M15.35,37.93a3,3,0,0,1-3-2.71,20.58,20.58,0,0,1,5.88-16.68A3,3,0,0,1,22.5,22.8a14.55,14.55,0,0,0-4.15,11.82,3,3,0,0,1-2.7,3.3Z"
            />
            <path
              class="cls-1"
              d="M34.42,68.84A34.42,34.42,0,1,1,68.84,34.42,34.46,34.46,0,0,1,34.42,68.84ZM34.42,6a28.4,28.4,0,1,0,28.4,28.4A28.43,28.43,0,0,0,34.42,6Z"
            />
            <path
              class="cls-1"
              d="M78.48,81.49a3,3,0,0,1-2.13-.89L54.47,58.73a3,3,0,1,1,4.26-4.26L80.6,76.35a3,3,0,0,1-2.12,5.14Z"
            />
          </g>
        </g>
      </svg>
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
  padding-top: 120px;
  &.active {
    display: block;
  }
  video {
    width: 100%;
  }
  @media screen and (max-width: 991px) {
    padding-top: 200px;
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
    svg {
      fill: $whiteColor;
      width: 40px;
      @include small_medium {
        width: 25px;
      }
    }
  }
}
.plyr--full-ui.plyr--video .plyr__control--overlaid {
  color: secondGray;
  background-color: $secondGray;
}
</style>