<template>
    <section class="mySkills" id="skills">
        <div class="container">
          <div class="sectionTitle">{{mainTitle}}</div>
          <h3 class="text-center">{{title}}</h3>
          <div class="flex-row">
             
            <div class="mySkills__left">
              <h3>My creative skills and experience</h3>
              <p>{{desc}}</p>
              <div class="button-row">
                  <button class="btn btn-primary" href="#"><span>Read More</span></button>
                </div>
            </div>
            <div class="mySkills__right">
              <div class="progressBarWrapper">
                <div class="d-flex align-items-center justify-content-between">
                  <span>Html</span>
                  <span>95%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" style="width:95%"></div>
              </div>
              </div>
              <div class="progressBarWrapper">
                <div class="d-flex align-items-center justify-content-between">
                  <span>css</span>
                  <span>95%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" style="width:95%"></div>
              </div>
              </div>
              <div class="progressBarWrapper">
                <div class="d-flex align-items-center justify-content-between">
                  <span>bootstrap</span>
                  <span>95%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" style="width:95%"></div>
              </div>
              </div>
              <div class="progressBarWrapper">
                <div class="d-flex align-items-center justify-content-between">
                  <span>vue js</span>
                  <span>80%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" style="width:80%"></div>
              </div>
              </div>
              <div class="progressBarWrapper">
                <div class="d-flex align-items-center justify-content-between">
                  <span>javascript</span>
                  <span>70%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" style="width:70%"></div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
    
    data(){
        return{
          mainTitle:"My Skills",
          title:"What i Know",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    },
 
}
</script>

<style lang="scss" scoped>
  .mySkills{
    color:var(--white);
    .flex-row{
      margin-top:rem(70px);
    }
    .progressBarWrapper{
      margin-bottom:rem(35px);
      span{
        font-size:rem(25px);
        margin-bottom:10px;
        text-transform: uppercase;
      }
      .progress-bar{
        background: var(--primary);
      }
    }
    &__left{
      flex:0 0 40%;
      max-width: 40%;
      h4{
        text-align: left;
        margin-bottom:rem(20px);
        color:var(--white);
      font-size:rem(40px);
      font-weight:600;
      font-family:$default-font;
      }
    }
    &__right{
      flex:1;
      padding-left:rem(140px);
    }
    .sectionTitle{
      text-align: center;
      &:after{
        left:50%;
        transform: translateX(-50%);
      }
    }
    p{
      color:var(--white);
      font-size:rem(20px);
      font-weight:400;
      font-family:$default-font;
      margin-bottom:rem(50px);
    }
    .button-row{
      margin-top:0;
    }
    ul{
      display: flex;
      align-items:center;
      margin-bottom:rem(35px);
      li{
        font-family:$default-font;
        font-size:rem(20px);
        .icon{
          margin-right:rem(20px);
          img{
            width:30px;
          }
        }
        p{
          margin:0;
          line-height:1;
          margin-top:5px;
          font-weight:600;
        }
      }
    }
  }
</style>
