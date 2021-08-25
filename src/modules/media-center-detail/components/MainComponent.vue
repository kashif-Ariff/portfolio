
<template>
  <div class="mediaCenterMain">
       <div class="titleWrapper">
            <div class="title">
                <h2>
                    Q8 vs Covid-19 Hackathon
                </h2>
                <p>Kuwait | February 25, 2021</p>
            </div>
            <router-link to="" class="cross-icon">
                <span>
                    <base-svg-icon
                        icon-id="X"
                        icon-viewbox="0 0 32.991 32.992"
                    ></base-svg-icon>
                </span>
            </router-link> 
        </div>
        <base-media-slider
            :media-slides="images"
        ></base-media-slider>
        <div class="highlight">
            <h3 class="title">
                <base-svg-icon
                    icon-id="highlight"
                    icon-viewbox="0 0 21.6 20.5"
                ></base-svg-icon>
                Highlights
            </h3>
            <ul>
                <li>
                    Manaf AlMenaifi: "The national fund is the rightful partner for SMEs in Kuwait
                </li>
                <li>
                   The initiative also aims to support Sustainable Development Goals in Kuwai
                </li>
                <li>
                    SDG9 and SDG 12 are supported by the Hackathon
                </li>
            </ul>
        </div>
        <div class="detail">
            <h3 class="title">
                <base-svg-icon
                    icon-id="detail"
                    icon-viewbox="0 0 38 38"
                ></base-svg-icon
                >details
            </h3>
            <div class="contentWrapper">
                <div>
                    <p>
                        Manaf AlMenaifi, Direct General of The National Fund for Small and Medium Enterprise Development said: “The national fund for SMEs Development is the rightful partner for SMEs in Kuwait, we are mandated to ensure that SMEs have the right platform and economic environment to make an impact. We as National Fund for SMEs development are delighted to cooperate with our partners in organizing this Hackathon, because it further inspires SMEs’ spirit of creativity and innovation.”
                    </p>
                    <p>
                        The initiative also aims to support the accomplishment of the Sustainable Development Goals (SDGs) in Kuwait by 2030. In particular, both SDG 9, which is aims to promote inclusive and sustainable industrialization and foster innovation, and SDG 12, which is aims to ensure sustainable consumption and production patterns, are supported by this event.
                    </p>
                </div>
            </div>
        </div>
        <div class="releatedDocument">
            <h3 class="title">
                <base-svg-icon icon-id="paperClip-icon" icon-viewbox="0 0 20.54 22.665"></base-svg-icon>
                Related Documents :
            </h3>
            <base-document :documents="documents"></base-document>
        </div>
  </div>
</template>

<script>

