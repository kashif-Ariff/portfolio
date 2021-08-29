<template>
	<div class="searchWrapper" :class="isSearch ? 'active' : ''">
		<div class="overlay"></div>
		<div class="search">
			<span class="closeIcon" @click="$emit('closeSearch'), removeTag()">
				<img src="@/assets/images/home/icon/close-login.png" alt="" />
			</span>
			<base-smooth-scrollbar height="300px">
				<div class="search-input">
					<label>Projects... </label>
					<vue-tags-input v-model="tag" placeholder="" :tags="tags" />

					<span>
						<base-svg-icon
							icon-id="search-icon"
							icon-viewbox="0 0 81.49 81.49"
						></base-svg-icon>
					</span>
				</div>

				<div class="row search-list">
					<div class="col-12 col-lg-3">
						<h6>LATEST INTERESTS</h6>
						<ul class="list-unstyled">
							<li>Training</li>
							<li>License</li>
							<li>Investment</li>
							<li>Marketing</li>
							<li>lorem ipsum</li>
							<li>lorem ipsum</li>
						</ul>
					</div>
					<div class="col-12 col-lg-3">
						<h6>LATEST INTERESTS</h6>
						<ul class="list-unstyled">
							<li>Training</li>
							<li>License</li>
							<li>Investment</li>
							<li>Marketing</li>
							<li>lorem ipsum</li>
							<li>lorem ipsum</li>
						</ul>
					</div>
					<div class="col-12 col-lg-3">
						<h6 class="text-capitalize">Lorem Ipsum</h6>
						<ul class="list-unstyled">
							<li>Lorem Ipsum</li>
							<li>Lorem Ipsum</li>
							<li>Lorem Ipsum</li>
							<li>Lorem Ipsum</li>
							<li>Lorem Ipsum</li>
							<li>Lorem Ipsum</li>
						</ul>
					</div>
					<div class="col-12 col-lg-3">
						<h6 class="text-capitalize">Lorem Ipsum</h6>
						<ul class="list-unstyled">
							<li>Lorem Ipsum</li>
							<li>Lorem Ipsum</li>
							<li>Lorem Ipsum</li>
							<li>Lorem Ipsum</li>
							<li>Lorem Ipsum</li>
							<li>Lorem Ipsum</li>
						</ul>
					</div>
				</div>
			</base-smooth-scrollbar>
		</div>
	</div>
</template>

<script>
import VueTagsInput, { createTag } from '@johmun/vue-tags-input';

export default {
	props: {
		isSearch: Boolean,
	},
	components: {
		VueTagsInput,
	},
	data() {
		return {
			tag: '',
			tags: [],
		};
	},
	methods: {
		addTag: function (tag) {
			var newTag = createTag(tag, this.tags);
			this.tags.push(newTag);
		},
		removeTag: function () {
			this.tags = [];
			let root = document.getElementsByTagName('html')[0];
			root.removeAttribute('class', 'hidden');
		},
	},
	mounted() {
		document.querySelector('input').focus();
		document.querySelectorAll('.search-list ul li').forEach((list) => {
			let $self = this;
			list.addEventListener('click', function () {
				var text = list.textContent;
				$self.addTag(text);
			});
		});
	},
	watch: {
		tags: function () {
			document.querySelector('input').focus();
		},
	},
};
</script>

