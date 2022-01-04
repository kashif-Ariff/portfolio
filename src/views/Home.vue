<template>
	<div class="home">
		<div class="container">

			<!-------------- About US Section ------------->

			<about-us />

			<!-------x----- About US Section -------x------>


			<!-------------- MySkills Section ------------->

			<my-skills/>

			<!-------x----- MySkills  Section -------x------>


			<!-------------- Contact Section ------------->

			<contact />

			<!-------x----- Contact  Section -------x------>

		</div>
	</div>
</template>

<script>
import AboutUs from '@/components/AboutUs.vue';
import Contact from '@/components/Contact.vue';
import MySkills from '@/components/MySkills.vue';
export default {
  components: { AboutUs , Contact , MySkills },
	name: 'Home',
};
</script>
<style lang="scss" scoped>
.home{
	padding:rem(60px) 0;
	padding-top:132px;
	min-height: calc(100vh - 303px);
}

</style>
