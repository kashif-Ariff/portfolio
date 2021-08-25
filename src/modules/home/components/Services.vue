<template>
	<div class="o-services service retail">
		<div class="container">
			<h2>Our Services</h2>
			<p>Lorem Ipsum is simply dummy is the text of the printing .</p>
			<div class="services-slider">
				<div class="services-content position-relative">
					<carousel
						:carousel-settings="sliderOption"
						class="services-content-slider"
						navigation-layout="side"
						navigation-theme="simple"
						id="plo"
					>
						<div
							class="swiper-slide"
							v-for="slide in services"
							:key="slide.index"
						>
							<services-card :card-data="slide"></services-card>
						</div>
					</carousel>
				</div>
			</div>
			<a href="#">Explore More<i class="fa fa-arrow-right"></i></a>
		</div>
	</div>
</template>

<script>
import ServicesCard from './partials/ServicesCard.vue';
export default {
	components: { ServicesCard },
	data() {
		return {
			services: [
				{
					index: 0,
					image: 'photo.png',
					title: 'Supportive Center Services',
					detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
					link: '#',
				},
				{
					index: 1,
					image: 'img-2.png',
					title: 'National Registry Services',
					detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
					link: '#',
				},
				{
					index: 2,
					image: 'img-3.png',
					title: 'Financier Services',
					detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
					link: '#',
				},
				{
					index: 3,
					image: 'img-4.png',
					title: 'Financier Services',
					detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
					link: '#',
				},
				{
					index: 4,
					image: 'photo.png',
					title: 'Financier Services',
					detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
					link: '#',
				},
			],
			sliderOption: {
				slidesPerView: 1,
				spaceBetween: 12,
				observer: true,
				observeParents: true,
				breakpoints: {
					1200: {
						slidesPerView: 4,
					},
					767: {
						slidesPerView: 3,
					},
					575: {
						slidesPerView: 2,
					},
				},
			},
		};
	},
};
</script>

<style lang="scss" scoped>
.o-services {
	padding-top: rem(85px);
	padding-bottom: rem(70px);

	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	color: $whiteColor;
	text-align: center;
	@media screen and (max-width: 991px) {
		padding-top: rem(35px);
		padding-bottom: rem(40px);
	}
	h2 {
		text-align: center;
		//     @include fonts($Gotham-bold, 36px);
		font-size: rem(36px);
		text-transform: uppercase;
		font-weight: 700;
		margin-bottom: rem(30px);
		@media screen and (max-width: 767px) {
			font-size: rem(28px);
		}
	}
	p {
		//     @include fonts($AlegreyaSans-Regular, 24px);
		font-size: rem(24px);
		font-weight: 400;
		margin-bottom: rem(75px);
		color: #fff;
		@media screen and (max-width: 1600px) {
			margin-bottom: rem(50px);
		}
		@media screen and (max-width: 767px) {
			font-size: rem(18px);
		}
	}
	.services-content {
		margin-bottom: rem(75px);
		@media screen and (max-width: 1600px) {
			margin-bottom: rem(50px);
		}
		outline: none;
		border: none;
		.row {
			> div {
				@include medium {
					padding: 0;
				}
				@include small_medium {
					margin-bottom: rem(25px);
				}
			}
		}
	}
	a {
		display: inline-block;
		//     @include fonts($Gotham-Book, 21px);
		font-size: rem(21px);
		font-weight: 400;
		@include prefixer(transition, all 0.3s ease-in-out, o wibket moz);
		&:hover {
			color: $mainColor;
		}

		i {
			margin-inline-start: 15px;
		}
	}
}
.o-services {
	background-image: url('../../../assets/images/home/bg-services.png');
	.services-slider {
		@media screen and (max-width: 1600px) {
			margin: 0px rem(75px);
		}
	}
	.slider-item {
		margin: rem(25px) 0px;
	}
	/deep/ {
		.sideNavigation {
			height: 100%;
			z-index: 0;
			button {
				border: 0 !important;
				.fa {
					font-size: 45px;
				}
			}
		}
	}
}
</style>
