<template>
	<b-tabs pills>
		<b-tab title="description" class="description" active>
			<div class="description__detail">
				<base-smooth-scrollbar height="230px">
					<h3 class="description__title" tabIndex="0">
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit.
					</h3>
					<div tabIndex="0">
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit. Aenean commodo ligula eget dolor. Aenean
							massa. Cum sociis natoque penatibus et magnis dis
							parturient montes, nascetur ridiculus mus. Donec
							quam felis, ultricies nec, pellentesque eu, pretium
							quis, sem. Nulla consequat massa quis enim. Donec
							pede justo, fringilla vel, aliquet nec, vulputate
							eget, arcu. In enim justo, rhoncus ut, imperdiet a,
							venenatis vitae, justo. Nullam
						</p>
						<p>
							dictum felis eu pede mollis pretium. Integer
							tincidunt. Cras dapibus. Vivamus elementum semper
							nisi. Aenean vulputate eleifend tellus. Aenean leo
							ligula, porttitor eu, consequat vitae, eleifend ac,
							enim. Aliquam lorem ante, dapibus in, viverra quis,
							feugiat a, tellus. Phasellus viverra nulla ut metus
							varius laoreet. Quisque rutrum. Aenean imperdiet.
						</p>
					</div>
				</base-smooth-scrollbar>
				<div class="button-row">
					<router-link to="" class="btn btn-primary"
						>Explore More</router-link
					>
				</div>
			</div>
		</b-tab>
		<b-tab title="Links">
			<div class="links">
				<!-- <base-smooth-scrollbar> -->
				<div class="card">
					<base-document :documents="documents"></base-document>
				</div>
				<!-- </base-smooth-scrollbar> -->
			</div>
		</b-tab>
	</b-tabs>
</template>

<script>
export default {
	components: {
		BaseDocument: () => import('@/common/components/base/BaseDocument.vue'),
	},
	data() {
		return {
			documents: [
				{
					index: 0,
					title: 'Profile of The National Fund	',
					size: '200 KB',
					file: 'pdf',
					download: 'Download',
				},
				{
					index: 1,
					title: 'Profile of The National Fund	',
					size: '200 KB',
					file: 'word',
					download: 'Download',
				},
				{
					index: 2,
					title: 'Profile of The National Fund	',
					size: '200 KB',
					file: 'excel',
					download: 'Download',
				},
				{
					index: 3,
					title: 'Profile of The National Fund	',
					size: '200 KB',
					file: 'pdf',
					download: 'Download',
				},
				{
					index: 4,
					title: 'Profile of The National Fund	',
					size: '200 KB',
					file: 'word',
					download: 'Download',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.description {
	&__detail {
		// /deep/.scrollArea {
		//     --barcolor: #6e337a !important;
		//     --trackcolor: #adadad !important;
		//     --h: 235px;
		// }
		.scrollArea__contents {
			padding-top: 5px;
			padding-left: 5px;
			h3 {
				outline-offset: 2px;
			}
		}
	}
	&__title {
		font-size: rem(21px);
		color: var(--secondary);
		font-weight: 400;
		margin-bottom: rem(15px);
	}
	p {
		font-weight: 400;
		font-size: rem(21px);
		margin-bottom: rem(30px);
	}
}
.links {
	/deep/ .scrollArea {
		--barcolor: #6e337a;
		--trackcolor: #adadad;
		--h: 185px;
	}
	.scrollArea__contents {
		padding-right: rem(45px);
		padding-top: 2px;
		padding-left: 2px;
	}
	.card {
		padding: rem(30px) rem(50px);
		@media screen and (max-width: 991px) {
			box-shadow: none;
			padding: 0;
			border: 0;
		}
	}
}
[lang='ar'] {
	.description {
		&__detail {
			.scrollArea__contents {
				padding-right: 5px;
				padding-left: 0;
			}
			/deep/.scrollArea__contents {
				padding-right: 5px;
				padding-left: 0;
			}
		}
	}
	.links {
		.scrollArea__contents {
			padding-left: rem(45px);
			padding-right: 2px;
		}
		/deep/.scrollArea__contents {
			padding-left: rem(45px);
			padding-right: 2px;
		}
		.document__info {
			.icon {
				span {
					margin-left: 10px;
					margin-right: 0;
				}
			}
		}
	}
}
</style>
