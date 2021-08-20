<template>
	<div class="table">
		<div class="table__head">
			<div class="table__row">
				<div class="table__row--cell">Title</div>
				<div class="table__row--cell" data-width="14">Size</div>
				<div
					class="table__row--cell"
					data-width="19"
					data-width-lg="22"
				>
					Download
				</div>
			</div>
		</div>
		<div class="table__body">
			<div class="table__row" v-for="text in documents" :key="text.index">
				<div class="table__row--cell" data-label="Title">
					{{ text.title }}
				</div>
				<div class="table__row--cell" data-width="14" data-label="Size">
					{{ text.size }}
				</div>
				<div
					class="table__row--cell"
					data-width="19"
					data-label="Download"
					data-width-lg="22"
				>
					<a href="#" class="btn btn-file" :class="text.file">
						<div class="icon">
							<span>
								<base-svg-icon
									:icon-id="
										text.file == 'word'
											? 'word'
											: text.file == 'excel'
											? 'excel'
											: text.file == 'pdf'
											? 'pdf'
											: text.file == 'image'
											? 'image'
											: text.file == 'video'
											? 'video'
											: 'word'
									"
									:icon-viewbox="
										text.file == 'word'
											? '0 0 18 24'
											: text.file == 'excel'
											? '0 0 18 24'
											: text.file == 'pdf'
											? '0 0 18 24'
											: text.file == 'image'
											? '0 0 14.078 18.771'
											: text.file == 'video'
											? '0 0 14.078 18.771'
											: '0 0 18 24'
									"
								></base-svg-icon>
							</span>
							{{ text.download }}
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: { ariaLabel: String, documents: Array },
};
</script>

<style lang="scss" scoped></style>
