<template>
    <section class="aboutUs" id="about">
       <div class="container">
          <div class="sectionTitle">About me</div>
          <h3 class="text-center">who i am</h3>
          <div class="flex-row">
             
            <div class="aboutUs__left">
              <div class="aboutUs__left--image">
                <img src="@/assets/images/my.jpg" alt="" class="img-fluid">
              </div>
            </div>
            <div class="aboutUs__right">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem, asperiores harum eum non facere voluptatibus officiis reprehenderit exercitationem, aliquam modi placeat optio eligendi minus sed quo quam? Ut, eos!</p>
               <form>
                 <div class="button-row">
                  <a class="btn btn-primary" href="../cv/cv.pdf" download><span>Download CV</span></a>
                </div>
               </form>
            </div>
          </div>
        </div>
    </section>
</template>

<script>

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
    }
  }
</style>
