<template>
    <section class="aboutUs" id="about">
       <div class="">
          <div class="sectionTitle">{{title}}</div>
          <h3 class="text-center">{{subTitle}}</h3>
          <div class="flex-row">
             
            <div class="aboutUs__left">
              <div class="aboutUs__left--image">
                <img src="@/assets/images/my.jpg" alt="" class="img-fluid">
              </div>
            </div>
            <div class="aboutUs__right">
              <p>{{desc}}</p>
               <form>
                 <div class="button-row">
                  <a class="btn btn-primary" href="/cv/cv.pdf" download><span>{{btn}}</span></a>
                </div>
               </form>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
    
    data(){
        return{
          title:"About me",
          subTitle:"who i am",
          desc:"Building stable and maintainable codebases using bootstrap and jquery. Implementing a mobile-first approach to existing websites. Collaborating with designers to ensure designs were efficient and technically sound. Working directly with clients to develop technical solutions Conducting testing to identify bugs and UI improvements.",
          btn:'Download CV'
        }
    },
 
}

</script>

<style lang="scss" scoped>
  .aboutUs{
    position:relative;
    .flex-row{
      max-width:1100px;
      margin:auto;
      align-items: center;
    }
    &__left{
      flex:0 0 370px;
      max-width:370px;
      @media screen and (max-width:991px){
        flex:none;
        max-width:100%;
        margin-bottom:rem(30px);
      }
      &--image{
        position:relative;
        border:3px solid var(--primary);
        padding:rem(30px);
        overflow: hidden;
        cursor: pointer;
        border-radius: 15px;
        img{
          transition: .6s ease all;
        }
        &:hover{
          img{
            transform: scale(1.2);
          }
        }
      }
    }
    &__right{
      flex:1;
      padding-left:rem(100px);
      
      p{
        max-width:500px;
      }
      @media screen and (max-width:991px){
        padding:0;
        p{
          max-width:100%;
        }
      }
    }
  }
</style>
