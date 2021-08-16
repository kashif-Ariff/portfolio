<template>
  <div class="contactUs">
    <base-inner-banner :banner-detail="innerBannerDetail" />
    <div class="container">
      <h2 class="sectionTitle text-center">Branches</h2>
      <div class="contactUs__head">
        <carousel
          navigation-layout="side"
          :carousel-settings="sliderOption"
          role="tablist"
        >
          <div
            class="swiper-slide ContactUs__slide"
            role="presentation"
            v-for="(item, index) in tabsContent"
            :key="index"
          >
            <a
              data-target="highlights"
              class="nav-link"
              :class="{ active: isActive(index) }"
              v-on:click.stop.prevent="tabIndex = index"
              data-toggle="tab"
              href="#"
              role="tab"
              :aria-controls="`supportCenter_${index}`"
              :aria-selected="index == 0 ? 'true' : 'false'"
              :id="`tab_supportCenter_${index}`"
            >
              <p class="ContactUs__slide--title">
                {{ item.title }}
              </p>
            </a>
          </div>
        </carousel>
      </div>
      <b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
        <b-tab
          v-for="(item, index) in tabsContent"
          :key="index"
          :id="`supportCenter_${index}`"
          :button-id="`tab_supportCenter_${index}`"
        >
          <div class="upperContact">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="row mapDetail align-items-center">
                  <div class="col-5 d-flex align-items-center">
                    <span class="icon">
                      <base-svg-icon
                        icon-id="map-marker"
                        icon-viewbox="0 0 20.836 27.782"
                      ></base-svg-icon>
                    </span>
                    <span class="label">Address</span>
                  </div>
                  <div class="col-7">
                    <span class="detail">Kuwait City, 25501 Mansouriya</span>
                  </div>
                </div>
                <div class="row mapDetail align-items-center">
                  <div class="col-5 d-flex align-items-center">
                    <span class="icon">
                      <base-svg-icon
                        icon-id="envelopes"
                        icon-viewbox="0 0 30.108 20.947"
                      ></base-svg-icon>
                    </span>
                    <span class="label">Email</span>
                  </div>
                  <div class="col-7">
                    <span class="detail">info@nationalfund.gov.kw</span>
                  </div>
                </div>
                <div class="row mapDetail align-items-center">
                  <div class="col-5 d-flex align-items-center">
                    <span class="icon">
                      <base-svg-icon
                        icon-id="m-phone"
                        icon-viewbox="0 0 26.087 24.199"
                      ></base-svg-icon>
                    </span>
                    <span class="label">Phone No.</span>
                  </div>
                  <div class="col-7">
                    <span class="detail">136</span>
                  </div>
                </div>
                <div class="row mapDetail align-items-center">
                  <div class="col-5 d-flex align-items-center">
                    <span class="icon">
                      <base-svg-icon
                        icon-id="clock-user"
                        icon-viewbox="0 0 32.64 25.565"
                      ></base-svg-icon>
                    </span>
                    <span class="label">Working Hours</span>
                  </div>
                  <div class="col-7">
                    <span class="detail">8:30 am - 1:00 pm</span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="map custom-border-radius">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14143117.941545919!2d60.32337114882688!3d30.068124090484673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1628862714297!5m2!1sen!2s"
                    style="border: 0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="formDetail">
            <div class="title d-flex align-items-center">
              <span class="icon">
                <base-svg-icon
                  icon-id="agent"
                  icon-viewbox="0 0 29.531 25.958"
                ></base-svg-icon>
              </span>
              <span class="label"
                >We’re more than happy to help. Give us a call or just drop a
                message.</span
              >
            </div>
            <div class="row">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone No."
                />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Email" />
              </div>
              <div class="col-md-6">
                <vue-select
                  :options="input__options"
                  v-model="selected_item"
                  aria-label="content category"
                  tabIndex="0"
                ></vue-select>
                <div class="mt-30">
                  <vue-recaptcha
                    sitekey="6LdzWSkUAAAAAJQZfr1nvUshWLG7-2LY8BdQAWIq"
                  ></vue-recaptcha>
                </div>
              </div>
              <div class="col-md-6">
                <textarea class="form-control" placeholder="Message"></textarea>
              </div>
            </div>
            <div class="button-row justify-content-end mt-30">
              <button class="btn btn-primary">
                Send <i class="fa fa-angle-right ml-10"></i>
              </button>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
