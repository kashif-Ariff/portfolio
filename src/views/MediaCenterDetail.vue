<template>
	<div class="suportCenter">
		<base-inner-banner :banner-detail="innerBannerDetail" />
		<div class="container">
			<section>
				<main-component></main-component>
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
				title: 'Media center',
			},
		};
	},
	components: {
		MainComponent: () =>
			import(
				'@/modules/media-center-detail/components/MainComponent.vue'
			),
	},
};
</script>

<style lang="scss" scoped></style>
