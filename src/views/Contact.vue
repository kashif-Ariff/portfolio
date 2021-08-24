<template>
	<div class="contactUs">
		<base-inner-banner :banner-detail="innerBannerDetail" />
		<div class="container">
			<h2 class="sectionTitle text-center">Branches</h2>
			<contact-us-tabs />
			<contact-us-form />
		</div>
	</div>
</template>

<script>
import ContactUsForm from '../modules/ContactUs/components/ContactUsForm.vue';
import ContactUsTabs from '../modules/ContactUs/components/ContactUsTabs.vue';
export default {
	components: {
		ContactUsTabs,
		ContactUsForm,
	},
	data() {
		return {
			innerBannerDetail: {
				image: 'BOD.png',
				title: 'Contact',
			},
		};
	},
};
</script>

<style lang="scss" scoped>
.contactUs {
	.sectionTitle {
		font-weight: 400;
		margin-top: rem(130px);
		@media screen and (max-width: 1600px) {
			margin-top: rem(75px);
		}
		@media screen and (max-width: 991px) {
			margin-top: rem(30px);
		}
	}
}
</style>
