<template>
    <div class="container">
        <b-tabs pills>
            <b-tab title="description" class="description" active>
                <div class="description__detail">
                    <base-smooth-scrollbar>
                        <h3 class="description__title" tabIndex="0">
                            Lorem Ipsum is simply
                        </h3>
                        <div tabIndex="0">
                            <p>
                                It is with great pride that I address our Zain
                                family.
                            </p>
                            <p>
                                Zain has accomplished many achievements never
                                before encountered in the industry. Our leading
                                pace has always been accredited to our culture,
                                with a deep understanding that in order to
                                improve the lives of our clients we must reflect
                                our internal working culture and our promise for
                                a wonderful world.
                            </p>
                            <p>
                                Zain has accomplished many achievements never
                                before encountered in the industry. Our leading
                                pace has always been accredited to our culture,
                                with a deep understanding that in order to
                                improve the lives of our clients we must reflect
                                our internal working culture and our promise for
                                a wonderful world.
                            </p>
                            <p>
                                Zain has accomplished many achievements never
                                before encountered in the industry. Our leading
                                pace has always been accredited to our culture,
                                with a deep understanding that in order to
                                improve the lives of our clients we must reflect
                                our internal working culture and our promise for
                                a wonderful world.
                            </p>
                            <p>
                                Zain has accomplished many achievements never
                                before encountered in the industry. Our leading
                                pace has always been accredited to our culture,
                                with a deep understanding that in order to
                                improve the lives of our clients we must reflect
                                our internal working culture and our promise for
                                a wonderful world.
                            </p>
                        </div>
                    </base-smooth-scrollbar>
                </div>
            </b-tab>
            <b-tab title="Related Documents">
                <div class="relatedDocuments">
                    <base-smooth-scrollbar>
                        <router-link
                            to="#"
                            class="document__info"
                            aria-label="File name – PDF – 150 megabytes"
                        >
                            <h3>file name</h3>
                            <div class="icon">
                                <span>
                                    <base-svg-icon
                                        icon-id="pdf-icon"
                                        icon-viewbox="0 0 369 384"
                                    ></base-svg-icon>
                                </span>
                                150MB
                            </div>
                        </router-link>
                        <router-link
                            to="#"
                            class="document__info"
                            aria-label="File name – PDF – 150 megabytes"
                        >
                            <h3>file name</h3>
                            <div class="icon">
                                <span>
                                    <base-svg-icon
                                        icon-id="pdf-icon"
                                        icon-viewbox="0 0 369 384"
                                    ></base-svg-icon>
                                </span>
                                150MB
                            </div>
                        </router-link>
                        <router-link
                            to="#"
                            class="document__info"
                            aria-label="File name – PDF – 150 megabytes"
                        >
                            <h3>file name</h3>
                            <div class="icon">
                                <span>
                                    <base-svg-icon
                                        icon-id="pdf-icon"
                                        icon-viewbox="0 0 369 384"
                                    ></base-svg-icon>
                                </span>
                                150MB
                            </div>
                        </router-link>
                        <router-link
                            to="#"
                            class="document__info"
                            aria-label="File name – PDF – 150 megabytes"
                        >
                            <h3>file name</h3>
                            <div class="icon">
                                <span>
                                    <base-svg-icon
                                        icon-id="pdf-icon"
                                        icon-viewbox="0 0 369 384"
                                    ></base-svg-icon>
                                </span>
                                150MB
                            </div>
                        </router-link>
                    </base-smooth-scrollbar>
                </div>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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
        font-size: rem(24px);
        color: var(--secondary);
        font-weight: 900;
        text-transform: uppercase;
        margin-bottom: rem(35px);
    }
    p {
        font-weight: 400;
        font-size: rem(22px);
        color: #2d2d2d;
    }
}
.relatedDocuments {
    /deep/ .scrollArea {
        --barcolor: #6e337a;
        --trackcolor: #adadad;
        --h: 185px;
    }
    .scrollArea__contents {
        padding-right: rem(45px);
        padding-top: 2px;
        padding-left: 2px;
    }
    .document__info {
        width: 100%;
        height: 70px;
        background: #fff;
        display: inline-flex;
        justify-content: space-between;
        padding: 0px 35px;
        align-items: center;
        text-decoration: none;
        box-shadow: 0 0 13px 0px rgba($color: #000000, $alpha: 0.2);
        border: 2px solid transparent;
        transition: 0.4s ease all;
        margin-bottom: rem(30px);
        outline-offset: -4px;
        outline-width: 3px;
        &:focus {
            // outline: none;
            outline-color: var(--primary);
        }
        &:hover {
            border-color: var(--primary);
        }
        .icon {
            font-size: rem(20px);
            color: #131413;
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            span {
                color: #131413;
                width: 22px;
                height: 20px;
                display: inline-block;
                margin-right: 10px;
            }
        }
        h3 {
            margin: 0px;
            font-size: rem(22px);
            font-weight: 900;
            text-transform: uppercase;
            color: var(--secondary);
        }
    }
}
[lang='ar']{
    .description {
        &__detail {
            .scrollArea__contents {
                padding-right: 5px;
                padding-left:0;
            }
            /deep/.scrollArea__contents {
                padding-right: 5px;
                padding-left:0;
            }
        }
    }
    .relatedDocuments {
        .scrollArea__contents {
            padding-left: rem(45px);
            padding-right: 2px;
        }
         /deep/.scrollArea__contents {
            padding-left: rem(45px);
            padding-right: 2px;
        }
        .document__info {
            .icon {
                span {
                    margin-left: 10px;
                    margin-right:0;
                }
            }
        }
    }
}
</style>
