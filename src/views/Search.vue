<template>
	<div class="search contentWrapper" role="search">
		<base-inner-banner :banner-detail="innerBannerDetail" />

		<div class="container">
			<div class="siteSearch">
				<div class="card">
					<search-field></search-field>
					<search-interests></search-interests>
				</div>
				<search-list></search-list>
			</div>
			<div class="button-row">
				<a href="#" class="btn btn-default"
					>Load more search results..</a
				>
			</div>
		</div>
	</div>
</template>

<script>
import SearchField from '@/modules/search/SearchField.vue';
import SearchInterests from '@/modules/search/SearchInterests.vue';
import SearchList from '@/modules/search/SearchList.vue';
export default {
	data() {
		return {
			innerBannerDetail: {
				image: 'BOD.png',
				title: 'search',
			},
			sliderOption: {
				slidesPerView: 4,
				spaceBetween: 30,
				centeredSlides: true,
			},
		};
	},
	components: {
		SearchField,
		SearchInterests,
		SearchList,
	},
	methods: {
		tabChange() {},
	},
	created() {
		document.body.classList.add('searchPage');
	},
	destroyed() {
		document.body.classList.remove('searchPage');
	},
	mounted() {},
};
</script>

<style lang="scss" scoped>
.search {
	.siteSearch {
		margin-top: rem(70px);
		@media screen and (max-width: 767px) {
			margin-top: rem(50px);
		}
		@media screen and (max-width: 991px) {
			/deep/ .mediaSlider__item {
				img {
					border-bottom-left-radius: 34px;
				}
			}
		}
	}
	.card {
		border-radius: 25px;
		padding: rem(20px) rem(25px) rem(12px) rem(44px);
		margin-top: rem(25px);
		@media screen and (max-width: 991px) {
			padding: rem(10px) rem(15px) rem(12px) rem(15px);
		}
	}
	.button-row {
		justify-content: center;
		.btn {
			padding-top: rem(18px);
			padding-bottom: rem(18px);
			padding-right: rem(50px);
			border-radius: 20px;
		}
	}
}
</style>
