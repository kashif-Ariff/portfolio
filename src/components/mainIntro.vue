<template>
    <section class="intro">
       <h1 class="intro__typing">{{title}} <span>{{subTitle}}</span></h1>
        <p class="intro__desc">
            Based in Lahore, Pakistan. Developer with industry experience building Responsive websites and web applications.<br> I specialize in <span>H</span>tml5 | <span>C</span>SS | <span>S</span>CSS | <span>B</span>ootStrap | <span>V</span>ue js | <span>R</span>eact Bootstrap | <span>J</span>avascript | <span>J</span>query
        </p>
    </section>
</template>

<script>
export default {
  data (){
    return{
      title:"'Hello'  i am kashif Arif , i am a",
      subTitle:'UI Developer.',
    }
  }
}

</script>

<style lang="scss" scoped>
  .intro{
    position:relative;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width:1200px){
      padding-right:350px;
    }
    &:after{
      content:"";
      position:absolute;
      width:100%;
      height:690px;
      background : url(../assets/images/my.png) right top no-repeat;
      right:0;
      top:0;
      @media screen and (max-width:1199px){
        display: none;
      }
    }
    &__typing{
        color:var(--white);
        font-size:rem(40px);
        font-weight:600;
        font-family:$default-font;
         overflow: hidden;
        border-right: 0.15em solid var( --primary);
        white-space: nowrap;
        letter-spacing: 2px;
        animation: typing 4.5s steps(30, end) infinite, cursor-blink 0.75s step-end infinite;
        max-width: 800px;
        @media screen and (max-width:991px){
          font-size:rem(30px);
        }
        span{
          color:var( --primary);
        }
      }
      &__desc{
        color: var(--white);
        font-size:rem(30px);
         font-family:$default-font;
        font-weight:500;
        line-height:1.6;
        margin:rem(30px) 0;
        max-width: 1332px;
        @media screen and (max-width:991px){
          font-size:rem(24px);
        }
        span{
          color:var( --primary);
          font-weight:600;
          text-transform: uppercase;
        }
      }
  }
</style>
