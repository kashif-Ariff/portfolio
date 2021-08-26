<template>
	<div class="our-services" :class="isOpen ? '' : 'd-none'">
		<div class="container">
			<div class="services-drop-down">
				<h2 class="mb-30">Our services</h2>
				<div class="row w-100">
					<div class="col-12 col-lg-10 drop-down-itmes">
						<div class="row">
							<div class="col-12 col-md-4">
								<div class="drop-down">
									<p>Menu</p>
									<vue-select
										:options="options_sub_one"
										v-model="selectOne"
									/>
								</div>
							</div>
							<div class="col-12 col-md-4">
								<div class="drop-down">
									<p>Category</p>
									<vue-select
										:options="options_sub_two"
										v-model="selectTwo"
									/>
								</div>
							</div>

							<div class="col-12 col-md-4">
								<div class="drop-down">
									<p>Project Stage</p>
									<vue-select
										:options="options_sub_three"
										v-model="selectThree"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-2">
						<a class="services-search">
							<span>Search </span>
							<base-svg-icon
								icon-id="search-icon"
								icon-viewbox="0 0 81.49 81.49"
							></base-svg-icon>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="common">
			<div class="container">
				<div class="slider-header">
					<div class="row">
						<div class="col-12 col-md-9">
							<h2>Common interests</h2>
							<p>
								Lorem Ipsum is simply dummy is the text of the
								printing .
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="container-right">
				<carousel
					:carousel-settings="sliderOption"
					class="slider-services"
				>
					<div
						class="swiper-slide"
						v-for="cardData in listDetail"
						:key="cardData.id"
					>
						<base-detail-card
							:cardData="cardData"
						></base-detail-card>
					</div>
				</carousel>
			</div>
		</div>

		<div class="common">
			<div class="container">
				<div class="slider-header">
					<div class="row">
						<div class="col-12 col-md-9">
							<h2>Our Services</h2>
							<p>
								Lorem Ipsum is simply dummy is the text of the
								printing .
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="container-right">
				<carousel
					:carousel-settings="sliderOption"
					class="slider-services"
				>
					<div
						class="swiper-slide"
						v-for="cardData in listDetail"
						:key="cardData.id"
					>
						<base-detail-card
							:cardData="cardData"
						></base-detail-card>
					</div>
				</carousel>
			</div>
		</div>

		<div class="common">
			<div class="container">
				<div class="slider-header">
					<div class="row">
						<div class="col-12 col-md-9">
							<h2>Get to know the initiators</h2>
							<p>
								Lorem Ipsum is simply dummy is the text of the
								printing .
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="container-right">
				<carousel
					:carousel-settings="sliderOption"
					class="slider-services"
				>
					<div
						class="swiper-slide"
						v-for="cardData in listDetail"
						:key="cardData.id"
					>
						<base-detail-card
							:cardData="cardData"
						></base-detail-card>
					</div>
				</carousel>
			</div>
		</div>
	</div>
</template>

