<template>
    <section class="contact" id="contact">
        <div class="container">
          <div class="sectionTitle">{{mainTitle}}</div>
          <h3>{{title}}</h3>
          <div class="flex-row">
             
            <div class="contact__left">
              <h4>{{title}}</h4>
              <p>{{desc}}</p>
              <ul class="list-unstyled" v-for="item in info" :key="item.id">
                <li>
                  <div class="icon">
                    <img :src="require(`@/assets/images/svg/${item.image}`)" class="img-fluid" alt="user">
                  </div>
                </li>
                 <li>{{item.title}}<p>{{item.subTitle}}</p></li>
              </ul>
            </div>
            <div class="contact__right">
              <h3>{{heading}}</h3>
               <form>
                 <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Name" name=""> 
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email" name=""> 
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Subject" name=""> 
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <textarea  class="form-control" placeholder="Message"></textarea>
                        </div>
                    </div>
                 </div>
                 <div class="button-row">
                  <button class="btn btn-primary" href="#"><span>{{btnText}}</span></button>
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
          info:[
            {
              id:0,
              image:'user-solid.svg',
              title:'Name',
              subTitle:'Kashif'
            },
            {
              id:1,
              image:'map-marker-alt-solid.svg',
              title:'Location',
              subTitle:'Pakistan'
            },
            {
              id:2,
              image:'envelope-solid.svg',
              title:'Email',
              subTitle:'kashif@kuwaitnet.com'
            },
          ],
          mainTitle:"Contact me",
          title:"Get in touch",
          desc:"My inbox is always open. Whether for a potential project or idea, I’ll try my best to answer your email!",
		  heading:'Message me',
		  btnText:'Send message'

        }
    },
 
}
</script>

<style lang="scss" scoped>
  .contact{
    color:var(--white);
    .flex-row{
      margin-top:rem(70px);
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
      h3{
        text-align:left !important;
        margin-bottom:rem(20px);
      }
    }
    .sectionTitle{
      text-align: center;
      &:after{
        left:50%;
        transform: translateX(-50%);
      }
    }
    h3{
      color:var(--white);
      font-size:rem(40px);
      font-weight:600;
      font-family:$default-font;
      text-align:center;
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
    @media screen and (max-width:991px){
		&__left{
      flex:none;
      max-width:100%;
      margin-bottom:rem(30px);
    }
    &__right{
      padding:0;
    }
	}
  }
</style>
