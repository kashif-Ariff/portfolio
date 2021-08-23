<template>
	<div>
		<base-inner-banner :banner-detail="innerBannerDetail" />
		<div class="container">
			<section>
				<common-interest-slider />
			</section>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			innerBannerDetail: {
				image: 'BOD.png',
				title: 'common interests',
			},
		};
	},
	components: {
		CommonInterestSlider: () =>
			import(
				'@/modules/common-interest/components/commonInterestSlider.vue'
			),
	},
};
</script>

<style lang="scss" scoped></style>
