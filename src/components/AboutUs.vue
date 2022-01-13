<template>
    <section class="aboutUs" id="about">
       <div class="container">
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
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
