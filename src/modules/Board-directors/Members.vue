<template>
	<div>
		<div class="swiper-container" ref="members" v-show="!showModal">
			<div class="swiper-wrapper">
				<memberItem
					v-for="(member, index) in members"
					:key="member.id"
					:idx="index"
					:member="member"
					@enter="enterHandler"
					@leave="leaveHandler"
					@itemClick="openModal"
				/>
			</div>
		</div>

		<div v-if="showName && !showModal" class="member">
			<div class="text-center mt-md">
				<h2 class="heading-secondary" v-html="currentMember.name"></h2>
				<p class="mt-sm" v-html="currentMember.position"></p>
			</div>
		</div>

		<memberModal
			v-if="showModal"
			:member="currentMember"
			:members="members"
			@memberClick="modalMemberClick"
			@close="showModal = false"
		/>
	</div>
</template>

<script>
import Swiper from 'swiper';
import memberItem from './memberItem';
import memberModal from './memberModal';
import 'swiper/swiper-bundle.css';
export default {
	name: 'Members',
	props: {
		members: Array,
	},
	components: {
		memberItem,
		memberModal,
	},
	data() {
		return {
			currentMember: null,
			showModal: false,
			showName: false,
			swiper: null,
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

	methods: {
		enterHandler(member) {
			this.currentMember = member;
			this.showName = true;
		},
		leaveHandler() {
			this.showName = false;
		},

		openModal({ member, idx, el }) {
			if (el.classList.contains('swiper-slide-active')) {
				this.showModal = true;
				this.currentMember = member;
			} else {
				this.swiper.slideTo(idx);
			}
			console.log(idx);
			//  if (window.innerWidth < 992) {

			//  } else {
			//    this.showModal = true;
			//    this.currentMember = member;
			//  }
		},

		modalMemberClick(member) {
			this.currentMember = member;
		},
	},

	mounted() {
		this.swiper = new Swiper(this.$refs.members, {
			slidesPerView: 3,
			spaceBetween: 20,
			//  freeMode: true,
			//  freeModeSticky: true,
			centeredSlides: true,
			observer: true,
			observeParents: true,
			slideToClickedSlide: false,
			// loop: true,
			breakpoints: {
				992: {
					spaceBetween: 80,
					// allowTouchMove: false,
					slidesPerView: 3,
					// centeredSlides: false,
				},
				1200: {
					spaceBetween: 155,
					// allowTouchMove: false,
					// centeredSlides: false,
					slidesPerView: 3,
				},
			},
		});

		if (window.innerWidth < 992) {
			this.currentMember = this.members[this.swiper.activeIndex];
			this.showName = true;
		}

		this.swiper.on('slideChange', () => {
			this.currentMember = this.members[this.swiper.activeIndex];
			this.showName = true;
		});
	},
	watch: {
		showModal: function (val) {
			if (val) {
				document.querySelector('body').classList.add('modal-open-bord');
			} else {
				document
					.querySelector('body')
					.classList.remove('modal-open-bord');
			}
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-wrapper {
	padding-bottom: 30px;
}
// @media (min-width: 992px) {
//   .swiper-wrapper {
//     display: flex;
//     justify-content: center;
//     padding-left: 25px;
//   }
// }
.breadCrumbs {
	margin-bottom: rem(50px);
}
.member {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: -15px;
	width: 100%;
	// @media screen and (max-width: 991px) {
	//     width: 100%;
	// }
	h2 {
		font-size: rem(35px);
		font-weight: 400;
		line-height: 1;
		margin-bottom: 5px;
		color: #224156;
		@media screen and (max-width: 1600px) {
			font-size: rem(32px);
		}
	}
	p {
		font-size: rem(28px);
		font-weight: 400;
		opacity: 0.6;
		margin: 0;
		color: #7a8d9a;
		line-height: 1.2;
		@media screen and (max-width: 991px) {
			font-size: rem(20px);
		}
	}
	//   @media screen and (max-width: 1600px) {
	//     bottom: 0px;
	//     h2 {
	//       font-size: rem(25px);
	//     }
	//   }
	@media screen and (max-width: 991px) {
		//     bottom: 1%;
		h2 {
			font-size: rem(22px);
		}
	}
}
</style>
