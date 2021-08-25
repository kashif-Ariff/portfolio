<template>
	<div class="boardDirector">
		<base-inner-banner :banner-detail="innerBannerDetail" />
		<div class="container">
			<base-bread-crumb :items="items"></base-bread-crumb>
			<div class="boardDirector">
				<boardOfDirectors :members="this.bod" class="mt-md" />
			</div>
		</div>
	</div>
</template>

<script>
import boardOfDirectors from '@/modules/Board-directors/Members.vue';
import bod from '@/modules/Board-directors/data/bod';
export default {
	components: { boardOfDirectors },
	data() {
		return {
			bod,
			innerBannerDetail: {
				image: 'BOD.png',
				title: 'Board of directors',
			},
			items: [
				{
					text: 'about the national fund',
					href: '#',
				},
				{
					text: 'Board of Directors',
					active: true,
				},
			],
		};
	},
	created() {
		document.body.classList.add('board-directors');
		this.$i18n.locale == 'en'
			? (this.bod = this.bod.en.members)
			: (this.bod = this.bod.ar.members);
	},
	mounted() {
		document.body.classList.add('board-directors');
	},
	destroyed() {
		document.body.classList.remove('board-directors');
	},
};
</script>

<style lang="scss">
.board-directors {
	footer {
		margin-top: 0;
	}
}
</style>
<style lang="scss" scoped>
.boardDirector {
	position: relative;
	padding-bottom: rem(80px);
	@media screen and (max-width: 991px) {
		padding-bottom: rem(50px);
	}
	@media screen and (max-width: 767px) {
		padding-bottom: rem(60px);
	}
}
</style>
