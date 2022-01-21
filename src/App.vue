<template>
	<div id="app">
		 <base-loader></base-loader>
		<the-header />
		<main role="main">
			<router-view />
		</main>
		<the-footer />
	</div>
</template>
<script>
// @ is an alias to /src
import TheFooter from '@/common/layout/TheFooter.vue';
import TheHeader from '@/common/layout/TheHeader.vue';
import BaseLoader from '@/common/components/base/BaseLoader.vue';
export default {
	name: 'App',
	components: {
		TheHeader,
		TheFooter,
		BaseLoader,
	},
};
</script>
<style lang="scss"></style>
