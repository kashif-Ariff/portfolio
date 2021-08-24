<template>
	<div class="baseSearchlist__item">
		<base-video-modal
            @closeVideoModal="closeModal"
            :is-show="showModal"
            :video-url="videoUrlSet"
        ></base-video-modal>
		<div class="baseSearchlist__section">
			<h2>
				<a href="" class="baseSearchlist__section--title"> Events </a>
			</h2>
			<a href="" class="baseSearchlist__section--subtitle">
				<span class="icon">
					<img
						src="@/assets/images/icons/search/icons/calendar-check.png"
						class="img-fluid"
						alt=""
					/>
				</span>
				SCPD Event 2021
			</a>
		</div>
		<div class="baseSearchlist__card">
			<div class="row align-items-center">
				<div class="col-md-7">
					<span class="baseSearchlist__card--date">5 MAY - 2021</span>
					<!-- <h2 class="baseSearchlist__card--title" id="name"></h2> -->
					<h3>
						<router-link
							class="baseSearchlist__card--title"
							to="/"
							id="name3"
						>
							SCPD Event 2021
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
				<div class="col-md-5">
					<div class="baseSearchlist__card--media">
						<div class="mediaVideo">
							<a
								href="#"
								@click.prevent="
									openModal(
										'https://www.youtube.com/embed/w8K8aj3K1OQ'
									)
								"
							>
								<span class="icon">
									<base-svg-icon
										iconId="slider-play"
										icon-viewbox="0 0 163.861 163.861"
									></base-svg-icon>
								</span>
								<div class="mediaVideo__thumbnail">
									<img
										src="@/assets/images/icons/search/events.png"
										alt=""
										class="img-fluid"
									/>
								</div>
							</a>
						</div>
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
import videoModal from '@/mixin/videoModal.js'
import BaseVideoModal from '@/common/components/base/BaseVideoModal'
export default {
	mixins:[videoModal],
	components:{
		BaseVideoModal
	}
};
</script>
