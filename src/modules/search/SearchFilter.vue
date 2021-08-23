<template>
	<div class="searchFilters">
		<ul class="searchFilters__list">
			<li>
				<label for="Category">Menu</label>
				<vue-select
					multiple
					:options="menu_options"
					v-model="selected_menu"
				></vue-select>
			</li>
			<li>
				<label for="Category">Category</label>
				<vue-select
					multiple
					:options="options_category"
					v-model="selected_catgory"
				/>
			</li>
			<li>
				<label for="s-category">Sub-Category</label>
				<vue-select
					multiple
					:options="options_sub"
					v-model="selected_sub"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
const menu = {
	label: 'All',
};
const category = {
	label: 'All',
};
const sub_category = {
	label: 'All',
};
export default {
	data() {
		return {
			menu_options: [
				{ code: 'all', label: 'All' },
				{ code: 'a', label: 'This is First option' },
				{ code: 'b', label: 'Selected Option' },
				{ code: 'c', label: 'Third Option' },
			],
			options_category: [
				{ code: null, label: 'All' },
				{ code: 'a', label: 'This is First option' },
				{ code: 'b', label: 'Selected Option' },
				{ code: 'c', label: 'Third Option' },
			],
			options_sub: [
				{ code: null, label: 'All' },
				{ code: 'a', label: 'This is First option' },
				{ code: 'b', label: 'Selected Option' },
				{ code: 'c', label: 'Search for Idea' },
			],
			selected_menu: menu,
			selected_catgory: category,
			selected_sub: sub_category,
		};
	},
};
</script>

<style lang="scss" scoped>
.searchFilters {
	width: 82%;
	@media screen and (max-width: 991px) {
		width: 100%;
		padding-bottom: rem(0px);
	}
	&__list {
		display: flex;
		list-style-type: none;
		margin-top: rem(40px);
		@media screen and (max-width: 991px) {
			flex-direction: column;
			margin-top: rem(30px);
		}
		li {
			width: calc(100% / 3);
			padding-right: rem(30px);
			position: relative;
			margin-bottom: 0;
			/deep/ {
				.vs__dropdown-toggle {
					border-bottom: 2px solid var(--secondary);
					border-radius: 0px;
					min-height: 65px;
					@media screen and (max-width: 1600px) {
						min-height: 55px;
					}
				}
			}
			@media screen and (max-width: 991px) {
				width: 100%;
				padding-right: rem(0px);
				padding-bottom: rem(32px);
			}
			&:not(:first-child) {
				padding-left: rem(30px);
				@media screen and (max-width: 991px) {
					padding-left: rem(0px);
				}
			}
			&:first-child {
				padding-right: rem(30px);
				@media screen and (max-width: 1200px) {
					padding-right: rem(30px);
				}
				@media screen and (max-width: 991px) {
					padding-right: rem(0px);
				}
			}
			&:last-child {
				@media screen and (max-width: 991px) {
					padding-bottom: rem(0px);
				}
			}
			label {
				font-size: rem(24px);
				color: var(--secondary);
			}
			&:not(:last-child) {
				&::before {
					content: '';
					position: absolute;
					width: 1px;
					height: 100%;
					right: 0;
					background: #bdc6cc;
					@media screen and (max-width: 991px) {
						content: unset;
					}
				}
			}
		}
	}
	/deep/ {
		.vs__selected {
			padding: rem(10px) rem(15px);
			background: var(--primary);
			border-radius: unset;
			font-size: rem(19.2px);
			font-weight: bold;
			padding-right: 30px;
			margin-bottom: 0;
			color: #fff;
			border: 0;
			margin-right: 10px;
			@media screen and (max-width: 1600px) {
				padding: rem(12px) rem(15px);
				padding-right: 30px;
			}

			.vs__deselect {
				color: #fff;
				font-size: rem(24px);
				border-radius: 0px;
				position: relative;
				&:after {
					content: '\D7';
					color: #fff;
					font-size: 24px;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					left: 5px;
				}
				svg {
					display: none;
				}
			}
		}
	}
}
[lang='ar'] {
	.searchFilters {
		&__list {
			li {
				padding-left: rem(30px);
				padding-right: 0;
				@media screen and (max-width: 991px) {
					padding-left: rem(0px);
				}
				&:not(:first-child) {
					padding-right: rem(30px);
					padding-right: rem(30px);
					@media screen and (max-width: 991px) {
						padding-right: rem(0px);
						padding-right: 0;
					}
				}
				&:first-child {
					padding-left: rem(30px);
					padding-right: 0;
					@media screen and (max-width: 1200px) {
						padding-left: rem(30px);
						padding-right: 0;
					}
					@media screen and (max-width: 991px) {
						padding-left: rem(0px);
						padding-right: 0;
					}
				}
				&:not(:last-child) {
					&::before {
						left: 0;
						right: auto;
					}
				}
			}
		}
		/deep/ {
			.vs__selected {
				padding-left: 30px;
				padding-right: 0.9375rem;
				margin-left: 10px;
				margin-right: 0;
				@media screen and (max-width: 1600px) {
					padding-left: 30px;
					padding-right: 0.9375rem;
				}

				.vs__deselect {
					&:after {
						right: 5px;
						left: auto;
					}
				}
			}
		}
	}
}
</style>
