<template>
  <div class="projectCard">
    <div class="projectCard__image">
      <img
        :src="require(`@/assets/images/project/${Project.image}`)"
        class="img-fluid"
        alt=""
      />
    </div>
    <div class="projectCard__title">{{ Project.title }}</div>
    <ul class="projectCard__detail">
      <li class="projectCard__detail--item">
        <span class="icon"
          ><base-svg-icon
            icon-id="userIcon"
            icon-viewbox="0 0 17.104 20.217"
          ></base-svg-icon
        ></span>
        <span class="detail" v-if="Project.employees.min != 0">
          Full time employees <br />

          between {{ Project.employees.min | numberWithComma }} -
          {{ Project.employees.max | numberWithComma }}
        </span>
        <span class="detail" v-else>
          Employees upto <br />

          between {{ Project.employees.max | numberWithComma }}
        </span>
      </li>
      <li class="projectCard__detail--item">
        <span class="icon"
          ><base-svg-icon
            icon-id="assets"
            icon-viewbox="0 0 18.412 18.412"
          ></base-svg-icon
        ></span>
        <span class="detail" v-if="Project.assets.min != 0">
          Assets between <br />
          {{ Project.assets.min | numberWithComma }} -
          {{ Project.assets.max | numberWithComma }} KD
        </span>
        <span class="detail" v-else>
          Assets upto <br />
          {{ Project.assets.max | numberWithComma }} KD
        </span>
      </li>
      <li class="projectCard__detail--item">
        <span class="icon"
          ><base-svg-icon
            icon-id="revenue"
            icon-viewbox="0 0 20.238 20.238"
          ></base-svg-icon
        ></span>
        <span class="detail" v-if="Project.revenue.min != 0">
          Revenue between <br />
          {{ Project.revenue.min | numberWithComma }} KD -
          {{ Project.revenue.max | numberWithComma }} KD
        </span>
        <span class="detail" v-else>
          Revenue upto <br />
          {{ Project.revenue.max | numberWithComma }} KD
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    Project: Object,
  },
  filters: {
    numberWithComma: function (value) {
      var parts = value.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    },
  },
};
</script>

<style lang="scss" scoped>
.projectCard {
  position: relative;
  transition: 0.3s ease all;
  &.disable {
    // transform: scale(0.9);
    pointer-events: none;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 0.3s ease all;
      background: rgba($color: #fff, $alpha: 0.6);
    }
  }
  &__image {
    max-width: 225px;
    // margin-left: auto;
    margin-right: auto;
    margin-bottom: rem(25px);
    height: 170px;
    display: flex;
    align-items: flex-end;
    
    @media screen and (min-width: 1600px) {
      max-width: 235px;
      height: 180px;
    }
    @media screen and (max-width: 575px) {
      height: 150px;
      max-width: 200px;
    }
  }
  &__title {
    font-size: rem(25px);
    color: var(--secondary);
    padding-left:rem(15px);
    font-weight: 400;
    margin-bottom: rem(40px);

    @media screen and (min-width: 1600px) {
      margin-bottom: rem(50px);
      font-size: rem(30px);
    }
    @media screen and (max-width: 575px) {
      font-size: rem(22px);
    }
  }
  &__detail {
    list-style-type: none;
    @media screen and (max-width: 360px) {
      max-width: 244px;
      margin: auto;
    }
    &--item {
      display: flex;
      .icon {
        display: block;
        width: 22px;
        color: var(--primary);
        margin-right: rem(15px);
      }
      .detail {
        font-size: rem(18px);
        color: var(--secondary);
        line-height: 1.5;
      }
    }
  }
}
</style>
