<template>
	<div class="contactUs">
		<base-inner-banner :banner-detail="innerBannerDetail" />
		<div class="container">
			<h2 class="sectionTitle text-center">Branches</h2>
			<div class="contactUs__wrapper customTabs">
				<div class="contactUs__wrapper--head customTabs__items">
					<carousel
						navigation-layout="side"
						navigation-theme="simple"
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
								:aria-controls="`supportCenter_${index}`"
								:aria-selected="index == 0 ? 'true' : 'false'"
								:id="`tab_supportCenter_${index}`"
							>
								<p class="ContactUs__slide--title">
									{{ item.title }}
								</p>
							</a>
						</div>
					</carousel>
				</div>
				<div class="contactUs__wrapper--body customTabs__contents">
					<b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
						<b-tab
							v-for="(item, index) in tabsContent"
							:key="index"
						>
							<div class="contactWrapper row">
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
								<div class="contactWrapper__map col-lg-6">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14143117.941545919!2d60.32337114882688!3d30.068124090484673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1628862714297!5m2!1sen!2s"
										style="border: 0"
										allowfullscreen=""
									></iframe>
								</div>
							</div>
						</b-tab>
					</b-tabs>
				</div>
			</div>
			<div class="contactForm">
				<div class="contactForm__note d-flex align-items-center">
					<span class="icon">
						<base-svg-icon
							icon-id="agent"
							icon-viewbox="0 0 29.531 28.658"
						></base-svg-icon>
					</span>
					We’re more than happy to help. Give us a call or just drop a
					message.
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<input
								type="text"
								class="form-control"
								placeholder="First Name"
							/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<input
								type="text"
								class="form-control"
								placeholder="Last Name"
							/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<input
								type="text"
								class="form-control"
								placeholder="Phone No."
							/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<input
								type="text"
								class="form-control"
								placeholder="Email"
							/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<vue-select
								:options="input__options"
								v-model="selected_item"
								aria-label="content category"
								tabIndex="0"
							></vue-select>
						</div>
						<div class="mt-30 md-none">
							<div class="form-group">
								<vue-recaptcha
									sitekey="6LdzWSkUAAAAAJQZfr1nvUshWLG7-2LY8BdQAWIq"
								></vue-recaptcha>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<textarea
								class="form-control"
								placeholder="Message"
							></textarea>
						</div>
					</div>
					<div class="col-md-6 d-none md-block">
						<div class="form-group">
							<vue-recaptcha
								sitekey="6LdzWSkUAAAAAJQZfr1nvUshWLG7-2LY8BdQAWIq"
							></vue-recaptcha>
						</div>
					</div>
				</div>
				<div class="button-row justify-content-end">
					<button class="btn btn-primary">
						Send <i class="fa fa-angle-right ml-10"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const selected_item = {
	label: 'Content Category',
};
import VueRecaptcha from 'vue-recaptcha';
export default {
	props: {
		sectionTitle: String,
		ariaLabel: String,
	},
	components: {
		VueRecaptcha,
	},
	data() {
		return {
			selected_item,
			input__options: [
				{ code: null, label: 'All' },
				{ code: 'a', label: 'This is First option' },
				{ code: 'b', label: 'Selected Option' },
				{ code: 'c', label: 'Third Option' },
			],
			innerBannerDetail: {
				image: 'BOD.png',
				title: 'Contact',
			},
			tabIndex: 0,
			sliderOption: {
				slidesPerView: 1,
				slideToClickedSlide: true,
				observer: true,
				observeParents: true,
				rtl: this.$i18n.locale == 'en' ? false : true,
				spaceBetween: 10,
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
@media screen and (max-width: 767px) {
	.md-none {
		display: none !important;
	}
	.md-block {
		display: block !important;
	}
}
.contactUs {
	/deep/ {
		.sectionTitle {
			font-weight: 400;
			margin-top: rem(130px);
			@media screen and (max-width: 1600px) {
				margin-top: rem(75px);
			}
			@media screen and (max-width: 991px) {
				margin-top: rem(30px);
			}
		}
	}
	&__wrapper {
		&--head {
			position: relative;
			margin-bottom: rem(40px);
			@media screen and (max-width: 1600px) and (min-width: 576px) {
				margin-left: rem(20px);
				margin-right: rem(20px);
			}
			a.nav-link {
				padding: 5px;
				.ContactUs__slide--title {
					margin: 0px;
					padding: rem(10px);
					color: var(--secondary);
					text-align: center;
					border-radius: 18px;
					font-size: rem(16px);
					box-shadow: 0px 3px 18px -4px rgba($color: #000000, $alpha:
								0.3);
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
				}
				.swiper-container {
					margin-left: 7%;
					margin-right: 7%;
					padding: 10px;
					@media screen and (max-width: 1600px) {
						margin-left: 4%;
						margin-right: 4%;
					}
					@media screen and (max-width: 575px) {
						margin-left: 30px;
						margin-right: 30px;
					}
				}
				.sliderNavigation {
					height: 100%;
					z-index: 0;
					--color: var(--secondary);
					--arrow: var(--primary);
					--border: var(--primary);
					--pause: var(--secondary);
					#nextArrow {
						right: 0px;
					}
					#prevArrow {
						left: 0px;
					}
				}
			}
		}
		&--body {
			.contactWrapper {
				&__map {
					padding: 0;
					border-radius: 0px;
					border-top-right-radius: 50px;
					border-bottom-left-radius: 50px;
					overflow: hidden;
					background-color: #fff;
					box-shadow: -3px 1px 10px #ccc;
					@media screen and (max-width: 991px) {
						height: 300px;
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
		.row {
			@media screen and (max-width: 575px) {
				padding-left: 15px;
				padding-right: 15px;
			}
		}
	}
	.contactForm {
		margin-top: rem(50px);
		&__note {
			margin: rem(60px) 0;
			font-size: rem(22px);
			font-weight: 400;
			color: var(--secondary);
			.icon {
				display: flex;
				align-items: center;

				/deep/ {
					svg {
						width: 25px;
						height: 25px;
						margin-right: 15px;
						color: var(--secondary);
					}
				}
			}
		}
		.form-group {
			margin-bottom: rem(50px);
		}
		.button-row {
			i {
				margin-left: 10px;
				transition: 0.5s ease all;
			}
			&:hover {
				i {
					transform: translateX(8px);
				}
			}
		}
	}
	@media screen and (max-width: 767px) {
		.button-row {
			justify-content: center !important;
		}
	}
}
</style>
