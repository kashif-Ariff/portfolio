<template>
	<div class="suportCenter">
		<base-inner-banner :banner-detail="innerBannerDetail" />
		<div class="container">
			<support-center-slider />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			innerBannerDetail: {
				image: 'BOD.png',
				title: 'Support Centers',
			},
		};
	},
	components: {
		SupportCenterSlider: () =>
			import(
				'@/modules/support-center/components/SupportCenterSlider.vue'
			),
	},
};
</script>

<style lang="scss" scoped></style>
