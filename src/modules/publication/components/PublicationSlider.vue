<template>
	<div>
		<div class="breadCrumbs">
			<base-bread-crumb :items="items"></base-bread-crumb>
		</div>
		<div class="publicationSlider" role="region">
			<div class="container">
				<div class="publicationSlider__head iconTabs">
					<carousel
						navigation-layout="side"
						:carousel-settings="sliderOption"
						@init="setSlider"
						role="tablist"
					>
						<div
							class="swiper-slide iconTabs__item"
							v-for="(card, index) in cardContent"
							:key="index"
							role="presentation"
						>
							<a
								class="nav-link slide__card"
								:class="{ active: isActive(index) }"
								v-on:click.stop.prevent="tabIndex = index"
								data-toggle="tab"
								href="#"
								role="tab"
								:aria-selected="index == 0 ? 'true' : 'false'"
								:aria-controls="`tab_publication_${index}`"
								:id="`publication_${index}`"
							>
								<div class="iconTabs__item--image">
									<span class="tab-icon">
										<img
											:src="
												require(`@/assets/images/icons/publication/color/${card.image}`)
											"
											alt=""
											class="img-fluid"
										/>
										<img
											:src="
												require(`@/assets/images/icons/publication/white/${card.image}`)
											"
											alt=""
											class="img-fluid selected"
										/>
									</span>
									<h3 class="iconTabs__item--title">
										{{ card.title }}
									</h3>
								</div>
							</a>
						</div>
					</carousel>
				</div>
			</div>
			<div class="publicationSlider__body">
				<b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
					<b-tab
						v-for="(card, index) in cardContent"
						:key="index"
						:id="`publication_${card.index}`"
						:button-id="`tab_publication_${card.index}`"
					>
						<div class="card">
							<base-document
								:documents="documents"
							></base-document>
							<base-pagination></base-pagination>
						</div>
					</b-tab>
				</b-tabs>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		BaseDocument: () => import('@/common/components/base/BaseDocument.vue'),
		BasePagination: () =>
			import('@/common/components/base/BasePagination.vue'),
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
				spaceBetween: 40,
				breakpoints: {
					992: {
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
			items: [
				{
					text: 'Media Center',
					href: '#',
				},
				{
					text: 'Publications',
					active: true,
				},
			],
			documents: [
				{
					index: 0,
					title: 'Profile of The National Fund	',
					size: '200 KB',
					file: 'pdf',
					download: 'Download',
				},
				{
					index: 1,
					title: 'Profile of The National Fund	',
					size: '200 KB',
					file: 'word',
					download: 'Download',
				},
				{
					index: 2,
					title: 'Profile of The National Fund	',
					size: '200 KB',
					file: 'excel',
					download: 'Download',
				},
				{
					index: 3,
					title: 'Profile of The National Fund	',
					size: '200 KB',
					file: 'pdf',
					download: 'Download',
				},
				{
					index: 4,
					title: 'Profile of The National Fund	',
					size: '200 KB',
					file: 'word',
					download: 'Download',
				},
			],
			cardContent: [
				{
					index: 0,
					image: 'question.png',
					image_hover: 'question.png',
					title: 'publications',
				},
				{
					index: 1,
					image: 'Financial-Care.png',
					image_hover: 'Financial-Care.png',
					title: 'Law',
				},
				{
					index: 2,
					image: 'Presentation.png',
					image_hover: 'Presentation.png',
					title: 'Executive Regulations',
				},
				{
					index: 3,
					image: 'Handshake.png',
					image_hover: 'Handshake.png',
					title: 'Annual Report',
				},
				{
					index: 4,
					image: 'Shop.png',
					image_hover: 'Shop.png',
					title: 'Business Environment',
				},
				{
					index: 5,
					image: 'Shop.png',
					image_hover: 'Shop.png',
					title: 'publications',
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
.publicationSlider {
	padding: rem(35px) 0px;
	padding-top: 0;
	@media screen and (max-width: 991px) {
		padding-top: rem(10px);
	}
	> .container {
		padding: 0;
	}
	&__head {
		margin-top: rem(15px);
		margin-bottom: rem(0px);
		text-align: center;
		position: relative;
		font-size: rem(22px);
		/deep/ {
			.sideWrapper {
				margin: 0 70px;
			}
			.swiper-container {
				padding: 10px;

				.swiper-wrapper {
					margin: 0px;
				}
			}
			.sliderNavigation {
				--color: var(--primary);
				--arrow: var(--primary);
				--border: var(--primary);
				z-index: 0;
				height: 100%;
				&.sideNavigation {
					#nextArrow {
						right: 0;
					}
					#prevArrow {
						left: 0;
					}
				}
			}
		}
		.slide__card {
			height: 120px;
			@media screen and (max-width: 991px) {
				height: 105px;
			}
			.iconTabs__item--title {
				font-size: rem(16px);
				text-transform: capitalize;
				@media screen and (max-width: 767px) {
					font-size: rem(14px);
				}
			}
			&.active {
				.iconTabs__item--title {
					font-size: rem(16px);
					font-weight: 400;
					@media screen and (max-width: 767px) {
						font-size: rem(14px);
					}
				}
			}
			@media screen and (min-width: 1025px) {
				&.hover {
					opacity: 1;
				}
			}
			outline-offset: -3px !important;
			outline-width: 3px;
			&:focus {
				outline-color: var(--primary);
				&::before {
					content: '';
					position: absolute;
				}
			}
			.tab-icon {
				height: 4rem;
				width: 4rem;
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
		/deep/ {
			.swiper-container {
				padding: rem(8px);
			}
		}
	}
	&__body {
		.card {
			padding: rem(30px) rem(40px);
			@media screen and (max-width: 991px) {
				box-shadow: none;
				padding: 0;
				border: 0;
			}
		}
		/deep/ {
			.tab-content {
				margin-top: rem(25px);
			}
		}
	}
	/deep/ {
		.pagination {
			padding: 0;
			.show_items {
				display: none;
			}
			.gotoPage {
				display: none;
			}
			ul.pagination {
				justify-content: flex-end !important;
			}
		}
	}
}
</style>
