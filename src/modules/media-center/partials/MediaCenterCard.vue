<template>
    <div class="card" :aria-label="ariaLabel">
        <div class="image">
            <router-link :to="`/${$i18n.locale}/press-release-detail`" tabindex="-1">
                <img
                    :src="require(`@/assets/images/press-release/${cardData.image}`)" 
                    :alt="cardData.title"
                    class="img-fluid"
                />
            </router-link>
        </div>
        <div class="card-content">
            <span class="card__title">{{cardData.title}}</span>
            <div class="card__date" :id="cardData.index">{{cardData.date}}</div>
            <p class="card__detail">{{cardData.content}}</p>
            <!-- <router-link :to="`/${$i18n.locale}/press-release-detail`" tabindex="-1"></router-link> -->
            <router-link :to="cardData.link"  :aria-describedby="cardData.index"><span class="btn btn-default">Read more</span> </router-link>
        </div>
    </div>
</template>
 
<script>
export default {
    props: {
        ariaLabel: String,
        cardData:Object
    },
    created(){
        console.log(this.cardData)
    }
}
</script>

<style lang="scss" scoped>
.card {
        --heading:var(--secondary);
        --label: var(--secondary);
        margin-bottom: unset;
        border-radius: 18px;
        padding: 0;
        max-width: 390px;
        box-shadow: 0px 0px 13px -3px rgba($color: black, $alpha: 0.5);
        // transition: 0.3s ease background;
        @include prefixer(transition, all 0.3s ease-in-out, o moz wibket);
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        &__title,&__detail{
            font-size: rem(16px);
            color: var(--heading);
            font-weight: 400;
            margin-bottom:rem(15px);
            display: inline-block;
            @include prefixer(transition, all 0.3s ease-in-out, o moz wibket);

        }
        &__date{
            opacity: 0.6;
            color: var(--label);
            font-size: rem(16px);
            font-weight: 400;
            margin-bottom: rem(22px);
            @include prefixer(transition, all 0.3s ease-in-out, o moz wibket);
        }
        &:hover{
            cursor: pointer;
            --heading:#fff;
            --label: #fff;
            background: var(--secondary);
            .btn-default{
                background: var(--primary);
            }
        }
        .card-content{
            padding: rem(25px) rem(25px) 0px;
            padding-bottom: 0px;
        }
        @media screen and (max-width:1199px){
            padding:16px;
        }
        .image {
            height: 230px;
            width: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
            }
        }
        .date {
            font-size: rem(16px);
            color: #224156;
            padding-bottom: rem(15px);
            font-weight: 400;
            position: relative;
            text-transform: capitalize;
        }
    }
</style>
