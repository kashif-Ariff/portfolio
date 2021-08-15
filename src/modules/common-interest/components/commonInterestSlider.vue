<template>
    <div
        class="commonInterestSlider customTabs"
        role="region"
        :aria-label="ariaLabel"
    >
        <div class="container">
            <div class="commonInterestSlider__head iconTabs__item customTabs__items">
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
                            <p class="commonInterestSlider__item--title">
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
                            <p class="commonInterestSlider__item--title">
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
                            <p class="commonInterestSlider__item--title">
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
                            <p class="commonInterestSlider__item--title">
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
                            <p class="commonInterestSlider__item--title">
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
                            <p class="commonInterestSlider__item--title">
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
                            <p class="commonInterestSlider__item--title">
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
                            <p class="commonInterestSlider__item--title">
                                introduction
                            </p>
                        </a>
                    </div>
                </carousel>
            </div>
             <div class="commonInterestSlider__body customTabs__contents">
                <b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
                    <b-tab id="supportCenter_0" button-id="tab_supportCenter_0" class="description">
                        <div class="description__detail">
                            <base-smooth-scrollbar>
                                <h3 class="description__title" tabIndex="0">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                </h3>
                                <div tabIndex="0">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                                    </p>
                                    <p>
                                        dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                    </p>
                                </div>
                            </base-smooth-scrollbar>
                            <div class="button-row">
                                <router-link to="" class="btn btn-primary">Explore More</router-link>
                            </div>
                        </div>
                    </b-tab>
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
        BaseDocument: ()=> import('@/common/components/base/BaseDocument.vue')
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
.commonInterestSlider {
    .commonInterestSlider {
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
                .commonInterestSlider__item--title {
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
        .description {
            &__detail {
                /deep/.scrollArea {
                    --barcolor: #6e337a !important;
                    --trackcolor: #adadad !important;
                    --h: 235px;
                }
                .scrollArea__contents {
                    padding-top: 5px;
                    padding-left: 5px;
                    h3 {
                        outline-offset: 2px;
                    }
                }
            }
            &__title {
                font-size: rem(21px);
                color: var(--secondary);
                font-weight: 400;
                margin-bottom: rem(15px);
            }
            p{
                font-weight: 400;
                font-size: rem(21px);
                margin-bottom: rem(30px);
            }
            
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