import BaseMediaSlider from '@/common/components/base/BaseMediaSlider.vue'
export default {
    components:{
        BaseDocument: ()=> import('@/common/components/base/BaseDocument.vue'),
        BaseMediaSlider
    },
    data(){
        return{
            images: [
                {
                    image: 'covid-19.png',
                    thumb: '',
                },
                {
                    image: 'covid-19.png',
                    thumb: '',
                },
                {
                    image: 'covid-19.png',
                    thumb: '',
                },
            ],
            documents:[
                {
                    index:0,
                    title:'Q8 vs Covid-19 Hackathon',
                    size:' Download Image',
                    file:'image',
                    download:'125 MB',

                },
                {
                    index:1,
                    title:'Q8 vs Covid-19 Hackathon',
                    size:' Download Image',
                    file:'video',
                    download:'125 MB',
                },
                {
                    index:2,
                    title:'Q8 vs Covid-19 Hackathon',
                    size:' Download Image',
                    file:'pdf',
                    download:'125 MB',
                },
                {
                    index:3,
                    title:'Q8 vs Covid-19 Hackathon',
                    size:' Download Image',
                    file:'pdf',
                    download:'125 MB',
                },
                {
                    index:4,
                    title:'Q8 vs Covid-19 Hackathon',
                    size:' Download Image',
                    file:'excel',
                    download:'125 MB',
                },
                {
                    index:5,
                    title:'Q8 vs Covid-19 Hackathon',
                    size:' Download Image',
                    file:'word',
                    download:'125 MB',
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.mediaCenterMain{
    .titleWrapper {
        display: flex;
        justify-content: space-between;
        padding-bottom: rem(23px);
        .title {
            flex: 1;
            h2 {
                font-weight: 400;
                color: var(--secondary);
                font-size: rem(45px);
                padding-right: rem(20px);
                @media screen and (max-width: 1600px) {
                    font-size: rem(32px);
                }
                @media screen and (max-width: 991px) {
                    font-size: rem(26px);
                }
                @media screen and (max-width: 767px) {
                    font-size: rem(22px);
                }
            }
            p{
                font-size: rem(22px);
                font-weight: 400;
                margin-bottom: 0;
            }
        }
        span {
            margin-top: rem(10px);
            flex: 0 0 80px;
            max-width: 80px;
            padding: 0px rem(25px);
            transition: 0.5s;
            &:hover {
                cursor: pointer;
                opacity: 0.7;
            }
        }
    }
    h3.title {
        font-size: rem(30px);
        font-weight: 400;
        color: var(--secondary);
        margin-top: rem(20px);
        text-transform: uppercase;
        display: flex;
        align-items: center;
        padding: rem(30px) 0;
        @media screen and (max-width:767px){
            font-size:rem(23px);
        }

        div {
            display: inline-block;
            width: 30px;
            height: 35px;
            margin-right: rem(12px);
            @media screen and (max-width:575px){
                /deep/{
                    width:25px;
                    height:25px;
                }
            }
        }
        @media screen and (max-width: 767px) {
            font-size: rem(22px);
        }
    }
    ul {
        li {
            font-size: rem(26px);
            line-height: 1.1;
            font-weight: 400;
            color: #404040;
            margin-bottom:rem(12px);
            &::marker{
                font-size:rem(32px);
            }
            @media screen and (max-width:767px){
                font-size:rem(20px);
            }
        }
    }
    .cross-icon {
        display: inline-block;
        height: max-content;
        color:#224156;
        &:hover {
            opacity: 0.6;
        }
    }
    .detail {
        .contentWrapper {
            // &.scrollArea {
            //     height: 300px;
            // }
            p {
                font-size: rem(26px);
                line-height: 1.4;
                font-weight: 400;
                color: #404040;
                @media screen and (max-width:1600px){
                    font-size:rem(24px);
                }
                @media screen and (max-width:767px){
                    font-size:rem(18px);
                }
            }
        }
    }
    .card{
        box-shadow: none;
        border: none;
        padding: 0;
    }
    /deep/ {
        .table{
            &__head{
                display: none;
            }
            &__row{
                border:1px solid #C7CFD4;
                &--cell{
                    &:first-child{
                        padding:0;
                    }
                    &:nth-child(2){
                        position: relative;
                        width:20% !important;
                        &::before{
                            position: absolute;
                            content: '';
                            width: 1px;
                            height: 22px;
                            top: 14px;
                            left: -15px;
                            background: var(--secondary);
                        }
                    }
                    &:last-child{
                        text-align: right;
                    }
                    .icon{
                        justify-content: flex-start;
                        span{
                            width:16px;
                            min-width:16px;
                            height:16px;
                            margin-top: -6px;
                            margin-right:rem(20px);
                        }
                    }
                    .btn{
                        &.btn-file{
                            min-width:155px;
                            padding: rem(17px) rem(25px);
                        }
                    }
                }
            }
            @media screen and (max-width:991px){
                &__row{
                    display: flex;
                    flex-wrap: wrap;
                    &--cell{
                        font-size:rem(20px);
                        padding:(10px) !important;
                        &:first-child{
                            width:100% !important;
                            text-align: center;
                            justify-content: center;
                        }
                        &:nth-child(2){
                            width:50% !important;
                        }
                        &:nth-child(3){
                            width:50% !important;
                        }
                        &:not(:first-child){
                            border-bottom:0 !important;
                        }
                        .btn{
                            &.btn-file{
                                margin-right: 0;
                                margin-left: auto;
                                min-width:120px;
                                padding:rem(16px) rem(20px);
                            }
                        }
                        .icon{
                            span{
                                margin-right:rem(15px);
                                margin-top:-1px;
                            }
                        }
                        &:before{
                            display: none;
                        }
                    }
                }
            }
        }
        .mediaSlider {
            .swiper-slide{
                border-radius: 0;
                border-bottom-right-radius: 36px;
                @media screen and (max-width:991px){
                    border-bottom-left-radius: 36px;
                }
            }
        }
    }
}
</style>
