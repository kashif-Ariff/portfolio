<template>
	<div class="services" :aria-label="ariaLabel" role="region">
		<div class="services__slideHead">
			<carousel
				navigationTheme="simple"
				navigationLayout="side"
				:carousel-settings="sliderOption"
				class="iconTabs"
				@init="setThumbSlider"
			>
				<div
					class="
						swiper-slide
						services__slideHead--slide
						iconTabs__item
						nav-link
					"
				>
					<a class="nav-link slide__card" href="#" @click.prevent>
						<div class="iconTabs__item--image">
							<span class="tab-icon">
								<img
									src="@/assets/images/icons/ourServices/color/callCenter.png"
									class="img-fluid"
									alt=""
								/>
								<img
									src="@/assets/images/icons/ourServices/white/callCenter.png"
									class="img-fluid selected"
									alt=""
								/>
							</span>
						</div>
					</a>
					<h3>Supportive Center Services</h3>
				</div>
				<div
					class="
						swiper-slide
						services__slideHead--slide
						iconTabs__item
						nav-link
					"
				>
					<a class="nav-link slide__card" href="#" @click.prevent>
						<div class="iconTabs__item--image">
							<span class="tab-icon">
								<img
									src="@/assets/images/icons/ourServices/color/map.png"
									class="img-fluid"
									alt=""
								/>
								<img
									src="@/assets/images/icons/ourServices/white/map.png"
									class="img-fluid selected"
									alt=""
								/>
							</span>
						</div>
					</a>
					<h3>National Registry Services</h3>
				</div>
				<div
					class="
						swiper-slide
						services__slideHead--slide
						iconTabs__item
						nav-link
					"
				>
					<a class="nav-link slide__card" href="#" @click.prevent>
						<div class="iconTabs__item--image">
							<span class="tab-icon">
								<img
									src="@/assets/images/icons/ourServices/color/growing-up.png"
									class="img-fluid"
									alt=""
								/>
								<img
									src="@/assets/images/icons/ourServices/white/growing-up.png"
									class="img-fluid selected"
									alt=""
								/>
							</span>
						</div>
					</a>
					<h3>Financier Services</h3>
				</div>
				<div
					class="
						swiper-slide
						services__slideHead--slide
						iconTabs__item
						nav-link
					"
				>
					<a class="nav-link slide__card" href="#" @click.prevent>
						<div class="iconTabs__item--image">
							<span class="tab-icon">
								<img
									src="@/assets/images/icons/ourServices/color/leaderShip.png"
									class="img-fluid"
									alt=""
								/>
								<img
									src="@/assets/images/icons/ourServices/white/leaderShip.png"
									class="img-fluid selected"
									alt=""
								/>
							</span>
						</div>
					</a>
					<h3>Training and Monitoring</h3>
				</div>
				<div
					class="
						swiper-slide
						services__slideHead--slide
						iconTabs__item
						nav-link
					"
				>
					<a class="nav-link slide__card" href="#" @click.prevent>
						<div class="iconTabs__item--image">
							<span class="tab-icon">
								<img
									src="@/assets/images/icons/ourServices/color/Presentation.png"
									class="img-fluid"
									alt=""
								/>
								<img
									src="@/assets/images/icons/ourServices/white/Presentation.png"
									class="img-fluid selected"
									alt=""
								/>
							</span>
						</div>
					</a>
					<h3>Funded Project Marketing</h3>
				</div>
				<div
					class="
						swiper-slide
						services__slideHead--slide
						iconTabs__item
						nav-link
					"
				>
					<a class="nav-link slide__card" href="#" @click.prevent>
						<div class="iconTabs__item--image">
							<span class="tab-icon">
								<img
									src="@/assets/images/icons/ourServices/color/callCenter.png"
									class="img-fluid"
									alt=""
								/>
								<img
									src="@/assets/images/icons/ourServices/white/callCenter.png"
									class="img-fluid selected"
									alt=""
								/>
							</span>
						</div>
					</a>
					<h3>Supportive Center Services</h3>
				</div>
			</carousel>
		</div>
		<div class="services__main">
			<div class="container">
				<carousel
					navigation-layout="bottom"
					:carousel-settings="sliderOptionTwo"
					slider-type="slider"
				>
					<div class="swiper-slide">
						<div class="services__details">
							<div class="services__details--image">
								<img
									src="@/assets/images/about/awardDetail.jpg"
									class="img-fluid"
									alt=""
								/>
							</div>
							<div class="services__details--detail">
								<h3 class="title" id="Zain_crowned">
									Zain crowned ‘Best Operator’ and ‘Best
									Brand’ at Telecom World Middle East Awards
									2019
								</h3>
								<base-smooth-scrollbar height="200px">
									<p class="detail" tabindex="-1">
										Zain, the leading mobile telecom
										innovator in eight markets across the
										Middle East and Africa, announces it has
										been awarded the ‘Best Telecom Operator’
										and ‘Best Brand’ accolade for 2019 at
										the prestigious Telecoms World Middle
										East Awards event held in Dubai this
										week. This honor marks a record sixth
										consecutive year that Zain has won the
										‘Best Brand’ award..
									</p>
								</base-smooth-scrollbar>
								<router-link
									to="/"
									class="btn btn-primary"
									aria-labelledby="Zain_crowned"
									>explore more</router-link
								>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="services__details">
							<div class="services__details--image">
								<img
									src="@/assets/images/about/awardDetail.jpg"
									class="img-fluid"
									alt=""
								/>
							</div>
							<div class="services__details--detail">
								<h3 class="title" id="Zain_crowned">
									Zain crowned ‘Best Operator’ and ‘Best
									Brand’ at Telecom World Middle East Awards
									2019
								</h3>
								<base-smooth-scrollbar height="200px">
									<p class="detail" tabindex="-1">
										Zain, the leading mobile telecom
										innovator in eight markets across the
										Middle East and Africa, announces it has
										been awarded the ‘Best Telecom Operator’
										and ‘Best Brand’ accolade for 2019 at
										the prestigious Telecoms World Middle
										East Awards event held in Dubai this
										week. This honor marks a record sixth
										consecutive year that Zain has won the
										‘Best Brand’ award..
									</p>
								</base-smooth-scrollbar>
								<router-link
									to="/"
									class="btn btn-primary"
									aria-labelledby="Zain_crowned"
									>explore more</router-link
								>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="services__details">
							<div class="services__details--image">
								<img
									src="@/assets/images/about/awardDetail.jpg"
									class="img-fluid"
									alt=""
								/>
							</div>
							<div class="services__details--detail">
								<h3 class="title" id="Zain_crowned">
									Zain crowned ‘Best Operator’ and ‘Best
									Brand’ at Telecom World Middle East Awards
									2019
								</h3>
								<base-smooth-scrollbar height="200px">
									<p class="detail" tabindex="-1">
										Zain, the leading mobile telecom
										innovator in eight markets across the
										Middle East and Africa, announces it has
										been awarded the ‘Best Telecom Operator’
										and ‘Best Brand’ accolade for 2019 at
										the prestigious Telecoms World Middle
										East Awards event held in Dubai this
										week. This honor marks a record sixth
										consecutive year that Zain has won the
										‘Best Brand’ award..
									</p>
								</base-smooth-scrollbar>
								<router-link
									to="/"
									class="btn btn-primary"
									aria-labelledby="Zain_crowned"
									>explore more</router-link
								>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="services__details">
							<div class="services__details--image">
								<img
									src="@/assets/images/about/awardDetail.jpg"
									class="img-fluid"
									alt=""
								/>
							</div>
							<div class="services__details--detail">
								<h3 class="title" id="Zain_crowned">
									Zain crowned ‘Best Operator’ and ‘Best
									Brand’ at Telecom World Middle East Awards
									2019
								</h3>
								<base-smooth-scrollbar height="200px">
									<p class="detail" tabindex="-1">
										Zain, the leading mobile telecom
										innovator in eight markets across the
										Middle East and Africa, announces it has
										been awarded the ‘Best Telecom Operator’
										and ‘Best Brand’ accolade for 2019 at
										the prestigious Telecoms World Middle
										East Awards event held in Dubai this
										week. This honor marks a record sixth
										consecutive year that Zain has won the
										‘Best Brand’ award..
									</p>
								</base-smooth-scrollbar>
								<router-link
									to="/"
									class="btn btn-primary"
									aria-labelledby="Zain_crowned"
									>explore more</router-link
								>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="services__details">
							<div class="services__details--image">
								<img
									src="@/assets/images/about/awardDetail.jpg"
									class="img-fluid"
									alt=""
								/>
							</div>
							<div class="services__details--detail">
								<h3 class="title" id="Zain_crowned">
									Zain crowned ‘Best Operator’ and ‘Best
									Brand’ at Telecom World Middle East Awards
									2019
								</h3>
								<base-smooth-scrollbar height="200px">
									<p class="detail" tabindex="-1">
										Zain, the leading mobile telecom
										innovator in eight markets across the
										Middle East and Africa, announces it has
										been awarded the ‘Best Telecom Operator’
										and ‘Best Brand’ accolade for 2019 at
										the prestigious Telecoms World Middle
										East Awards event held in Dubai this
										week. This honor marks a record sixth
										consecutive year that Zain has won the
										‘Best Brand’ award..
									</p>
								</base-smooth-scrollbar>
								<router-link
									to="/"
									class="btn btn-primary"
									aria-labelledby="Zain_crowned"
									>explore more</router-link
								>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="services__details">
							<div class="services__details--image">
								<img
									src="@/assets/images/about/awardDetail.jpg"
									class="img-fluid"
									alt=""
								/>
							</div>
							<div class="services__details--detail">
								<h3 class="title" id="Zain_crowned">
									Zain crowned ‘Best Operator’ and ‘Best
									Brand’ at Telecom World Middle East Awards
									2019
								</h3>
								<base-smooth-scrollbar height="200px">
									<p class="detail" tabindex="-1">
										Zain, the leading mobile telecom
										innovator in eight markets across the
										Middle East and Africa, announces it has
										been awarded the ‘Best Telecom Operator’
										and ‘Best Brand’ accolade for 2019 at
										the prestigious Telecoms World Middle
										East Awards event held in Dubai this
										week. This honor marks a record sixth
										consecutive year that Zain has won the
										‘Best Brand’ award..
									</p>
								</base-smooth-scrollbar>
								<router-link
									to="/"
									class="btn btn-primary"
									aria-labelledby="Zain_crowned"
									>explore more</router-link
								>
							</div>
						</div>
					</div>
				</carousel>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		sectionTitle: String,
		ariaLabel: String,
	},
	data() {
		return {
			sliderOption: {
				slidesPerView: 1,
				slideToClickedSlide: true,
				rtl: this.$i18n.locale == 'en' ? false : true,
				breakpoints: {
					992: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 0,
					},
					576: {
						slidesPerView: 3,
					},
					370: {
						slidesPerView: 2,
					},
				},
			},

			sliderOptionTwo: {
				slidesPerView: 1,
				simulateTouch: false,
				spaceBetween: 10,
				rtl: this.$i18n.locale == 'en' ? false : true,
			},
			thumbSlider: null,
		};
	},
	methods: {
		setThumbSlider(slider) {
			this.thumbSlider = slider;
			var thumbs = { swiper: slider };
			this.sliderOptionTwo.thumbs = thumbs;
		},
	},
};
</script>

