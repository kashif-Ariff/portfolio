<template>
<div class="boardPublication">
    <div class="breadCrumbs" v-if="!showModal">
        <base-bread-crumb :items="items"></base-bread-crumb>
    </div>
    <section>
        <div class="card">
            <base-document :documents="documents"></base-document>
            <base-pagination></base-pagination>
        </div>
    </section>
    <section>
    </section>
</div>
</template>

<script>
export default {
    components: {
        BaseDocument: ()=> import('@/common/components/base/BaseDocument.vue'),
        BasePagination:() => import("@/common/components/base/BasePagination.vue")
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
                text: "ADVISORY BOARD",
                href: "#",
                },
                {
                text: "Board Publications",
                active: true,
                },
            ],
            documents:[
                {
                index:0,
                title:'Profile of The National Fund	',
                size:'200 KB',
                file:'pdf',
                download:'Download',
                },
                {
                index:1,
                title:'Profile of The National Fund	',
                size:'200 KB',
                file:'word',
                download:'Download',
                },
                {
                index:2,
                title:'Profile of The National Fund	',
                size:'200 KB',
                file:'excel',
                download:'Download',
                },
                {
                index:3,
                title:'Profile of The National Fund	',
                size:'200 KB',
                file:'pdf',
                download:'Download',
                },
                {
                index:4,
                title:'Profile of The National Fund	',
                size:'200 KB',
                file:'word',
                download:'Download',
                }
            ]
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
.boardPublication{
    .card{
        margin-top: rem(80px);
        padding: rem(30px) rem(40px);
        padding-bottom:rem(40px);
        @media screen and (max-width:991px){
            margin-top:rem(40px);
            box-shadow: none;
            padding:0;
            border:0;
        }
    }
    /deep/{
        .pagination{
            padding: 0;
            .show_items{
                display: none;
            }
            .gotoPage{
                display: none;
            }
            ul.pagination{
                justify-content: flex-end !important;
            }
        }
    }
}
</style>
