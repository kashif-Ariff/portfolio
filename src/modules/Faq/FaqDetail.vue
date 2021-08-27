<template>
	<div class="container">
		<div class="Faq__mainContent">
			<div class="Faq__mainContent--left">
				<button
					:class="toggleDropDown ? 'active' : ''"
					@click="toggleDropDown = !toggleDropDown"
					type="button"
					class="toggleTab"
					aria-label="mobile category tabs"
				>
					All
				</button>
				<ul
					class="Faq__ListItoms itemTabs"
					:class="toggleDropDown ? 'active' : ''"
					role="tablist"
				>
					<li
						v-for="Card in faqItem"
						:key="Card.index"
						class="iconTabs__item"
					>
						<a
							data-target="highlights"
							class="nav-link slide__card"
							:class="{ active: isActive(Card.index) }"
							v-on:click.stop.prevent="tabIndex = Card.index"
							data-toggle="tab"
							href="#"
							role="tab"
						>
							<span class="icon iconTabs__item--image">
								<span class="tab-icon">
									<img
										:src="
											require(`@/assets/images/icons/faqs/white/${Card.images.active}`)
										"
										class="img-fluid selected"
									/>
									<img
										:src="
											require(`@/assets/images/icons/faqs/color/${Card.images.nonActive}`)
										"
										class="img-fluid"
									/>
								</span> </span
							>{{ Card.label }}
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
										>What is the National Fund?
									</b-button>
								</b-card-header>
								<b-collapse
									id="accordion-1"
									visible
									accordion="my-accordion"
									role="tabpanel"
								>
									<b-card-body>
										<b-card-text>
											An independent governmental entity
											which sponsors, and finances small
											and medium enterprises fully owned
											by Kuwaiti citizens.
										</b-card-text>
									</b-card-body>
								</b-collapse>
							</b-card>
							<b-card no-body>
								<b-card-header header-tag="header" role="tab">
									<b-button
										block
										v-b-toggle.accordion-2
										variant="info"
										>What is the National Fund?
									</b-button>
								</b-card-header>
								<b-collapse
									id="accordion-2"
									visible
									accordion="my-accordion"
									role="tabpanel"
								>
									<b-card-body>
										<b-card-text>
											An independent governmental entity
											which sponsors, and finances small
											and medium enterprises fully owned
											by Kuwaiti citizens.
										</b-card-text>
									</b-card-body>
								</b-collapse>
							</b-card>
							<b-card no-body>
								<b-card-header header-tag="header" role="tab">
									<b-button
										block
										v-b-toggle.accordion-3
										variant="info"
										>What is the National Fund?
									</b-button>
								</b-card-header>
								<b-collapse
									id="accordion-3"
									visible
									accordion="my-accordion"
									role="tabpanel"
								>
									<b-card-body>
										<b-card-text>
											An independent governmental entity
											which sponsors, and finances small
											and medium enterprises fully owned
											by Kuwaiti citizens.
										</b-card-text>
									</b-card-body>
								</b-collapse>
							</b-card>
							<b-card no-body>
								<b-card-header header-tag="header" role="tab">
									<b-button
										block
										v-b-toggle.accordion-4
										variant="info"
										>What is the National Fund?
									</b-button>
								</b-card-header>
								<b-collapse
									id="accordion-4"
									visible
									accordion="my-accordion"
									role="tabpanel"
								>
									<b-card-body>
										<b-card-text>
											An independent governmental entity
											which sponsors, and finances small
											and medium enterprises fully owned
											by Kuwaiti citizens.
										</b-card-text>
									</b-card-body>
								</b-collapse>
							</b-card>
							<b-card no-body>
								<b-card-header header-tag="header" role="tab">
									<b-button
										block
										v-b-toggle.accordion-5
										variant="info"
										>What is the National Fund?
									</b-button>
								</b-card-header>
								<b-collapse
									id="accordion-5"
									visible
									accordion="my-accordion"
									role="tabpanel"
								>
									<b-card-body>
										<b-card-text>
											An independent governmental entity
											which sponsors, and finances small
											and medium enterprises fully owned
											by Kuwaiti citizens.
										</b-card-text>
									</b-card-body>
								</b-collapse>
							</b-card>
							<b-card no-body>
								<b-card-header header-tag="header" role="tab">
									<b-button
										block
										v-b-toggle.accordion-6
										variant="info"
										>What is the National Fund?
									</b-button>
								</b-card-header>
								<b-collapse
									id="accordion-6"
									visible
									accordion="my-accordion"
									role="tabpanel"
								>
									<b-card-body>
										<b-card-text>
											An independent governmental entity
											which sponsors, and finances small
											and medium enterprises fully owned
											by Kuwaiti citizens.
										</b-card-text>
									</b-card-body>
								</b-collapse>
							</b-card>
							<b-card no-body>
								<b-card-header header-tag="header" role="tab">
									<b-button
										block
										v-b-toggle.accordion-7
										variant="info"
										>What is the National Fund?
									</b-button>
								</b-card-header>
								<b-collapse
									id="accordion-7"
									visible
									accordion="my-accordion"
									role="tabpanel"
								>
									<b-card-body>
										<b-card-text>
											An independent governmental entity
											which sponsors, and finances small
											and medium enterprises fully owned
											by Kuwaiti citizens.
										</b-card-text>
									</b-card-body>
								</b-collapse>
							</b-card>

							<!-- customButton  -->
							<div class="card customBtn">
								<div class="card-header">
									<div class="label">
										Can't Find What You're Looking For?
									</div>
									<a href="#" class="contact btn btn-primary">
										<span class="icon">
											<base-svg-icon
												icon-id="agent"
												icon-viewbox="0 0 29.531 28.658"
											></base-svg-icon> </span
										>Contact us
									</a>
								</div>
							</div>
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
			toggleDropDown: false,
			faqItem: [
				{
					index: 0,
					label: 'About The National Fund',
					images: {
						active: 'question.png',
						nonActive: 'question.png',
					},
				},
				{
					index: 1,
					label: 'Funding & Terms',
					images: {
						active: 'Financial-Care-2.png',
						nonActive: 'Financial-Care-2.png',
					},
				},
				{
					index: 2,
					label: 'Feasibility study',
					images: {
						active: 'Presentation-3.png',
						nonActive: 'Presentation-3.png',
					},
				},
				{
					index: 3,
					label: 'Business Partners',
					images: {
						active: 'Handshake.png',
						nonActive: 'Handshake.png',
					},
				},
				{
					index: 4,
					label: 'Lands & Shops',
					images: {
						active: 'Shop.png',
						nonActive: 'Shop.png',
					},
				},
				{
					index: 5,
					label: 'National Directory',
					images: {
						active: 'Connected-Folder.png',
						nonActive: 'Connected-Folder.png',
					},
				},
			],
		};
	},
	methods: {
		isActive(index) {
			return this.tabIndex == index;
		},
	},
	watch: {
		tabIndex: function (e) {
			var activeText = document
				.querySelector(
					`.Faq__mainContent--left ul li:nth-child(${
						e + 1
					}) a.nav-link`
				)
				.innerText.toLowerCase();
			document.querySelector('.Faq__mainContent--left button').innerText =
				activeText;
			this.toggleDropDown = !this.toggleDropDown;
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
		@media screen and (max-width: 767px) {
			flex-wrap: wrap;
		}
		&--left {
			flex: 0 0 145px;
			max-width: 145px;
			.toggleTab {
				display: none;
			}
			@media screen and (max-width: 991px) {
				flex: 0 0 110px;
				max-width: 110px;
			}
			@media screen and (max-width: 767px) {
				flex: none;
				max-width: 100%;
				width: 100%;
				position: relative;
				.toggleTab {
					position: relative;
					font-size: rem(20px);
					font-weight: 500;
					color: var(--secondary);
					text-transform: capitalize;
					width: 100%;
					padding: 15px 0px 14px;
					margin-right: 0px;
					margin-left: auto;
					background: #fff;
					border: none;
					text-align: left;
					padding-left: 20px;
					transition: 0.4s ease all;
					margin-bottom: 25px;
					display: block;
					outline: 3px dashed transparent;
					display: block;
					border: 1px solid var(--secondry);
					border: 2px solid;
					&:before {
						content: '';
						position: absolute;
						width: 0;
						height: 0;
						border-left: 10px solid transparent;
						border-right: 10px solid transparent;
						border-top: 10px solid var(--primary);
						right: 30px;
						top: 50%;
						transform: translateY(-50%);
						transition: 0.3s ease all;
					}
					&.active {
						&:before {
							transform: translateY(-50%) rotate(180deg);
						}
					}
				}
			}
			height: 100%;
			.Faq__ListItoms {
				list-style: none;
				@media screen and (max-width: 767px) {
					padding: 10px;
					background: #fff;
					border-top-left-radius: 25px;
					border-bottom-right-radius: 25px;
					margin-bottom: rem(20px);
					box-shadow: 0px 0px 22px -3px rgba($color: black, $alpha:
								0.26);
					position: absolute;
					width: 100%;
					list-style: none;
					background: #fff;
					right: 0;
					z-index: 5;
					top: 53px;
					height: 0px;
					opacity: 0;
					overflow: hidden;
					transition: 0.3s ease all;
					margin-top: rem(20px);
					&.active {
						height: auto;
						opacity: 1;
					}
				}
				li {
					&:not(:last-child) {
						margin-bottom: rem(15px);
					}
				}
			}
			.nav-link {
				transform: unset;
				width: 100%;
				padding: rem(15px) rem(15px);
				min-height: 125px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-align: center;
				font-size: rem(16px);
				font-weight: 400;
				border: 1px solid rgba($color: #a4b1b9, $alpha: 0.6);
				border-top-left-radius: 25px;
				border-bottom-right-radius: 25px;
				@media screen and (max-width: 991px) {
					min-height: 110px;
				}
				@media screen and (max-width: 767px) {
					min-height: auto;
					flex-direction: row;
					border-radius: 0;
					.icon {
						margin: 0 rem(15px) 0 0;
						min-height: 30px;
					}
				}
				.tab-icon {
					width: 45px;
					height: 45px;
					padding: 0px;
					@media screen and (max-width: 991px) {
						width: 40px;
						height: 40px;
					}
					@media screen and (max-width: 767px) {
						width: 25px;
						height: 25px;
					}
				}
				&.active {
					background: var(--secondary);
					color: #fff;
				}
			}
		}
		&--right {
			flex: 1;
			height: 100%;
			margin-left: 25px;
			@media screen and (max-width: 767px) {
				margin-left: 0;
			}
		}
	}
	.accordion {
		> .card {
			padding-left: rem(30px);
			padding-right: rem(30px);
			border-radius: 25px !important;
			border-color: #b6c8d1;
			border-width: 1px;
			padding-top: rem(10px);
			padding-bottom: rem(10px);
			margin-bottom: rem(27px);
			@media screen and (max-width: 767px) {
				padding-left: rem(16px);
				padding-right: rem(16px);
			}
			> .card-header {
				background: transparent;
				border: 0;
				padding: 0;
				button {
					background: transparent;
					font-size: rem(20px);
					color: var(--secondary);
					text-align: left;
					padding-left: 35px;
					padding-right: 30px;
					padding-top: rem(10px);
					padding-bottom: rem(10px);
					position: relative;
					line-height: 1.2;
					white-space: pre-wrap;
					font-weight: 400;
					outline: none;
					@media screen and (max-width: 767px) {
						font-size: rem(17px);
					}
					&:before {
						content: '';
						position: absolute;
						width: 22px;
						height: 22px;
						background: url(../../assets/images/svg/faq-icon.svg)
							left top no-repeat;
						background-size: cover;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
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
						@media screen and (max-width: 767px) {
							top: 12px;
						}
					}
					&[aria-expanded='true'] {
						&::after {
							transform: rotate(180deg);
						}
					}
				}
			}
			.card-body {
				padding-top: 5px;
				padding-left: 60px;
				padding-bottom: rem(10px);
				p {
					font-size: rem(18px);
					color: #82919c;
					line-height: 1.3;
					position: relative;
					&::before {
						content: '';
						position: absolute;
						top: 10px;
						left: -24px;
						height: 2px;
						width: 15px;
						background: #019cde;
						border-radius: 79px;
						@media screen and (max-width: 991px) {
							top: 8px;
						}
						@media screen and (max-width: 767px) {
							top: 7px;
						}
					}
					@media screen and (max-width: 767px) {
						font-size: rem(16px);
					}
				}
			}
		}
		.customBtn {
			background: transparent;
			font-size: rem(20px);
			color: var(--secondary);
			text-align: left;
			padding-top: rem(15px);
			padding-bottom: rem(15px);
			padding-right: rem(42px);
			position: relative;
			line-height: 1.2;
			// white-space: pre-wrap;
			font-weight: 400;
			border-radius: 40px !important;
			outline: none;
			.label {
				padding-left: 35px;
				padding-right: 30px;
				@media screen and (max-width: 767px) {
					padding-left: 35px;
					padding-right: 14px;
				}
			}
			@media screen and (max-width: 767px) {
				font-size: rem(17px);
				padding-right: rem(20px);
			}
			&:before {
				content: '';
				position: absolute;
				width: 22px;
				height: 22px;
				background: url(../../assets/images/svg/faq-icon.svg) left top
					no-repeat;
				background-size: cover;
				left: 30px;
				top: 50%;
				transform: translateY(-50%);
				@media screen and (max-width: 767px) {
					left: 14px;
				}
			}
			.card-header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.btn {
					color: #fff;
					padding-left: 17px;
					padding-right: 20px;
					display: flex;
					padding-top: 14px;
					padding-bottom: 14px;
					font-size: rem(20px);
					@media screen and (max-width: 1600px) {
						font-size: rem(18px);
					}
					.icon {
						width: 15px;
						height: 14px;
						display: inline-block;
						color: #fff;
						margin-right: 8px;
						margin-top: -3px;
					}
				}
			}
		}
	}
}
</style>
