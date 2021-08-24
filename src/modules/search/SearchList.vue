<template>
	<div class="baseSearchlist">
		<base-search-list-image></base-search-list-image>
		<base-search-list-slider></base-search-list-slider>
		<base-search-list-video></base-search-list-video>
		<!-- pagination  -->
		<!-- <base-pagination v-bind:page-number="10"></base-pagination> -->
	</div>
</template>

<script>
import BaseSearchListImage from '@/common/components/base/BaseSearchListImage';
import BaseSearchListSlider from '@/common/components/base/BaseSearchListSlider';
import BaseSearchListVideo from '@/common/components/base/BaseSearchListVideo';
export default {
	components: {
		BaseSearchListImage,
		BaseSearchListVideo,
		BaseSearchListSlider,
	},
};
</script>

<style lang="scss" scoped>
.baseSearchlist {
	padding-top: rem(45px);
}
</style>
