<template>
	<div class="swiper-modal">
		<div class="swiper-modal-body">
			<div class="swiper-modal-close" @click="$emit('close')">
				<img
					class="img-fluid"
					src="@/assets/images/close_icon.png"
					alt=""
				/>
			</div>
			<div class="scrollWrapper left">
				<base-smooth-scrollbar height="475px">
					<ul class="swiper-modal-aside">
						<li
							v-for="item in members"
							:key="item.id"
							:class="{ active: item.id === member.id }"
							@click="$emit('memberClick', item)"
						>
							<p
								class="text-md name fw-600"
								v-html="item.name"
							></p>
							<p class="text-sm position fw-600">
								{{ item.position }}
							</p>
						</li>
					</ul>
				</base-smooth-scrollbar>
			</div>

			<div class="swiper-modal-content">
				<div class="swiper-modal-content-image">
					<img
						class="swiper-modal-img"
						:src="
							require(`@/assets/images/board-directors/${member.img}`)
						"
						alt=""
					/>
				</div>

				<div class="swiper-modal-info">
					<div class="swiper-modal-header">
						<h2 class="swiper-modal-name" v-html="member.name"></h2>
						<h2
							class="swiper-modal-position"
							v-html="member.position"
						></h2>
					</div>
					<div class="scrollWrapper right">
						<base-smooth-scrollbar height="275px">
							<p
								v-for="text in member.info"
								:key="text.index"
								v-html="text"
							></p>
							<p v-html="member.work"></p>
						</base-smooth-scrollbar>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'memberModal',
	props: ['member', 'members'],

	data() {
		return {};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fw-900 {
	font-weight: 900;
}
.text-md {
	font-weight: 500;
}
.swiper-modal {
	// margin-top:-124px;
	// @media screen and (max-width:1600px){
	//   margin-top:-100px;
	// }
	// @media screen and (max-width:991px){
	//   padding:rem(25px) 0 rem(40px) 0;
	//   margin-top:-80px;
	// }
	/deep/ {
		.scrollbar-wrap {
			.scrollbar-y {
				right: 40px;
			}
		}
		.name {
			font-weight: 500;
		}
	}
	.swiper-modal-content {
		/deep/ {
			.scrollbar-wrap {
				.scrollbar-y {
					right: 5px;
				}
			}
		}
	}
	width: 100%;
	//   background-image: url(../../assets/images/banners/board-of-directors.png);
	background-color: #fff;
	//   padding: 50px 20px 20px;
	// @media screen and (max-width:991px){
	//   padding:20px;
	//   padding-top:rem(200px);
	// }
	@media screen and (max-width: 767px) {
		//     padding-top: rem(40px);
	}

	position: static;
	top: 0;
	left: 0;
	width: 100%;
	//   height: 100vh;
	z-index: 100;
	// overflow: auto;

	@media (min-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.scrollWrapper {
		&.left {
			//  @media screen and (max-width: 1600px) {
			//    height: calc(100vh - 60px);
			//  }
			@media screen and (max-width: 992px) {
				display: none;
			}
		}
		&.right {
			/deep/ {
				.__panel {
					padding-right: rem(20px);
				}
			}
			@media screen and (max-width: 1600px) and (min-width: 992px) {
				height: auto;
			}
			// @media screen and (max-width:1199px){
			//   height:calc(350px);
			// }
			@media screen and (max-width: 991px) {
				height: 150px;
			}
			@media screen and (max-width: 575px) {
				height: 300px;
			}
		}
	}
}

.swiper-modal-body {
	position: relative;

	@media (min-width: 992px) {
		display: flex;
		align-items: flex-start;
	}
}
.swiper-modal-content-image {
	margin-bottom: 20px;
	margin-right: 20px;
	border-top-left-radius: 21px;
	border-bottom-right-radius: 21px;
	@media screen and (min-width: 768px) {
		box-shadow: 0px 5px 13px -1px rgba($color: black, $alpha: 0.3);
	}
	@media screen and (max-width: 991px) {
		margin-bottom: rem(30px);
	}
	@media screen and (max-width: 991px) and (min-width: 767px) {
		margin-right: rem(20px);
	}

	@media (min-width: 1200px) {
		margin-right: 28px;
	}
	@media screen and (max-width: 767px) {
		margin-right: 0;
	}
}
.swiper-modal-aside {
	flex-shrink: 0;
	padding: 0;
	margin: 0;
	list-style: none;
	padding-right: 50px;
	border-right: 4px solid rgba(0, 0, 0, 0.1);
	@media (max-width: 991px) {
		display: none;
	}

	@media (min-width: 1200px) {
		padding-right: 50px;
	}

	& > * {
		opacity: 0.5;
		transition: all 0.2s ease;
		cursor: pointer;

		@media screen and (max-width: 992px) {
			&:hover {
				opacity: 1;
			}
		}
	}

	& > *:not(:last-child) {
		margin-bottom: 35px;
		@media screen and (max-width: 1600px) {
			margin-bottom: 25px;
		}
	}

	.active {
		opacity: 1;
		p {
			color: #019cde;
			&.position {
				color: #67c4eb;
			}
		}
	}
	li {
		p {
			margin-bottom: 5px;
			line-height: 1;
			font-size: rem(17px);
			color: #224156;
			&.position {
				color: #7a8d9a;
			}
			@media screen and (max-width: 1600px) {
				font-size: rem(16px);
			}
		}
		&.active {
			.fw-700 {
				font-weight: 900;
			}
		}
	}
}

.swiper-modal-img {
	max-width: 264px;
	@media screen and (min-width: 992px) {
		height: 315px;
	}
	@media screen and (max-width: 991px) {
		max-width: 200px;
	}
}

.swiper-modal-content {
	@media (min-width: 767px) {
		display: flex;
		align-items: flex-start;
		width: 100%;
		max-width: 1000px;
	}
	img {
		border-top-left-radius: 21px;
		border-bottom-right-radius: 21px;

		@media screen and (max-width: 991px) {
			margin: auto;
			display: block;
			text-align: center;
			max-width: 150px;
		}
		@media screen and (max-width: 767px) {
			max-width: 100px;
		}
	}

	@media (min-width: 992px) {
		margin-left: 20px;
	}
	p {
		line-height: 1.3;
		margin-bottom: rem(25px);
		font-size: rem(18px);
		color: #82919c;
		@media screen and (max-width: 1199px) {
			padding-right: rem(30px);
		}
		@media screen and (max-width: 1024px) {
			margin-bottom: rem(25px);
		}
		@media screen and (max-width: 767px) {
			font-size: rem(15px);
		}
	}
}

.swiper-modal-close {
	cursor: pointer;
	position: absolute;
	top: 10px;
	right: 20px;
	@media screen and (max-width: 1600px) {
		top: 0px;
	}
	@media (min-width: 1601px) {
		right: 0;
	}
	@media (max-width: 1199px) {
		top: 0;
	}
	@media (max-width: 991px) {
		top: 0px;
	}
	@media screen and (max-width: 767px) {
		top: -15px;
		max-width: 20px;
	}
}

.swiper-modal-img {
	flex-shrink: 0;
}

.swiper-modal-header {
	padding-bottom: 10px;
	margin-bottom: 20px;
	padding-left: 20px;
	// border-bottom: 2px solid rgba(0, 0, 0, 0.1);
	@media screen and (max-width: 767px) {
		text-align: center;
	}
}

.swiper-modal-name {
	font-size: rem(30px);
	font-weight: 500;
	color: #224156;
	margin-right: rem(40px);
	@media (min-width: 992px) {
		font-size: rem(28px);
	}
	@media (max-width: 991px) {
		margin-right: rem(90px);
	}

	@media screen and (max-width: 767px) {
		font-size: rem(19px);
		margin-right: rem(0px);
	}
}

.swiper-modal-position {
	font-size: rem(20px);
	font-weight: 400;
	margin-top: 6px;
	opacity: 0.6;
	color: #224156;

	@media (min-width: 992px) {
		font-size: 18px;
	}
}

// arabic
[lang='ar'] {
	.swiper-modal-aside {
		padding-left: 50px;
		padding-right: 0;
		border-left: 4px solid rgba(0, 0, 0, 0.2);
		border-right: 0;

		@media (min-width: 1200px) {
			padding-left: 80px;
			padding-right: 0;
		}
	}

	.swiper-modal-content {
		@media (min-width: 992px) {
			margin-right: 50px;
			margin-left: 0;
		}

		@media (min-width: 1200px) {
			margin-right: 80px;
			margin-left: 0;
		}
	}
	.swiper-modal {
		.scrollWrapper {
			&.right {
				/deep/ {
					.__panel {
						padding-left: rem(20px);
						padding-right: 0;
					}
				}
			}
		}
	}

	.swiper-modal-close {
		left: 20px;
		right: auto;

		@media (min-width: 1601px) {
			left: 0;
			right: auto;
		}
	}

	.swiper-modal-img {
		margin-left: 20px;
		margin-right: 0;
		@media (min-width: 1200px) {
			margin-left: 28px;
			margin-right: 0;
		}
		@media (max-width: 767px) {
			margin-left: auto;
			margin-right: auto;
		}
	}
}
</style>
