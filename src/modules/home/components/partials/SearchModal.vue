<template>
  <div class="MainSearch" :class="isSearch ? 'active' : ''">
    <div class="overlay"></div>
    <div class="search">
      <span @click="$emit('closeSearch')">
        <img src="@/assets/images/home/icon/close-login.png" alt="" />
      </span>
      <div class="search-input">
        <label>Projects... </label>
        <vue-tags-input v-model="tag" placeholder="" :tags="tags" />

        <span>
          <base-svg-icon
            icon-id="search-icon"
            icon-viewbox="0 0 81.49 81.49"
          ></base-svg-icon>
        </span>
      </div>

      <div class="row search-list">
        <div class="col-12 col-lg-3">
          <h6>LATEST INTERESTS</h6>
          <ul class="list-unstyled">
            <li @click="tag = 'Training'">Training</li>
            <li @click="tag = 'License'">License</li>
            <li @click="tag = 'Investment'">Investment</li>
            <li @click="tag = 'Marketing'">Marketing</li>
            <li @click="tag = 'lorem ipsum'">lorem ipsum</li>
            <li @click="tag = 'lorem ipsum'">lorem ipsum</li>
          </ul>
        </div>
        <div class="col-12 col-lg-3">
          <h6>LATEST INTERESTS</h6>
          <ul class="list-unstyled">
            <li @click="tag = 'Training'">Training</li>
            <li @click="tag = 'License'">License</li>
            <li @click="tag = 'Investment'">Investment</li>
            <li @click="tag = 'Marketing'">Marketing</li>
            <li @click="tag = 'lorem ipsum'">lorem ipsum</li>
            <li @click="tag = 'lorem ipsum'">lorem ipsum</li>
          </ul>
        </div>
        <div class="col-12 col-lg-3">
          <h6 class="text-capitalize">Lorem Ipsum</h6>
          <ul class="list-unstyled">
            <li @click="tag = 'lorem ipsum'">Lorem Ipsum</li>
            <li @click="tag = 'lorem ipsum'">Lorem Ipsum</li>
            <li @click="tag = 'lorem ipsum'">Lorem Ipsum</li>
            <li @click="tag = 'lorem ipsum'">Lorem Ipsum</li>
            <li @click="tag = 'lorem ipsum'">Lorem Ipsum</li>
            <li @click="tag = 'lorem ipsum'">Lorem Ipsum</li>
          </ul>
        </div>
        <div class="col-12 col-lg-3">
          <h6 class="text-capitalize">Lorem Ipsum</h6>
          <ul class="list-unstyled">
            <li @click="tag = 'lorem ipsum'">Lorem Ipsum</li>
            <li @click="tag = 'lorem ipsum'">Lorem Ipsum</li>
            <li @click="tag = 'lorem ipsum'">Lorem Ipsum</li>
            <li @click="tag = 'lorem ipsum'">Lorem Ipsum</li>
            <li @click="tag = 'lorem ipsum'">Lorem Ipsum</li>
            <li @click="tag = 'lorem ipsum'">Lorem Ipsum</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTagsInput from "@johmun/vue-tags-input";

