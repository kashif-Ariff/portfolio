<template>
	<div class="mediaCenter">
		<base-inner-banner :banner-detail="innerBannerDetail" />
		<div class="container">
			<base-bread-crumb :items="breadCrumbsItems"></base-bread-crumb>
			<base-media-slider
				:mediaSlides="MediaSliderItems"
			></base-media-slider>
			<div class="mediaCenter--head">
				<carousel
					navigation-layout="side"
					navigation-theme="simple"
					:carousel-settings="sliderOption"
					role="tablist"
					@init="setSlider"
				>
					<div
						role="presentation"
						class="swiper-slide mediaCenter__item"
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
							:aria-controls="`mediaCenter_${index}`"
							:aria-selected="index == 0 ? 'true' : 'false'"
							:id="`tab_mediaCenter_${index}`"
						>
							<p class="mediaCenter__slide--title">
								{{ item.title }}
							</p>
						</a>
					</div>
				</carousel>
			</div>
			<div class="mediaCenter--body">
				<b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
					<b-tab
						v-for="(item, index) in tabsContent"
						:key="index"
						:id="`mediaCenter_${index}`"
						:button-id="`tab_mediaCenter_${index}`"
					>
						<div class="row">
							<div
								class="col-lg-4 col-sm-6 mb-30"
								v-for="card in cardData"
								:key="card.index"
							>
								<media-center-card :card-data="card" />
							</div>
						</div>
					</b-tab>
				</b-tabs>
			</div>
			<base-pagination
				aria-label="PRESS RELEASE PAGINATION"
			></base-pagination>
		</div>
	</div>
</template>

<script>
import BaseMediaSlider from '@/common/components/base/BaseMediaSlider.vue';
import MediaCenterCard from '@/modules/media-center/partials/MediaCenterCard';
import BasePagination from '@/common/components/base/BasePagination.vue';
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
				spaceBetween: 30,
				breakpoints: {
					1200: {
						slidesPerView: 4,
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
					title: 'Announcements',
				},
				{
					index: 1,
					title: 'Latest News',
				},
				{
					index: 2,
					title: 'Events',
				},
				{
					index: 3,
					title: 'Success Stories',
				},
				{
					index: 4,
					title: 'Takamol',
				},
			],
			cardData: [
				{
					index: 0,
					image: 'eid-mubarak.png',
					date: 'May 13, 2021',
					link: '#',
					title: 'Eid Mubarak From The National Fund',
					content:
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget',
				},
				{
					index: 1,
					image: 'eid-mubarak.png',
					date: 'March 13, 2021',
					link: '#',
					title: 'Knowledge Economy Forum',
					content:
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget',
				},
				{
					index: 2,
					image: 'eid-mubarak.png',
					date: 'February 25, 2021',
					link: '#',
					title: 'Kuwait National Day',
					content:
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis',
				},
				{
					index: 3,
					image: 'eid-mubarak.png',
					date: 'February 25, 2021',
					link: '#',
					title: 'Kuwait National Day',
					content:
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis',
				},
			],
			innerBannerDetail: {
				image: 'BOD.png',
				title: 'Media Center',
			},
			breadCrumbsItems: [
				{
					text: 'Home',
					href: '#',
				},
				{
					text: 'Media Center',
					active: true,
				},
			],
			MediaSliderItems: [
				{
					image: 'media-center-slider-image.png',
					title: 'Announcements',
					subtitle: 'EID MUBARAK FROM THE NATIONAL FUND',
					date: 'May 13, 2021',
				},
				{
					image: 'media-center-slider-image.png',
					title: 'Announcements',
					subtitle: 'EID MUBARAK FROM THE NATIONAL FUND',
					date: 'May 13, 2021',
				},
				{
					image: 'media-center-slider-image.png',
					title: 'Announcements',
					subtitle: 'EID MUBARAK FROM THE NATIONAL FUND',
					date: 'May 13, 2021',
				},
			],
		};
	},
	methods: {
		isActive(index) {
			return this.tabIndex == index;
		},
	},
	components: {
		MediaCenterCard,
		BasePagination,
		BaseMediaSlider,
	},
};
</script>
<style lang="scss" scoped>
.mediaCenter {
	&--head {
		position: relative;
		margin: rem(40px) 0;
		@media screen and (max-width: 1600px) and (min-width: 576px) {
			margin-left: rem(20px);
			margin-right: rem(20px);
		}
		a.nav-link {
			padding: 5px;
			.mediaCenter__slide--title {
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
				.mediaCenter__slide--title {
					background: var(--secondary);
					font-size: rem(18px);
					color: #fff;
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
	.card_parent {
		margin-bottom: rem(30px);
	}
	/deep/ {
		.mediaSlider {
			.swiper-slide {
				position: relative;
				&:before {
					position: absolute;
					content: '';
					background: rgba(34, 65, 86, 0.6);
					left: 0;
					top: 0;
					z-index: 0;
					width: 100%;
					height: 100%;
				}
			}
		}
		.pagination {
			margin-top: rem(20px);
		}
	}
}
</style>