<style lang="scss" scoped>
.services {
	/deep/ {
		.nav-link {
			padding: 0;
		}
		.sideWrapper {
			margin-top: rem(0px);
		}
	}
	&__slideHead {
		position: relative;
		padding-left: calc((100% - 1198px) / 2);
		@media screen and (max-width: 1199px) {
			padding-left: 15px;
		}
		@media screen and (max-width: 370px) {
			padding-left: 0;
		}
		/deep/ {
			.swiper-wrapper {
				padding: 20px 7px;
				padding-top: 35px;
				@media screen and (max-width: 370px) {
					padding-left: 0;
					padding-right: 0;
				}
			}
			> div {
				.sliderNavigation {
					display: none;
				}
			}
		}
		&--slide {
			text-align: center;
			transform: scale(0.9);
			transition: 0.4s ease all;
			a {
				width: 100%;
				height: 100%;
				&:focus {
					outline-width: 3px;
					outline-offset: 4px;
				}
			}
			.slide__card {
				height: 196px;
				border-radius: 30px;
				.tab-icon {
					width: 8rem;
					height: 8rem;
				}
			}
			h3 {
				font-size: rem(19px);
				color: var(--secondary);
				text-transform: capitalize;
				font-weight: 400;
				margin-top: rem(15px);
				@media screen and (max-width: 767px) {
					font-size: rem(16px);
				}
			}
			&.swiper-slide-thumb-active {
				transform: scale(1);
				--titlecolor: var(--secondary);
				--iconbg: var(--primary);
				.tab-icon {
					img {
						opacity: 0;
						visibility: hidden;
						z-index: -999;
						width: 0;
						height: 0;
						max-height: 100%;
						&.selected {
							opacity: 1 !important;
							z-index: 1 !important;
							visibility: visible !important;
							width: auto !important;
							height: auto !important;
						}
					}
				}

				@media screen and (max-width: 991px) {
					transform: scale(0.9);
				}
				@media screen and (max-width: 575px) {
					transform: scale(0.9);
				}
				.slide__card {
					background: var(--secondary);
				}
			}
		}
	}
	&__main {
		position: relative;
		margin-top: rem(40px);
		/deep/ {
			.sliderNavigation {
				--color: var(--highlight);
				--arrow: var(--primary);
				--border: var(--primary);
				--topborder: #fff;
				button {
					transition: 0.5s ease all;
					&:hover {
						background: var(--secondary);
						--arrow: #fff;
						opacity: 1;
					}
				}
				@media screen and (min-width: 1200px) {
					z-index: 1;
					width: max-content;
					right: calc((100% - 1230px) / 2);
				}
				@media screen and (max-width: 1199px) {
					.sliderNavigation__controls {
						text-align: right;
						button#prevArrow {
							margin-right: 10px;
						}
					}
				}
			}
			@media screen and (min-width: 1200px) {
				.swiper-wrapper {
					padding-bottom: rem(30px) !important;
				}
				.sliderNavigation {
					position: absolute;
					max-width: 1200px !important;
					bottom: 10px;
					left: auto !important;
					@media screen and (max-width: 1600px) {
						bottom: 38px !important;
					}
					@media screen and (max-width: 1200px) {
						padding: 0px 10px !important;
					}
					&__controls {
						max-width: 450px !important;
						margin-left: auto !important;
						@media screen and (min-width: 1200px) {
							#prevArrow {
								margin-right: rem(15px);
							}
						}
						@media screen and (max-width: 1600px) {
							max-width: 400px !important;
						}
					}
					@media screen and (max-width: 414px) {
						bottom: -9px;
					}
				}
			}
		}
	}
	&__details {
		display: flex;
		&--image {
			flex: 0 0 490px;
			max-width: 490px;
			height: 285px;
			margin-right: 25px;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		&--detail {
			flex: 1;
			h3 {
				font-size: rem(21px);
				font-weight: 400;
				color: var(--secondary);
				margin-bottom: rem(12px);
			}
			p {
				font-size: rem(20px);
			}
			/deep/ .scrollArea {
				--h: 170px;
				margin-bottom: rem(10px);
				@media screen and (max-width: 1600px) {
					margin-bottom: 20px;
				}
				@media screen and (max-width: 852px) {
					--h: 150px;
					margin-bottom: 15px;
				}
			}
		}
	}
	@media screen and (max-width: 991px) {
		&__details {
			&--image {
				flex: 0 0 400px;
				max-width: 400px;
			}
		}
	}
	@media screen and (max-width: 991px) {
		&__details {
			flex-direction: column;
			&--image {
				flex: none;
				max-width: 100%;
				height: 300px;
				margin: 0 0 rem(30px) 0 !important;
			}
			&--detail {
				h3 {
					font-size: rem(20px);
				}
				p {
					font-size: rem(19px);
				}
				/deep/.scrollArea {
					--h: 130px;
				}
			}
		}
	}
}
</style>