export default {
  props: {
    isSearch: Boolean,
  },
  components: {
    VueTagsInput,
  },
  data() {
    return {
      tag: "",
      tags: [],
    };
  },
  mounted() {
    document.querySelector(".ti-input input").focus();
  },
  watch: {
    tag: function () {
      document.querySelector(".ti-input input").focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.MainSearch {
  .overlay {
    position: fixed;
    z-index: 999999;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    left: 0;
    display: none;
    background: #0e181dd6;
  }
  /deep/ {
    .vue-tags-input {
      background-color: #fff;
      border: 1px solid #ccc;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.8);
      display: inline-block;
      padding: 4px 6px;
      color: #555;
      vertical-align: middle;
      max-width: 100%;
      line-height: 22px;
      cursor: text;
      flex-grow: 2;
      height: 100%;
      border: none;
      line-height: 45px;
      box-shadow: none;
      border-radius: 0;
      width: 70%;
      margin-top: 17px;
      .ti-input {
        border: 0;
        font-size: 20px;
      }
      .ti-tag {
        width: fit-content;
        padding: 10px 14px;
        text-align: center;
        color: #000;
        background-color: #f9f8f7;
        border-radius: 30px;
        font-size: 14px;
        cursor: pointer;
        transition: 0.3s all ease-in-out;
        &:hover {
          color: #f9f8f7;
          background-color: #212529;
        }
      }
      input {
        border: none;
        box-shadow: none;
        outline: none;
        background-color: transparent;
        padding: 0 6px;
        margin: 0;
        width: auto;
        max-width: inherit;
      }
    }
  }
  .search {
    background-color: $whiteColor;
    display: none;
    width: 90%;
    border-radius: 30px;
    padding: 55px 50px;
    position: absolute;
    left: 0;
    right: 0;
    top: 108px;
    margin: auto;
    z-index: 999999;
    @media (max-width: 991.98px) {
      padding: 56px 10px 20px 20px;
    }
    @include xxSmall {
      padding-left: 0;
      padding-right: 0;
    }
    @include small_medium {
      width: 97%;
    }
    @media (max-width: 408px) {
      width: 99%;
    }
    > span {
      position: absolute;
      top: 21px;
      right: 16px;
      cursor: pointer;
      border-radius: 50%;
      filter: drop-shadow(2px 4px 6px $mainColor);
      img {
        width: 44px;
        @include prefixer(transition, all 0.3s ease-in-out, o moz wibket);
        &:hover {
          transform: scale(0.8);
        }
      }

      img {
        @include small_medium {
          width: 28px;
        }
        @include medium {
          width: 35px;
        }
      }
    }
    .search-input {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $whiteColor;
      border: 1px solid rgba(136, 136, 136, 0.442);
      // height: 120px;
      min-height: 120px;
      border-radius: 51px;
      padding: 5px 15px;

      @media (max-width: 991.98px) {
        padding: 6px 5px;
        min-height: 85px;
      }
      label {
        padding-inline-end: 40px;
        @include fonts($Gotham-bold, 25px);
        color: $mainColor;
        position: relative;
        &::after {
          @include postionEle(0, auto, 0, absolute, $opacity-color, 2px, 50px);
          content: "";
          z-index: 5;
          right: 0px;
          @include small_medium {
            top: -10px;
          }
        }

        @media (max-width: 350px) {
          display: none;
        }
        @include small_medium {
          font-size: 16px;
          padding-inline-end: 15px;
        }
        @include xxSmall {
          font-size: 12px;
          padding-inline-end: 5px;
        }
      }
      > span {
        cursor: pointer;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        @extend %d-flex-center;
        background-color: $mainColor;
        @include prefixer(transition, all 0.3s ease-in-out, o moz wibket);
        &:hover {
          opacity: 0.7;
        }
        /deep/ {
          svg {
            fill: $whiteColor;
            width: 50px;
            @media (max-width: 991.98px) {
              width: 50px;
            }
            @include xSmall {
              width: 30px;
            }
          }
        }
        @include xSmall {
          width: 60px;
          height: 60px;
          /deep/ {
            svg {
              width: 30px;
            }
          }
        }
        @media (min-width: 576px) and (max-width: 991.98px) {
          width: 80px;
          height: 80px;
          /deep/ {
            svg {
              width: 40px;
            }
          }
        }
      }

      .bootstrap-tagsinput {
        flex-grow: 2;
        height: 100%;
        border: none;
        line-height: 45px;
        box-shadow: none;
        border-radius: 0;
        width: 70%;
        @include small_medium {
          line-height: 50px;
        }
        .tag {
          width: fit-content;
          padding: 10px 14px;
          text-align: center;
          color: #000;
          background-color: $grayOpacity;
          margin-bottom: 15px;
          border-radius: 30px;
          font-size: 14px;
          cursor: pointer;
          transition: 0.3s all ease-in-out;
          &:hover {
            color: $grayOpacity;
            background-color: #212529;
          }
        }
      }
      button {
        @include prefixer(transition, all 0.3s ease-in-out, o moz wibket);
        &:hover {
          opacity: 0.6;
        }
      }
    }
    .search-list {
      margin-top: 50px;
      h6 {
        @include fonts($Gotham-bold, 18px);
        margin-bottom: 25px;
        color: $thirdColor;
      }
      @media (max-width: 991.98px) {
        margin-top: 15px;
      }
      ul {
        @media (max-width: 991.98px) {
          display: flex;
          margin-bottom: 5px;
          flex-wrap: wrap;
        }
        li {
          @include fonts($Gotham-Book, 14px);
          width: fit-content;
          padding: 5px 14px;
          text-align: center;
          background-color: $grayOpacity;
          margin-bottom: 6px;
          border-radius: 30px;
          cursor: pointer;
          transition: 0.3s all ease-in-out;
          &:hover {
            color: $grayOpacity;
            background-color: #212529;
          }
        }
      }
    }
  }
  &.active {
    .overlay,
    .search {
      display: block;
    }
  }
}
</style>