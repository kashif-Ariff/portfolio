<template>
	<div class="initiators service entertainment">
		<div class="container">
			<div class="slider-header">
				<div class="row">
					<div class="col-12 col-lg-9">
						<h2>Get to know the initiators</h2>
						<p>
							Lorem Ipsum is simply dummy is the text of the
							printing .
						</p>
					</div>
					<div class="col-12 col-lg-3">
						<a href="#">View All</a>
					</div>
				</div>
			</div>
		</div>

		<div class="container-right position-relative">
			<carousel
				:carousel-settings="sliderOption"
				class="slider-services"
				id="initiators-slider"
			>
				<div
					class="swiper-slide"
					v-for="card in initiators"
					:key="card.index"
				>
					<initiators-card :initiatorsCard="card"></initiators-card>
				</div>
			</carousel>
		</div>
	</div>
</template>

<script>
import InitiatorsCard from './partials/InitiatorsCard.vue';
export default {
	components: { InitiatorsCard },
	data() {
		return {
			initiators: [
				{
					index: 0,
					mainImage: 'phot-3.png',
					link: '#',
					title: 'Small and Medium Enterprises Guide',
					detail: 'Lorem Ipsum is simply dummy is the text of the printing and the typesetting industry since 1500.',
					MainLInk: '#',
				},
				{
					index: 1,
					mainImage: 'phot-3.png',
					link: '#',
					title: 'Small and Medium Enterprises Guide',
					detail: 'Lorem Ipsum is simply dummy is the text of the printing and the typesetting industry since 1500.',
					MainLInk: '#',
				},
				{
					index: 2,
					mainImage: 'phot-3.png',
					link: '#',
					title: 'Small and Medium Enterprises Guide',
					detail: 'Lorem Ipsum is simply dummy is the text of the printing and the typesetting industry since 1500.',
					MainLInk: '#',
				},
				{
					index: 3,
					mainImage: 'phot-3.png',
					link: '#',
					title: 'Small and Medium Enterprises Guide',
					detail: 'Lorem Ipsum is simply dummy is the text of the printing and the typesetting industry since 1500.',
					MainLInk: '#',
				},
			],
			sliderOption: {
				slidesPerView: 1,
				spaceBetween: 5,
				breakpoints: {
					992: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					576: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
				},
			},
		};
	},
};
</script>

<style lang="scss" scoped>
.initiators {
	//   background-image: url("../img/home/bg-initators.png");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding-bottom: rem(18px);
	padding-top: rem(90px);
	@media screen and (max-width: 991px) {
		padding-top: rem(35px);
	}
	@include small_medium {
		padding-bottom: 0px;
		padding-top: rem(40px);
	}

	.slider-header {
		h2 {
			//  @include fonts($Gotham-Book, 36px);
			font-size: rem(36px);
			font-weight: 700;
			color: $thirdColor;
			text-transform: uppercase;
			position: relative;
			z-index: 1;
			margin-bottom: rem(20px);
			@media screen and (max-width: 767px) {
				font-size: rem(28px);
			}
			@media screen and (max-width: 767px) {
				font-size: rem(24px);
			}
			@include small_medium {
				//    font-size: 27px;
				margin-bottom: 5px;
			}
		}
		p {
			//  @include fonts($Gotham-Book, 24px);
			font-size: rem(24px);
			font-weight: 400;
			color: $mainColor;
			margin-bottom: 0px;
			position: relative;
			z-index: 1;
			@media screen and (max-width: 991px) {
				margin-bottom: 20px;
			}
			@media screen and (max-width: 767px) {
				font-size: rem(18px);
			}
			@include small_medium {
				font-size: rem(16px);
				margin-bottom: rem(20px);
			}
		}
		div {
			&:last-child {
				display: flex;
				justify-content: flex-end;
				padding-right: 30px;
				margin-bottom: rem(25px);
				@media screen and (max-width: 1850px) {
					justify-content: start;
				}
				a {
					// font-family: "Gotham-Book";
					font-size: rem(24px);
					color: #234156;
					text-transform: capitalize;
					margin-inline-end: rem(20px);
					margin-top: rem(10px);
					position: relative;
					z-index: 1;
					@include prefixer(
						transition,
						all 0.3s ease-in-out,
						o moz wibket
					);
					&:hover {
						color: $mainColor;
					}
					@media (max-width: 1024px) {
						font-size: rem(18px);
					}
				}
				ul {
					//   @extend %d-flex-around;
					li {
						display: inline-block;
						line-height: 50px;
						text-align: center;
						cursor: pointer;
						width: 50px;
						height: 50px;
						border-radius: 50%;
						background-color: transparent;
						border: 1px solid $mainColor;
						@include prefixer(
							transition,
							all 0.3s ease-in-out,
							o moz wibket
						);
						&:hover {
							background-color: $secondColor;
							border: none;
							&:i {
								color: #000;
							}
						}
						&:last-child {
							margin-inline-start: rem(10px);
						}
						i {
							color: $mainColor;
							font-size: rem(20px);
						}
					}
				}
			}
		}
	}
	.slider-services {
		.slick-current {
			transform: translateY(-19px);
		}
	}
}
.initiators {
	.container-right {
		position: relative;
		&:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			left: -146px;
			top: -110px;
			background-image: url('../../../assets/images/home/bg-initators.png');
		}
		/deep/ {
			.slider-item .slider-item-content > div:last-child {
				padding-left: rem(20px);
				@media screen and (max-width: 1600px) {
					padding-left: 0;
				}
				h6 {
					font-weight: 500;
				}
				p {
					line-height: 1.4;
				}
			}
		}
	}

	//   background-size: contain;
	// @media screen and (min-width: 991px) {
	//   background-position: 2vw;
	// }
	// @media screen and (min-width: 1600px) {
	//   background-position: 5vw;
	// }
	.slider-item {
		padding-left: rem(5px);
		margin-top: rem(25px) !important;
		margin-bottom: rem(25px) !important;
		@media screen and (max-width: 575px) {
			width: 300px;
			margin: auto;
		}
	}
	.slider-header {
		@media screen and (max-width: 991px) {
			.row {
				margin-bottom: 0px !important;
			}
		}
	}
	/deep/ {
		.sliderNavigation {
			top: -120px;

			z-index: 0;
			height: 0;
			--border: var(--swiper-theme-color);
			--arrow: var(--swiper-theme-color);
			bottom: 0;
			left: 150px;
			@media screen and (min-width: 1599px) {
				left: 75px;
				top: -125px;
			}
			@media screen and (max-width: 1200px) {
				top: -150px;
				left: 200px;
			}
			@media screen and (max-width: 1042px) {
				left: 205px;
			}
			@media screen and (max-width: 991px) {
				right: 90px;
				left: auto;
				top: -48px;
			}
			@media screen and (max-width: 767px) {
				right: 70px;
			}
			@media screen and (max-width: 575px) {
				right: 15px;
			}
			&__controls {
				max-width: 340px;
				@media screen and (max-width: 991px) {
					max-width: 200px;
					margin-right: 0;
					margin-left: auto;
					text-align: right;
				}
				&--pagination,
				&--pause {
					display: none;
				}
				button {
					transition: 0.5s ease all;
					&:hover {
						opacity: 1;
						--border: var(--gray-dark);
						--arrow: var(--swiper-theme-color);
						background: var(--gray-dark);
					}
				}
				#prevArrow {
					margin-right: 10px;
				}
			}
		}
	}
}
</style>
