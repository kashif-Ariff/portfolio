<template>
	<div class="baseSearchlist__item">
		<div class="baseSearchlist__section">
			<h2>
				<a href="" class="baseSearchlist__section--title"> about us </a>
			</h2>
			<a href="" class="baseSearchlist__section--subtitle">
				<span class="icon">
					<img
						src="@/assets/images/icons/search/icons/user.png"
						class="img-fluid"
						alt=""
					/>
				</span>
				Omar Abdullah
			</a>
		</div>
		<div class="baseSearchlist__card">
			<div class="row">
				<div class="col-md-6">
					<span class="baseSearchlist__card--date">5 MAY - 2021</span>
					<h3>
						<router-link
							class="baseSearchlist__card--title"
							to="/"
							id="name"
						>
							Mr. Omar Abdullah
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
					<div class="baseSearchlist__card--media">
						<div class="media-image">
							<img
								src="@/assets/images/icons/search/omar-abdullah.png"
								alt=""
								class="img-fluid"
							/>
							<router-link to="#" class="abs-link"></router-link>
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
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>
