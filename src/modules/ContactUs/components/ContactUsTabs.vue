<template>
	<div class="contactUs__wrapper">
		<div class="contactUs__wrapper--head">
			<carousel
				navigation-layout="side"
				:carousel-settings="sliderOption"
				role="tablist"
				@init="setSlider"
			>
				<div
					role="presentation"
					class="swiper-slide contactUs__item"
					v-for="(item, index) in tabsContent"
					:key="index"
				>
					<a
						class="nav-link"
						:class="{ active: isActive(index) }"
						v-on:click.stop.prevent="tabIndex = index"
						data-toggle="tab"
						href="#"
						role="tab"
						:aria-controls="`contactUs_${index}`"
						:aria-selected="index == 0 ? 'true' : 'false'"
						:id="`tab_contactUs_${index}`"
					>
						<p class="ContactUs__slide--title">
							{{ item.title }}
						</p>
					</a>
				</div>
			</carousel>
		</div>
		<div class="contactUs__wrapper--body">
			<b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
				<b-tab v-for="(item, index) in tabsContent" :key="index">
					<div class="row col-gap-40">
						<div class="contactWrapper__detail col-lg-6">
							<ul>
								<li>
									<span class="icon">
										<base-svg-icon
											icon-id="map-marker"
											icon-viewbox="0 0 20.836 27.782"
										></base-svg-icon>
										Address
									</span>
									Kuwait City, 25501 Mansouriya
								</li>
								<li>
									<span class="icon">
										<base-svg-icon
											icon-id="envelopes"
											icon-viewbox="0 0 30.108 20.947"
										></base-svg-icon>
										Email
									</span>
									info@nationalfund.gov.kw
								</li>
								<li>
									<span class="icon">
										<base-svg-icon
											icon-id="m-phone"
											icon-viewbox="0 0 26.087 24.199"
										></base-svg-icon>
										Phone No.
									</span>
									136
								</li>
								<li>
									<span class="icon">
										<base-svg-icon
											icon-id="clock-user"
											icon-viewbox="0 0 32.64 25.565"
										></base-svg-icon>
										Working Hours
									</span>
									8:30 am - 1:00 pm
								</li>
							</ul>
						</div>
						<div class="col-lg-6 p-0">
							<div class="contactWrapper__map">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14143117.941545919!2d60.32337114882688!3d30.068124090484673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1628862714297!5m2!1sen!2s"
									style="border: 0"
									allowfullscreen=""
								></iframe>
							</div>
						</div>
					</div>
				</b-tab>
			</b-tabs>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabIndex: 0,
			sliderOption: {
				slidesPerView: 1,
				slideToClickedSlide: true,
				observer: true,
				observeParents: true,
				rtl: this.$i18n.locale == 'en' ? false : true,
				spaceBetween: 5,
				breakpoints: {
					1200: {
						slidesPerView: 5,
					},
					768: {
						slidesPerView: 4,
					},
					576: {
						slidesPerView: 3,
					},
					450: {
						slidesPerView: 2,
					},
				},
			},
			tabsContent: [
				{
					index: 0,
					title: 'Mansouriya',
				},
				{
					index: 1,
					title: 'Al-Faiha Business Center ',
				},
				{
					index: 2,
					title: 'Human Development',
				},
				{
					index: 3,
					title: 'Marketing & Activities',
				},
				{
					index: 4,
					title: 'Takamol',
				},
				{
					index: 5,
					title: 'Mansouriya',
				},
				{
					index: 6,
					title: 'Al-Faiha Business Center ',
				},
			],
		};
	},
	methods: {
		isActive(index) {
			return this.tabIndex == index;
		},
	},
};
</script>

<style lang="scss" scoped>
.contactUs__wrapper {
	&--head {
		position: relative;
		margin-bottom: rem(25px);
		@media screen and (max-width: 991px) {
			margin-bottom: 0;
		}
		a.nav-link {
			// padding: 5px;
			opacity: 1 !important;
			.ContactUs__slide--title {
				margin: 0px;
				padding: rem(10px);
				color: var(--secondary);
				text-align: center;
				border-radius: 18px;
				font-size: rem(16px);
				box-shadow: 0px 3px 18px -4px rgba($color: #000000, $alpha: 0.3);
				min-height: 64px;
				display: flex;
				justify-content: center;
				align-items: center;
				border: 1px solid #c7d0d5;
			}
			&.active {
				.ContactUs__slide--title {
					background: var(--secondary);
					font-size: rem(18px);
					color: #fff;
					// @media screen and (min-width: 1600px) {
					// 	font-size: rem(20px);
					// }
				}
			}
		}
		/deep/ {
			.swiper-wrapper {
				align-items: center;
				padding: 15px 2px;
			}
			.swiper-container {
				margin-left: 55px;
				margin-right: 55px;
			}
			.sliderNavigation {
				height: 100%;
				z-index: 0;
			}
			.sideWrapper {
				@media screen and (max-width: 991px) {
					margin-top: 25px;
				}
			}
		}
	}
	&--body {
		.contactWrapper {
			&__map {
				padding: 0;
				border-radius: 0px;
				border-top-right-radius: 35px;
				border-bottom-left-radius: 35px;
				overflow: hidden;
				background-color: #fff;
				box-shadow: -3px 1px 10px #ccc;
				@media screen and (max-width: 991px) {
					height: 350px;
				}
				iframe {
					width: 100%;
					height: 350px;
					@media screen and (min-width: 1600px) {
						height: 400px;
					}
				}
			}
			&__detail {
				display: flex;
				// align-items: center;
				margin-top: rem(50px);
				ul {
					list-style: none;
					display: flex;
					flex-direction: column;
					margin: 0%;
					li {
						display: flex;
						align-items: center;
						font-size: rem(20px);
						color: #82919c;
						margin-bottom: rem(30px);
						word-break: break-all;
						.icon {
							position: relative;
							display: flex;
							align-items: center;
							font-size: rem(18px);
							font-weight: 400;
							color: var(--secondary);
							// margin-right: rem(100px);
							min-width: 220px;
							&::before {
								content: ':';
								top: 50%;
								transform: translateY(-50%);
								right: 15px;
								position: absolute;
								font-weight: bold;
							}

							/deep/ {
								svg,
								div {
									width: 25px;
									height: 25px;
									margin-right: 15px;
									color: var(--secondary);
								}
							}
						}
					}
					@media screen and (max-width: 991px) {
						margin-bottom: rem(25px);
					}
				}
				@media screen and (max-width: 575px) {
					padding: 0;
					ul {
						li {
							font-size: rem(17px);
							.icon {
								min-width: 185px;
								font-size: rem(17px);
							}
						}
					}
				}
			}
		}
	}
	@media screen and (max-width: 991px) {
		/deep/ .col-gap-40 {
			margin-left: calc((15px / 2) * -1) !important;
			margin-right: calc((15px / 2) * -1) !important;
			> div {
				padding-left: calc(15px / 2) !important;
				padding-right: calc(15px / 2) !important;
			}
		}
	}
	.row {
		@media screen and (max-width: 575px) {
			padding-left: 15px;
			padding-right: 15px;
		}
	}
}
</style>
