<template>
	<div>
		<base-inner-banner :banner-detail="innerBannerDetail" />
		<div class="container">
			<div aria-label="Initiators" role="region">
				<initiators />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		Initiators: () =>
			import('@/modules/Initiators/components/Initiators.vue'),
	},
	data() {
		return {
			innerBannerDetail: {
				image: 'BOD.png',
				title: 'Get to Know The Initiators',
			},
		};
	},
};
</script>
