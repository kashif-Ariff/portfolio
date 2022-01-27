<template>
    <div class="carousel">
        <a href="#" @click="openLightboxOnSlide(1)" class="btn btn-primary">
            <span>
                <i class="fa fa-image"></i>
            </span>
        </a>
        
        <FsLightbox
        :toggler="toggler"
       
        :sources="[
        '/img/nutru.e52c71c8.jpeg',
        '/img/tdalal.c9e890a0.png',
        '/img/ottu.68fa8d67.png',
        ]"
        />
    </div>
</template>

<script>
import FsLightbox from "fslightbox-vue";

export default {
components: { FsLightbox },
data() {
return {
toggler: false,
slide: 1
}
},
methods: {
openLightboxOnSlide: function(number) {
this.slide = number;
this.toggler = !this.toggler;
}
}
}
</script>
<style lang="scss" scoped>
.carousel {
    .btn {
        min-width: auto;
        height: 40px;
        width: 40px;
        padding-right: 0.9375rem;
        padding-left: 0.9375rem;
        background-color: transparent !important;
        span {
            color: var(--white);
            font-size: rem(20px);
            &:hover {
                transform: scale(1.2);
            }
        }
    }
}
</style>