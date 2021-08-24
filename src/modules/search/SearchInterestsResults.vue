<template>
	<div class="searchInterests">
		<ul class="searchInterests__list">
			<li class="searchInterests__list--result">
				<a href="#">Lorem ipsum </a>
			</li>
			<li class="searchInterests__list--result">
				<a href="#">Lorem ipsum </a>
			</li>
			<li class="searchInterests__list--result">
				<a href="#">Lorem ipsum </a>
			</li>
			<li class="searchInterests__list--result">
				<a href="#">Lorem ipsum </a>
			</li>
			<li class="searchInterests__list--result">
				<a href="#">Lorem ipsum </a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.searchInterests {
	&__list {
		&--result {
			display: inline-block;
			margin-top: rem(30px);
			margin-bottom: rem(30px);
			@media screen and (max-width: 1199px) {
				margin-top: rem(15px);
				margin-bottom: rem(15px);
			}
			@media screen and (max-width: 991px) {
				margin-top: rem(10px);
				margin-bottom: rem(10px);
			}

			a {
				padding: rem(10px) rem(19px);
				background: #fff;
				color: var(--secondary);
				display: inline-block;
				position: relative;
				transition: 0.4s ease all;
				font-weight: 400;
				font-size: rem(18px);
				outline: none;
				outline: none;
				text-transform: capitalize;
				border-radius: 25px;
				border: 2px solid #dadfe2;
				box-shadow: 0px 1px 20px -3px rgba($color: black, $alpha: 0.26);
				&::before {
					content: '';
					position: absolute;
					width: 115%;
					height: 140%;
					border: 2px solid transparent;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
				&:focus {
					outline: none;
					&::before {
						border: 3px dashed var(--primary);
					}
				}
				&:hover {
					background: var(--secondary);
					color: #fff;
					opacity: 1;
				}
			}
			&:not(:last-child) {
				margin-right: rem(18px);
			}
		}
	}
}
</style>
