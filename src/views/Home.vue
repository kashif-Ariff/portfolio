<template>
	<div class="home">
		<div class="container">
			<!-- ====== SCROLL TO TOP BUTTON ====== -->
		<button class="scrollToTopBtn">☝️</button>

			<!-------------- main Intro Section ------------->

			<main-intro />

			<!-------x----- main Intro Section -------x------>

			<!-------------- About US Section ------------->

			<about-us />

			<!-------x----- About US Section -------x------>


			<!-------------- MySkills Section ------------->

			<my-skills/>

			<!-------x----- MySkills  Section -------x------>

			<!-------------- MyWork Section ------------->

			<my-work/>

			<!-------x----- MyWork Section -------x------>


			<!-------------- Contact Section ------------->

			<contact />

			<!-------x----- Contact  Section -------x------>

		</div>
	</div>
</template>

<script>
import mainIntro from '@/components/mainIntro.vue';
import AboutUs from '@/components/AboutUs.vue';
import Contact from '@/components/Contact.vue';
import MySkills from '@/components/MySkills.vue';
import MyWork from '@/components/MyWork.vue';
export default {
  components: {mainIntro, AboutUs , Contact , MySkills, MyWork },
	name: 'Home',
	methods: {
		
	},
	mounted() {
		var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
		var rootElement = document.documentElement

		function handleScroll() {
		var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
		if ((rootElement.scrollTop / scrollTotal ) > 0.10) {
			// Show button
			scrollToTopBtn.classList.add("showBtn")
		} else {
			// Hide button
			scrollToTopBtn.classList.remove("showBtn")
		}
		}

		function scrollToTop() {
		// Scroll to top logic
		rootElement.scrollTo({
			top: 0,
			behavior: "smooth"
		})
		}
		scrollToTopBtn.addEventListener("click", scrollToTop)
		document.addEventListener("scroll", handleScroll)
	},
	
};
</script>
<style lang="scss" scoped>
.home{
	padding:rem(60px) 0;
	padding-top:132px;
	min-height: calc(100vh - 303px);
	background: url(../assets/images/images.jpg);
    background-repeat: no-repeat;
    background-size: cover;
	background-attachment: fixed;
	@media screen and (max-width:767px){
		background-position: center;
	}
	/*--------------------
	Back to Top Button
	---------------------*/
	.scrollToTopBtn {
	background-color: var(--primary);
	border: none;
	border-radius: 50%;
	color: white;
	cursor: pointer;
	font-size: 30px;
	line-height: 48px;
	width: 48px;
	position: fixed;
	bottom: 30px;
	right: 30px;
	z-index: 100;
	opacity: 0;
	transform: translateY(100px);
	transition: all .5s ease
	}
		
	.showBtn {
	opacity: 1;
	transform: translateY(0)
	}
}

</style>
