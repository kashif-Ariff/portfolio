<template>
	<div class="container">
		<div class="Faq__mainContent">
			<div class="Faq__mainContent--left">
				<ul class="Faq__ListItoms">
					<li>
						<a
							data-target="highlights"
							class="nav-link"
							:class="{ active: isActive(0) }"
							v-on:click.stop.prevent="tabIndex = 0"
							data-toggle="tab"
							href="#"
							role="tab"
						>
							<span class="icon">
								<img
									src="@/assets/images/icons/faqs/white/question.png"
									class="img-fluid selected"
								/>
								<img
									src="@/assets/images/icons/faqs/color/question.png"
									class="img-fluid not-selected"
								/> </span
							>About The National Fund
						</a>
					</li>
					<li>
						<a
							data-target="highlights"
							class="nav-link"
							:class="{ active: isActive(1) }"
							v-on:click.stop.prevent="tabIndex = 1"
							data-toggle="tab"
							href="#"
							role="tab"
						>
							<span class="icon">
								<img
									src="@/assets/images/icons/faqs/white/question.png"
									class="img-fluid selected"
								/>
								<img
									src="@/assets/images/icons/faqs/color/question.png"
									class="img-fluid not-selected"
								/> </span
							>About The National Fund
						</a>
					</li>
					<li>
						<a
							data-target="highlights"
							class="nav-link"
							:class="{ active: isActive(2) }"
							v-on:click.stop.prevent="tabIndex = 2"
							data-toggle="tab"
							href="#"
							role="tab"
						>
							<span class="icon">
								<img
									src="@/assets/images/icons/faqs/white/question.png"
									class="img-fluid selected"
								/>
								<img
									src="@/assets/images/icons/faqs/color/question.png"
									class="img-fluid not-selected"
								/> </span
							>About The National Fund
						</a>
					</li>
					<li>
						<a
							data-target="highlights"
							class="nav-link"
							:class="{ active: isActive(3) }"
							v-on:click.stop.prevent="tabIndex = 3"
							data-toggle="tab"
							href="#"
							role="tab"
						>
							<span class="icon">
								<img
									src="@/assets/images/icons/faqs/white/question.png"
									class="img-fluid selected"
								/>
								<img
									src="@/assets/images/icons/faqs/color/question.png"
									class="img-fluid not-selected"
								/> </span
							>About The National Fund
						</a>
					</li>
					<li>
						<a
							data-target="highlights"
							class="nav-link"
							:class="{ active: isActive(4) }"
							v-on:click.stop.prevent="tabIndex = 4"
							data-toggle="tab"
							href="#"
							role="tab"
						>
							<span class="icon">
								<img
									src="@/assets/images/icons/faqs/white/question.png"
									class="img-fluid selected"
								/>
								<img
									src="@/assets/images/icons/faqs/color/question.png"
									class="img-fluid not-selected"
								/> </span
							>About The National Fund
						</a>
					</li>
				</ul>
			</div>
			<div class="Faq__mainContent--right">
				<b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
					<b-tab title="About The National Fund">
						<div class="accordion" role="tablist">
							<b-card no-body>
								<b-card-header header-tag="header" role="tab">
									<b-button
										block
										v-b-toggle.accordion-1
										variant="info"
										>Text</b-button
									>
								</b-card-header>
								<b-collapse
									id="accordion-1"
									visible
									accordion="my-accordion"
									role="tabpanel"
								>
									<b-card-body>
										<b-card-text> Text </b-card-text>
									</b-card-body>
								</b-collapse>
							</b-card>
						</div>
					</b-tab>
					<b-tab title="About The National Fund">1</b-tab>
					<b-tab title="About The National Fund">1</b-tab>
					<b-tab title="About The National Fund">1</b-tab>
					<b-tab title="About The National Fund">1</b-tab>
					<b-tab title="About The National Fund">1</b-tab>
					<b-tab title="About The National Fund">1</b-tab>
					<b-tab title="About The National Fund">1</b-tab>
					<b-tab title="About The National Fund">1</b-tab>
					<b-tab title="About The National Fund">1</b-tab>
				</b-tabs>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabIndex: 0,
		};
	},
	methods: {
		isActive(index) {
			return this.tabIndex == index;
		},
	},
};
</script>

<style lang="scss" scoped>
.Faq {
	a {
		color: var(--secondary);
	}
	&__mainContent {
		display: flex;
		&--left {
			flex: 0 0 170px;
			max-width: 170px;
			height: 100%;
			.Faq__ListItoms {
				list-style: none;
				li {
					&:not(:last-child) {
						margin-bottom: rem(15px);
					}
				}
			}
			.nav-link {
				width: 100%;
				padding: rem(15px) rem(18px);
				min-height: 145px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-align: center;
				font-size: rem(16px);
				font-weight: 400;
				border-radius: 0px;
				border-top-left-radius: 20px;
				border-bottom-right-radius: 20px;
				overflow: hidden;
				background-color: #fff;
				box-shadow: -3px 1px 10px #ccc;
				border: 1px solid rgba($color: #a4b1b9, $alpha: 0.6);
				transition: 0.3s ease all;
				.icon {
					display: block;
					width: 50px;
					height: 50px;
					margin-bottom: rem(15px);
					img {
						width: 0px;
						height: 0px;
						&.not-selected {
							width: auto;
							height: auto;
						}
					}
				}
				&.active {
					background: var(--secondary);
					color: #fff;
					.icon {
						img {
							width: 0px;
							height: 0px;
							&.selected {
								width: auto;
								height: auto;
							}
						}
					}
				}
			}
		}
		&--right {
			flex: 1;
			height: 100%;
			margin-left: 25px;
		}
	}
	.accordion {
		> .card {
			padding-left: rem(30px);
			padding-right: rem(30px);
			> .card-header {
				background: transparent;
				border: 0;
				padding: 0;
				.btn {
					background: transparent;
					font-size: rem(20px);
					color: #444444;
					text-align: left;
					padding-left: 60px;
					padding-right: 30px;
					position: relative;
					line-height: 1.2;
					white-space: pre-wrap;
					@media screen and (max-width: 767px) {
						font-size: rem(17px);
					}
					&:before {
						content: '';
						position: absolute;
						width: 47px;
						height: 47px;
						background: url(../../assets/images/svg/faq-icon.svg)
							left top no-repeat;
						background-size: cover;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
						@media screen and (max-width: 767px) {
							width: 40px;
							height: 40px;
						}
					}
					&:after {
						content: '';
						position: absolute;
						width: 0;
						height: 0;
						border-left: 10px solid transparent;
						border-right: 10px solid transparent;
						border-top: 10px solid var(--toggleColor);
						right: 0;
						top: 15px;
						transition: 0.4s ease all;
					}
					&.not-collapsed {
						color: var(--primary);
						font-size: rem(30px);
						@media screen and (max-width: 767px) {
							font-size: rem(25px);
						}
						@media screen and (max-width: 575px) {
							font-size: rem(20px);
						}
						&:after {
							transform: rotate(180deg);
						}
					}
				}
			}
			.card-body {
				padding-top: rem(25px);
				padding-left: 60px;
				p {
					font-size: rem(24px);
					color: #444444;
					@media screen and (max-width: 767px) {
						font-size: rem(18px);
					}
				}
			}
		}
	}
}
</style>
