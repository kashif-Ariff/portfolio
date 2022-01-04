<template>

    <div>
		<!------------ The Header ------------->

		<FixedHeader :threshold="70">
            <header>
                <div class="container">
                    <div class="d-flex align-items-center">

                       <!---------------- logo ----------------->

                        <div class="logo">
                            <img src="@/assets/images/logo.png" alt="logo" class="img-fluid">
                        </div>

                        <!------x--------- logo ------------x----->


                        <!---------------- nav ----------------->

                        <nav>
                            <ul>
                                <li><a href="#about">about</a></li>
                                <li><a href="#services">services</a></li>
                                <li><a href="#skills">skills</a></li>
                                <li><a href="#contact">contact</a></li>
                            </ul>
                        </nav>

                        <!------x--------- nav -----------x------>
                    </div>
                </div>
            </header>
        </FixedHeader>

        <!------x--------- The Header ------------x----->
    </div>
</template>
<script>
import FixedHeader from 'vue-fixed-header'
export default {
    components: { FixedHeader},

};
</script>

<style lang="scss">
header{
    background:#000000;
    position:fixed;
    width:100%;
    z-index: 999;
    .logo{
        flex:1;
        img{
            max-width:385px;
            transition: .5s ease all;
            @media screen and (max-width:1700px){
                max-width:300px;
            }
        }
    }
    nav{
        max-width:450px;
        flex: 450px;
        ul{
            list-style:none;
            @include flex (center , space-between);
            li{
                a{
                    color:#fff;
                    font-size:rem(29px);
                    font-weight:500;
                    text-transform:capitalize;
                    position:relative;
                    padding:0 0 15px 0;
                    font-family:$primary-font;
                    &:after{
                        position:absolute;
                        content:"";
                        width:20px;
                        height:3px;
                        border-radius:20px;
                        background:var(--primary);
                        bottom:0;
                        left:0;
                        transition:.5s ease all;
                    }
                    &:hover{
                        color:#f55139;
                        &:after{
                            width:100%;
                        }
                    }
                }
            }
        }
    }
    &.vue-fixed-header--isFixed{
        box-shadow: -1px 6px 13px 2px rgba(245, 81, 57, 0.34);
        -webkit-box-shadow: -1px 6px 13px 2px rgba(245, 81, 57, 0.34);
        -moz-box-shadow: -1px 6px 13px 2px rgba(245, 81, 57, 0.34);
        .logo{
        flex:1;
        img{
            max-width:275px;
            @media screen and (max-width:1700px){
                max-width:250px;
            }
        }
    }
    }
}
</style>
