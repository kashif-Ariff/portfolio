<template>
	<div class="commonInterestSlider" role="region" :aria-label="ariaLabel">
		<div class="container">
			<div class="commonInterestSlider__head iconTabs">
				<carousel
					navigation-layout="side"
					:carousel-settings="sliderOption"
					@init="setSlider"
					role="tablist"
				>
					<div
						class="swiper-slide iconTabs__item"
						role="presentation"
						v-for="(card, index) in cardData"
						:key="index"
					>
						<a
							class="nav-link slide__card"
							:class="{ active: isActive(index) }"
							v-on:click.stop.prevent="tabIndex = index"
							data-toggle="tab"
							href="#"
							role="tab"
							:aria-selected="index == 0 ? 'true' : 'false'"
							:aria-controls="`tab_commoninterest_${index}`"
							:id="`commoninterest_${index}`"
						>
							<div class="iconTabs__item--image">
								<span class="tab-icon">
									<img
										:src="
											require(`@/assets/images/icons/commonInterest/color/${card.icon}`)
										"
										alt=""
										class="img-fluid"
									/>
									<img
										:src="
											require(`@/assets/images/icons/commonInterest/white/${card.icon}`)
										"
										alt=""
										class="img-fluid selected"
									/>
								</span>
							</div>
						</a>
						<h3 class="iconTabs__item--title">
							{{ card.title }}
						</h3>
					</div>
				</carousel>
			</div>
			<div class="commonInterestSlider__body">
				<b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
					<b-tab
						id="commoninterest_0"
						button-id="tab_commoninterest_0"
						class="description"
					>
						<div>
							<base-smooth-scrollbar height="190px">
								<h3>
									Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit.
								</h3>
								<div>
									<p>
										Lorem ipsum dolor sit amet, consectetuer
										adipiscing elit. Aenean commodo ligula
										eget dolor. Aenean massa. Cum sociis
										natoque penatibus et magnis dis
										parturient montes, nascetur ridiculus
										mus. Donec quam felis, ultricies nec,
										pellentesque eu, pretium quis, sem.
										Nulla consequat massa quis enim. Donec
										pede justo, fringilla vel, aliquet nec,
										vulputate eget, arcu. In enim justo,
										rhoncus ut, imperdiet a, venenatis
										vitae, justo. Nullam
									</p>
									<p>
										dictum felis eu pede mollis pretium.
										Integer tincidunt. Cras dapibus. Vivamus
										elementum semper nisi. Aenean vulputate
										eleifend tellus. Aenean leo ligula,
										porttitor eu, consequat vitae, eleifend
										ac, enim. Aliquam lorem ante, dapibus
										in, viverra quis, feugiat a, tellus.
										Phasellus viverra nulla ut metus varius
										laoreet. Quisque rutrum. Aenean
										imperdiet.
									</p>
								</div>
							</base-smooth-scrollbar>
							<div class="button-row">
								<router-link to="" class="btn btn-primary"
									>Explore More</router-link
								>
							</div>
						</div>
					</b-tab>
					<b-tab
						id="commoninterest_1"
						button-id="tab_commoninterest_1"
						>1</b-tab
					>
					<b-tab
						id="commoninterest_2"
						button-id="tab_commoninterest_2"
						>2</b-tab
					>
					<b-tab
						id="commoninterest_3"
						button-id="tab_commoninterest_3"
						>3</b-tab
					>
					<b-tab
						id="commoninterest_4"
						button-id="tab_commoninterest_4"
						>4</b-tab
					>
					<b-tab
						id="commoninterest_5"
						button-id="tab_commoninterest_5"
						>5</b-tab
					>
					<b-tab
						id="commoninterest_6"
						button-id="tab_commoninterest_6"
						>6</b-tab
					>
					<b-tab
						id="commoninterest_7"
						button-id="tab_commoninterest_7"
						>7</b-tab
					>
				</b-tabs>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		BaseDocument: () => import('@/common/components/base/BaseDocument.vue'),
	},
	data() {
		return {
			tabIndex: 0,
			sliderOption: {
				slidesPerView: 1,
				slideToClickedSlide: true,
				observer: true,
				observeParents: true,
				spaceBetween: 10,
				rtl: this.$i18n.locale == 'en' ? false : true,
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
					450: {
						slidesPerView: 2,
					},
				},
			},
			cardData: [
				{
					index: 0,
					icon: 'strenght.png',
					title: 'Entrepreneurship Support Centers',
				},
				{
					index: 1,
					icon: 'table.png',
					title: 'Funded Project Marketing',
				},
				{
					index: 2,
					icon: 'case.png',
					title: 'The National Fund Services',
				},
				{
					index: 3,
					icon: 'book.png',
					title: 'Knowledge Library',
				},
				{
					index: 4,
					icon: 'certificate.png',
					title: 'FAQ',
				},
				{
					index: 5,
					icon: 'strenght.png',
					title: 'Entrepreneurship Support Centers',
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
.commonInterestSlider {
	.commonInterestSlider {
		padding: rem(35px) 0px;
		@media screen and (max-width: 991px) {
			padding-top: rem(10px);
		}
		&__head {
			margin-top: rem(80px);
			margin-bottom: rem(0px);
			text-align: center;
			position: relative;
			/deep/ {
				.sideWrapper {
					margin: 0 60px;
				}
				.swiper-container {
					padding: 10px;
					.swiper-wrapper {
						margin: 0px;
					}
				}
				.sliderNavigation {
					z-index: 0;
					height: unset;
				}
			}
			.iconTabs__item--title {
				margin-top: rem(20px);
			}
			.slide__card {
				height: 196px;
				@media screen and (max-width: 1600px) {
					height: 170px;
				}
				@media screen and (max-width: 991px) {
					height: 145px;
				}
				.tab-icon {
					width: 7rem;
					height: 7rem;
					@media screen and (max-width: 991px) {
						width: 5rem;
						height: 5rem;
					}
				}
				&.active {
					.iconTabs__item--title {
						color: var(--secondary);
						font-weight: 400;
						font-size: rem(17px);
					}
				}
				&:focus {
					outline-color: var(--primary);
					&::before {
						content: '';
						position: absolute;
					}
				}
			}
			@media screen and (max-width: 1600px) {
				margin: 0 0px;
				margin-top: rem(15px);
			}
			@media screen and (max-width: 1199px) {
				margin: 0;
				margin-top: rem(15px);
			}
			@media screen and (max-width: 991px) {
				margin-top: rem(0px);
				/deep/ {
					.sliderNavigation {
						&.sideNavigation {
							top: -5px !important;
						}
					}
				}
			}
		}
		&__body {
			.description {
				h3 {
					font-size: rem(21px);
					color: var(--secondary);
					font-weight: 400;
					margin-bottom: rem(15px);
				}
				p {
					font-weight: 400;
					font-size: rem(21px);
					margin-bottom: rem(30px);
				}
			}
			/deep/ {
				.nav-pills {
					li {
						@media screen and (min-width: 576px) {
							width: 50%;
						}
					}
					a:focus {
						outline: none;
					}
				}
				.tab-content {
					margin-top: rem(25px);
				}
			}
		}
	}
}
</style>
