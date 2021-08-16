<template>
  <div class="contactUs">
    <base-inner-banner :banner-detail="innerBannerDetail" />
    <div class="container">
        <div class="upperContact">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="row mapDetail align-items-center">
                <div class="col-5 d-flex align-items-center">
                  <span class="icon"></span>
                  <span class="label">Address</span>
                </div>
                <div class="col-7">
                  <span class="detail">Kuwait City, 25501 Mansouriya</span>
                </div>
              </div>
              <div class="row mapDetail align-items-center">
                <div class="col-5 d-flex align-items-center">
                  <span class="icon"></span>
                  <span class="label">Email</span>
                </div>
                <div class="col-7">
                  <span class="detail">info@nationalfund.gov.kw</span>
                </div>
              </div>
              <div class="row mapDetail align-items-center">
                <div class="col-5 d-flex align-items-center">
                  <span class="icon"></span>
                  <span class="label">Phone No.</span>
                </div>
                <div class="col-7">
                  <span class="detail">136</span>
                </div>
              </div>
              <div class="row mapDetail align-items-center">
                <div class="col-5 d-flex align-items-center">
                  <span class="icon"></span>
                  <span class="label">Working Hours</span>
                </div>
                <div class="col-7">
                  <span class="detail">8:30 am - 1:00 pm</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="map custom-border-radius">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14143117.941545919!2d60.32337114882688!3d30.068124090484673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1628862714297!5m2!1sen!2s" style="border:0;" allowfullscreen=""></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="formDetail">
          <div class="title d-flex align-items-center">
            <span class="icon"></span>
            <span class="label">We’re more than happy to help. Give us a call or just drop a message.</span>
          </div>
          <div class="row">
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="First Name">
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Last Name">
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Phone No.">
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Email">
            </div>
            <div class="col-md-6">
              <vue-select
                :options="input__options"
                v-model="selected_item"
                aria-label="content category"
                tabIndex="0"
            ></vue-select>
            </div>
            <div class="col-md-6">
              <textarea class="form-control" placeholder="Message"></textarea>
            </div>
          </div>
          <div class="button-row justify-content-end">
            <button class="btn btn-primary">Send</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  const selected_item = {
    label: 'Content Category',
}
export default {
  data() {
    return {
      selected_item,
      input__options: [
          { code: null, label: 'All' },
          { code: 'a', label: 'This is First option' },
          { code: 'b', label: 'Selected Option' },
          { code: 'c', label: 'Third Option' },
      ],
      innerBannerDetail: {
        image: "BOD.png",
        title: "Contact",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.contactUs{
  .custom-border-radius{
    border-radius: 0px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: -3px 1px 10px #ccc;
  }
  iframe{
    width:100%;
    height: 350px;
    @media screen and (min-width:1600px) {
      height: 400px;  
    }
  }
  span{
      display:inline-block;
      &.icon{
        width: 25px;
        height: 25px;
        background:var(--secondary);
        margin-right: 15px;
      }
      &.label{
        font-size: rem(18px);
        font-weight: 400;
        color: var(--secondary);
        @media screen and (min-width:1600px) {
          font-size: rem(20px);
        }
      }
      &.detail{
        font-size: rem(20px);
        color: #82919C;
        @media screen and (min-width:1600px) {
          font-size: rem(22px);
        }
      }
    }
  .mapDetail{
    margin-bottom: rem(15px);
    & > div{
      &:first-child{
        position: relative;
        &::before{
          content: ':';
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          position: absolute;
          font-weight: bold;
        }
      }
      
    }
    
  }
  .formDetail{
    margin-top: rem(50px);
    .title{
      margin-bottom: rem(30px);
    }
    input{
      margin-bottom: rem(50px);
    }
  }
}
</style>