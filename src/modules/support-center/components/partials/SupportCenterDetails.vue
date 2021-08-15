<template>
    <div class="container">
        <b-tabs pills>
            <b-tab title="description" class="description" active>
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
            <b-tab title="Links">
                <div class="links">
                    <!-- <base-smooth-scrollbar> -->
                        <base-document></base-document> 
                    <!-- </base-smooth-scrollbar> -->
                </div>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
export default {
    components:{
        BaseDocument: ()=> import('@/common/components/base/BaseDocument.vue')

    }
}
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
        font-size: rem(21px);
        color: var(--secondary);
        font-weight: 400;
        margin-bottom: rem(15px);
    }
    p {
        font-weight: 400;
        font-size: rem(21px);
        margin-bottom: rem(30px);
    }
}
.links {
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
    .links {
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
