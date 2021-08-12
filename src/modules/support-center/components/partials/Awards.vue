<template>
    <div class="awards customTabs">
        <div class="container">
            <div class="awards__head customTabs__items">
                <base-carousel
                    class="awards__head--years"
                    navigation-theme="simple"
                    navigation-layout="side"
                    @init="setSlider"
                    :carousel-settings="YearsliderOption"
                    role="tablist"
                >
                    <div
                        role="presentation"
                        class="swiper-slide awards__head--year"
                        v-for="(milestone, index) in awards"
                        :key="index"
                    >
                        <a
                            @click.prevent.stop
                            data-target="highlights"
                            class="nav-link"
                            :class="{ active: isActive(index) }"
                            v-on:click.stop.prevent="tabIndex = index"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                            :aria-controls="`tab_milestone_awards_${index}`"
                            :aria-selected="index == 0 ? 'true' : 'false'"
                            :id="`milestone_awards_${index}`"
                        >
                            {{ milestone.date }}
                        </a>
                    </div>
                </base-carousel>
            </div>
        </div>
        <div class="awards__body customTabs__contents">
            <b-tabs
                class="bordDirectors__detail"
                v-model="tabIndex"
                nav-wrapper-class="d-none"
            >
                <b-tab
                    title="our Measurement"
                    v-for="(milestone, index) in awards"
                    :key="index"
                    :id="`tab_milestone_awards_${index}`"
                    :button-id="`milestone_awards_${index}`"
                >
                    <div class="swiper-slide awards__body--slide">
                        <base-carousel
                            class="awards__body--items"
                            :carousel-settings="slideroption"
                            navigation-layout="bottom"
                        >
                            <div
                                class="swiper-slide awards__body--item"
                                v-for="(card, i) in milestone.awards"
                                :key="i + '654df065d4f0'"
                            >
                                <milestone-card
                                    :card-detail="card"
                                    :milestone-date="milestone.date"
                                ></milestone-card>
                            </div>
                        </base-carousel>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
import MilestoneCard from './MilestoneCard.vue'
export default {
    props: {
        awards: Array,
    },
    components: {
        MilestoneCard,
    },
    data() {
        return {
            tabIndex: 0,
            YearsliderOption: {
                slidesPerView: 1,
                spaceBetween: 0,
                observer: true,
                observeParents: true,
                rtl: this.$i18n.locale=="en" ? false : true,
                breakpoints: {
                    1200: {
                        slidesPerView: 7,
                        spaceBetween: 0,
                    },
                    900: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    700: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    500: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    376: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                },
            },
            slideroption: {
                slidesPerView: 1.2,
                spaceBetween: 15,
                observer: true,
                observeParents: true,
                rtl: this.$i18n.locale=="en" ? false : true,
                breakpoints: {
                    1200: {
                        slidesPerView: 3.5,
                        spaceBetween: 35,
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 15,
                    },
                    576: {
                        slidesPerView: 1.5,
                        spaceBetween: 15,
                    },
                    415: {
                        slidesPerView: 1.2,
                        spaceBetween: 15,
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
.awards {
    &__head {
        position: relative;
        margin: 0 45px;
        &--slide {
            padding-bottom: rem(140px);
        }
        &--year {
            text-align: center;
            padding: 12px;
        }
        a {
            font-size: rem(20px);
            font-weight: 800;
            color: #fff;
            text-decoration: none;
            text-align: center;
            padding: 0px;
            &:focus {
                outline-color: #eada2d;
                outline-offset: 4px;
            }
            &.active {
                color: #eada2d;
            }
        }
        /deep/ {
            .sideNavigation {
                top: 20px;
                @media screen and (max-width: 991px) {
                    top: 20px !important;
                }
            }
        }
    }
    &__body {
        padding-left: calc((100% - 1199px) / 2);
        margin-top: rem(45px);
        position: relative;
        @media screen and (max-width: 1200px) {
            padding-left: 15px;
        }
        @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape) {
            padding-left: 40px;
        }
        &--slide {
            padding-bottom: rem(0px);
            /deep/ {
                .sliderNavigation {
                    --color: #eada2d;
                    margin-left: 0;
                }
            }
        }
    }
    @media screen and (max-width: 991px) {
        &__body {
            padding-left: 15px;
        }
    }
}
[lang='ar']{
    .awards {
        &__body {
            padding-right: calc((100% - 1199px) / 2);
            padding-left:0;
            @media screen and (max-width: 1200px) {
                padding-right: 15px;
                padding-left:0;
            }
            @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape) {
                padding-right: 40px;
                padding-left:0;
            }
            &--slide {
                /deep/ {
                    .sliderNavigation {
                        margin-right: 0;
                        &__controls{
                            &--arrow{
                                transform: rotate(180deg);
                            }
                        }
                    }
                }
            }
        }
        @media screen and (max-width: 991px) {
            &__body {
                padding-right: 15px;
                padding-left:0;
            }
        }
    }
}
</style>
