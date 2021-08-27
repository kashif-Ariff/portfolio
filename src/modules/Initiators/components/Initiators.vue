<template>
	<div class="initiators">
		<div class="initiators__head iconTabs">
			<carousel
				class="initiators__head--slider"
				navigation-layout="side"
				@init="setSlider"
				:carousel-settings="sliderOption"
				role="tablist"
			>
				<div
					class="swiper-slide iconTabs__item"
					v-for="(card, index) in cardContent"
					:key="index"
					role="presentation"
				>
					<a
						@click.prevent.stop
						class="nav-link slide__card"
						:class="{ active: isActive(index) }"
						v-on:click.stop.prevent="tabIndex = index"
						data-toggle="tab"
						href="#"
						role="tab"
						:aria-selected="index == 0 ? 'true' : 'false'"
						:aria-controls="`tab_initiators_${index}`"
						:id="`initiators_${index}`"
					>
						<div class="iconTabs__item--image">
							<span class="tab-icon">
								<img
									:src="`${require(`@/assets/images/initiators/icons/color/${card.image}`)}`"
									alt=""
									class="img-fluid"
								/>
								<img
									:src="`${require(`@/assets/images/initiators/icons/white/${card.image}`)}`"
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
		<div class="initiators__body">
			<b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
				<b-tab
					:title="card.title"
					v-for="(card, i) in cardContent"
					:key="i"
					:id="`tab_initiators${i}`"
					:button-id="`initiators${i}`"
				>
					<div class="card">
						<div class="card__head">
							<span class="card__head--icon">
								<img
									:src="`${require(`@/assets/images/initiators/icons/white/${card.image}`)}`"
									alt=""
									class="img-fluid"
								/>
							</span>
							<h3 class="card__head--title">
								{{ card.heading }}
							</h3>
						</div>
						<div class="card__body">
							<base-smooth-scrollbar height="170px">
								<p>{{ card.detail }}</p>
							</base-smooth-scrollbar>
							<div class="button-row">
								<a href="#" class="btn btn-primary"
									>Explore more</a
								>
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
				centeredSlides: false,
				loop: false,
				rtl: this.$i18n.locale == 'en' ? false : true,
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					431: {
						centeredSlides: false,
						slidesPerView: 2,
						spaceBetween: 10,
					},
				},
			},
			cardContent: [
				{
					index: '01',
					image: 'initiator1.png',
					title: 'Small and Medium Enterprise guide',
					heading:
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
					detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla molestiae ab iste cum provident odit dolorem quae voluptate quos. Repellat iure doloribus magnam ab maxime reiciendis quia magni voluptatum. Ducimus architecto aut error molestiae ad fuga. Reprehenderit, quasi impedit, exercitationem cupiditate esse harum enim neque temporibus soluta porro eveniet blanditiis. Amet suscipit optio placeat. Blanditiis voluptatem esse fugiat amet tempora officiis rem repellendus eaque est, quidem maiores quasi sint illum molestias repudiandae quo numquam. Nemo et, officia eligendi delectus ex sunt nostrum, fuga perspiciatis eum dicta, quod molestiae voluptates enim architecto quia sed sapiente illum id dolor deserunt. Dolore?',
				},
				{
					index: '02',
					image: 'initiator2.png',
					title: 'Success Stories',
					heading:
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
					detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla molestiae ab iste cum provident odit dolorem quae voluptate quos. Repellat iure doloribus magnam ab maxime reiciendis quia magni voluptatum. Ducimus architecto aut error molestiae ad fuga. Reprehenderit, quasi impedit, exercitationem cupiditate esse harum enim neque temporibus soluta porro eveniet blanditiis. Amet suscipit optio placeat. Blanditiis voluptatem esse fugiat amet tempora officiis rem repellendus eaque est, quidem maiores quasi sint illum molestias repudiandae quo numquam. Nemo et, officia eligendi delectus ex sunt nostrum, fuga perspiciatis eum dicta, quod molestiae voluptates enim architecto quia sed sapiente illum id dolor deserunt. Dolore?',
				},
				{
					index: '03',
					image: 'initiator3.png',
					title: 'Advertisements of Initiators',
					heading:
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
					detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla molestiae ab iste cum provident odit dolorem quae voluptate quos. Repellat iure doloribus magnam ab maxime reiciendis quia magni voluptatum. Ducimus architecto aut error molestiae ad fuga. Reprehenderit, quasi impedit, exercitationem cupiditate esse harum enim neque temporibus soluta porro eveniet blanditiis. Amet suscipit optio placeat. Blanditiis voluptatem esse fugiat amet tempora officiis rem repellendus eaque est, quidem maiores quasi sint illum molestias repudiandae quo numquam. Nemo et, officia eligendi delectus ex sunt nostrum, fuga perspiciatis eum dicta, quod molestiae voluptates enim architecto quia sed sapiente illum id dolor deserunt. Dolore?',
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
.initiators {
	position: relative;
	&__head {
		margin-left: rem(65px);
		margin-right: rem(65px);
		position: relative;
		@media screen and (max-width: 1199px) {
			text-align: center;
			@media screen and (max-width: 415px) {
				text-align: center;
			}
		}
		.slide {
			&__card {
				width: 175px;
				height: 175px;
				margin: auto;
				@include flex(center, center);
				border-top-left-radius: 25px;
				border-bottom-right-radius: 25px;
				@media screen and (max-width: 767px) {
					width: 135px;
					height: 135px;
					.tab-icon {
						width: 4rem;
						height: 4rem;
					}
				}
			}
		}
		.iconTabs {
			&__item {
				&--title {
					font-size: rem(20px);
					margin-top: rem(16px);
				}
			}
		}
		/deep/ {
			.swiper-container {
				max-width: 750px;
				margin-left: auto;
				margin-right: auto;
				padding: 10px 0px;
			}
			.swiper-wrapper {
				@media screen and (max-width: 991px) {
					justify-content: center;
				}
				@media screen and (max-width: 767px) {
					justify-content: unset;
				}
				.swiper-slide {
					padding: rem(7px) rem(5px);
					margin: 0;
					@media screen and (max-width: 991px) {
						margin-right: rem(20px) !important;
					}
					@media screen and (max-width: 767px) {
						margin-right: rem(10px) !important;
					}
					@media screen and (max-width: 415px) {
						margin-right: 0 !important;
					}
				}
			}
			.sliderNavigation {
				&__controls {
					#nextArrow {
						right: -4rem;
					}
					#prevArrow {
						left: -4rem;
					}
				}
			}
		}
	}
	&__slide {
		.slide__card--image {
			transform: scale(0.88);
		}

		&--title {
			font-size: rem(20px);
			color: var(--secondary);
			margin: unset;
			text-transform: capitalize;
			font-weight: 400;
			line-height: 1;
			margin-top: rem(20px);
			min-height: 54px;
			display: flex;
			align-items: center;
		}
	}
	&__body {
		/deep/ {
			.tab-content {
				margin-top: rem(25px);
			}
		}
		.card {
			border-top-left-radius: 27px;
			border-top-right-radius: 27px;
			overflow: hidden;
			padding: 0;
			&__head {
				padding: rem(20px) rem(25px) rem(18px) rem(52px);
				background: var(--secondary);
				display: flex;
				align-items: center;
				&--icon {
					display: flex;
					width: 40px;
					min-width: 40px;
					height: 40px;
					margin-right: rem(30px);
					color: #fff;
					justify-content: center;
					align-items: center;
					@media screen and (max-width: 767px) {
						width: 30px;
						min-width: 30px;
						height: 30px;
					}
				}
				&--title {
					font-size: rem(21px);
					font-weight: 400;
					color: #fff;
					margin: 0px;
					text-transform: unset;
					@media screen and (max-width: 575px) {
						font-size: rem(18px);
					}
				}
			}
			&__body {
				background: #fff;
				padding: rem(35px) rem(45px);
				p {
					font-size: rem(21px);
					margin: 0px;
					font-weight: 400;
					margin-bottom: rem(30px);
					@media screen and (max-width: 575px) {
						font-size: rem(17px);
					}
				}
			}
			@media screen and (max-width: 767px) {
				&__head {
					padding: rem(20px);
					&--icon {
						margin-right: rem(20px);
					}
				}
				&__body {
					padding: rem(20px);
				}
			}
		}
	}
}
</style>
