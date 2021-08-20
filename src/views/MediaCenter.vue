<template>
  <div class="mediaCenter">
    <base-inner-banner :banner-detail="innerBannerDetail" />
    <div class="container">
        <base-bread-crumb :items="breadCrumbsItems"></base-bread-crumb>
        <base-media-slider :mediaSlides="MediaSliderItems"></base-media-slider>
         <div class="row mt-50">
             <div class="col-lg-4 col-sm-6 mb-30" v-for="card in cardData" :key="card.index">
                <media-center-card  :card-data="card" :aria-label="card.title"/>
             </div>
         </div>
        <base-pagination aria-label="PRESS RELEASE PAGINATION"></base-pagination>
    </div>
  </div>
</template>

<script>
import BaseMediaSlider from "@/common/components/base/BaseMediaSlider.vue";
import MediaCenterCard from '@/modules/media-center/partials/MediaCenterCard';
import BasePagination from "@/common/components/base/BasePagination.vue";
export default {
    data(){
        return{
             cardData:[
                {
                    index:0,
                    image:"eid-mubarak.png",
                    date:"May 13, 2021",
                    link:"#",
                    title:"Eid Mubarak From The National Fund",
                    content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis"
                },
                {
                    index:1,
                    image:"eid-mubarak.png",
                    date:"March 13, 2021",
                    link:"#",
                    title:"Knowledge Economy Forum",
                    content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis"
                },
                {
                    index:2,
                    image:"eid-mubarak.png",
                    date:"February 25, 2021",
                    link:"#",
                    title:"Kuwait National Day",
                    content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis"
                },
                {
                    index:3,
                    image:"eid-mubarak.png",
                    date:"February 25, 2021",
                    link:"#",
                    title:"Kuwait National Day",
                    content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis"
                }
            ],
            innerBannerDetail: {
                image: "BOD.png",
                title: "Media Center",
            },
            breadCrumbsItems: [
				{
					text: 'Home',
					href: '#',
				},
				{
					text: 'Media Center',
					active: true,
				},
			],
            MediaSliderItems: [
            {
                image: "media-center-slider-image.png",
                title: "Announcements",
                subtitle: "EID MUBARAK FROM THE NATIONAL FUND",
                date: "May 13, 2021"
            },
            {
                image: "media-center-slider-image.png",
                title: "Announcements",
                subtitle: "EID MUBARAK FROM THE NATIONAL FUND",
                date: "May 13, 2021"
            },
            {
                image: "media-center-slider-image.png",
                title: "Announcements",
                subtitle: "EID MUBARAK FROM THE NATIONAL FUND",
                date: "May 13, 2021"
            },
        ],
        }
    },
    components:{
        MediaCenterCard,
        BasePagination,
        BaseMediaSlider
    }
}
</script>
<style lang="scss" scoped>
.mediaCenter{
    .card_parent{
        margin-bottom: rem(30px);  
    }
    /deep/{
        .mediaSlider{
            .swiper-slide{
                position: relative;
                &:before{
                    position: absolute;
                    content:"";
                    background: rgba(34,65,86,0.6);
                    left: 0;
                    top:0;
                    z-index: 0;
                    width: 100%;
                    height: 100%;

                }
            }
        }
    }
}
</style>
