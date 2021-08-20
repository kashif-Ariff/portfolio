<template>
	<div class="container">
		<div class="Faq__mainContent">
			<div class="Faq__mainContent--left">
				<ul class="Faq__ListItoms itemTabs">
					<li v-for="Card in faqItem" :key="Card.index" class="iconTabs__item">
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
										:src="require(`@/assets/images/icons/faqs/white/${Card.images.active}`)"
										class="img-fluid selected"
									/>
									<img
										:src="require(`@/assets/images/icons/faqs/color/${Card.images.nonActive}`)"
										class="img-fluid "
									/>
								</span>
								 </span
							>{{Card.label}}
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
										>What is the National Fund? </b-button
									>
								</b-card-header>
								<b-collapse
									id="accordion-1"
									visible
									accordion="my-accordion"
									role="tabpanel"
								>
									<b-card-body>
										<b-card-text> An independent governmental entity which sponsors, and finances small and medium enterprises fully owned by Kuwaiti citizens.  </b-card-text>
									</b-card-body>
								</b-collapse>
							</b-card>
							<b-card no-body>
								<b-card-header header-tag="header" role="tab">
									<b-button
										block
										v-b-toggle.accordion-2
										variant="info"
										>What is the National Fund? </b-button
									>
								</b-card-header>
								<b-collapse
									id="accordion-2"
									visible
									accordion="my-accordion"
									role="tabpanel"
								>
									<b-card-body>
										<b-card-text> An independent governmental entity which sponsors, and finances small and medium enterprises fully owned by Kuwaiti citizens.  </b-card-text>
									</b-card-body>
								</b-collapse>
							</b-card>
							<b-card no-body>
								<b-card-header header-tag="header" role="tab">
									<b-button
										block
										v-b-toggle.accordion-3
										variant="info"
										>What is the National Fund? </b-button
									>
								</b-card-header>
								<b-collapse
									id="accordion-3"
									visible
									accordion="my-accordion"
									role="tabpanel"
								>
									<b-card-body>
										<b-card-text> An independent governmental entity which sponsors, and finances small and medium enterprises fully owned by Kuwaiti citizens.  </b-card-text>
									</b-card-body>
								</b-collapse>
							</b-card>
							<b-card no-body>
								<b-card-header header-tag="header" role="tab">
									<b-button
										block
										v-b-toggle.accordion-4
										variant="info"
										>What is the National Fund? </b-button
									>
								</b-card-header>
								<b-collapse
									id="accordion-4"
									visible
									accordion="my-accordion"
									role="tabpanel"
								>
									<b-card-body>
										<b-card-text> An independent governmental entity which sponsors, and finances small and medium enterprises fully owned by Kuwaiti citizens.  </b-card-text>
									</b-card-body>
								</b-collapse>
							</b-card>
							<b-card no-body>
								<b-card-header header-tag="header" role="tab">
									<b-button
										block
										v-b-toggle.accordion-5
										variant="info"
										>What is the National Fund? </b-button
									>
								</b-card-header>
								<b-collapse
									id="accordion-5"
									visible
									accordion="my-accordion"
									role="tabpanel"
								>
									<b-card-body>
										<b-card-text> An independent governmental entity which sponsors, and finances small and medium enterprises fully owned by Kuwaiti citizens.  </b-card-text>
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
										></base-svg-icon>
										</span>Contact us
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
			faqItem:[
				{
					index:0,
					label:"About The National Fund",
					images:{
						active:"question.png",
						nonActive:"question.png"
					}
				},
				{
					index:1,
					label:"Funding & Terms",
					images:{
						active:"Financial-Care-2.png",
						nonActive:"Financial-Care-2.png"
					}
				},
				{
					index:2,
					label:"Feasibility study",
					images:{
						active:"Presentation-3.png",
						nonActive:"Presentation-3.png"
					}
				},
				{
					index:3,
					label:"Business Partners",
					images:{
						active:"Handshake.png",
						nonActive:"Handshake.png"
					}
				},
				{
					index:4,
					label:"Lands & Shops",
					images:{
						active:"Shop.png",
						nonActive:"Shop.png"
					}
				},
				{
					index:5,
					label:"National Directory",
					images:{
						active:"Connected-Folder.png",
						nonActive:"Connected-Folder.png"
					}
				}
			]
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
				transform: unset;
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
				border: 1px solid rgba($color: #a4b1b9, $alpha: 0.6);
				.tab-icon{
					width:50px;
					height: 50px;
					padding: 0px;
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
		}
	}
	.accordion {
		> .card {
			padding-left: rem(30px);
			padding-right: rem(30px);
			border-radius: 40px !important;
			border-color: #B6C8D1;
			border-width: 1px;
			padding-top: rem(16px);
			padding-bottom: rem(16px);
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
					position: relative;
					line-height: 1.2;
					white-space: pre-wrap;
					font-weight:400;
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
					}
					&[aria-expanded="true"]{
						&::after{
							transform: rotate(180deg);
						}
					}
				}
			}
			.card-body {
				padding-top: rem(10px);
				padding-left: 60px;
				p {
					font-size: rem(18px);
					color: #82919C;
					position: relative;
					&::before{
						content: '';
						position: absolute;
						top: 10px;
						left: -29px;
						height: 2px;
						width: 19px;
						background: #019cde;
					}
				}
			}
		}
		.customBtn{
			background: transparent;
			font-size: rem(20px);
			color: var(--secondary);
			text-align: left;
			padding-top: rem(20px);
			padding-bottom: rem(20px);
			position: relative;
			line-height: 1.2;
			white-space: pre-wrap;
			font-weight:400;
			outline: none;
			.label{
				padding-left: 35px;
			padding-right: 30px;
			}
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
				left: 30px;
				top: 50%;
				transform: translateY(-50%);
			}
			.card-header{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.btn{
					color:#fff;
					padding-left: 15px;
					padding-right: 20px;
					display: flex;
					align-items: center;
					padding-top: 12px;
    				padding-bottom: 12px;
					.icon{
						width: 20px;
						height: 20px;
						display: inline-block;
						color: #fff;
						margin-right: 8px;
					}
				}
			}
		}
	}
}
</style>