<script>
import BaseDetailCard from '../components/base/BaseDetailCard.vue';
const categoryOne = {
	label: 'All',
};
const categoryTwo = {
	label: 'All',
};
const categoryThree = {
	label: 'All',
};
export default {
	components: { BaseDetailCard },
	props: {
		isOpen: Boolean,
	},

	data() {
		return {
			openOrNot: this.isOpen,
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
			options_sub_one: [
				{ code: null, label: 'All' },
				{ code: 'a', label: 'First option' },
				{ code: 'b', label: 'Selected Option' },
				{ code: 'c', label: 'Search for Idea' },
			],
			options_sub_two: [
				{ code: null, label: 'All' },
				{ code: 'a', label: 'First option' },
				{ code: 'b', label: 'Selected Option' },
				{ code: 'c', label: 'Search for Idea' },
			],
			options_sub_three: [
				{ code: null, label: 'All' },
				{ code: 'a', label: 'First option' },
				{ code: 'b', label: 'Selected Option' },
				{ code: 'c', label: 'Search for Idea' },
			],
			selectOne: categoryOne,
			selectTwo: categoryTwo,
			selectThree: categoryThree,
			sliderOption: {
				slidesPerView: 1.2,
				spaceBetween: 20,
				observer: true,
				observeParents: true,
				breakpoints: {
					1200: {
						slidesPerView: 5,
					},
					992: {
						slidesPerView: 4,
					},
					768: {
						slidesPerView: 3,
					},
					576: {
						slidesPerView: 2.2,
					},
					431: {
						slidesPerView: 1.4,
					},
				},
			},
		};
	},
	watch: {
		isOpen: function (val) {
			if (val) {
				console.log('Child', val);
				document
					.querySelector('body main > div')
					.classList.add('d-none');
				document.querySelector('body').style.backgroundColor =
					'#234156';
				document.querySelector('footer').classList.add('d-none');
			} else {
				console.log('Child', val);
				document.querySelector('body').removeAttribute('style');
				document
					.querySelector('body main > div')
					.classList.remove('d-none');
				document.querySelector('footer').classList.remove('d-none');
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.our-services {
	--toggleColor: #009cde;
	background-color: $thirdColor;
	height: auto;
	padding-top: rem(30px);
	position: absolute;
	top: 130px;
	left: 0;
	right: 0;
	z-index: 200000;
	@media screen and (min-width: 1600px) {
		top: 150px;
	}
	.container-right {
		position: relative;
		/deep/ {
			.sliderNavigation {
				top: -120px;
				z-index: 0;
				height: 0;
				--border: var(--swiper-theme-color);
				--arrow: var(--swiper-theme-color);
				@media screen and (max-width: 767px) {
					.container {
						padding: 0px 15px;
					}
				}
				@media screen and (max-width: 991px) {
					top: -80px;
				}
				@media screen and (max-width: 767px) {
					top: -35px;
					left: 0;
					right: auto;
				}
				&__controls {
					@media screen and (max-width: 767px) {
						margin-left: unset;
						margin-right: auto;
					}
					max-width: 340px;
					@media screen and (max-width: 1199px) {
						max-width: 150px;
					}
					&--pagination,
					&--pause {
						display: none;
					}
					button {
						transition: 0.5s ease all;
						&:hover {
							opacity: 1;
							--border: #fff;
							--arrow: #000;
							background: #fff;
						}
					}
					#prevArrow {
						margin-right: 15px;
					}
				}
			}
		}
	}
	@include prefixer(transition, all 0.4s ease-in-out, o moz wibket);
	@media (max-width: 991.98px) {
		top: 183px;
	}
	@include xSmall {
		top: 144px;
	}
	h2 {
		color: $whiteColor;
		text-transform: uppercase;
		//     @include fonts($Gotham-bold, 42px);
		font-size: rem(36px);
		font-weight: 700;
		margin-bottom: rem(15px);
		z-index: 1;
		position: relative;
		@media (max-width: 991.98px) {
			font-size: rem(30px);
		}
	}
	.services-drop-down {
		margin-bottom: rem(90px);
		@include small_medium {
			margin-bottom: rem(40px);
		}

		> .row {
			align-items: center;
			@include small_medium {
				padding-inline-start: 5px;
				padding-inline-end: 5px;
			}
			@media screen and (max-width: 575px) {
				padding: 0 15px;
			}
		}

		.drop-down-itmes {
			background-color: $whiteColor;
			border-radius: 47px;
			padding: rem(22px) rem(50px);
			//  height: 110px;
			@media (max-width: 1600px) {
				padding: 15px rem(35px);
			}
			@include small_medium {
				border-radius: 21px;
				margin-bottom: rem(15px);
			}

			.row {
				> div {
					&:nth-child(2) {
						position: relative;
						&::after {
							@include postionUrl(
								6px,
								auto,
								0,
								absolute,
								url('../../assets/images/home/separators-line.png')
							);
							@include small_medium {
								display: none;
							}
						}
						&::before {
							@include postionUrl(
								6px,
								0,
								auto,
								absolute,
								url('../../assets/images/home/separators-line.png')
							);
							@include small_medium {
								display: none;
							}
						}
					}
				}
			}
			p {
				//    @include fonts($Gotham-Book, 24px);
				font-size: rem(24px);
				font-weight: 400;
				color: $thirdColor;
				margin-bottom: -4px;
				@media (max-width: 991.98px) {
					font-size: rem(18px);
				}
				@include xSmall {
					font-size: rem(13px);
				}
			}
			/deep/ {
				.v-select {
					border: none;
					box-shadow: none;
					padding-left: 0px;
					background: transparent;
					@media screen and (max-width: 767px) {
						padding-right: 0;
						height: 45px;
						.vs__dropdown-toggle {
							min-height: 60px;
						}
					}
					.vs__dropdown-option {
						color: #5d5d5d;
						font-size: rem(18px);
						font-weight: 400;
						border-bottom: solid 1px #f5f5f3;
						margin: rem(0px) rem(10px);
						padding: rem(15px) 0;
						padding-left: rem(20px);
						line-height: 1;
					}
					.vs__dropdown-toggle {
						.vs__selected {
							color: #525252;
							font-weight: 400;
							font-size: 17px;
						}
					}
				}
			}
			//  .nice-select {
			//    border: none;
			//    width: 100%;
			//    padding-left: unset;
			//    padding-inline-start: 3px;
			//    @include xSmall {
			//      padding: 0;
			//    }
			//    &::after {
			//      content: "\f0dd";
			//      font-family: "FontAwesome";
			//      border: 0;
			//      transform: unset;
			//      top: 0;
			//      color: $mainColor;
			//      font-size: rem(30px);
			//    }
			//    span {
			//      color: $grayColor;
			//      // @include fonts($Gotham-Light, 17px);
			//      font-size: rem(17px);
			//      font-weight: 300;
			//      @media (max-width: 991.98px) {
			//        font-size: rem(13px);
			//      }
			//    }
			//    .list {
			//      width: 100%;
			//      border: 0;
			//      border-radius: 0;
			//      top: 48px;
			//      border-bottom-left-radius: 25px;
			//      border-bottom-right-radius: 25px;
			//      @include small_medium {
			//        top: 32px;
			//      }

			//      li {
			//        position: relative;
			//        @media (max-width: 991.98px) {
			//          font-size: rem(14px);
			//          padding-left: rem(11px);
			//          padding-right: rem(25px);
			//        }

			//        &::after {
			//          @include postionUrl(
			//            5px,
			//            auto,
			//            11px,
			//            absolute,
			//            url("../../assets/images/home/icon/check-icon.png")
			//          );
			//          opacity: 0;
			//          @include prefixer(transition, all 0.3s ease-in-out, o moz wibket);
			//        }
			//        &:hover::after {
			//          opacity: 1;
			//        }
			//      }
			//    }
			//  }
		}
		.services-search {
			background-color: $mainColor;
			height: 82px;
			line-height: 82px;
			width: 180px;
			border-radius: 41px;
			text-align: center;
			color: $whiteColor;
			@media screen and (max-width: 1600px) {
				height: 75px;
				line-height: 75px;
			}
			@media (max-width: 991.98px) {
				// height: fit-content;
				// width: fit-content;
				height: 65px;
				line-height: 70px;
				width: 150px;
				margin: rem(25px) auto auto auto;
			}
			@media screen and (max-width: 575px) {
				width: 100%;
				height: 54px;
				line-height: 54px;
			}
			@extend %d-flex-center;
			cursor: pointer;
			@include prefixer(transition, all 0.5s ease-in-out, o wibket moz);
			&:hover {
				background-color: $secondColor;
			}
			span {
				//    @include fonts($Gotham-Book, 24px);
				font-size: rem(24px);
				font-weight: 400;
				margin-inline-end: 7px;
				letter-spacing: 1px;
			}
			/deep/ {
				svg {
					fill: $whiteColor;
					width: 30px;
					@media screen and (max-width: 767px) {
						width: 25px;
					}
				}
			}
		}
		@media screen and (max-width: 767px) {
			.col-12:not(:last-child) {
				border-bottom: 1px solid;
				padding-bottom: 10px;
				margin-bottom: 10px;
			}
		}
	}

	.common {
		margin-bottom: rem(75px);
		@media (max-width: 991.8px) {
			margin-bottom: 0px;
		}
		.slider-services {
			.swiper-slide {
				margin: rem(25px) 0px;
				@include prefixer(
					transition,
					all 0.4s ease-in-out,
					o moz wibket
				);
			}
		}
		.slick-slider {
			@include small_medium {
				padding-inline-start: 7px;
			}
		}

		p {
			color: $whiteColor;
			margin-bottom: 30px;
			//  @include fonts($AlegreyaSans-Regular, 24px);
			font-size: rem(24px);
			font-weight: 400;
			@media (max-width: 991.98px) {
				margin-top: 0;
				font-size: rem(18px);
				margin-bottom: rem(20px);
			}
		}
		svg {
			width: 60px;
			color: $thirdColor;
			margin-bottom: rem(30px);
			margin-top: rem(19px);
			@media (max-width: 991.98px) {
				margin-bottom: rem(15px);
			}
		}
		.slider-header {
			@media screen and (max-width: 767px) {
				padding-bottom: rem(40px);
			}
			div {
				&:last-child {
					ul {
						//   @extend %d-flex-around;
						@include small_medium {
							display: flex;
						}
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
								all 0.5s ease-in-out,
								o moz wibket
							);
							&:hover {
								background-color: $whiteColor;
								border: none;
								& i {
									color: #000;
								}
							}
							&:last-child {
								margin-inline-start: 10px;
							}
							i {
								color: $mainColor;
								font-size: 20px;
							}
						}
					}
				}
			}
		}
		.slider-services {
			.slider-item {
				/deep/ {
					a {
						text-transform: uppercase;
					}
				}
			}
			.swiper-slide-active {
				.slider-item {
					transform: translateY(-19px);
					/deep/ {
						a {
							opacity: 1;
						}
					}
				}
			}
		}
	}
}

@media (min-width: 768px) {
	.container-right {
		margin-right: 0;
		margin-left: calc(50vw - 375px);
		max-width: auto;
	}
}

@media (min-width: 992px) {
	.container-right {
		margin-right: 0;
		margin-left: calc(50vw - 485px);
		max-width: auto;
	}
}

@media (min-width: 1200px) {
	.container-right {
		margin-right: 0;
		margin-left: calc(50vw - 585px);
	}
}
</style>
