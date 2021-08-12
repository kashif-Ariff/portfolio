<template>
  <div class="pressReleasePagination" :aria-label="ariaLabel" role="region">
    <div class="show_items">
      <label class="items__show">show items</label>
      <div class="form-group">
        <!-- <v-select :options="input__options" v-model="selected_item" /> -->
        <vue-select
          :options="menu_options"
          v-model="selected_menu"
        ></vue-select>
      </div>
    </div>
    <base-pagination :page-number="30"></base-pagination>
    <div class="gotoPage">
      <label class="items__show">go to page</label>
      <div class="form-group">
        <input type="text" class="form-control" role="search" id="goBtn" />
        <button class="btn btn-primary" aria-describedby="goBtn">Go</button>
      </div>
    </div>
  </div>
</template>

<script>
import BasePagination from "@/common/components/base/BasePagination.vue";
export default {
  props: {
    ariaLabel: String,
  },
  components: { BasePagination },
  data() {
    return {
      selected_menu: "10",
      menu_options: [
        { code: "100", label: "100" },
        { code: "200", label: "200" },
        { code: "300", label: "300" },
        { code: "400", label: "400" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.pressReleasePagination {
  display: flex;
  justify-content: space-between;
  padding: rem(40px) 0;
  @media screen and (max-width: 767px) {
    padding: rem(20px) 0;
  }
  .show_items,
  .gotoPage {
    display: flex;
    align-items: center;
    flex: 0 0 320px;
    max-width: 320px;

    label {
      font-size: rem(20px);
      font-weight: 500;
      text-transform: capitalize;
      color: #224156;
      margin-right: rem(20px);
      margin-bottom: 0px;
      @media screen and (max-width: 380px) {
        margin-bottom: 10px;
      }
    }
    .form-group {
      margin-bottom: unset;
      display: flex;
      .btn-primary {
        background-color: #019cde;
        font-size: rem(24px);
        font-weight: 400;
        text-transform: capitalize;
        padding-top: 0;
        padding-bottom: 0;
        border-top-right-radius: 18px;
        border-bottom-right-radius: 18px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      /deep/ {
        .v-select {
          height: auto;
          font-size: rem(22px);
          color: #019cde !important;
          background: #fff;
          // padding: rem(8px) rem(22px);
          width: 80px;
          padding: 0px 5px;
          outline: none;
          border: 2px solid #019cde;
          border-radius: 18px;
          font-weight: 600;
          button {
            //     background-image: url(C:/xampp/htdocs/NewNF-VU3/src/assets/images/icons/arrowDown.png);
            &:hover {
              //    background-image: url(C:/xampp/htdocs/NewNF-VU3/src/assets/images/icons/arrowDown.png);
            }
            div {
              color: var(--primary) !important;
              font-weight: 700;
            }
          }
          .v-dropdown-container {
            margin: 0.3rem -5px 0px;
            ul {
              padding: unset;
              margin: 0px !important;
              li {
                margin: 0px !important;
                &:focus-within,
                &:focus {
                  outline-color: var(--primary);
                  outline-offset: 0;
                }
              }
              li.selected {
                background: var(--primary) !important;
                color: #fff !important;
                &:focus-within {
                  outline-color: var(--primary);
                  outline-offset: 0;
                }
              }
            }
          }
          .vs__selected-options {
            .vs__selected {
              opacity: 1;
              color: #019cde;
              font-weight: 400;
              position: unset;
              font-size: rem(20px);
            }
            input.vs__search {
              font-size: 0;
              margin: 0;
              padding: 0;
            }
          }
          .vs__actions {
            button.vs__clear {
              display: none;
            }
            &:after {
              //     background-image: url(C:/xampp/htdocs/nf-vue/src/assets/images/icons/arrowDown.png);
              width: 18px;
              top: 16px;
            }
          }
          .vs__dropdown-menu {
            min-width: unset !important;
            .vs__dropdown-option {
              padding: rem(10px);
            }
          }
          .vs__dropdown-option--highlight {
            background-image: unset !important;
          }
        }
      }
    }
    .form-control {
        border: 2px solid #019CDE;
        border-top-left-radius: 18px;
        border-bottom-left-radius: 18px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        width: 90px;
        font-weight: 400;
        font-size: rem(20px);
        color: #404040 !important;
    }
    @media screen and (max-width: 1600px) {
      flex: 0 0 250px;
      max-width: 250px;
      .form-control {
        width: 85px;
      }
      button {
        padding-left: rem(16px);
        padding-right: rem(16px);
      }
    }
    @media screen and (max-width: 991px) {
      flex: 0 0 210px;
      max-width: 210px;
      .form-control {
        width: 55px;
      }
      &__show {
        font-size: rem(18px);
        margin-right: rem(10px);
      }
    }
    @media screen and (max-width: 767px) {
      button {
        height: 38px;
      }
    }
    @media screen and (max-width: 500px) {
      flex: 0 0 180px;
      max-width: 180px;
      label {
        margin-right: 5px;
        font-size: rem(15px);
      }
      .form-group {
        /deep/ {
          .v-select {
            padding: 0px;
            @media screen and (max-width: 380px) {
              width: 100%;
            }
            .vs__actions {
              padding-right: 12px;
            }
          }
        }
      }
    }
    @media screen and (max-width: 390px) {
      max-width: 100%;
      flex: unset;
      margin-bottom: 20px;

      label {
        margin-right: 5px;
        font-size: rem(14px);
      }
    }
  }
  .show_items {
    @media screen and (max-width: 767px) {
      order: 2;
    }
    @media screen and (max-width: 380px) {
      display: unset;
      width: 100%;
    }
  }
  .gotoPage {
    @media screen and (max-width: 767px) {
      order: 3;
    }
    @media screen and (max-width: 380px) {
      display: unset;
      width: 100%;
      .form-control {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    .overflow-auto {
      order: 1;
    }
  }
  /deep/ {
    .pagination {
      border: unset;
      padding: 5px 0;
      li.page-item {
        height: 40px;
        width: 40px;
        @include flex(center, center);
        .page-link {
          background: transparent;
          color: #82919c;
          font-weight: 500;
          font-size: rem(18px);
          padding: 0 5px;
          margin: 0px 0px;
          display: block;
          @include flex(center, center);
          height: 100%;
          width: 100%;
          @media screen and (max-width: 991px) {
            font-size: 16px;
          }

          &:active {
            box-shadow: unset !important;
            // border-color: var(--primary);
          }
          &.page-link {
            outline: none;
          }

          &:focus {
            // border-color: var(--primary);
            border: 3px dashed var(--primary);
            outline: none;
          }
        }
        span {
          background: transparent;
          //border: 1px solid !important;
          padding: 10px 15px;
          margin: 0px 6px;
        }

        &.active {
          a {
            color: #019cde;
            background: transparent;
            border-radius: 50%;
            border: 1px solid #019cde;
            font-weight: 700;
          }
        }
        &:not(:last-child) {
          margin-right: rem(12px);
        }
      }
    }
  }
}
</style>