<style lang="scss" scoped>
.searchWrapper {
	/deep/ {
		.vue-tags-input {
			margin-top: 0px !important;
		}
		.vue-tags-input.ti-focus {
			margin-top: 0px !important;
		}
	}
	.overlay {
		position: fixed;
		z-index: 999999;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		left: 0;
		display: none;
		background: #0e181dd6;
	}
	/deep/ {
		.vue-tags-input {
			background-color: #fff;
			border: 1px solid #ccc;
			box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.8);
			display: inline-block;
			padding: 4px 6px;
			color: #555;
			vertical-align: middle;
			max-width: 100%;
			line-height: 22px;
			cursor: text;
			flex-grow: 2;
			height: 100%;
			border: none;
			line-height: 45px;
			box-shadow: none;
			border-radius: 0;
			width: 70%;
			margin-top: rem(17px);
			.ti-input {
				border: 0;
				font-size: rem(20px);
			}
			.ti-tag {
				width: fit-content;
				padding: rem(10px) rem(14px);
				text-align: center;
				color: #000;
				background-color: #f9f8f7;
				border-radius: 30px;
				font-size: rem(14px);
				cursor: pointer;
				transition: 0.3s all ease-in-out;
				&:hover {
					color: #f9f8f7;
					background-color: #212529;
				}
			}
			input {
				border: none;
				box-shadow: none;
				outline: none;
				background-color: transparent;
				padding: 0 rem(6px);
				margin: 0;
				width: auto;
				max-width: inherit;
			}
		}
	}
	.search {
		background-color: $whiteColor;
		display: none;
		max-width: 1250px;
		border-radius: 50px;
		padding: rem(60px) rem(55px);
		position: fixed;
		left: 0;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		margin: auto;
		z-index: 999999;
		// @media (max-width: 1199px) {
		//   margin:rem(20px);
		// }
		@media (max-width: 991.98px) {
			padding: rem(80px) rem(10px) rem(20px) rem(20px);
			border-radius: 35px;
		}
		@include small_medium {
			width: 95%;
		}
		span.closeIcon {
			position: absolute;
			top: 21px;
			right: 16px;
			cursor: pointer;
			border-radius: 50%;
			//  filter: drop-shadow(2px 4px 6px $mainColor);
			img {
				width: 44px;
				@include prefixer(
					transition,
					all 0.3s ease-in-out,
					o moz wibket
				);
				&:hover {
					transform: scale(0.8);
				}
			}

			img {
				@include small_medium {
					width: 28px;
				}
				@include medium {
					width: 35px;
				}
			}
		}
		.search-input {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: $whiteColor;
			border: 1px solid rgba(136, 136, 136, 0.442);
			// height: 120px;
			min-height: 120px;
			border-radius: 51px;
			padding: rem(5px) rem(15px) rem(5px) rem(25px);

			@media (max-width: 991.98px) {
				padding: rem(6px) rem(5px);
				min-height: 70px;
			}
			@media (max-width: 575px) {
				min-height: 50px;
			}
			label {
				padding-inline-end: 40px;
				//    @include fonts($Gotham-bold, 25px);
				font-size: rem(25px);
				font-weight: 700;
				color: $mainColor;
				margin-bottom: 0px;
				position: relative;
				@media screen and (max-width: 991px) {
					padding-left: rem(15px);
				}
				&::after {
					@include postionEle(
						50%,
						auto,
						0,
						absolute,
						$opacity-color,
						2px,
						50px
					);
					content: '';
					z-index: 5;
					right: 0px;
					transform: translateY(-50%);
				}

				@media (max-width: 350px) {
					display: none;
				}
				@include small_medium {
					font-size: rem(16px);
					padding-inline-end: rem(15px);
				}
				@include xxSmall {
					font-size: rem(12px);
					padding-inline-end: rem(5px);
				}
			}
			> span {
				cursor: pointer;
				border-radius: 50%;
				width: 80px;
				height: 80px;
				@extend %d-flex-center;
				background-color: $mainColor;
				@include prefixer(
					transition,
					all 0.3s ease-in-out,
					o moz wibket
				);
				&:hover {
					opacity: 0.7;
				}
				/deep/ {
					svg {
						fill: $whiteColor;
						width: 36px;
						@media (max-width: 991.98px) {
							width: 36px;
						}
						@include xSmall {
							width: 22px;
						}
					}
				}
				@include xSmall {
					width: 50px;
					height: 47px;
					/deep/ {
						svg {
							width: 22px;
						}
					}
				}
				@media (min-width: 576px) and (max-width: 991.98px) {
					width: 55px;
					height: 55px;
					/deep/ {
						svg {
							width: 25px;
						}
					}
				}
			}

			.bootstrap-tagsinput {
				flex-grow: 2;
				height: 100%;
				border: none;
				line-height: 45px;
				box-shadow: none;
				border-radius: 0;
				width: 70%;
				@include small_medium {
					line-height: 50px;
				}
				.tag {
					width: fit-content;
					padding: rem(10px) rem(14px);
					text-align: center;
					color: #000;
					background-color: $grayOpacity;
					margin-bottom: rem(15px);
					border-radius: 30px;
					font-size: rem(14px);
					cursor: pointer;
					transition: 0.3s all ease-in-out;
					&:hover {
						color: $grayOpacity;
						background-color: #212529;
					}
				}
			}
			button {
				@include prefixer(
					transition,
					all 0.3s ease-in-out,
					o moz wibket
				);
				&:hover {
					opacity: 0.6;
				}
			}
		}
		.search-list {
			margin-top: 50px;
			h6 {
				//    @include fonts($Gotham-bold, 18px);
				font-size: rem(18px);
				font-weight: 500;
				margin-bottom: rem(25px);
				color: $thirdColor;
			}
			@media (max-width: 991.98px) {
				margin-top: rem(35px);
				padding: 0 15px;
			}
			ul {
				@media (max-width: 991.98px) {
					display: flex;
					margin-bottom: 5px;
					flex-wrap: wrap;
				}
				li {
					// @include fonts($Gotham-Book, 14px);
					font-size: rem(15px);
					font-weight: 400;
					width: fit-content;
					padding: rem(7px) rem(14px);
					text-align: center;
					background-color: $grayOpacity;
					margin-bottom: rem(6px);
					border-radius: 30px;
					cursor: pointer;
					transition: 0.3s all ease-in-out;
					@media screen and (max-width: 991px) {
						margin-right: rem(10px);
					}
					&:hover {
						color: $grayOpacity;
						background-color: #212529;
					}
				}
			}
		}
	}
	&.active {
		.overlay,
		.search {
			display: block;
			// @media screen and (max-width: 991px) {
			// 	overflow: scroll;
			// 	max-height: 100%;
			// 	overflow-x: hidden;
			// 	&::-webkit-scrollbar {
			// 		width: 0px;
			// 	}
			// 	&::-webkit-scrollbar-track {
			// 		background: transparent;
			// 	}
			// 	&::-webkit-scrollbar-thumb:hover {
			// 		background: transparent;
			// 	}
			// }
		}
	}
}
</style>