const selected_item = {
  label: "Content Category",
};
import VueRecaptcha from "vue-recaptcha";
export default {
  data() {
    return {
      selected_item,
      input__options: [
        { code: null, label: "All" },
        { code: "a", label: "This is First option" },
        { code: "b", label: "Selected Option" },
        { code: "c", label: "Third Option" },
      ],
      innerBannerDetail: {
        image: "BOD.png",
        title: "Contact",
      },
      tabIndex: 0,
      sliderOption: {
        slidesPerView: 1,
        slideToClickedSlide: true,
        observer: true,
        observeParents: true,
        rtl: this.$i18n.locale == "en" ? false : true,
        spaceBetween: 10,
        breakpoints: {
          991: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 3,
          },
          450: {
            slidesPerView: 2,
          },
        },
      },
      tabsContent: [
        {
          index: 0,
          title: "Mansouriya",
        },
        {
          index: 1,
          title: "Al-Faiha Business Center ",
        },
        {
          index: 2,
          title: "Human Development",
        },
        {
          index: 3,
          title: "Marketing & Activities",
        },
        {
          index: 4,
          title: "Takamol",
        },
        {
          index: 5,
          title: "Mansouriya",
        },
        {
          index: 6,
          title: "Al-Faiha Business Center ",
        },
      ],
    };
  },
  components: {
    VueRecaptcha,
  },
  methods: {
    isActive(index) {
      return this.tabIndex == index;
    },
  },
};
</script>

<style lang="scss" scoped>
.contactUs {
  &__head {
    position: relative;
    margin-bottom: rem(40px);

    a.nav-link {
      padding: 5px;
      .ContactUs__slide--title {
        margin: 0px;
        padding: rem(10px);
        color: var(--secondary);
        text-align: center;
        border-radius: 18px;
        font-size: rem(16px);
        box-shadow: 0px 3px 18px -4px rgba($color: #000000, $alpha: 0.3);
        min-height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #c7d0d5;
      }
      &.active {
        .ContactUs__slide--title {
          background: var(--secondary);
          font-size: rem(18px);
          color: #fff;
          @media screen and (min-width: 1600px) {
            font-size: rem(20px);
          }
        }
      }
    }
    /deep/ {
      .swiper-wrapper {
        align-items: center;
      }
      .swiper-container {
        margin-left: 5%;
        margin-right: 5%;
        padding: 10px 0px;
      }
      .sliderNavigation {
        height: 100%;
        z-index: 0;
        --color: var(--secondary);
        --arrow: var(--secondary);
        --border: var(--secondary);
        --pause: var(--secondary);
        #nextArrow {
          right: 0px;
        }
        #prevArrow {
          left: 0px;
        }
      }
    }
  }
  .custom-border-radius {
    border-radius: 0px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: -3px 1px 10px #ccc;
  }
  iframe {
    width: 100%;
    height: 350px;
    @media screen and (min-width: 1600px) {
      height: 400px;
    }
  }
  span {
    display: inline-block;
    &.icon {
      width: 25px;
      height: 25px;
      margin-right: 15px;
      /deep/ {
        svg,
        div {
          width: 100%;
          height: 100%;
          color: var(--secondary);
        }
      }
    }
    &.label {
      font-size: rem(18px);
      font-weight: 400;
      color: var(--secondary);
      @media screen and (min-width: 1600px) {
        font-size: rem(22px);
      }
    }
    &.detail {
      font-size: rem(20px);
      color: #82919c;
      @media screen and (min-width: 1600px) {
        font-size: rem(22px);
      }
    }
  }
  .mapDetail {
    margin-bottom: rem(15px);
    & > div {
      &:first-child {
        position: relative;
        &::before {
          content: ":";
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          position: absolute;
          font-weight: bold;
        }
      }
    }
  }
  .formDetail {
    margin-top: rem(50px);
    .title {
      margin-bottom: rem(30px);
    }
    input {
      margin-bottom: rem(50px);
    }
  }
  .button-row {
    i {
      margin-left: 10px;
    }
  }
}
</style>