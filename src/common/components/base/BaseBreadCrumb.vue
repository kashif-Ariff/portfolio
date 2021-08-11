<template>
  <div class="breadCrumb">
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    items: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.breadCrumb {
  /deep/ {
    .breadcrumb {
      background: transparent;
      &-item {
        color: var(--primary);
        opacity: 1;
        font-size: rem(24px);
        padding-right: rem(80px);
        position: relative;
        &:not(:first-child) {
          &::before {
            content: "";
            width: 7px;
            height: 7px;
            background: #019cde;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: -10px;
            border-radius: 50%;
          }
        }
        a {
          color: var(--primary);
          opacity: 0.6;
          font-size: rem(24px);
          transition: 0.3s ease all;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>