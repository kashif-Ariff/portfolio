<template>
	<div class="services" :aria-label="ariaLabel" role="region">
		<div class="services__slideHead">
			<carousel
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
					"
					v-for="cardData in sliderContent"
					:key="cardData.index"
				>
					<a class="nav-link slide__card" href="#" @click.prevent>
						<div class="iconTabs__item--image">
							<span class="tab-icon">
								<img
									:src="
										require(`@/assets/images/icons/ourServices/color/${cardData.icon}`)
									"
									class="img-fluid"
									alt=""
								/>
								<img
									:src="
										require(`@/assets/images/icons/ourServices/white/${cardData.icon}`)
									"
									class="img-fluid selected"
									alt=""
								/>
							</span>
						</div>
					</a>
					<h3>{{ cardData.title }}</h3>
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
					<div
						class="swiper-slide"
						v-for="cardData in sliderContent"
						:key="cardData.index"
					>
						<div class="services__details">
							<div class="services__details--image">
								<img
									src="@/assets/images/about/awardDetail.jpg"
									class="img-fluid"
									alt=""
								/>
							</div>
							<div class="services__details--info">
								<h3>
									{{ cardData.heading }}
								</h3>
								<base-smooth-scrollbar height="145px">
									<p>
										{{ cardData.content }}
									</p>
								</base-smooth-scrollbar>
								<div class="button-row">
									<router-link
										to="/"
										class="btn btn-primary"
										aria-labelledby="Zain_crowned"
										>explore more</router-link
									>
								</div>
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
		ariaLabel: String,
	},
	data() {
		return {
			sliderOption: {
				slidesPerView: 1,
				slideToClickedSlide: true,
				rtl: this.$i18n.locale == 'en' ? false : true,
				breakpoints: {
					1200: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 20,
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
			sliderContent: [
				{
					index: 0,
					icon: 'callCenter.png',
					title: 'Supportive Center Services',
					image: 'awardDetail.jpg',
					heading:
						'	Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World Middle East Awards 2019',
					content:
						'Zain, the leading mobile telecom innovator in eight markets across the Middle East and Africa, announces it has been awarded the ‘Best Telecom Operator’ and ‘Best Brand’ accolade for 2019 at the prestigious Telecoms World Middle East Awards event held in Dubai this week. This honor marks a record sixth consecutive year that Zain has won the ‘Best Brand’ award.. lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum augue quis imperdiet scelerisque. Cras in erat massa. Vestibulum metus diam, posuere vitae nibh in, pellentesque semper risus. In tempus semper vestibulum.',
				},
				{
					index: 1,
					icon: 'map.png',
					title: 'National Registry Services',
					image: 'awardDetail.jpg',
					heading:
						'	Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World Middle East Awards 2019',
					content:
						'Zain, the leading mobile telecom innovator in eight markets across the Middle East and Africa, announces it has been awarded the ‘Best Telecom Operator’ and ‘Best Brand’ accolade for 2019 at the prestigious Telecoms World Middle East Awards event held in Dubai this week. This honor marks a record sixth consecutive ',
				},
				{
					index: 2,
					icon: 'growing-up.png',
					title: 'Financier Services',
					image: 'awardDetail.jpg',
					heading:
						'	Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World Middle East Awards 2019',
					content:
						'	Zain, the leading mobile telecom innovator in eight markets across the Middle East and Africa, announces it has been awarded the ‘Best Telecom Operator’ and ‘Best Brand’ accolade for 2019 at the prestigious Telecoms World Middle East Awards event held in Dubai this week. This honor marks a record sixth consecutive year that Zain has won the ‘Best Brand’ award..',
				},
				{
					index: 3,
					icon: 'leaderShip.png',
					title: 'Training and Monitoring',
					image: 'awardDetail.jpg',
					heading:
						'	Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World Middle East Awards 2019',
					content:
						'	Zain, the leading mobile telecom innovator in eight markets across the Middle East and Africa, announces it has been awarded the ‘Best Telecom Operator’ and ‘Best Brand’ accolade for 2019 at the prestigious Telecoms World Middle East Awards event held in Dubai this week. This honor marks a record sixth consecutive year that Zain has won the ‘Best Brand’ award..',
				},
				{
					index: 4,
					icon: 'Presentation.png',
					title: 'Funded Project Marketing',
					image: 'awardDetail.jpg',
					heading:
						'	Zain crowned ‘Best Operator’ and ‘Best Brand’ at Telecom World Middle East Awards 2019',
					content:
						'	Zain, the leading mobile telecom innovator in eight markets across the Middle East and Africa, announces it has been awarded the ‘Best Telecom Operator’ and ‘Best Brand’ accolade for 2019 at the prestigious Telecoms World Middle East Awards event held in Dubai this week. This honor marks a record sixth consecutive year that Zain has won the ‘Best Brand’ award..',
				},
			],
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
		.iconTabs {
			&__item {
				&--image {
					margin: 0;
				}
				.nav-link {
					.tab-icon {
						@media screen and (max-width: 991px) {
							max-width: 70px;
						}
					}
				}
			}
		}
	}
	&__slideHead {
		position: relative;
		/deep/ {
			.swiper-wrapper {
				padding: 20px 7px;
				padding-top: 0;
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
				border-top-left-radius: 24px;
				border-bottom-right-radius: 24px;
				transform: scale(1);
				@media screen and (max-width: 991px) {
					height: 150px;
				}
			}
			h3 {
				font-size: rem(20px);
				color: var(--secondary);
				text-transform: capitalize;
				font-weight: 400;
				margin-top: rem(20px);
				@media screen and (max-width: 991px) {
					font-size: rem(17px);
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
				.slide__card {
					background: var(--secondary);
				}
			}
		}
	}
	&__main {
		position: relative;
		margin-top: rem(40px);
		.container {
			@media screen and (max-width: 575px) {
				padding: 0;
			}
		}
		/deep/ {
			.sliderNavigation {
				@media screen and (max-width: 991px) {
					margin-top: 0;
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
				@media screen and (max-width: 991px) {
					.sliderNavigation__controls {
						text-align: center;
						margin: 0;
					}
				}
			}
			@media screen and (min-width: 992px) {
				.swiper-wrapper {
					padding-bottom: rem(30px) !important;
				}
				.sliderNavigation {
					position: absolute;
					max-width: 1200px !important;
					bottom: 30px;
					left: auto !important;
					right: 0;
					@media screen and (max-width: 1600px) {
						bottom: 38px !important;
					}
					@media screen and (max-width: 1199px) {
						bottom: 25px !important;
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
			flex: 0 0 500px;
			max-width: 500px;
			height: 285px;
			margin-right: rem(30px);
			border-radius: 6px;
			overflow: hidden;
			@media screen and (min-width: 992px) {
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
			@media screen and (max-width: 767px) {
				height: auto !important;
			}
		}
		&--info {
			flex: 1;
			h3 {
				font-size: rem(21px);
				font-weight: 400;
				color: var(--secondary);
				margin-bottom: rem(12px);
			}
			p {
				font-size: rem(20px);
				margin-bottom: 0;
			}
			.button-row {
				padding-top: rem(15px);
				@media screen and (max-width: 767px) {
					margin-bottom: rem(20px);
				}
			}
		}
	}
	@media screen and (max-width: 1199px) {
		&__details {
			&--image {
				flex: 0 0 400px;
				max-width: 400px;
				height: 300px;
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
			&--info {
				h3 {
					font-size: rem(20px);
				}
				p {
					font-size: rem(19px);
				}
			}
		}
	}
}
</style>
