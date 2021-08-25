<template>
	<div class="breadCrumb">
		<b-breadcrumb :items="items"></b-breadcrumb>
	</div>
</template>

<script>
export default {
	props: {
		items: Array,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.breadCrumb {
	margin-bottom: rem(70px);
	@media screen and (max-width: 1600px) {
		margin-bottom: rem(50px);
	}
	@media screen and (max-width: 991px) {
		margin-bottom: rem(35px);
	}
	/deep/ {
		.breadcrumb {
			background: transparent;
			&-item {
				color: var(--secondary);
				opacity: 1;
				font-size: rem(24px);
				padding-right: rem(55px);
				padding-left: rem(16px);
				position: relative;
				text-transform: capitalize;
				&:first-child {
					padding-left: 0;
				}
				@media screen and (max-width: 991px) {
					font-size: rem(22px);
					padding-right: rem(30px);
				}
				@media screen and (max-width: 767px) {
					font-size: rem(18px);
					padding-right: rem(20px);
				}
				@media screen and (max-width: 575px) {
					font-size: rem(16px);
					//   padding-right: rem(20px);
				}
				&:not(:first-child) {
					&::before {
						content: '';
						width: 7px;
						height: 7px;
						background: #019cde;
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						left: -10px;
						border-radius: 50%;
						@media screen and (max-width: 405px) {
							left: 0px;
						}
					}
				}
				a {
					color: var(--secondary);
					opacity: 0.6;
					font-size: rem(24px);
					transition: 0.3s ease all;
					text-transform: uppercase;
					@media screen and (max-width: 991px) {
						font-size: rem(22px);
						padding-right: rem(30px);
					}
					@media screen and (max-width: 767px) {
						font-size: rem(18px);
						padding-right: rem(20px);
					}
					@media screen and (max-width: 575px) {
						font-size: rem(16px);
						//   padding-right: rem(20px);
					}
					&:hover {
						opacity: 1;
					}
				}
			}
		}
	}
}
</style>
