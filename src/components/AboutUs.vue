<template>
    <section class="aboutUs" id="about">
       <div class="container">
          <div class="sectionTitle">About me</div>
          <h3 class="text-center">who i am</h3>
          <div class="flex-row">
             
            <div class="aboutUs__left">
            </div>
            <div class="aboutUs__right">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem, asperiores harum eum non facere voluptatibus officiis reprehenderit exercitationem, aliquam modi placeat optio eligendi minus sed quo quam? Ut, eos!</p>
               <form>
                 <div class="button-row">
                  <button class="btn btn-primary" href="#"><span>Download CV</span></button>
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
    &__left{
      flex:0 0 50%;
      max-width:50%;
    }
    &__right{
      flex:1;
    }
  }
</style>
