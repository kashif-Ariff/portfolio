<template>
	<div>
		<div
			class="informationCard card"
			v-for="card in cardData"
			:key="card.index"
		>
			<div
				class="card-body grid"
				data-grid-item-gap="30"
				data-grid-item-width="1/3"
			>
				<div class="informationCard__info">
					<div class="informationCard__info--image">
						<img
							:src="require(`@/assets/images/logo/${card.logo}`)"
							alt=""
							class="img-fluid"
						/>
					</div>
					<div class="informationCard__info--title">
						{{ card.title }}
					</div>
					<div class="informationCard__info--subtitle">
						<div class="icon">
							<img
								:src="
									require(`@/assets/images/icons/${card.icon}`)
								"
								alt=""
								class="img-fluid"
							/>
						</div>
						<span>
							{{ card.subTitle }}
						</span>
					</div>
				</div>
				<div class="informationCard__detail">
					<p>{{ card.content }}</p>
				</div>
				<div class="informationCard__link">
					<a href="#" class="btn btn-secondary">Explore Content</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Information-card',
	data() {
		return {
			cardData: [
				{
					index: 0,
					logo: 'logoipsum.png',
					title: 'Logo Ipsum Technicals',
					icon: 'satalite.png',
					subTitle: 'Technology & Equipment',
					content:
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel.',
				},
				{
					index: 1,
					logo: 'logoipsum.png',
					title: 'Logo Ipsum Technicals',
					icon: 'satalite.png',
					subTitle: 'Technology & Equipment',
					content:
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel.',
				},
				{
					index: 2,
					logo: 'logoipsum.png',
					title: 'Logo Ipsum Technicals',
					icon: 'satalite.png',
					subTitle: 'Technology & Equipment',
					content:
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel.',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.informationCard {
	margin-bottom: rem(40px);
	border-radius: 21px;
	.card-body {
		padding: rem(55px) rem(35px) rem(50px) rem(35px);
		// @media screen and (max-width:991px) {
		//     padding: rem(35px) rem(20px);
		// }
		&.grid {
			grid-template-columns: 300px 1fr 241px;
			// align-items: center;
			@media screen and (max-width: 1199px) {
				grid-gap: 20px;
				grid-template-columns: 250px 1fr 200px;
			}
			@media screen and (max-width: 991px) {
				grid-template-columns: 190px 1fr 160px;
				grid-gap: 15px;
			}
			@media screen and (max-width: 767px) {
				grid-template-columns: none;
				grid-template-rows: 1fr 90px 50px;
				grid-gap: 15px;
				padding: rem(22px);
			}
		}
	}
	&__info {
		position: relative;
		&::before {
			content: '';
			position: absolute;
			width: 1px;
			height: 170px;
			background: #a6b3bb;
			top: 50%;
			transform: translateY(-50%);
			right: 0;
			@media screen and (max-width: 1199px) {
				height: 150px;
			}
			@media screen and (max-width: 991px) {
				height: 130px;
			}
			@media screen and (max-width: 767px) {
				height: 1px;
				width: 100%;
			}
		}
		// border-right: 1px solid #A6B3BB;
		&--image {
			@media screen and (max-width: 1199px) {
				max-width: 215px;
			}
			@media screen and (max-width: 1199px) {
				max-width: 170px;
			}
		}
		&--title {
			color: var(--secondary);
			font-size: rem(16px);
			font-weight: 400;
			margin: rem(25px) 0 rem(15px) 0;
			line-height: 1.5;
			@media screen and (max-width: 767px) {
				margin: rem(35px) 0 rem(20px) 0;
			}
		}
		&--subtitle {
			display: flex;
			align-items: center;

			.icon {
				margin-right: rem(10px);
			}
			span {
				font-size: rem(12px);
				font-weight: 400;
				color: #647a88;
			}
		}
	}
	&__detail {
		position: relative;
		padding: 0 rem(55px) 0 0;
		@media screen and (max-width: 1600px) {
			padding-right: rem(35px);
		}
		&::before {
			content: '';
			position: absolute;
			width: 1px;
			height: 170px;
			background: #a6b3bb;
			top: 50%;
			transform: translateY(-50%);
			right: 0;
			@media screen and (max-width: 1199px) {
				height: 150px;
			}
			@media screen and (max-width: 991px) {
				height: 130px;
			}
			@media screen and (max-width: 767px) {
				display: none;
			}
		}
		@media screen and (max-width: 1199px) {
			padding: 0 rem(15px) 0 0;
		}
		p {
			font-size: rem(16px);
			font-weight: 300;
			margin: 0;
			@include truncate(5);
			line-height: 1.6 !important;
		}
	}
	&__link {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		.btn {
			padding-right: rem(20px);
		}
		@media screen and (max-width: 767px) {
			justify-content: center;
			align-items: flex-start;
		}
	}
}
</style>
>
