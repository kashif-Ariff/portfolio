<template>
	<div>
		<search-modal
			@closeSearch="isOpenSearch = false"
			:isSearch="isOpenSearch"
		></search-modal>
		<base-video-modal
			@closeVideoModal="closeModal"
			:is-show="showModal"
			:video-url="videoUrlSet"
			:video-type="videoType"
		></base-video-modal>
		<div class="header-div service clinics" id="clinics">
			<div class="overlay"></div>
			<div class="container">
				<!-- <video-modal
          @CloseVideo="isShowVideo = false"
          :isVideo="isShowVideo"
        ></video-modal> -->
				<carousel
					class="header-slider"
					:fractionPagination="true"
					navigation-theme="simple"
					:carousel-settings="sliderOption"
				>
					<div class="swiper-slide heaer-slider-item">
						<h2>
							THE NATIONAL FUND FOR SMALL AND MEDIUM ENTERPRISE
							DEVELOPMENT
						</h2>
						<div
							@click="isOpenSearch = true"
							class="slider-search position-relative"
						>
							<p>
								<vue-typer
									text="Enter Business, Investor or Project..."
									erase-style="clear"
								></vue-typer>
							</p>
							<span class="search-icon" @click="popUpScroll()">
								<base-svg-icon
									icon-id="search-icon"
									icon-viewbox="0 0 81.49 81.49"
								></base-svg-icon>
							</span>
							<!-- <img src="img/home/icon/search-icon.png" alt=""> -->
						</div>

						<p>
							<base-svg-icon
								icon-id="bag-icon"
								icon-viewbox="0 0 116.03 96.69"
								class="bagIcon"
							></base-svg-icon>
							<span>
								Do you want to see our
								<a href="#">services ?</a>
							</span>
						</p>
						<div class="watch-video">
							<div
								class="animate-video"
								@click.prevent="
									openModal(
										require('@/assets/video/shopping.mp4')
									)
								"
							>
								<span>
									<i class="fa fa-play fa-2x"></i>
								</span>
								<div></div>
							</div>
							<div>
								<span
									>watching <br />
									video</span
								>
								<span>02:34</span>
							</div>
						</div>
					</div>
					<!--slider-item-->
					<div class="swiper-slide heaer-slider-item">
						<h2>
							THE NATIONAL FUND FOR SMALL AND MEDIUM ENTERPRISE
							DEVELOPMENT
						</h2>
					</div>
				</carousel>
			</div>
		</div>
	</div>
</template>

<script>
import SearchModal from './partials/SearchModal.vue';
import BaseVideoModal from '@/common/components/base/BaseVideoModal';
import videoModal from '@/mixin/videoModal.js';

// import VideoModal from "./partials/VideoModal.vue";
export default {
	components: { SearchModal, BaseVideoModal },
	mixins: [videoModal],
	data() {
		return {
			sliderOption: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			isOpenSearch: false,
		};
	},
	methods: {
		popUpScroll: function () {
			var root = document.getElementsByTagName('html')[0];
			root.setAttribute('class', 'hidden');
		},
	},
};
</script>

<style lang="scss" scoped>
.header-div {
	background-image: url('../../../assets/images/home/bg-home-new.jpg');
	.bagIcon {
		display: inline;
	}
	/deep/ {
		.sliderNavigation {
			z-index: 1;
			padding: 0 rem(25px);
			// background-color: #0a2333;
			background: rgba($color: #0a2333, $alpha: 0.7);
			width: 380px;
			height: 130px;
			right: 0;
			position: absolute;
			bottom: 0;
			border-top-left-radius: 45px;
			left: auto;
			@media (max-width: 991.98px) {
				width: 100%;
				height: 70px;
			}
			@media (max-width: 330px) {
				height: 46px;
			}
			.container {
				height: 100%;
			}
			&__controls {
				max-width: 270px;
				margin: 0 auto 0 auto;
				display: flex;
				align-items: center;
				height: 100%;
				justify-content: space-between;
				&--pagination {
					order: 3;
				}
				&--pause {
					display: none;
				}
				button {
					position: relative;
					border: 0 !important;
					width: 45px !important;
					height: 45px !important;
					i {
						display: none;
					}
					&#prevArrow {
						left: 0;
						&::before {
							content: '';
							height: 100%;
							width: 100%;
							position: absolute;
							top: 0px;
							left: 0px;
							transform: rotate(180deg);
							background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve' fill='%23fff'%3E%3Cg%3E%3Cg%3E%3Cpath d='M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068 c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557 l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104 c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
						}
					}
					&#nextArrow {
						right: 0;
						&::before {
							content: '';
							height: 100%;
							width: 100%;
							position: absolute;
							top: 0px;
							left: 0px;
							background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve' fill='%23fff'%3E%3Cg%3E%3Cg%3E%3Cpath d='M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068 c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557 l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104 c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
						}
					}
					@media screen and (max-width: 991px) {
						width: 35px !important;
						height: 35px !important;
					}
				}
			}
		}
	}
}

