<template>
  <div class="mediaCenter">
    <div class="container">
        <press-release-card  :card-data="cardData" aria-label="PRESS RELEASE"/>
    </div>
  </div>
</template>

<script>
import PressReleaseCard from '@/modules/media-center/partials/PressReleaseCard';
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
                },
                
            ]
        }
    },
    components:{
        PressReleaseCard
    }
}
</script>
<style lang="scss" scoped>
.mediaCenter{
    margin-top: 300px;
}
</style>
