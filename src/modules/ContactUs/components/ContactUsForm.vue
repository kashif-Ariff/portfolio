<template>
	<div class="contactForm">
		<div class="contactForm__note d-flex align-items-center">
			<span class="icon">
				<base-svg-icon
					icon-id="agent"
					icon-viewbox="0 0 29.531 28.658"
				></base-svg-icon>
			</span>
			We’re more than happy to help. Give us a call or just drop a
			message.
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						placeholder="First Name"
					/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						placeholder="Last Name"
					/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						placeholder="Phone No."
					/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						placeholder="Email"
					/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<vue-select
						:options="input__options"
						v-model="selected_item"
						aria-label="content category"
						tabIndex="0"
					></vue-select>
				</div>
				<div class="mt-30 md-none">
					<div class="form-group">
						<vue-recaptcha
							sitekey="6LdzWSkUAAAAAJQZfr1nvUshWLG7-2LY8BdQAWIq"
						></vue-recaptcha>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<textarea
						class="form-control"
						placeholder="Message"
					></textarea>
				</div>
			</div>
			<div class="col-md-6 d-none md-block">
				<div class="form-group">
					<vue-recaptcha
						sitekey="6LdzWSkUAAAAAJQZfr1nvUshWLG7-2LY8BdQAWIq"
					></vue-recaptcha>
				</div>
			</div>
		</div>
		<div class="button-row justify-content-end">
			<button class="btn btn-primary">
				Send <i class="fa fa-angle-right ml-10"></i>
			</button>
		</div>
	</div>
</template>

<script>
const selected_item = {
	label: 'Content Category',
};
import VueRecaptcha from 'vue-recaptcha';
export default {
	components: {
		VueRecaptcha,
	},
	data() {
		return {
			selected_item,
			input__options: [
				{ code: null, label: 'All' },
				{ code: 'a', label: 'This is First option' },
				{ code: 'b', label: 'Selected Option' },
				{ code: 'c', label: 'Third Option' },
			],
		};
	},
};
</script>
<style lang="scss" scoped>
.contactForm {
	margin-top: rem(50px);
	&__note {
		margin: rem(60px) 0;
		font-size: rem(22px);
		font-weight: 400;
		color: var(--secondary);
		.icon {
			display: flex;
			align-items: center;

			/deep/ {
				svg {
					width: 25px;
					height: 25px;
					margin-right: 15px;
					color: var(--secondary);
				}
			}
		}
	}
	.form-group {
		margin-bottom: rem(50px);
		textarea.form-control {
			@media screen and (max-width: 991px) {
				height: 12.5rem !important;
			}
			@media screen and (max-width: 767px) {
				height: 7.5rem !important;
			}
		}
	}
	.button-row {
		i {
			margin-left: 10px;
			transition: 0.5s ease all;
		}
		&:hover {
			i {
				transform: translateX(8px);
			}
		}
	}
	@media screen and (max-width: 767px) {
		.md-none {
			display: none !important;
		}
		.md-block {
			display: block !important;
		}
	}
	@media screen and (max-width: 767px) {
		.button-row {
			justify-content: center !important;
		}
	}
}
</style>
