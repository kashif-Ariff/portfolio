<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-lg-3">
					<p>
						Kuwait City, 25501 Mansouriya Al-Faiha Business Center
					</p>
					<p>Info@nationalfund.gov.kw</p>
					<span> +965 1234 5678/+965 1234 5678</span>
					<div>
						<h6>Get Social :</h6>
						<ul class="list-unstyled">
							<li>
								<router-link to=""
									><i class="fa fa-facebook"></i
								></router-link>
							</li>
							<li>
								<router-link to=""
									><i class="fa fa-twitter"></i
								></router-link>
							</li>
							<li>
								<router-link to=""
									><i class="fa fa-instagram"></i
								></router-link>
							</li>
							<li>
								<router-link to=""
									><i class="fa fa-google-plus"></i
								></router-link>
							</li>
							<li>
								<router-link to=""
									><i class="fa fa-youtube"></i
								></router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-6 col-sm-4 col-lg-3">
					<h4>About Us</h4>
					<ul class="list-unstyled">
						<li>
							<router-link to="">Vision & Mission </router-link>
						</li>
						<li>
							<router-link to="">Chairman’s Message</router-link>
						</li>
						<li><router-link to="">Advisory Board</router-link></li>
						<li>
							<router-link to="">Board of Directors</router-link>
						</li>
						<li>
							<router-link to=""
								>Executive Management</router-link
							>
						</li>
						<li><router-link to="">FAQ’s</router-link></li>
					</ul>
				</div>
				<div class="col-6 col-sm-4 col-lg-3">
					<h4>News & Events</h4>
					<ul class="list-unstyled">
						<li><router-link to="">Events</router-link></li>
						<li><router-link to="">News</router-link></li>
						<li><router-link to="">Publications</router-link></li>
					</ul>
				</div>
				<div class="col-12 col-sm-4 col-lg-3">
					<h4>Programs & Services</h4>
					<ul class="list-unstyled">
						<li><router-link to="">Programs</router-link></li>
						<li><router-link to="">Services</router-link></li>
					</ul>
				</div>
			</div>
		</div>

		<div>Copyright © 2021 National Fund.. All Rights Reserved.</div>
	</footer>
</template>

<script>
import subscribe from './partials/Subscribe.vue';
import unsubscribe from './partials/UnSubscribe.vue';
export default {
	components: {
		subscribe,
		unsubscribe,
	},
	data() {
		return {
			footerInnerText: {
				en: '© 2021 Copyright Zain. All Rights Reserved.',
				ar: "©️ 2021 حقوق الطبع والنشر لـ'زين'. جميع الحقوق محفوظة.",
			},
		};
	},
	created() {
		this.$i18n.locale == 'en'
			? (this.footerInnerText = this.footerInnerText.en)
			: (this.footerInnerText = this.footerInnerText.ar);
	},
};
</script>

<style lang="scss" scoped>
footer {
	padding-top: rem(75px);
	margin-top: rem(100px);
	position: relative;
	@media screen and (max-width: 991px) {
		padding-top: rem(30px);
		margin-top: rem(40px);
	}
	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-image: url('../../assets/images/icons/footer-b.png');
		background-repeat: no-repeat;
		background-size: contain;
		z-index: -1;
	}

	&::before {
		content: '';
		position: absolute;
		width: 400px;
		height: 100%;
		background: url(../../assets/images/footerIcon.png);
		bottom: 0px;
		right: 0px;
		background-size: cover;
		@media screen and (max-width: 991px) {
			width: 200px;
			background-repeat: no-repeat;
			background-size: contain;
		}
	}
	@include small_medium {
		padding-top: rem(20px);
	}
	.row {
		padding-bottom: rem(50px);
		div {
			@media (min-width: 992px) {
				padding: 0;
			}
			@media screen and (max-width: 991px) {
				text-align: center;
				ul {
					@include flex(center, center);
					flex-direction: column;
					@media screen and (max-width: 575px) {
						margin-bottom: rem(20px);
					}
				}
			}

			&:first-child {
				background-image: url('../../assets/images/home/bg-footer.png');
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
				@include xSmall {
					background-image: none;
				}
				p {
					font-size: rem(16px);
					font-weight: 400;
					color: #404040;
					margin-bottom: 0;
					&:first-child {
						@include small_medium {
							margin-bottom: 9px;
						}
						margin-bottom: rem(33px);
						font-size: rem(18px);
						font-weight: 500;
						color: var(--secondary);
					}
				}
				span {
					display: block;
					// @include fonts($Gotham-Book, 15px);
					font-size: rem(16px);
					font-weight: 400;
					color: #404040;
					margin-bottom: rem(33px);
					margin-top: 12px;
					@include small_medium {
						margin-bottom: rem(25px);
					}
				}
				div {
					h6 {
						//   @include fonts($Gotham-bold, 14px);
						font-size: rem(14px);
						font-weight: 500;
						color: $thirdColor;
						margin-bottom: rem(20px);
						@include small_medium {
							margin-bottom: rem(10px);
						}
					}
					ul {
						padding: 0;
						display: flex;
						align-items: center;
						li {
							a {
								color: #404040;
							}
							// text-align:left;
							font-size: rem(16px);
							width: 35px;
							height: 35px;
							background-color: transparent;
							cursor: pointer;
							border-radius: 50%;
							@include prefixer(
								transition,
								all 0.5s ease-in-out,
								o moz wibket
							);
							&:not(:last-child) {
								margin-inline-end: rem(17px);
							}
							&:hover {
								background-color: $whiteColor;
								i {
									color: $mainColor;
								}
							}
						}
					}
				}
				@media screen and (max-width: 991px) {
					text-align: center;
					div {
						ul {
							justify-content: center;
							flex-direction: revert;
						}
					}
				}
			}
			&:not(:first-child) {
				h4 {
					// @include fonts($Gotham-bold, 18px);
					font-size: rem(18px);
					font-weight: 500;
					color: $thirdColor;
					margin-bottom: rem(25px);
				}
				ul {
					li {
						a {
							color: #404040;
							&:hover {
								color: $mainColor;
								//     @include fonts($Gotham-bold, 16px);
								font-weight: bold;
								font-size: rem(16px);
							}
						}
						width: fit-content;
						//   @include fonts($Gotham-Book, 16px);
						font-size: rem(16px);
						font-weight: 400;
						color: $thirdgray;
						margin-bottom: rem(15px);
						cursor: pointer;
						transition: 0.3s ease all;
					}
				}
			}
		}
	}
	> div {
		&:last-child {
			//  @include fonts($Gotham-Book, 16px);
			font-size: rem(16px);
			font-weight: 500;
			text-align: center;
			background-color: $thirdColor;
			padding: rem(25px) 0;
			color: $whiteColor;
		}
	}
}
</style>
