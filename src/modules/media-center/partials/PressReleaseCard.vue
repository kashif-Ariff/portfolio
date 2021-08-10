<template>
    <div class="pressReleaseCard" :aria-label="ariaLabel" role="region">
        <div class="row">
            <div class="col-lg-4 col-sm-6 card_parent" v-for="card in cardData" :key="card.index">
                <div class="card">
                    <div class="image">
                        <router-link :to="`/${$i18n.locale}/press-release-detail`" tabindex="-1">
                            <img
                                :src="require(`@/assets/images/press-release/${card.image}`)" 
                                :alt="card.title"
                                class="img-fluid"
                            />
                        </router-link>
                    </div>
                    <div class="card-content">
                        <p>{{card.title}}</p>
                        <div class="date" :id="card.index">{{card.date}}</div>  
                        <p>
                            <router-link :to="`/${$i18n.locale}/press-release-detail`" tabindex="-1">{{card.content}}</router-link>
                        </p>
                        <router-link :to="card.link"  :aria-describedby="card.index"><span class="btn btn-secondary">Read more</span> </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ariaLabel: String,
        cardData:Array
    },
}
</script>

<style lang="scss" scoped>
.pressReleaseCard {
    .card_parent{
        margin-bottom: rem(30px);  
    }
    .card {
        margin-bottom: unset;
        border-radius: 20px;
        padding: 0;
        max-width: 390px;
        box-shadow: 0px 0px 13px -3px rgba($color: black, $alpha: 0.5);
        transition: 0.3s ease background;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        &:hover{
            background: var(--secondary);
            div,h4,a{
                color: #fff !important;
                --highlight:#fff !important;
            }
            .btn-secondary{
                background: var(--primary);
                &:focus{
                    outline-color:#fff !important;
                }
            }
        }
        .card-content{
            padding: rem(25px);
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
            font-size: 16px;
            color: var(--primary);
            padding-bottom: rem(15px);
            font-weight: 400;
            position: relative;
            text-transform: capitalize;
        }
        p {
            font-size: rem(16px);
            color: #000000;
            margin-bottom:rem(16px);
            outline: unset !important;
            a{
                display: inline-block;
                color: #000000;
                text-decoration: none;
                padding: 3px;
                outline-offset:-3px;
                @include truncate(5,1.3);
                &:hover{
                    color: var(--primary);
                }
            }
            & + a{
                margin-top: auto;
                max-width: max-content;
            }
        }
        @media screen and (max-width:767px){
            .image{
                height:200px;
            }
            p {
                font-size: rem(25px);
                min-height:100px;
            }
        }
        @media screen and (max-width:991px){
            display: block;
            margin: auto;
             p {
                font-size: rem(25px);
                min-height:70px;
            }
        }
    }
    
}
</style>
