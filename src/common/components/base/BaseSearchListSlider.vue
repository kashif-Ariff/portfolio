<template>
	<div class="baseSearchlist__item">
		<div class="baseSearchlist__section">
			<h2>
				<a href="" class="baseSearchlist__section--title">
					Announcements
				</a>
			</h2>
			<a href="" class="baseSearchlist__section--subtitle">
				<span class="icon">
					<img
						src="@/assets/images/icons/search/icons/announce.png"
						class="img-fluid"
						alt=""
					/>
				</span>
				Q8 vs Covid-19 Hackathon
			</a>
		</div>
		<div class="baseSearchlist__card">
			<div class="row align-items-center">
				<div class="col-md-6">
					<span class="baseSearchlist__card--date">5 MAY - 2021</span>
					<h3>
						<router-link
							class="baseSearchlist__card--title"
							to="/"
							id="name2"
						>
							Q8 vs Covid-19 Hackathon
						</router-link>
					</h3>
					<div class="baseSearchlist__card--description">
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit. Aenean commodo ligula eget dolor. Aenean
							massa.
						</p>
						<p>
							Sociis natoque penatibus et magnis dis parturient
							montes, nascetur ridiculus mus. Donec quam felis,
							ultricies nec, pellentesque eu, pretium quis, sem.
							Nulla consequat massa quis enim. Donec pede justo,
							fringilla vel, aliquet nec, vulputate eget, arcu. In
							enim justo, rhoncus ut, imperdiet a, venenatis
							vitae, justo. Nullam
						</p>
					</div>
					<button
						class="
							baseSearchlist__card--button
							btn btn-primary
							d-md-block d-none
						"
						aria-describedby="name"
					>
						read more
					</button>
				</div>
				<div class="col-md-6">
					<div class="baseSearchlist__card--media slider">
						<base-media-slider
							:media-slides="slideImages"
						></base-media-slider>
					</div>
					<div class="text-center d-md-none d-block">
							<button
								class="
									baseSearchlist__card--button
									btn btn-primary
								"
								aria-describedby="name"
							>
								read more
							</button>
						</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BaseMediaSlider from '@/common/components/base/BaseMediaSlider';
export default {
	components: {
		BaseMediaSlider,
	},
	data() {
		return {
			slideImages: [
				{
					image: 'about/covid-19.png',
				},
				{
					image: 'about/covid-19.png',
				},
				{
					image: 'about/covid-19.png',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
	.baseSearchlist{
		&__item{
			/deep/{
				.mediaSlider{
					.swiper-slide{
						border-radius: 21px;
					}
					.sliderNavigation{
						border-bottom-right-radius: 21px;
						border-top-left-radius: 21px;
					}
				}
			}
		}
	}
</style>
