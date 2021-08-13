<template>
    <div class="goals">
        <div class="sliderNavigation__custom"></div>
        <div class="goals__head iconTabs__item">
            <carousel
                class="goals__head--slider"
                @init="setSlider"
                :carousel-settings="sliderOption"
                role="tablist"
            >
                <div
                    class="swiper-slide slide__card goals__slide iconTabs__item"
                    v-for="(goal, index) in goals"
                    :key="index"
                    role="presentation"
                >
                    <a
                        @click.prevent.stop
                        data-target="highlights"
                        class="nav-link"
                        :class="{ active: isActive(index)}"
                        v-on:click.stop.prevent="tabIndex = index"
                        data-toggle="tab"
                        href="#"
                        role="tab"
                        :aria-selected="index == 0 ? 'true' : 'false'"
                        :aria-controls="`tab_global_gaols_${index}`"
                        :id="`global_gaols_${index}`"
                    >
                        <div class="slide__card--image iconTabs__item--image">
                            <span class="tab-icon">
                                <img
                                    :src="`${require(`@/assets/images/tabs-icon/${goal.image}`)}`"
                                    alt=""
                                    class="img-fluid"
                                />
                                <img
                                    :src="`${require(`@/assets/images/tabs-icon/${goal.image_hover}`)}`"
                                    alt=""
                                    class="img-fluid selected"
                                />
                            </span>
                        </div>
                        <h3 class="goals__slide--title" id="goal_title">
                            {{ goal.title }}
                        </h3>
                    </a>
                </div>
            </carousel>
        </div>
        <div class="container">
            <div class="goals__body">
                <b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
                    <b-tab
                        :title="goal.title"
                        v-for="(goal, i) in goals"
                        :key="i"
                        :id="`tab_global_gaols_${i}`"
                        :button-id="`global_gaols_${i}`"
                    >
                        <div
                            class="card"
                            :style="{ '--activeColor': goal.color }"
                        >
                            <div class="card__head">
                                <span class="card__head--icon">
                                    <img
                                        :src="`${require(`@/assets/images/tabs-icon/${goal.image_hover}`)}`"
                                        alt=""
                                        class="img-fluid"
                                    />
                                </span>
                                <h3
                                    class="card__head--title"
                                    aria-describedby="goal_title"
                                >
                                   {{goal.heading}}
                                </h3>
                            </div>
                            <div class="card__body">
                                <base-smooth-scrollbar class="detail">
                                    <p>{{ goal.detail }}</p>
                                </base-smooth-scrollbar>
                                <div class="button-row">
                                    <a href="#" class="btn btn-primary">Explore more</a>
                                </div>
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goals: Array,
    },
    data() {
        return {
            tabIndex: 0,
            sliderOption: {
                slidesPerView: 2,
                slideToClickedSlide: true,
                centeredSlides: true,
                spaceBetween:40,
                rtl: this.$i18n.locale=="en" ? false : true,
                breakpoints: {
                    // 1800: {
                    //     slidesPerView: 9,
                    // },
                    // 1200: {
                    //     slidesPerView: 3,
                    // },
                    // 1025: {
                    //     slidesPerView: 3,
                    // },
                    990: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                        // spaceBetween: 10,
                    },
                    350: {
                        slidesPerView: 2,
                        // spaceBetween: 10,
                    },
                    250: {
                        slidesPerView: 1,
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
.goals {
    // --activeColor: #d31b88;
    position: relative;
    .sliderNavigation__custom {
        /deep/ {
            .sliderNavigation {
                top: 0px;
                position: static;
                padding: env(safe-area-inset-top) env(safe-area-inset-right)
                    env(safe-area-inset-bottom) env(safe-area-inset-left);
                &__controls {
                    max-width: 110px;
                    &--pagination {
                        display: none;
                    }
                    &--pause {
                        display: none;
                    }
                    button {
                        color: var(--primary) !important;
                        outline-offset: -3px;
                    }
                }
            }
        }
    }
    &__head {
        position: relative;
        @media screen and (max-width: 1199px) {
            text-align: center;
            @media screen and (max-width: 415px) {
                text-align: center;
            }
        }

        /deep/ {
            .swiper-container {
                max-width: 750px;
                margin-left: auto;
                margin-right: auto;
                padding: 10px 0px;
            }
            .swiper-slide {
                padding: rem(7px) rem(5px);
                margin: 0 rem(0px);
            }
            .sliderNavigation {
                --border: var(--primary) !important;
                height: 26px;
                top: -26px;
                left: -15px;
                button {
                    position: static !important;
                    color: var(--primary);
                    width: 50px !important;
                    height: 50px !important;
                    padding: unset;
                    div {
                        width: 100%;
                        height: 100%;
                        svg {
                            min-width: 100%;
                            height: 100%;
                        }
                    }
                    &#prevArrow{
                        margin-right: rem(15px);
                    }
                }
                &__controls {
                    max-width: 115px;
                    &--pagination,
                    &--pause {
                        display: none;
                    }
                    @media screen and (max-width: 1199px) {
                        margin-top: 0;
                    }
                }
            }
        }
        .slide__card--image{
            border-radius: 25px;
            height: 196px;
        }
    }
    // .iconTabs {
    //     &__item {
    //         &--image {
    //             margin: 0;
    //         }
    //         a .tab-icon {
    //             width: 85px;
    //             height: 85px;
    //             background: none;
    //             // margin-top: rem(6px);
    //         }
    //     }
    // }
    &__slide {
        .slide__card--image{
            transform: scale(.9);
        }
        // .goals__slide--logo {
        //     color: var(--activeColor);
        // }

        // &--link {
        //     height: 160px;
        //     display: inline-flex;
        //     width: 100%;
        //     background: #fff;
        //     box-shadow: 0 0 6px 0px rgba($color: #000000, $alpha: 0.2);
        //     transition: 0.4s ease all;
        //     // padding: rem(30px);
        //     text-align: center;
        //     position: relative;
        //     justify-content: center;
        //     flex-direction: column;
        //     align-items: center;
        //     transform: scale(0.9);
        //     transform-origin: center;
        //     &:active,
        //     &:focus {
        //         outline-color: var(--primary);
        //         outline-offset: 1px !important;
        //     }
        //     &.active {
        //         transform: scale(1);
        //         // background: var(--activeColor);
        //         .goals__slide--logo {
        //             color: #fff;
        //         }
        //         .goals__slide--count {
        //             color: #fff;
        //         }
        //         h3 {
        //             color: #fff;
        //             font-size: rem(16px) !important;
        //         }
        //     }
        // }
        // &--logo {
        //     width: 62px;
        //     height: 62px;
        //     display: inline-block;
        //     color: #000;
        // }
        h3 {
            font-size: rem(16px);
            color: #000;
            @include truncate(3, 1.2);
            margin-bottom: 0;
            margin-top: 0;
        }
        // &--count {
        //     position: absolute;
        //     color: #000;
        //     top: 15px;
        //     right: 15px;
        //     font-weight: 800;
        //     font-size: rem(22px);
        // }
        &--title {
            font-size: rem(20px);
            color: var(--secondary);
            margin: unset;
            text-transform: capitalize;
            font-weight: 400;
            line-height: 1;
            margin-top: rem(20px);
            min-height: 54px;
            display: flex;
            align-items: center;
        }
    }
    &__body {
        /deep/ {
            .tab-content {
                margin-top: rem(25px);
            }
        }
        .card {
            // border-radius: unset !important;
            border-top-left-radius: 27px;
            border-top-right-radius: 27px;
            overflow: hidden;
            padding: 0;
            &__head {
                padding: rem(25px) rem(25px) rem(18px) rem(52px);
                background: var(--secondary);
                display: flex;
                align-items: center;
                &--icon {
                    display: flex;
                    width: 45px;
                    height: 45px;
                    margin-right: rem(30px);
                    color: #fff;
                    justify-content: center;
                    align-items: center;
                    @media screen and (max-width: 767px) {
                        width: 35px;
                        height: 35px;
                    }
                }
                &--title {
                    font-size: rem(21px);
                    font-weight: 400;
                    color: #fff;
                    margin: 0px;
                    text-transform: unset;
                    @media screen and (max-width: 575px) {
                        font-size: rem(20px);
                    }
                }
            }
            &__body {
                background: #fff;
                padding: rem(35px) rem(45px);
                p {
                    font-size: rem(21px);
                    margin: 0px;
                    font-weight: 400;
                    margin-bottom: rem(30px);
                }
                /deep/ .scrollArea {
                    // --barcolor: var(--activeColor);
                    --h: 170px;
                    @media screen and (max-width: 1600px) {
                        --h: 110px;
                    }
                }
            }
            @media screen and (max-width: 767px) {
                &__head {
                    padding: rem(20px);
                    &--icon {
                        margin-right: rem(20px);
                    }
                }
                &__body {
                    padding: rem(20px);
                }
            }
        }
    }
}
</style>
