<template>
    <ul class="relatedDocuments__list">
        <li class="relatedDocuments__list--item">
            <router-link
                to="#"
                class="document__info"  aria-label="Image – image-icon – 100 megabytes">
                <h2>
                    Profile of The National Fund
                </h2>
                <div class="relatedDocuments__list--item--documents">
                    <span class="file-size">200 KB</span>
                    <div class=" btn btn-red">
                        <div class="icon">
                            <span>
                                <base-svg-icon
                                    icon-id="pdf-icon"
                                    icon-viewbox="0 0 18 24"
                                ></base-svg-icon>
                            </span>
                            Download
                        </div>
                    </div>
                </div>
            </router-link>
        </li>
        <li class="relatedDocuments__list--item">
            <router-link
                to="#"
                class="document__info"  aria-label="Video – video-icon – 400 megabytes">
                <h2>
                    Profile of The National Fund
                </h2>
                <div class="relatedDocuments__list--item--documents">
                    <span class="file-size">200 KB</span>
                    <div class="btn btn-blue">
                        <div class="icon">
                            <span>
                                <base-svg-icon
                                    icon-id="word-icon"
                                    icon-viewbox="0 0 18 24"
                                ></base-svg-icon>
                            </span>
                            Download
                        </div>
                    </div> 
                </div>
            </router-link>
        </li>
        <li class="relatedDocuments__list--item">
                <router-link
                to="#"
                class="document__info"  aria-label="English – PDF – 150 megabytes">
                <h2>
                   Profile of The National Fund
                </h2>
                <div class="relatedDocuments__list--item--documents">
                    <span class="file-size">200 KB</span>
                    <div class="btn btn-green">
                        <div class="icon">
                            <span>
                                <base-svg-icon
                                    icon-id="excel-icon"
                                    icon-viewbox="0 0 18 24"
                                ></base-svg-icon>
                            </span>
                            Download
                        </div>
                    </div>
                </div>
            </router-link>
        </li>
        <li class="relatedDocuments__list--item">
            <router-link
                to="#"
                class="document__info"  aria-label="Arabic – PDF – 150 megabytes">
                <h2>
                   Profile of The National Fund
                </h2>
                <div class="relatedDocuments__list--item--documents">
                    <span class="file-size">200 KB</span>
                    <div class="btn btn-red">
                        <div class="icon">
                            <span>
                                <base-svg-icon
                                    icon-id="image-icon"
                                    icon-viewbox="0 0 14.078 18.771"
                                ></base-svg-icon>
                            </span>
                            Download
                        </div>
                    </div>
                </div>
            </router-link>
        </li> 
        <li class="relatedDocuments__list--item">
            <router-link
                to="#"
                class="document__info"  aria-label="Arabic – PDF – 150 megabytes">
                <h2>
                   Profile of The National Fund
                </h2>
                <div class="relatedDocuments__list--item--documents">
                    <span class="file-size">200 KB</span>
                    <div class="btn btn-blue">
                        <div class="icon">
                            <span>
                                <base-svg-icon
                                    icon-id="video-icon"
                                    icon-viewbox="0 0 14.078 18.771"
                                ></base-svg-icon>
                            </span>
                            Download
                        </div>
                    </div>
                </div>
            </router-link>
        </li>
        <li class="relatedDocuments__list--item">
            <router-link
                to="#"
                class="document__info"  aria-label="Arabic – PDF – 150 megabytes">
                <h2>
                   Profile of The National Fund
                </h2>
                <div class="relatedDocuments__list--item--documents">
                    <span class="file-size">200 KB</span>
                    <div class="btn btn-green">
                        <div class="icon">
                            <span>
                                <base-svg-icon
                                    icon-id="video-icon"
                                    icon-viewbox="0 0 14.078 18.771"
                                ></base-svg-icon>
                            </span>
                            Download
                        </div>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
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
                    border-color: var(--primary);
                    background: var(--primary);
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