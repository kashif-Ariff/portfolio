<template>
    <div class="initiator">
        <div class="sliderNavigation__custom"></div>
        <div class="initiator__head iconTabs__item">
            <carousel
                class="initiator__head--slider"
                @init="setSlider"
                :carousel-settings="sliderOption"
                role="tablist"
            >
                <div
                    class="swiper-slide slide__card initiator__slide iconTabs__item"
                    v-for="(card , index) in cardContent"
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
                        :aria-controls="`tab_initiator_${index}`"
                        :id="`initiator_${index}`"
                    >
                        <div class="slide__card--image iconTabs__item--image">
                            <span class="tab-icon">
                                <img
                                    :src="`${require(`@/assets/images/tabs-icon/${card.image}`)}`"
                                    alt=""
                                    class="img-fluid"
                                />
                                <img
                                    :src="`${require(`@/assets/images/tabs-icon/${card.image_hover}`)}`"
                                    alt=""
                                    class="img-fluid selected"
                                />
                            </span>
                        </div>
                        <h3 class="initiator__slide--title" id="initiator_title">
                            {{ card.title }}
                        </h3>
                    </a>
                </div>
            </carousel>
        </div>
        <div class="container">
            <div class="initiator__body">
                <b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
                    <b-tab
                        :title="card.title"
                        v-for="(card, i) in cardContent"
                        :key="i"
                        :id="`tab_initiator${i}`"
                        :button-id="`initiator${i}`"
                    >
                        <div
                            class="card"
                            :style="{ '--activeColor': card.color }"
                        >
                            <div class="card__head">
                                <span class="card__head--icon">
                                    <img
                                        :src="`${require(`@/assets/images/tabs-icon/${card.image_hover}`)}`"
                                        alt=""
                                        class="img-fluid"
                                    />
                                </span>
                                <h3
                                    class="card__head--title"
                                    aria-describedby="initiator_title"
                                >
                                   {{card.heading}}
                                </h3>
                            </div>
                            <div class="card__body">
                                <base-smooth-scrollbar class="detail">
                                    <p>{{ card.detail }}</p>
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
        cardContent: Array,
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
.initiator {
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
            transform: scale(.88);
        }
      
        h3 {
            font-size: rem(16px);
            color: #000;
            @include truncate(3, 1.2);
            margin-bottom: 0;
            margin-top: 0;
        }
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
                padding: rem(20px) rem(25px) rem(18px) rem(52px);
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
                    margin-bottom: 30px;
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
