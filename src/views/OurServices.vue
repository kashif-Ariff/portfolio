<template>
	<div class="ourServices"> 
		<base-inner-banner :banner-detail="innerBannerDetail" />
		<div class="container">
			<services-type></services-type>
		</div>
	</div>
</template>

<script>
import ServicesType from '../modules/services/ServicesType.vue';
export default {
	components: { ServicesType },
	data() {
		return {
			innerBannerDetail: {
				image: 'BOD.png',
				title: 'Our services',
			},
		};
	},
};
</script>

<style lang="scss" scoped></style>