.header-div {
	// background-image: url("../img/home/bg-home.jpg");
	height: auto;
	background-size: cover;
	background-position: center;
	padding-bottom: rem(40px);
	position: relative;
	z-index: 1;
	@media (max-width: 991.98px) {
		height: auto;
		padding-bottom: rem(80px);
	}
	@include small_medium {
		// height: 85vh;
	}
	&::after {
		// @include postionEle(0, 0, 0, absolute, #0a2333ad, 100%, 100%);
		content: '';
		z-index: -1;
		// @include postionEle(0, 0, 0, absolute, #265c71d1, 100%, 100%);
		@include postionEle(0, 0, 0, absolute, #0a233375, 100%, 100%);
	}
	&.bg-opaciy {
		&::after {
			background-color: #0b1a21e6;
		}
	}
	.header-slider {
		.heaer-slider-item {
			outline: none;
			margin-top: rem(250px);
			@media screen and (max-width: 1600px) {
				margin-top: rem(200px);
			}
			@media screen and (max-width: 991px) {
				margin-top: rem(250px);
			}
			@media screen and (max-width: 575px) {
				margin-top: rem(190px);
			}
			h2 {
				color: $whiteColor;
				width: 67%;
				text-align: center;
				margin: auto;
				line-height: 1.4;
				font-size: rem(42px);
				margin-bottom: rem(60px);
				font-weight: 700;
				@media (max-width: 991.98px) {
					width: 99%;
					margin-bottom: rem(15px);
					font-size: rem(30px);
					line-height: 1.2;
				}
				@include small_medium {
					font-size: rem(20px);
				}
			}
			.slider-search {
				cursor: pointer;
				@extend %d-flex-center;
				background-color: $whiteColor;
				border-radius: 53px;
				width: 88%;
				height: 120px;
				text-align: center;
				margin: auto;
				// line-height: 105px;
				padding-right: rem(28px);
				padding-left: rem(62px);
				position: relative;
				@media (max-width: 1600px) {
					padding-right: rem(28px);
					padding-left: rem(50px);
					height: 100px;
					// border-radius: 30px;
				}
				@media (max-width: 991.98px) {
					width: 100%;
					height: 65px;
					line-height: 65px;
				}
				@include xSmall {
					height: 60px;
					line-height: 60px;
					padding-inline-start: rem(26px);
					padding-inline-end: rem(13px);
				}
				@media (max-width: 350px) {
					padding-inline-start: 14px;
				}
				// new
				span.search-icon {
					background-color: #009cde;
					width: 85px;
					height: 85px;
					border-radius: 100px;
					display: flex;
					align-items: center;
					justify-content: center;
					@media screen and (max-width: 1600px) {
						width: 70px;
						height: 70px;
					}
					/deep/ {
						svg {
							color: #ffffff;
							width: 32px;
							@media (max-width: 991.98px) {
								width: 24px;
							}
						}
					}
					@media (max-width: 991.98px) {
						width: 50px;
						height: 50px;
					}
					@include xSmall {
						width: 40px;
						height: 40px;
						/deep/svg {
							width: 22px;
						}
					}
					@include xxSmall {
						// width: 30px;
						// height: 30px;
						svg {
							width: 18px;
						}
					}
				}
				// new
				img {
					width: 75px;
					@media (max-width: 991.98px) {
						width: 60px;
					}
					@include xSmall {
						width: 40px;
					}
					@include xxSmall {
						width: 30px;
					}
				}
				&::before {
					@include textAbsolute(
						28px,
						63px,
						absolute,
						$mainColor,
						rem(24px)
					);
					content: 'Search';
					z-index: 666;
					color: $thirdColor;
					// @include fonts($Gotham-Book, 24px);
					font-size: rem(24px);
					font-weight: 400;
					@media (max-width: 1600px) {
						top: 13px;
						left: 50px;
					}
					@media (max-width: 991.98px) {
						top: -17px;
						font-size: rem(18px);
						left: 40px;
					}
					@include xSmall {
						font-size: rem(14px);
						top: -11px;
						left: 22px;
					}
				}
				p {
					flex-grow: 3;
					text-align: left;
					margin-top: rem(40px);
					color: #525252;
					font-weight: 300;
					@media screen and (max-width: 1600px) {
						margin-top: rem(35px);
					}
					span.vue-typer {
						cursor: pointer;
					}
					span.vue-typer span {
						cursor: pointer;
						font-size: rem(22px);
						font-weight: 300;
						//   @include fonts($Gotham-Light, 22px);
						color: $grayColor;
						position: relative;
						margin-bottom: 0;
						@include small_medium {
							font-size: rem(14px);
							margin-top: rem(13px);
						}
						@include xxSmall {
							//     font-size: rem(10px);
						}
					}
				}
			}
			> p {
				text-align: center;
				//    @include fonts($Gotham-bold, 17px);
				font-size: rem(16px);
				font-weight: 600;
				color: $whiteColor;
				margin-top: rem(60px);
				text-transform: uppercase;
				@media (max-width: 991.8px) {
					margin-top: rem(20px);
				}
				@include small_medium {
					font-size: rem(14px);
				}
				/deep/svg {
					margin-inline-end: 15px;
					display: inline-block;
					width: 50px;
					fill: $mainColor;
					@media screen and (max-width: 991px) {
						width: 30px;
					}
					@include xSmall {
						width: 30px;
					}
				}
				span {
					@media screen and (min-width: 768px) {
						letter-spacing: 2px;
					}
					a {
						border-bottom: 1px solid #536c7a;
					}
				}
				a {
					@include prefixer(
						transition,
						all 0.3s ease-in-out,
						o wibket moz
					);
					&:hover {
						color: $mainColor;
					}
				}
			}
			.watch-video {
				display: flex;
				margin-top: rem(80px);
				padding-bottom: rem(15px);
				@media (max-width: 991.8px) {
					margin-top: rem(45px);
					margin-bottom: rem(30px);
				}
				@include xSmall {
					margin-top: rem(20px);
				}
				.animate-video {
					position: relative;
					cursor: pointer;
					@include prefixer(
						transition,
						all 0.3s ease-in-out,
						o moz wibket
					);
					&:hover {
						transform: scale(0.7);
						div {
							display: block;
							opacity: 0;
							animation: pulse 1s ease-out infinite;
						}
					}
					span {
						width: 80px;
						height: 81px;
						border-radius: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: $mainColor;
						text-align: center;
						i {
							font-size: rem(22px);
						}
						@media screen and (max-width: 991px) {
							width: 58px;
							height: 58px;
							i {
								font-size: rem(20px);
							}
						}
						@include small_medium {
							width: 45px;
							height: 45px;
							i {
								font-size: 17px;
							}
						}
					}
					div {
						@include postionEle(
							// -8px,
							// 16px,
							// auto,
							// absolute,
							// transparebt,
							// 100px,
							// 100px
							-2.5px,
							16px,
							auto,
							absolute,
							transparebt,
							95px,
							95px
						);
						right: 16px;
						border: 2px solid $mainColor;
						border-radius: 50%;
						// opacity: 0;
						// animation: pulse 1s ease-out infinite;
						// display: none;
						@media screen and (max-width: 991px) {
							width: 74px;
							height: 73px;
						}
						@include small_medium {
							width: 55px;
							height: 55px;
							left: 4px;
							// right: 10px;
							top: 0px;
						}
						@media screen and (max-width: 575px) {
							left: 5px;
						}
					}
					& + div {
						display: flex;
						flex-direction: column;
						justify-content: center;
					}
				}
				div {
					span {
						text-transform: uppercase;
						display: block;
						color: $whiteColor;
						margin-top: 5px;
						text-align: center;
						margin-inline-start: 24px;
						text-align: left;
						&:first-child {
							//     @include fonts($Gotham-bold, 16px);
							font-size: rem(16px);
							font-weight: 600;
							line-height: 1.4;
						}
						&:last-child {
							//     @include fonts($Gotham-Book, 16px);
							font-size: rem(15px);
							font-weight: 400;
						}
						@include small_medium {
							margin-inline-start: rem(12px);
							font-size: 13px !important;
						}
					}
				}
			}
		}
	}
}
</style>
