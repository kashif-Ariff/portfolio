<template>
	<div class="main-common service offices">
		<div class="container">
			<div class="slider-header">
				<div class="row">
					<div class="col-12 col-lg-9">
						<h2>Common interests</h2>
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

		<div class="container-right">
			<carousel :carousel-settings="sliderOption" class="slider-services">
				<div
					class="swiper-slide"
					v-for="cardData in listDetail"
					:key="cardData.id"
				>
					<base-detail-card :cardData="cardData"></base-detail-card>
				</div>
			</carousel>
		</div>
	</div>
</template>

<script>
import BaseDetailCard from '../../../common/components/base/BaseDetailCard.vue';
export default {
	components: { BaseDetailCard },
	data() {
		return {
			sliderOption: {
				slidesPerView: 1.2,
				spaceBetween: 20,
				breakpoints: {
					1200: {
						slidesPerView: 4.5,
					},
					768: {
						slidesPerView: 3.4,
					},
					450: {
						slidesPerView: 2.2,
					},
				},
			},
			listDetail: [
				{
					id: 0,
					link: '/',
					image: 'Asset2.svg',
					title: 'Knowledge Library',
					detail: 'Lorem Ipsum is simply dummy is the text of the printing.',
				},
				{
					id: 1,
					link: '/',
					image: 'Asset2.svg',
					title: 'Knowledge Library',
					detail: 'Lorem Ipsum is simply dummy is the text of the printing.',
				},
				{
					id: 2,
					link: '/',
					image: 'Asset2.svg',
					title: 'Knowledge Library',
					detail: 'Lorem Ipsum is simply dummy is the text of the printing.',
				},
				{
					id: 3,
					link: '/',
					image: 'Asset2.svg',
					title: 'Knowledge Library',
					detail: 'Lorem Ipsum is simply dummy is the text of the printing.',
				},
				{
					id: 4,
					link: '/',
					image: 'Asset2.svg',
					title: 'Knowledge Library',
					detail: 'Lorem Ipsum is simply dummy is the text of the printing.',
				},
				{
					id: 5,
					link: '/',
					image: 'Asset2.svg',
					title: 'Knowledge Library',
					detail: 'Lorem Ipsum is simply dummy is the text of the printing.',
				},
				{
					id: 6,
					link: '/',
					image: 'Asset2.svg',
					title: 'Knowledge Library',
					detail: 'Lorem Ipsum is simply dummy is the text of the printing.',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.main-common {
	padding-top: rem(61px);
	padding-bottom: rem(37px);
	@media (max-width: 1199.98px) {
		padding-top: rem(25px);
	}
	h2 {
		font-weight: 700;
		font-size: rem(36px);
		color: #234156;
		text-transform: uppercase;
		position: relative;
		z-index: 1;
		@include small_medium {
			font-size: rem(25px);
		}
	}
	p {
		color: $mainColor;
		margin-top: 0;
		margin-bottom: rem(24px);
		//     @include fonts($AlegreyaSans-Regular, 24px);
		font-size: rem(24px);
		font-weight: 400;
		@include small_medium {
			font-size: rem(16px);
		}
	}
	svg {
		width: 60px;
		height: 60px;
		color: $thirdColor;
		margin-bottom: rem(30px);
		margin-top: rem(19px);
		@media (max-width: 1199.98px) {
			margin-bottom: rem(17px);
		}
	}
	.slider-header {
		div {
			&:last-child {
				margin-bottom: rem(50px);
				display: flex;
				// align-items: center;
				@media (max-width: 991.98px) {
					margin-bottom: 0;
				}
				@include large {
					margin-top: rem(24px);
				}
				a {
					margin-top: rem(10px);
					@include prefixer(
						transition,
						all 0.3s ease-in-out,
						o moz wibket
					);
					// @include fonts($Gotham-Book, 24px);
					font-size: rem(24px);
					font-weight: 400;
					color: $thirdColor;
					text-transform: capitalize;
					margin-inline-end: rem(20px);
					position: relative;
					z-index: 1;
					&:hover {
						color: $mainColor;
					}
					@media (max-width: 1199.98px) {
						// font-size: rem(18px);
						margin-left: rem(20px);
						margin-top: rem(-8px);
					}
					@media screen and (max-width: 1042px) {
						margin-top: 0;
					}
					@media screen and (max-width: 991px) {
						margin-left: 0;
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
		.slider-item {
			cursor: pointer;
			border: none;
			outline: none;
			background-color: $whiteColor;
			border-radius: 30px;
			padding: rem(21px) rem(30px) rem(20px) rem(30px);
			margin: rem(25px) 0;
			// margin-inline-end: 20px;
			box-shadow: -3px 1px 10px #ccc;
			min-height: 272px;
			@include prefixer(transition, all 0.7s ease-in-out, o moz wibket);
			position: relative;
			&:hover {
				transform: translateY(-19px);
				box-shadow: -3px 1px 12px 3px #ccc;
				a {
					opacity: 1;
				}
			}
			a {
				display: block;
				color: $mainColor;
				text-align: right;
				opacity: 0;
				@include prefixer(
					transition,
					all 0.5s ease-in-out,
					o moz wibket
				);
				&:hover {
					color: $secondColor;
				}
			}

			h4 {
				//    @include fonts($Gotham-bold, 18px);
				font-size: rem(18px);
				font-weight: 700;
				color: $thirdColor;

				//    @media (max-width: 1299.98px) {
				//      font-size: rem(13px);
				//    }
			}
			span {
				@include fonts($Gotham-Light, 16px);
				font-weight: 400;
				font-size: rem(16px);
				color: $thirdgray;
				@include truncate(2, 1.5);
			}
		}
		.slick-current {
			transform: translateY(-19px);
			a {
				opacity: 1;
				@include prefixer(
					transition,
					all 0.3s ease-in-out,
					o wibket moz
				);
				&:hover {
					color: $secondColor;
				}
			}
		}
		.swiper-slide-active {
			.slider-item {
				box-shadow: -3px 1px 12px 3px #ccc;
			}
		}
	}
}
.main-common {
	@media screen and (max-width: 767px) {
		margin: 0px rem(20px);
	}
}
.main-common .slider-services .slider-item {
	margin-left: unset;
}
.slider-header {
	@media screen and (max-width: 991px) {
		margin-bottom: rem(40px);
	}
}
.container-right {
	position: relative;
	/deep/ {
		.swiper-container {
			padding-left: rem(10px);
			@media screen and (max-width: 575px) {
				padding-right: 15px;
			}
		}
		.sliderNavigation {
			top: -155px;
			z-index: 0;
			height: 0;
			--border: var(--swiper-theme-color);
			--arrow: var(--swiper-theme-color);
			bottom: 0;
			left: 140px;
			@media screen and (min-width: 1600px) {
				left: 89px;
				top: -153px;
			}
			@media screen and (max-width: 1200px) {
				//    top: -132px;
				left: 180px;
				top: -150px;
			}
			@media screen and (max-width: 1042px) {
				left: 193px;
				top: -134px;
			}
			@media screen and (max-width: 991px) {
				right: 90px;
				left: auto;
				top: -62px;
			}
			@media screen and (max-width: 767px) {
				right: 70px;
			}
			@media screen and (max-width: 575px) {
				right: 0;
			}
			&__controls {
				max-width: 340px;
				@media screen and(max-width:1300px) {
					max-width: 300px;
				}
				@media screen and (max-width: 991px) {
					max-width: 200px;
					text-align: right;
					margin-right: 0;
					margin-left: auto;
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
						--arrow: #fff;
						background: var(--gray-dark);
					}
				}
				#prevArrow {
					margin-right: rem(10px);
				}
			}
		}
	}
}
</style>
