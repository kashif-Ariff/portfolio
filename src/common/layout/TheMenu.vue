<template>
	<div
		class="menuWrapper"
		aria-hidden="true"
		tabindex="-1"
		:class="IsOpen == true ? 'active' : ''"
	>
		<div class="close-icon">
			<a
				aria-label="Close Main Navigation"
				class="closeMenu"
				href="#"
				@click.stop.prevent="$emit('close')"
			>
				<span class="icon">
					<base-svg-icon
						icon-id="cross-icon"
						icon-viewbox="0 0 512 512"
					></base-svg-icon> </span
				><span class="text">Close menu</span>
			</a>
		</div>
		<div class="container">
			<div class="main-content">
				<nav role="navigation" aria-label="Main Menu">
					<ul class="mainNav" role="menubar">
						<li role="none">
							<router-link
								@click.native="closeMenu"
								to="/"
								role="menuitem"
								>Homepage</router-link
							>
						</li>
						<li role="none">
							<router-link
								@click.native="closeMenu"
								to="`/${$i18n.locale}/media-center`"
								role="menuitem"
								>about us</router-link
							>
							<button
								aria-expanded="false"
								aria-controls="media_menu"
								aria-haspopup="true"
							>
								<base-svg-icon
									icon-id="arrow-down-menu"
									icon-viewbox="0 0 492 289.26"
								></base-svg-icon>
							</button>
							<ul
								id="media_menu"
								role="menu"
								aria-label="media center"
								class="submenu"
							>
								<li role="none">
									<router-link
										@click.native="closeMenu"
										:to="`/${$i18n.locale}/mission-vision`"
										role="menuitem"
										>vission and mission</router-link
									>
								</li>
								<li role="none">
									<router-link
										@click.native="closeMenu"
										:to="`/${$i18n.locale}/board-directors`"
										role="menuitem"
										>board of directors</router-link
									>
								</li>
								<li role="none">
									<router-link
										@click.native="closeMenu"
										:to="`/${$i18n.locale}/faq`"
										role="menuitem"
										>faqs</router-link
									>
								</li>
								<li role="none">
									<router-link
										@click.native="closeMenu"
										:to="`/${$i18n.locale}/contact`"
										role="menuitem"
										>contact us</router-link
									>
								</li>
							</ul>
						</li>
						<li role="none">
							<router-link
								@click.native="closeMenu"
								:to="`/${$i18n.locale}/media-center`"
								role="menuitem"
								>Media Center</router-link
							>
							<button
								aria-expanded="false"
								aria-controls="media_menu"
								aria-haspopup="true"
							>
								<base-svg-icon
									icon-id="arrow-down-menu"
									icon-viewbox="0 0 492 289.26"
								></base-svg-icon>
							</button>
							<ul
								id="media_menu"
								role="menu"
								aria-label="media center"
								class="submenu"
							>
								<li role="none">
									<router-link
										@click.native="closeMenu"
										:to="`/${$i18n.locale}/publication`"
										role="menuitem"
										>Publications</router-link
									>
								</li>
								<li role="none">
									<router-link
										@click.native="closeMenu"
										:to="`/${$i18n.locale}/board-publication`"
										role="menuitem"
										>board Publications</router-link
									>
								</li>
							</ul>
						</li>
						<li role="none">
							<router-link
								@click.native="closeMenu"
								:to="`/${$i18n.locale}/our-services`"
								role="menuitem"
								>services</router-link
							>
							<!-- <button
                aria-expanded="false"
                aria-controls="investor_menu"
                aria-haspopup="true"
              >
                <base-svg-icon
                  icon-id="arrow-down-menu"
                  icon-viewbox="0 0 492 289.26"
                ></base-svg-icon>
              </button>
              <ul
                id="investor_menu"
                role="menu"
                aria-label="investor relations"
                class="submenu"
              >
                <li role="none">
                  <router-link
                    @click.native="closeMenu"
                    to="`/${$i18n.locale}/investor-relations/financial-reports`"
                    role="menuitem"
                    >Financial Reports</router-link
                  >
                </li>
                <li role="none">
                  <router-link
                    @click.native="closeMenu"
                    to="`/${$i18n.locale}/investor-relations/stock-market`"
                    role="menuitem"
                    >Stock Market</router-link
                  >
                </li>
                <li role="none">
                  <router-link
                    @click.native="closeMenu"
                    to="`/${$i18n.locale}/investor-relations/analyst-coverage`"
                    role="menuitem"
                    >Analyst Coverage</router-link
                  >
                </li>
                <li role="none">
                  <router-link
                    @click.native="closeMenu"
                    to="`/${$i18n.locale}/investor-relations/facts-figures`"
                    role="menuitem"
                    >Facts &amp; Figures</router-link
                  >
                </li>
                <li role="none">
                  <router-link
                    @click.native="closeMenu"
                    to="`/${$i18n.locale}/investor-relations/shareholders-dividends`"
                    role="menuitem"
                    >Shareholders &amp; Dividends</router-link
                  >
                </li>
                <li role="none">
                  <router-link
                    @click.native="closeMenu"
                    to="`/${$i18n.locale}/investor-relations/ir-calendar`"
                    role="menuitem"
                    >IR Calendar</router-link
                  >
                </li>
              </ul> -->
						</li>
						<!-- <li role="none">
              <router-link
                @click.native="closeMenu"
                to="`/${$i18n.locale}/sustainability`"
                role="menuitem"
                >electronic services</router-link
              >
            </li> -->
						<li role="none">
							<router-link
								@click.native="closeMenu"
								:to="`/${$i18n.locale}/knowledge-library`"
								role="menuitem"
								>knowledge library</router-link
							>
						</li>
						<li role="none">
							<router-link
								@click.native="closeMenu"
								:to="`/${$i18n.locale}/initiators`"
								role="menuitem"
								>the initiators</router-link
							>
						</li>
						<li role="none">
							<router-link
								@click.native="closeMenu"
								:to="`/${$i18n.locale}/common-interest`"
								role="menuitem"
								>common interest</router-link
							>
						</li>
						<li role="none">
							<router-link
								@click.native="closeMenu"
								:to="`/${$i18n.locale}/support-center`"
								role="menuitem"
								>support center</router-link
							>
						</li>
						<li role="none">
							<router-link
								@click.native="closeMenu"
								:to="`/${$i18n.locale}/media-center-detail`"
								role="menuitem"
								>media center detail</router-link
							>
						</li>
						<li role="none">
							<router-link
								@click.native="closeMenu"
								:to="`/${$i18n.locale}/search`"
								role="menuitem"
								>search</router-link
							>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
