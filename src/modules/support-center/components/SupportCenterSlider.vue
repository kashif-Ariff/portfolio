<template>
	<div class="supportCenterSlider">
		<div class="supportCenterSlider__head">
			<carousel
				navigation-layout="side"
				:carousel-settings="sliderOption"
				@init="setSlider"
				role="tablist"
			>
				<div
					class="swiper-slide"
					role="presentation"
					v-for="(card, index) in cardContent"
					:key="card.index"
				>
					<a
						class="nav-link slide__card"
						:class="{ active: isActive(index) }"
						v-on:click.stop.prevent="tabIndex = index"
						data-toggle="tab"
						href="#"
						role="tab"
						:aria-controls="`supportCenter_${index}`"
						:aria-selected="index == 0 ? 'true' : 'false'"
						:id="`tab_supportCenter_${index}`"
					>
						<div class="slide__card--image">
							<img
								:src="
									require(`@/assets/images/support-center/${card.logo}`)
								"
								alt=""
								class="img-fluid"
							/>
						</div>
					</a>
					<h3 class="slide__card--title">{{ card.title }}</h3>
				</div>
			</carousel>
		</div>
		<div class="supportCenterSlider__body customTabs__contents">
			<b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
				<b-tab id="supportCenter_0" button-id="tab_supportCenter_0"
					><support-center-details></support-center-details
				></b-tab>
				<b-tab id="supportCenter_1" button-id="tab_supportCenter_1"
					>1</b-tab
				>
				<b-tab id="supportCenter_2" button-id="tab_supportCenter_2"
					>2</b-tab
				>
				<b-tab id="supportCenter_3" button-id="tab_supportCenter_3"
					>3</b-tab
				>
				<b-tab id="supportCenter_4" button-id="tab_supportCenter_4"
					>4</b-tab
				>
				<b-tab id="supportCenter_5" button-id="tab_supportCenter_5"
					>5</b-tab
				>
				<b-tab id="supportCenter_6" button-id="tab_supportCenter_6"
					>6</b-tab
				>
				<b-tab id="supportCenter_7" button-id="tab_supportCenter_7"
					>7</b-tab
				>
			</b-tabs>
		</div>
	</div>
</template>

<script>
import SupportCenterDetails from '@/modules/support-center/components/partials/SupportCenterDetails';

export default {
	components: {
		SupportCenterDetails,
	},
	data() {
		return {
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
						slidesPerView: 6,
					},
					991: {
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
			cardContent: [
				{
					index: 0,
					logo: 'logoipsum.jpg',
					title: 'Business Incubators',
				},
				{
					index: 1,
					logo: 'logoipsum2.png',
					title: 'Creative Centers',
				},
				{
					index: 2,
					logo: 'logoipsum.jpg',
					title: 'Business Incubators',
				},
				{
					index: 3,
					logo: 'logoipsum.jpg',
					title: 'Business Incubators',
				},
				{
					index: 4,
					logo: 'logoipsum.jpg',
					title: 'Business Incubators',
				},
				{
					index: 5,
					logo: 'logoipsum.jpg',
					title: 'Business Incubators',
				},
				{
					index: 6,
					logo: 'logoipsum.jpg',
					title: 'Business Incubators',
				},
				{
					index: 7,
					logo: 'logoipsum.jpg',
					title: 'Business Incubators',
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
.supportCenterSlider {
	padding: rem(35px) 0px;
	@media screen and (max-width: 991px) {
		padding-top: rem(10px);
	}
	&__head {
		margin-top: rem(15px);
		margin-bottom: rem(0px);
		text-align: center;
		position: relative;
		font-size: rem(22px);
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
				&__controls {
					&--pagination {
						&.customPagination {
							font-size: rem(28px);
							position: absolute;
							top: -62px;
							right: 0;
							display: block !important;
							@media screen and (max-width: 991px) {
								top: -50px;
							}
						}
					}
				}
			}
		}
		.slide__card {
			height: 145px;
			&:hover {
				opacity: 1;
			}
			@include flex(center, center);
			&--title {
				font-size: rem(17px);
				font-weight: 400;
				color: var(--secondary);
				margin: rem(16px) 0 0 0;
			}
			&.active {
				background: unset;
				transform: scale(1);
			}
			outline-offset: -3px !important;
			outline-width: 3px;
			.slide__card--image {
				border-radius: 25px;
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
	&__item {
		&--image {
			width: 100%;
			height: 140px;
			margin: auto;
			position: relative;
			transition: 0.5s ease all;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
			&::before {
				content: '';
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0px;
				left: 0px;
				background: rgba($color: #000000, $alpha: 0.5);
				transition: 0.4s ease all;
			}
		}
		&--title {
			font-size: rem(17px);
			color: var(--secondary);
			text-transform: capitalize;
			font-weight: 400;
			display: inline-block;
			margin-top: rem(20px);
		}
		/deep/ {
			.swiper-container {
				padding: rem(8px);
			}
		}
	}
	&__body {
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
</style>
