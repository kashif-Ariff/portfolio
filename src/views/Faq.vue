<template>
  <div class="Faq">
    <base-inner-banner :banner-detail="innerBannerDetail" />
    <div class="container">
      <div class="Faq__mainContent">
        <div class="Faq__mainContent--left">
          <ul class="Faq__ListItoms">
            <li>
              <a
                data-target="highlights"
                class="nav-link"
                :class="{ active: isActive(0) }"
                v-on:click.stop.prevent="tabIndex = 0"
                data-toggle="tab"
                href="#"
                role="tab"
              >
                <span class="icon"></span>About The National Fund
              </a>
            </li>
          </ul>
        </div>
        <div class="Faq__mainContent--right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
      innerBannerDetail: {
        image: "BOD.png",
        title: "FAQS",
      },
    };
  },
  methods: {
    isActive(index) {
      return this.tabIndex == index;
    },
  },
};
</script>

<style lang="scss" scoped>
.Faq {
  a {
    color: var(--secondary);
  }
  &__mainContent {
    display: flex;
    &--left {
      flex: 0 0 145px;
      max-width: 145px;
      height: 100%;
      .nav-link {
        width: 100%;
        padding: rem(20px);
        .icon {
          display: block;
          width: 30px;
          height: 30px;
          background: var(--secondary);
          margin-bottom: 25px;
        }
      }
    }
    &--right {
      flex: 1;
      height: 100%;
    }
  }
}
</style>