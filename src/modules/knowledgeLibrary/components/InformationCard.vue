<template>
    <div>
        <div class="informationCard card" v-for="card in cardData" :key="card.index">
            <div class="card-body grid" data-grid-item-gap="30" data-grid-item-width="1/3">
                <div class="informationCard__info" >
                    <div class="informationCard__info--image">
                        <img :src="require(`@/assets/images/logo/${card.logo}`)" alt="" class="img-fluid">
                    </div>
                    <div class="informationCard__info--title">
                        {{card.title}}
                    </div>
                    <div class="informationCard__info--subtitle">
                        <div class="icon">
                            <img :src="require(`@/assets/images/icons/${card.icon}`)" alt="" class="img-fluid">
                        </div>
                        <span>
                            {{card.subTitle}}
                        </span>
                    </div>
                </div>
                <div class="informationCard__detail">
                    <p>{{card.content}}</p>
                </div>
                <div class="informationCard__link">
                    <button class="btn btn-secondary">Explore Content</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Information-card',
    data(){
        return{
            cardData:[
                {
                    index:0,
                    logo:"logoipsum.png",
                    title:"Logo Ipsum Technicals",
                    icon:"satalite.png",
                    subTitle:"Technology & Equipment",
                    content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel."
                },
                 {
                    index:1,
                    logo:"logoipsum.png",
                    title:"Logo Ipsum Technicals",
                    icon:"satalite.png",
                    subTitle:"Technology & Equipment",
                    content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel."
                },
                 {
                    index:2,
                    logo:"logoipsum.png",
                    title:"Logo Ipsum Technicals",
                    icon:"satalite.png",
                    subTitle:"Technology & Equipment",
                    content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel."
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.informationCard{
        margin-bottom: rem(40px);
    .card-body{
        padding: rem(50px) rem(30px);
        &.grid{
            grid-template-columns: 300px 1fr 265px;
        }
    }
    &__info{
        border-right: 1px solid #A6B3BB;
        &--title{
            color: var(--secondary);
            font-size: rem(16px);
            font-weight: 400;
            margin: rem(30px) 0 rem(15px) 0;
            line-height: 1.5;
        }
        &--subtitle{
            display: flex;
            align-items: center;
            .icon{
                margin-right: rem(10px);
            }
            span{
                font-size: rem(12px);
                font-weight: 400;
                color: #647a88;
            }
        }
    }
    &__detail{
        padding: rem(30px) rem(30px) 0 0;
        border-right: 1px solid #A6B3BB;
        p{
            font-size: rem(16px);
            font-weight: 300;
            margin: 0;
            line-height: 1.4 !important;
            @include truncate(4.5)
        }
    }
    &__link{
        display: flex;
        align-items: center;

    }
}
</style>>
