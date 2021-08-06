<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-3">
          <p>Kuwait City, 25501 Mansouriya Al-Faiha Business Center</p>
          <p>Info@nationalfund.gov.kw</p>
          <span> +965 1234 5678/+965 1234 5678</span>
          <div>
            <h6>Get Social :</h6>
            <ul class="list-unstyled">
              <li><i class="fa fa-facebook"></i></li>
              <li><i class="fa fa-twitter"></i></li>
              <li><i class="fa fa-instagram"></i></li>
              <li><i class="fa fa-google-plus"></i></li>
              <li><i class="fa fa-youtube"></i></li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <h4>About Us</h4>
          <ul class="list-unstyled">
            <li>Vision & Mission</li>
            <li>Chairman’s Message</li>
            <li>Advisory Board</li>
            <li>Board of Directors</li>
            <li>Executive Management</li>
            <li>FAQ’s</li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <h4>News & Events</h4>
          <ul class="list-unstyled">
            <li>Events</li>
            <li>News</li>
            <li>Publications</li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <h4>Programs & Services</h4>
          <ul class="list-unstyled">
            <li>Programs</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </div>

    <div>Copyright © 2021 National Fund.. All Rights Reserved.</div>
  </footer>
</template>

<script>
import subscribe from "./partials/Subscribe.vue";
import unsubscribe from "./partials/UnSubscribe.vue";
export default {
  components: {
    subscribe,
    unsubscribe,
  },
  data() {
    return {
      footerInnerText: {
        en: "© 2021 Copyright Zain. All Rights Reserved.",
        ar: "©️ 2021 حقوق الطبع والنشر لـ'زين'. جميع الحقوق محفوظة.",
      },
    };
  },
  created() {
    this.$i18n.locale == "en"
      ? (this.footerInnerText = this.footerInnerText.en)
      : (this.footerInnerText = this.footerInnerText.ar);
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: 60px;

  @include small_medium {
    margin-top: 20px;
  }
  .row {
    div {
      @media (min-width: 992px) {
        padding: 0;
      }

      &:first-child {
        background-image: url("../../assets/images/home/bg-footer.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        @include xSmall {
          background-image: none;
        }
        p {
          @include fonts($Gotham-Book, 16px);
          color: $thirdgray;
          margin-bottom: 0;
          &:first-child {
            @include small_medium {
              margin-bottom: 9px;
            }
            margin-bottom: 33px;
            @include fonts($Gotham-Book, 18px);
            color: $thirdColor;
          }
        }
        span {
          display: block;
          @include fonts($Gotham-Book, 15px);
          color: $thirdgray;
          margin-bottom: 33px;
          margin-top: 5px;
          @include small_medium {
            margin-bottom: 15px;
          }
        }
        div {
          h6 {
            @include fonts($Gotham-bold, 14px);
            color: $thirdColor;
            margin-bottom: 20px;
            @include small_medium {
              margin-bottom: 7px;
            }
          }
          ul {
            padding: 0;
            display: flex;
            align-items: center;
            li {
              // text-align:left;
              font-size: 16px;
              width: 35px;
              height: 35px;
              background-color: transparent;
              cursor: pointer;
              border-radius: 50%;
              @include prefixer(transition, all 0.5s ease-in-out, o moz wibket);
              &:not(:last-child) {
                margin-inline-end: 17px;
              }
              &:hover {
                background-color: $whiteColor;
                i {
                  color: $mainColor;
                }
              }
            }
          }
        }
      }
      &:not(:first-child) {
        h4 {
          @include fonts($Gotham-bold, 18px);
          color: $thirdColor;
          margin-bottom: 25px;
        }
        ul {
          li {
            width: fit-content;
            @include fonts($Gotham-Book, 16px);
            color: $thirdgray;
            margin-bottom: 11px;
            cursor: pointer;
            @include prefixer(transition, all 0.3s ease-in-out, o moz wibket);
            &:hover {
              color: $mainColor;
              @include fonts($Gotham-bold, 16px);
            }
          }
        }
      }
    }
  }
  > div {
    &:last-child {
      @include fonts($Gotham-Book, 16px);
      text-align: center;
      background-color: $thirdColor;
      padding: 25px 0;
      color: $whiteColor;
    }
  }
}
</style>
