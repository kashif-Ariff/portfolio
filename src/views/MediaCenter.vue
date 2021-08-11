<template>
  <div class="mediaCenter">
    <div class="container">
        <media-center-card  :card-data="cardData" aria-label="PRESS RELEASE"/>
        <pagination aria-label="PRESS RELEASE PAGINATION"></pagination>
        <base-document></base-document> 
    </div>
  </div>
</template>

<script>
import MediaCenterCard from '@/modules/media-center/partials/MediaCenterCard';
import Pagination from "@/modules/media-center/partials/Pagination.vue";
import BaseDocument from '@/common/components/base/BaseDocument.vue';
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
                }
            ]
        }
    },
    components:{
        MediaCenterCard,
        Pagination,
        BaseDocument
    }
}
</script>
<style lang="scss" scoped>
.mediaCenter{
    margin-top: 300px;
}
</style>