import '@/assets/css/disclosure-navigation.css';
import '@/assets/js/Menu.js';
import Menu from '@/common/layout/mixin/Menu';
// import { gsap } from 'gsap'
export default {
	mixins: [Menu],
	props: {
		IsOpen: Boolean,
	},
	mounted() {
		console.log('Menu', this.IsOpen);
	},
	watch: {
		IsOpen: function (val) {
			console.log(val);
			if (val) {
				document.querySelector('nav').classList.add('d-none');
			} else {
				document.querySelector('nav').classList.remove('d-none');
			}
		},
	},
};
</script>

<style>
.menuOpen {
	position: fixed;
	overflow: hidden;
}
body.menuOpen {
	background: #000;
}
</style>
<style lang="scss" scoped>
.menuWrapper {
	--highlight: var(--primary);
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	position: fixed;
	z-index: -999;
	opacity: 1;
	// bottom: -100%;
	transform: translateY(-100%);
	left: 0;
	background: rgba(34, 65, 86, 0.9);
	background-attachment: fixed;
	z-index: 0;
	overflow: auto;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	padding: rem(80px) 0;
	visibility: hidden;
	overflow-x: hidden;
	@media screen and (max-width: 1199px) {
		background: unset;
		background-color: #000;
	}
	&::before {
		content: '';
		background: url('../../assets/images/down.png');
		background-repeat: no-repeat;
		position: absolute;
		top: 0%;
		width: 360px;
		height: 300px;
		background-size: cover;
		background-repeat: no-repeat;
		transform: rotate(0deg);
		transform-origin: top left;
		background-position: top left;
		left: 0%;
		z-index: -1;
		@media screen and (max-width: 1200px) {
			display: none;
		}
	}
	&::after {
		content: '';
		background: url('../../assets/images/down.png');
		position: absolute;
		bottom: 0%;
		width: 360px;
		height: 300px;
		background-size: cover;
		background-repeat: no-repeat;
		transform: rotate(0deg);
		background-position: top left;
		right: 0%;
		z-index: -1;
		@media screen and (max-width: 1200px) {
			display: none;
		}
	}
	&.active {
		// z-index: 999;
		// top: 0;
		// opacity: 1;
	}
	.close-icon {
		position: absolute;
		right: 5%;
		top: 5%;

		a {
			color: #fff;
			font-size: rem(18px);
			text-transform: uppercase;
			display: inline-block;
			font-weight: 700;
			//height: rem(32px);
			padding: 12px 12px;
			//padding-top: 0px;
			position: relative;
			z-index: 2;
			/deep/ svg {
				width: rem(20px);
				height: auto;
			}
		}
		span {
			display: inline-block;
			div {
				display: inline-block;
			}
			&.text {
				display: inline-block;
				background: rgba(34, 65, 86, 0.9);
				margin-left: 6px;
				padding: 5px 0px;
				@media screen and (max-width: 1199px) {
					background: #000;
				}
			}
			&.icon {
				position: relative;
				&::before {
					content: '';
					width: 50px;
					height: 50px;
					position: absolute;
					border: 2px solid #fff;
					top: 50%;
					left: 50%;
					transform: translate(-42%, -50%);
					border-radius: 50%;
					z-index: -1;
				}
			}
		}
	}
	nav {
		> ul {
			@media screen and (max-width: 991px) {
				margin-top: 30px;
			}
		}
		ul {
			list-style: none;

			> li {
				text-align: center;
				margin-bottom: rem(20px);
				@media screen and (max-width: 575px) {
					text-align: left;
				}
				a {
					color: #fff;
					font-size: rem(60px);
					text-transform: uppercase;
					font-weight: 900;
					text-decoration: none;
					padding: rem(8px) rem(8px);
					display: inline-block;
					@media screen and (max-width: 1600px) {
						font-size: rem(45px);
					}
					@media screen and (max-width: 991px) {
						font-size: rem(30px);
					}
					@media screen and (max-width: 575px) {
						font-size: rem(25px);
					}
					@media screen and (max-width: 450px) {
						font-size: rem(20px);
					}
					&:hover {
						color: var(--primary);
					}
				}
				.submenu {
					// display:none;
					height: 0;
					overflow: hidden;
					position: relative;
					visibility: hidden;
					&:before {
						position: absolute;
						content: '';
						top: 0;
						left: 0;
						right: 0;
						margin: auto;
						height: 3px;
						width: 150px;
						background: #fff;
						@media screen and (max-width: 575px) {
							right: auto;
							left: 0;
						}
					}
					&.show {
						margin-top: rem(25px);
						padding-top: rem(25px);
						visibility: visible;
					}
					li {
						margin-bottom: rem(15px);
						a {
							color: #fff;
							font-size: rem(29px);
							@media screen and (max-width: 1600px) {
								font-size: rem(25px);
							}
							@media screen and (max-width: 991px) {
								font-size: rem(22px);
							}
							@media screen and (max-width: 575px) {
								font-size: rem(20px);
							}
							&:hover {
								color: var(--primary);
							}
							&:focus {
								color: var(--primary);
							}
						}
					}
				}
				button[aria-expanded='true'] + ul {
					display: block;
				}
				button {
					outline-style: dashed;
					outline-width: 3px;
					outline-offset: 0px;
					padding: rem(8px) rem(22px);
					outline-color: transparent;
					font-size: rem(60px);
					@media screen and (max-width: 991px) {
						font-size: rem(30px);
						padding: rem(8px) rem(15px);
					}
					@media screen and (max-width: 575px) {
						font-size: rem(25px);
					}
					@media screen and (max-width: 450px) {
						font-size: rem(20px);
					}
				}
				button[aria-haspopup='true'] {
					background: transparent;
					border: 0;
					color: #959595;
					// transform: rotate(90deg);
					transition: all 0.5s ease;
					margin: 0;
					margin-left: rem(15px);
					position: absolute;
					top: 0px;
					@media screen and (max-width: 991px) {
						margin-left: rem(10px);
					}
					@media screen and (max-width: 575px) {
						right: 0;
					}
					::v-deep {
						> div {
							position: relative;
							z-index: -1;
							@media screen and (min-width: 991px) {
								top: -6px;
							}
						}
						svg {
							width: rem(37px);
							height: auto;
							@media screen and (max-width: 991px) {
								width: rem(25px);
							}
						}
					}
					&:focus {
						color: #fff;
						outline-color: var(--highlight);
					}
					&:hover {
						color: #fff;
					}
				}
				button[aria-expanded='true'] {
					transform: rotate(180deg);
				}
				&.active {
					> a,
					button {
						//   outline-color: var(--highlight);
						color: var(--primary);
					}
				}
				@media screen and (max-width: 1199px) {
					&.active {
						ul {
							&::before {
								content: unset;
							}
							background: #fff;
							li {
								a {
									color: #000;
								}
							}
						}
					}
				}
			}
		}
	}
}
[lang='ar'] {
	.menuWrapper {
		right: 0;
		left: auto;
		&::before {
			right: 0%;
			left: auto;
		}
		&::after {
			background-position: top right;
			right: 2%;
			left: auto;
		}
		.close-icon {
			left: 5%;
			right: auto;
			span {
				&.text {
					margin-right: 6px;
					margin-left: 0;
				}
			}
		}
		nav {
			ul {
				> li {
					@media screen and (max-width: 575px) {
						text-align: right;
					}
					.submenu {
						// display:none;
						height: 0;
						overflow: hidden;
						position: relative;
						visibility: hidden;
						&:before {
							@media screen and (max-width: 575px) {
								left: auto;
								right: 0;
							}
						}
					}
					button[aria-haspopup='true'] {
						margin: 0;
						margin-right: rem(15px);
						@media screen and (max-width: 991px) {
							margin-right: rem(10px);
						}
						@media screen and (max-width: 575px) {
							left: 0;
							right: auto;
						}
					}
				}
			}
		}
	}
}
</style>
