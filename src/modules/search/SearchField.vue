<template>
	<div class="search-field">
		<form role="search">
			<fieldset>
				<legend class="visuallyhidden">&nbsp;</legend>
				<div class="FormField">
					<div class="FormField__input">
						<input
							type="text"
							class="form-control"
							aria-label=""
							placeholder="Board Members.."
						/>
					</div>
					<div class="FormField__button">
						<button class="btn btn-primary">
							<i>Submit</i>
							<span
								><base-svg-icon
									icon-id="form-search-icon"
									con-viewbox="0 0 22.072 23"
								></base-svg-icon
							></span>
						</button>
					</div>
				</div>
			</fieldset>
		</form>
		<span class="search__results"> About 5 results (0.49 seconds) </span>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search-field {
	margin-top: rem(10px);
	.visuallyhidden {
		width: 0;
		height: 0;
	}
	.FormField {
		display: flex;
		align-items: center;
		&__input {
			width: 82%;
			@media screen and (max-width: 1200px) {
				width: auto;
				flex: 1;
			}
			input {
				width: 100%;
				font-size: rem(24px);
				height: 76px;
				border-radius: 40px;
				color: var(--secondary) !important;
				padding-left: rem(30px);
				padding-right: rem(30px);
				border:1px solid #B8C3C9;
				&::placeholder {
					color: var(--secondary);
				}
				@media screen and (max-width: 991px) {
					font-size: rem(22px);
					height: 65px;
					&::placeholder {
						font-size: rem(22px);
					}
				}
				@media screen and (max-width: 767px) {
					font-size: rem(20px);
					height: 50px;
					&::placeholder {
						font-size: rem(20px);
					}
				}
			}
		}
		&__button {
			i {
				font-style: normal;
				@media screen and (max-width: 575px) {
					display: none;
				}
			}
			width: 18%;
			@media screen and (max-width: 1200px) {
				width: auto;
				flex: 0 0 rem(195px);
			}
			@media screen and (max-width: 767px) {
				flex: 0 0 rem(170px);
			}
			@media screen and (max-width: 575px) {
				flex: 0 0 62px;
			}
			button {
				padding: rem(12.5px) rem(21.5px);
				margin-left: rem(30px);
				display: flex;
				position: relative;
				align-items: center;
				@media screen and (max-width: 575px) {
					margin-left: rem(15px);
				}

				span {
					margin-left: rem(15px);
					/deep/ svg {
						width: 22px;
						height: 22px;
					}
					@media screen and (max-width: 575px) {
						margin-left: 0;
						align-items: center;
						justify-content: center;
					}
				}
				@media screen and (max-width: 767px) {
					padding: rem(12px);
				}
			}
		}
	}
}
.search__results {
	display: inline-block;
	font-size: rem(20px);
	margin-top: rem(25px);
	font-weight: 400;
	color: var(--secondary);
	text-transform: capitalize;
	@media screen and (max-width: 575px) {
		text-align: center;
		display: block;
	}
}
</style>
