<template>
  <div class="baseSearchlist__item">
    <div class="baseSearchlist__section">
      <h2>
        <a href="" class="baseSearchlist__section--title"> media center </a>
      </h2>
      <a href="" class="baseSearchlist__section--subtitle">
        <span class="icon">
          <!-- <img
            src="@/assets/images/search/icons/press-releases.png"
            class="img-fluid"
            alt=""
          /> -->
        </span>
        Press Releases
      </a>
    </div>
    <div class="baseSearchlist__card">
      <div class="row align-items-center">
        <div class="col-md-7">
          <span class="baseSearchlist__card--date">5 MAY - 2020</span>
          <!-- <h2 class="baseSearchlist__card--title" id="name"></h2> -->
          <h3>
            <router-link class="baseSearchlist__card--title" to="/" id="name2">
              Zain’s Virtual Assistive technologies Hackathon
            </router-link>
          </h3>
          <div class="baseSearchlist__card--description">
            <p>
              Zain’s Virtual Assistive technologies Hackathon A 4-day virtual
              hackathon revolving around assistive technologiesfor people with
              disabilities that Zain hosted.Zain’sdisability inclusion
              initiative, WE ABLE.
            </p>
          </div>
          <button
            class="baseSearchlist__card--button btn btn-primary"
            aria-describedby="name2"
          >
            read more
          </button>
        </div>
        <div class="col-md-5">
          <div class="baseSearchlist__card--media slider">
            <base-media-slider :media-slides="slideImages"></base-media-slider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseMediaSlider from "@/common/components/base/BaseMediaSlider";
export default {
  components: {
    BaseMediaSlider,
  },
  data() {
    return {
      slideImages: [
        {
          image: "about/awardDetail.jpg",
        },
        {
          image: "about/awardDetail.jpg",
        },
        {
          image: "about/awardDetail.jpg",
        },
      ],
    };
  },
};
</script>
