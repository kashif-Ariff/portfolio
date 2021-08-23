<template>
	<div>
		<base-inner-banner :banner-detail="innerBannerDetail" />
		<div class="container">
			<section>
				<main-component />
			</section>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		MainComponent: () =>
			import('@/modules/boardPublication/components/MainComponent.vue'),
	},
	data() {
		return {
			innerBannerDetail: {
				image: 'BOD.png',
				title: 'board publications',
			},
		};
	},
};
</script>

<style lang="scss" scoped></style>
