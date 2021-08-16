<template>
<div>
    <div class="breadCrumbs" v-if="!showModal">
      <base-bread-crumb :items="items"></base-bread-crumb>
    </div>
    <div
        class="supportCenterSlider customTabs"
        role="region"
        :aria-label="ariaLabel"
    >
        <div class="container">
            <div class="supportCenterSlider__head iconTabs__item customTabs__items">
                <carousel
                    navigation-layout="side"
                    :carousel-settings="sliderOption"
                    @init="setSlider"
                    role="tablist"
                >
                    <div
                        class="swiper-slide slide__card"
                        role="presentation"
                    >
                        <a
                            data-target="highlights"
                            class="nav-link"
                            :class="{ active: isActive(0)}"
                            v-on:click.stop.prevent="tabIndex = 0"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                            aria-controls="supportCenter_0"
                            aria-selected="true"
                            id="tab_supportCenter_0"
                        >
                            <div class="slide__card--image iconTabs__item--image">
                                <span class="tab-icon">
                                    <img
                                        src="@/assets/images/tabs-icon/calendar.png"
                                        alt=""
                                        class="img-fluid"
                                    />
                                    <img
                                        src="@/assets/images/tabs-icon/calendar-hover.png"
                                        alt=""
                                        class="img-fluid selected"
                                    />
                                </span>
                            </div>
                            <p class="supportCenterSlider__item--title">
                               Business Incubators
                            </p>
                        </a>
                    </div>
                    <div
                        class="swiper-slide slide__card"
                        role="presentation"
                    >
                        <a
                            data-target="highlights"
                            class="nav-link"
                            :class="{ active: isActive(1)}"
                            v-on:click.stop.prevent="tabIndex = 1"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                            aria-controls="supportCenter_1"
                            aria-selected="false"
                            id="tab_supportCenter_1"
                        >
                           <div class="slide__card--image iconTabs__item--image">
                                <span class="tab-icon">
                                    <img
                                        src="@/assets/images/tabs-icon/calendar.png"
                                        alt=""
                                        class="img-fluid"
                                    />
                                    <img
                                        src="@/assets/images/tabs-icon/calendar-hover.png"
                                        alt=""
                                        class="img-fluid selected"
                                    />
                                </span>
                            </div>
                            <p class="supportCenterSlider__item--title">
                                Creative Centers
                            </p>
                        </a>
                    </div>
                    <div
                        class="swiper-slide slide__card"
                        role="presentation"
                    >
                        <a
                            data-target="highlights"
                            class="nav-link"
                            :class="{ active: isActive(2)}"
                            v-on:click.stop.prevent="tabIndex = 2"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                            aria-controls="supportCenter_2"
                            aria-selected="false"
                            id="tab_supportCenter_2"
                        >
                            <div class="slide__card--image iconTabs__item--image">
                                <span class="tab-icon">
                                    <img
                                        src="@/assets/images/tabs-icon/calendar.png"
                                        alt=""
                                        class="img-fluid"
                                    />
                                    <img
                                        src="@/assets/images/tabs-icon/calendar-hover.png"
                                        alt=""
                                        class="img-fluid selected"
                                    />
                                </span>
                            </div>
                            <p class="supportCenterSlider__item--title">
                                introduction
                            </p>
                        </a>
                    </div>
                     <div
                        class="swiper-slide slide__card"
                        role="presentation"
                    >
                        <a
                            data-target="highlights"
                            class="nav-link"
                            :class="{ active: isActive(3)}"
                            v-on:click.stop.prevent="tabIndex = 3"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                            aria-controls="supportCenter_3"
                            aria-selected="false"
                            id="tab_supportCenter_3"
                        >
                            <div class="slide__card--image iconTabs__item--image">
                                <span class="tab-icon">
                                    <img
                                        src="@/assets/images/tabs-icon/calendar.png"
                                        alt=""
                                        class="img-fluid"
                                    />
                                    <img
                                        src="@/assets/images/tabs-icon/calendar-hover.png"
                                        alt=""
                                        class="img-fluid selected"
                                    />
                                </span>
                            </div>
                            <p class="supportCenterSlider__item--title">
                                introduction
                            </p>
                        </a>
                    </div>
                     <div
                        class="swiper-slide slide__card"
                        role="presentation"
                    >
                        <a
                            data-target="highlights"
                            class="nav-link"
                            :class="{ active: isActive(4)}"
                            v-on:click.stop.prevent="tabIndex = 4"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                            aria-controls="supportCenter_4"
                            aria-selected="false"
                            id="tab_supportCenter_4"
                        >
                            <div class="slide__card--image iconTabs__item--image">
                                <span class="tab-icon">
                                    <img
                                        src="@/assets/images/tabs-icon/calendar.png"
                                        alt=""
                                        class="img-fluid"
                                    />
                                    <img
                                        src="@/assets/images/tabs-icon/calendar-hover.png"
                                        alt=""
                                        class="img-fluid selected"
                                    />
                                </span>
                            </div>
                            <p class="supportCenterSlider__item--title">
                                introduction
                            </p>
                        </a>
                    </div>
                    <div
                        class="swiper-slide slide__card"
                        role="presentation"
                    >
                        <a
                            data-target="highlights"
                            class="nav-link"
                            :class="{ active: isActive(5)}"
                            v-on:click.stop.prevent="tabIndex = 5"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                            aria-controls="supportCenter_5"
                            aria-selected="false"
                            id="tab_supportCenter_5"
                        >
                            <div class="slide__card--image iconTabs__item--image">
                                <span class="tab-icon">
                                    <img
                                        src="@/assets/images/tabs-icon/calendar.png"
                                        alt=""
                                        class="img-fluid"
                                    />
                                    <img
                                        src="@/assets/images/tabs-icon/calendar-hover.png"
                                        alt=""
                                        class="img-fluid selected"
                                    />
                                </span>
                            </div>
                            <p class="supportCenterSlider__item--title">
                                introduction
                            </p>
                        </a>
                    </div>
                    <div
                        class="swiper-slide slide__card"
                        role="presentation"
                    >
                        <a
                            data-target="highlights"
                            class="nav-link"
                            :class="{ active: isActive(6)}"
                            v-on:click.stop.prevent="tabIndex = 6"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                            aria-controls="supportCenter_6"
                            aria-selected="false"
                            id="tab_supportCenter_6"
                        >
                           <div class="slide__card--image iconTabs__item--image">
                                <span class="tab-icon">
                                    <img
                                        src="@/assets/images/tabs-icon/calendar.png"
                                        alt=""
                                        class="img-fluid"
                                    />
                                    <img
                                        src="@/assets/images/tabs-icon/calendar-hover.png"
                                        alt=""
                                        class="img-fluid selected"
                                    />
                                </span>
                            </div>
                            <p class="supportCenterSlider__item--title">
                                introduction
                            </p>
                        </a>
                    </div>
                    <div
                        class="swiper-slide slide__card"
                        role="presentation"
                    >
                        <a
                            data-target="highlights"
                            class="nav-link"
                            :class="{ active: isActive(7)}"
                            v-on:click.stop.prevent="tabIndex = 7"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                            aria-controls="supportCenter_7"
                            aria-selected="false"
                            id="tab_supportCenter_7"
                        >
                            <div class="slide__card--image iconTabs__item--image">
                                <span class="tab-icon">
                                    <img
                                        src="@/assets/images/tabs-icon/calendar.png"
                                        alt=""
                                        class="img-fluid"
                                    />
                                    <img
                                        src="@/assets/images/tabs-icon/calendar-hover.png"
                                        alt=""
                                        class="img-fluid selected"
                                    />
                                </span>
                            </div>
                            <p class="supportCenterSlider__item--title">
                                introduction
                            </p>
                        </a>
                    </div>
                </carousel>
            </div>
        </div>
        <div class="supportCenterSlider__body customTabs__contents">
            <b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
                <b-tab id="supportCenter_0" button-id="tab_supportCenter_0"><publication-table></publication-table></b-tab>
                <b-tab id="supportCenter_1" button-id="tab_supportCenter_1">1</b-tab>
                <b-tab id="supportCenter_2" button-id="tab_supportCenter_2">2</b-tab>
                <b-tab id="supportCenter_3" button-id="tab_supportCenter_3">3</b-tab>
                <b-tab id="supportCenter_4" button-id="tab_supportCenter_4">4</b-tab>
                <b-tab id="supportCenter_5" button-id="tab_supportCenter_5">5</b-tab>
                <b-tab id="supportCenter_6" button-id="tab_supportCenter_6">6</b-tab>
                <b-tab id="supportCenter_7" button-id="tab_supportCenter_7">7</b-tab>
            </b-tabs>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {
        PublicationTable: ()=> import('./PublicationTable.vue')
    },
    data() {
        return {
            tabIndex: 0,
            sliderOption: {
                slidesPerView: 1,
                slideToClickedSlide: true,
                observer: true,
                observeParents: true,
                rtl: this.$i18n.locale=="en" ? false : true,
                spaceBetween: 10,
                breakpoints: {
                   
                    1200: {
                        slidesPerView:5,
                    },
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
            items: [
                {
                text: "Media Center",
                href: "#",
                },
                {
                text: "Publications",
                active: true,
                },
            ],
        }
    },
    methods: {
        isActive(index) {
            return this.tabIndex == index
        },
    },
}
</script>

<style lang="scss" scoped>
.supportCenterSlider {
    .supportCenterSlider {
    padding: rem(35px) 0px;
    @media screen and (max-width: 991px) {
        padding-top: rem(10px);
    }
    background: #f0f0f0;
    &__head {
        margin-top: rem(15px);
        margin-bottom: rem(0px);
        text-align: center;
        position: relative;
        font-size: rem(22px);
        /deep/ {
            .sideWrapper{
                margin: 0 60px;
            }
            .swiper-container {
                padding: 10px;
                @media screen and (max-width: 1600px) {
                    margin: 0 60px;
                }
                .swiper-wrapper {
                    margin: 0px;
                }
            }
            .sliderNavigation {
                --color: var(--primary);
                --arrow: var(--secondary);
                --border: var(--secondary);
                z-index: 0;
                height: unset;
                &__controls {
                    &--pagination {
                        &.customPagination {
                            font-size: rem(28px);
                            position: absolute;
                            top: -62px;
                            right: 0;
                            display: block !important;
                            @media screen and (max-width: 991px) {
                                top: -50px;
                            }
                        }
                    }
                }
                &.sideNavigation {
                      #nextArrow {
                          right: 0;
                      }
                      #prevArrow {
                            left: 0;
                        }
                    // @media screen and (max-width: 1600px) {
                    //     #nextArrow {
                    //         right: -10px;
                    //     }
                    //     #prevArrow {
                    //         left: -10px;
                    //     }
                    // }
                    // @media screen and (max-width: 1199px) {
                    //     #nextArrow {
                    //         right: 0px;
                    //     }
                    //     #prevArrow {
                    //         left: 0px;
                    //     }
                    // }
                }
            }
        }
        .nav-link {
            padding: 0;
            transition: 0.4s ease all;
            position: relative;
            display: inline-block;
            transform: scale(0.9);
            width: 100%;
            &.active {
                .slide__card--image {
                    // background: unset;
                }
                transform: scale(1);
                .supportCenterSlider__item--title {
                    color: var(--secondary);
                    font-weight: 500;
                    font-size: rem(17px);
                }
            }
            outline-offset: -3px !important;
            outline-width: 3px;
            .slide__card--image{
                // border-radius: 25px;
            }
            &:focus {
                outline-color: var(--primary);
                &::before {
                    content: '';
                    position: absolute;
                }
            }
        }
        @media screen and (max-width: 1600px) {
            margin: 0 0px;
            margin-top: rem(15px);
        }
        @media screen and (max-width: 1199px) {
            margin: 0;
            margin-top: rem(15px);
        }
        @media screen and (max-width: 991px) {
            margin-top: rem(0px);
            /deep/ {
                .sliderNavigation {
                    &.sideNavigation {
                        top: -5px !important;
                    }
                }
            }
        }
    }
    &__item {
        &--image {
            width: 100%;
            height: 140px;
            margin: auto;
            position: relative;
            transition: 0.5s ease all;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            &::before {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0px;
                left: 0px;
                background: rgba($color: #000000, $alpha: 0.5);
                transition: 0.4s ease all;
            }
        }
        &--title {
            font-size: rem(17px);
            color: var(--secondary);
            text-transform: capitalize;
            font-weight: 500;
            display: inline-block;
            margin-top: rem(20px);
        }
        /deep/ {
            .swiper-container {
                padding: rem(8px);
            }
        }
    }
    &__body {
        .scrollArea {
            height: 185px;
        }
        /deep/ {
            .nav-pills {
                li {
                    @media screen and (min-width: 576px) {
                        width: 50%;
                    }
                }
                a:focus {
                    outline: none;
                }
            }
            .tab-content {
                margin-top: rem(25px);
            }
        }
    }
}

}
</style>
