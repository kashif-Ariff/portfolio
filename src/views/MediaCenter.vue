<template>
  <div class="mediaCenter">
    <div class="container">
        <media-center-card  :card-data="cardData" aria-label="PRESS RELEASE"/>
    </div>
  </div>
</template>

<script>
import MediaCenterCard from '@/modules/media-center/partials/MediaCenterCard';
export default {
    data(){
        return{
             cardData:[
                {
                    index:0,
                    image:"towerXchange.png",
                    date:"May 13, 2021",
                    link:"#",
                    title:"Eid Mubarak From The National Fund",
                    content:"Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire preciseZain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise.."
                }
            ]
        }
    },
    components:{
        MediaCenterCard
    }
}
</script>
<style lang="scss" scoped>
.mediaCenter{
    margin-top: 300px;
}
</style>
