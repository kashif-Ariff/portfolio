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

                        <nav class="hide-on-md">
                            <ul>
                                <li><a href="#about">about</a></li>
                                <li><a href="#services">services</a></li>
                                <li><a href="#services">my work</a></li>
                                <li><a href="#skills">skills</a></li>
                                <li><a href="#contact">contact</a></li>
                            </ul>
                        </nav>
                        <b-button class="d-none menu" v-b-toggle.sidebar-no-header><svg fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></b-button>
                        <b-sidebar
                            id="sidebar-no-header">
                            <div>
                                <nav class="show-on-md">
                                    <ul>
                                        <li><a href="#about">about</a></li>
                                        <li><a href="#services">services</a></li>
                                        <li><a href="#services">my work</a></li>
                                        <li><a href="#skills">skills</a></li>
                                        <li><a href="#contact">contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </b-sidebar>
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
    padding:rem(16px) 0;
    .logo{
        flex:1;
        img{
            max-width:300px;
            transition: .5s ease all;
            @media screen and (max-width:1700px){
                max-width:250px;
            }
            @media screen and (max-width:1200px){
                max-width:200px;
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
                    transition: .5s ease all;
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
        @media screen and (max-width:991px){
            max-width:340px;
            flex: 340px;
            ul{
                li{
                    a{
                        font-size:rem(21px);
                    }
                }
            }
        }
        @media screen and (max-width:767px){
            padding:rem(25px);
            ul{
                display: block;
                li{
                    &:not(:last-child){
                        margin-bottom:rem(35px);
                    }
                    a{
                        font-size:rem(24px);
                    }
                }
            }
        }
    }
    .b-sidebar-header{
        display: none !important;
    }
    .b-sidebar > .b-sidebar-body{
        background: #000;
    }
    &.vue-fixed-header--isFixed{
        box-shadow: -1px 6px 13px 2px rgba(245, 81, 57, 0.34);
        -webkit-box-shadow: -1px 6px 13px 2px rgba(245, 81, 57, 0.34);
        -moz-box-shadow: -1px 6px 13px 2px rgba(245, 81, 57, 0.34);
        .logo{
            flex:1;
            img{
                max-width:250px;
                @media screen and (max-width:1700px){
                    max-width:200px;
                }
                @media screen and (max-width:1200px){
                    max-width:175px;
                }
            }
        }
        nav{
            ul{
                li{
                    a{
                        font-size:rem(24px);
                        @media screen and (max-width:991px){
                            font-size:rem(18px);
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width:767px){
        .show-on-md{
            display:block !important
        }
        .hide-on-md{
            display: none !important;
        }
        .menu{
            display: block !important;
            background-color: transparent !important ;
            min-width:35px;
            padding: 0;
            &:after , &:before{
                display: none;
            }
            svg{
                width:30px;
            }
        }
    }
}
</style>
