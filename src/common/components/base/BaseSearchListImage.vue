<template>
  <div class="baseSearchlist__item">
    <div class="baseSearchlist__section">
      <h2>
        <a href="" class="baseSearchlist__section--title"> about us </a>
      </h2>
      <a href="" class="baseSearchlist__section--subtitle">
        <span class="icon">
          <!-- <img
                        src="@/assets/images/search/icons/ceo-message.png"
                        class="img-fluid"
                        alt=""
                    /> -->
        </span>
        Message from the CEO
      </a>
    </div>
    <div class="baseSearchlist__card">
      <div class="row align-items-center">
        <div class="col-md-7">
          <span class="baseSearchlist__card--date">5 MAY - 2020</span>
          <h3>
            <router-link class="baseSearchlist__card--title" to="/" id="name">
              Mr. Bader Nasser Al-Kharafi
            </router-link>
          </h3>
          <div class="baseSearchlist__card--description">
            <p>It is with great pride that I address our Zain family.</p>
            <p>
              Zain has accomplished many achievements never before encountered
              in the industry. Our leading pace has always been accredited to
              our culture...
            </p>
          </div>
          <button
            class="
              baseSearchlist__card--button
              btn btn-primary
              d-md-block d-none
            "
            aria-describedby="name"
          >
            read more
          </button>
        </div>
        <div class="col-md-5">
          <div class="baseSearchlist__card--media">
            <div class="media-image">
              <!-- <img
                src="@/assets/images/search/person.png"
                alt=""
                class="img-fluid"
              /> -->
              <router-link to="#" class="abs-link"></router-link>
            </div>
            <div class="text-center d-md-none d-block">
              <button
                class="baseSearchlist__card--button btn btn-primary"
                aria-describedby="name"
              >
                read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
