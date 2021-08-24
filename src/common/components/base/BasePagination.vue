<template>
	<div class="pagination" :aria-label="ariaLabel" role="region">
		<div class="show_items">
			<label class="items__show">show items</label>
			<div class="form-group">
				<vue-select
					:options="menu_options"
					v-model="selected_menu"
				></vue-select>
			</div>
		</div>
		<div class="overflow-auto">
			<b-pagination-nav
				:link-gen="linkGen"
				:number-of-pages="30"
				align="center"
				use-router
			></b-pagination-nav>
		</div>
		<div class="gotoPage">
			<label class="items__show">go to page</label>
			<div class="form-group">
				<input
					type="text"
					class="form-control"
					role="search"
					id="goBtn"
				/>
				<button class="btn btn-primary" aria-describedby="goBtn">
					Go
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		ariaLabel: String,
	},
	data() {
		return {
			selected_menu: '10',
			menu_options: [
				{ code: '100', label: '100' },
				{ code: '200', label: '200' },
				{ code: '300', label: '300' },
				{ code: '400', label: '400' },
			],
		};
	},
	methods: {
		linkGen(pageNum) {
			return pageNum === 1 ? '?' : `?page=${pageNum}`;
		},
	},
};
</script>

<style lang="scss" scoped>
.overflow-auto {
	width: 100%;
}
.pagination {
	display: flex;
	justify-content: space-between;
	padding: rem(40px) 0;
	@media screen and (max-width: 767px) {
		padding: rem(20px) 0;
	}
	.show_items,
	.gotoPage {
		display: flex;
		align-items: center;
		flex: 0 0 330px;
		max-width: 330px;
		label {
			text-transform: capitalize;
			color: var(--secondary);
			margin-bottom: 0px;
			font-size: rem(18px);
			font-weight: 400;
			margin-right: rem(30px);
			@media screen and (max-width: 991px) {
				font-size: rem(16px);
			}
			@media screen and (max-width: 430px) {
				margin-bottom: 10px;
			}
		}
		.form-group {
			margin-bottom: unset;
			display: flex;
			.btn-primary {
				background-color: #019cde;
				font-size: rem(24px);
				font-weight: 400;
				text-transform: capitalize;
				padding: 0 rem(25px);
				border-top-right-radius: 20px;
				border-bottom-right-radius: 20px;
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				transition: 0.5s all;
				@media screen and (max-width: 991px) {
					font-size: rem(18px);
					padding: 0 rem(15px);
				}
				&:hover {
					background-color: var(--secondary);
				}
			}
			/deep/ {
				.v-select {
					height: auto;
					font-size: rem(22px);
					color: #019cde !important;
					background: #fff;
					// padding: rem(8px) rem(22px);
					width: 87px;
					padding: 0px 5px;
					outline: none;
					border: 2px solid #019cde;
					border-radius: 20px;
					font-weight: 600;
					box-shadow: unset;
					@media screen and (max-width: 991px) {
						font-size: rem(18px);
						height: 40px;
					}
					button {
						div {
							color: var(--primary) !important;
							font-weight: 700;
						}
					}
					.v-dropdown-container {
						margin: 0.3rem -5px 0px;
						ul {
							padding: unset;
							margin: 0px !important;
							li {
								margin: 0px !important;
								&:focus-within,
								&:focus {
									outline-color: var(--primary);
									outline-offset: 0;
								}
							}
							li.selected {
								background: var(--primary) !important;
								color: #fff !important;
								&:focus-within {
									outline-color: var(--primary);
									outline-offset: 0;
								}
							}
						}
					}
					.vs__dropdown-toggle {
						padding: 0;
						min-height: 45px;
						line-height: 45px;
						@media screen and (max-width: 991px) {
							min-height: 40px;
							line-height: 40px;
						}
					}
					.vs__selected-options {
						.vs__selected {
							opacity: 1;
							color: #019cde;
							font-weight: 400;
							position: unset;
							font-size: rem(18px);
							line-height: normal;
							padding-left: 6px;
							@media screen and (max-width: 991px) {
								margin-top: rem(-6px);
							}
							@media screen and (max-width: 430px) {
								padding-left: rem(16px);
							}
						}
						input.vs__search {
							font-size: 0;
							margin: 0;
							padding: 0;
						}
					}
					.vs__actions {
						position: relative;
						button.vs__clear {
							display: none;
						}
						&:after {
							content: '';
							position: absolute;
							background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='12.804' height='7.572' viewBox='0 0 12.804 7.572'%3E%3Cpath id='Path_42452' data-name='Path 42452' d='M766,5530.358l5.158,5.158,4.818-5.158' transform='translate(-764.586 -5528.944)' fill='none' stroke='%23019cde' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/svg%3E%0A");
							background-repeat: no-repeat !important;
							width: 16px;
							height: 16px;
							top: 15px;
							background-size: 100% 100%;
							left: -22px;
							@media screen and (max-width: 991px) {
								top: 10px;
							}
						}
						.vs__open-indicator {
							border: 0;
						}
					}
					.vs__dropdown-menu {
						min-width: unset !important;
						.vs__dropdown-option {
							padding: rem(10px);
						}
					}
					.vs__dropdown-option--highlight {
						background-image: unset !important;
					}
				}
			}
		}
		.form-control {
			border: 2px solid #019cde;
			border-top-left-radius: 20px;
			border-bottom-left-radius: 20px;
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
			width: 105px;
			font-weight: 400;
			font-size: rem(20px);
			color: #404040 !important;
			padding: rem(22px);
			box-shadow: unset;
		}
		@media screen and (max-width: 1600px) {
			flex: 0 0 290px;
			max-width: 290px;
			label {
				margin-right: rem(10px);
			}
			.form-control {
				width: 85px;
			}
			button {
				padding-left: rem(15px) !important;
				padding-right: rem(15px) !important;
			}
		}
		@media screen and (max-width: 991px) {
			flex: 0 0 210px;
			max-width: 210px;
			.form-control {
				width: 55px;
			}
			&__show {
				font-size: rem(18px);
				margin-right: rem(10px);
			}
		}
		@media screen and (max-width: 767px) {
			.form-control {
				height: 38px;
				padding: rem(18px);
			}
			button {
				height: 38px;
			}
		}
		@media screen and (max-width: 500px) {
			flex: 0 0 180px;
			max-width: 180px;
			label {
				margin-right: 5px;
				font-size: rem(15px);
			}
			.form-group {
				/deep/ {
					.v-select {
						padding: 0px;
						@media screen and (max-width: 430px) {
							width: 100%;
						}
						.vs__actions {
							padding-right: 12px;
						}
					}
				}
			}
		}
		@media screen and (max-width: 430px) {
			max-width: 100%;
			flex: unset;
			margin-bottom: 20px;

			label {
				margin-right: 5px;
				font-size: rem(14px);
			}
		}
	}
	.gotoPage {
		@media screen and (max-width: 991px) {
			justify-content: flex-end;
		}
	}
	.show_items {
		@media screen and (max-width: 767px) {
			order: 2;
		}
		@media screen and (max-width: 430px) {
			display: unset;
			width: 100%;
			max-width: 100%;
			flex: none;
		}
	}
	.gotoPage {
		@media screen and (max-width: 767px) {
			order: 3;
		}
		@media screen and (max-width: 430px) {
			display: unset;
			width: 100%;
			.form-control {
				width: 100%;
			}
		}
	}
	@media screen and (max-width: 767px) {
		flex-wrap: wrap;
		.overflow-auto {
			order: 1;
			margin-bottom: rem(16px);
		}
	}
	/deep/ {
		.pagination {
			border: unset;
			padding: 5px 0;
			li.page-item {
				height: 32px;
				width: 32px;
				@include flex(center, center);
				margin-bottom: 0;
				.page-link {
					background: transparent;
					color: #82919c;
					font-weight: 400;
					font-size: rem(18px);
					padding: 0 5px;
					margin: 0px 0px;
					display: block;
					@include flex(center, center);
					height: 100%;
					width: 100%;
					@media screen and (max-width: 991px) {
						font-size: 16px;
					}

					&:active {
						box-shadow: unset !important;
						// border-color: var(--primary);
					}
					&.page-link {
						outline: none;
					}

					&:focus {
						// border-color: var(--primary);
						border: 3px dashed var(--primary);
						outline: none;
					}
				}
				span {
					background: transparent;
					//border: 1px solid !important;
					padding: 10px 15px;
					margin: 0px 6px;
				}

				&.active {
					a {
						color: #019cde;
						background: transparent;
						border-radius: 50%;
						border: 1px solid #019cde;
						font-weight: 700;
					}
				}
				&:not(:last-child) {
					margin-right: rem(12px);
				}
				@media screen and (max-width: 991px) {
					width: 25px;
					height: 25px;
				}
			}
		}
	}
}
</style>
