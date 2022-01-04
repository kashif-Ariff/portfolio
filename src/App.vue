<template>
	<div id="app">
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
export default {
	name: 'App',
	components: {
		TheHeader,
		TheFooter,
	},
};
</script>
<style lang="scss"></style>
