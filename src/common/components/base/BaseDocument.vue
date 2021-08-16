<template>
    <div class="card">
    <div class="table">
        <!-- <div class="table__head">
            <div class="table__row">
                <div class="table__row--cell" data-width="50">Title</div>
                <div class="table__row--cell" data-width="14">Size</div>
                <div class="table__row--cell" data-width="14">Download</div>
            </div>
        </div> -->
        <div class="table__body">
            <div class="table__row" v-for="text in documents" :key="text.index">
                <div class="table__row--cell" data-width="50">{{text.title}}</div>
                <div class="table__row--cell" data-width="14">{{text.size}}</div>
                <div class="table__row--cell" data-width="14">
                  <a href="#" class=" btn" :class="text.file">
                        <div class="icon">
                            <span>
                                <base-svg-icon
                                    :icon-id="text.file"
                                    icon-viewbox="0 0 18 24"
                                ></base-svg-icon>
                            </span>
                            Download
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {ariaLabel: String },
}
</script>

<style lang="scss" scoped>
.relatedDocuments{  
    --barcolor: #6e337a;
    --trackcolor: #adadad;
    &__list{
        list-style: none;
        &--item{
            margin: 0px;
            &--documents{
                @include flex (center , space-between);
                flex-wrap: nowrap;
                flex:0 0 350px;
                position:relative;
                @media screen and (max-width:950px){
                    flex:0 0 250px;
                }
                 @media screen and (max-width:667px){
                    flex:0 0 215px;
                }
                 @media screen and (max-width:575px){
                    flex:none;
                    width:100%;
                }
            //    @media screen and (min-width: 576px){
            //        padding-left: 20px;
            //         &:before{
            //             content:"";
            //             position: absolute;
            //             width: 1px;
            //             height:30px;
            //             left:0;
            //             top:50%;
            //             transform: translateY(-50%);
            //             background: #000;
            //         }
            //    }
            }
            .document__info {
                width: 100%;
                background: #fff;
                padding: rem(15px) rem(35px);
                text-decoration: none;
                box-shadow: 0 0 13px 0px rgba($color: #000000, $alpha: 0.2);
                border: 2px solid transparent;
                transition: 0.4s ease all;
                margin-bottom: rem(30px);
                outline-offset: 0;
                outline-width: 2px;
                display:flex;
                align-items: center;
                justify-content: space-between;
                border-radius: 35px;
                @media screen and (max-width:991px) {
                    padding: rem(15px) rem(25px);
                }
                @media screen and (max-width:575px){
                    flex-direction: column;
                     padding: rem(15px);
                }
                &:focus {
                    outline-color: var(--primary);
                    background: var(--primary);
                }
                &:hover {
                    // border-color: var(--primary);
                    // background: var(--primary);
                }
                .icon {
                    font-size: rem(20px);
                    color: #fff;
                    font-weight: 500;
                    display: inline-flex;
                    align-items: center;
                    flex: 1;
                    justify-content: flex-end;
                    @media screen and (max-width:767px) {
                        font-size: rem(18px);
                    }
                    span {
                        color: #fff;
                        width: 22px;
                        height: 20px;
                        display: inline-block;
                        margin-right: 10px;
                        /deep/{
                            div,svg{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        @media screen and (max-width:767px) {
                            width: 20px;
                            height: 18px;
                        }
                    }
                }
                h2{
                    padding-right:rem(60px);
                    font-weight:400;
                    font-size: rem(21px);
                    color: var(--secondary);
                    margin: 0;
                    @media screen and (max-width:667px){
                        padding-right:rem(25px);
                    }
                    @media screen and (max-width:575px){
                        padding-right:0;
                        margin-bottom: rem(25px);
                    }
                }
                .file-size {
                    margin: 0px;
                    font-size: rem(20px);
                    font-weight: 400;
                    text-transform: uppercase;
                    color: var(--secondary);
                    margin-right:rem(35px);
                    @media screen and (max-width:991px) {
                        font-size: rem(18px);
                    }
                     @media screen and (max-width:667px) {
                        font-size: rem(16px);
                        margin-right:rem(20px);
                    }
                }
                
            }
            a:hover,a:focus{
                outline-width: 3px;
                outline-offset: 4px;
                .icon{
                    color: #fff;
                    span{
                        color: #fff;
                    }
                }
                h3 , h2{
                    color: #fff !important;
                }
                .relatedDocuments__list--item--documents{
                    &:before{
                        background: #fff;
                    }
                }
            }
        }
    }
    
}
</style>