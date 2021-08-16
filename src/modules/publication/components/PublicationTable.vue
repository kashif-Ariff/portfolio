<template>
<div class="card">
    <div class="table">
        <div class="table__head">
            <div class="table__row">
                <div class="table__row--cell" data-width="50">Title</div>
                <div class="table__row--cell" data-width="14">Size</div>
                <div class="table__row--cell" data-width="14">Download</div>
            </div>
        </div>
        <div class="table__body">
            <div class="table__row" v-for="text in documents" :key="text.index">
                <div class="table__row--cell" data-width="50">{{text.title}}</div>
                <div class="table__row--cell" data-width="14">{{text.size}}</div>
                <div class="table__row--cell" data-width="14">
                  <a href="#" class=" btn" :class="text.file">
                        <div class="icon">
                            <span>
                                <base-svg-icon
                                    :icon-id="text.file"
                                    icon-viewbox="0 0 18 24"
                                ></base-svg-icon>
                            </span>
                            Download
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
  data(){
    return{
      documents:[
        {
          index:0,
          title:'Profile of The National Fund	',
          size:'200 KB',
          file:'pdf'
        },
        {
          index:1,
          title:'Profile of The National Fund	',
          size:'200 KB',
          file:'word'
        },
        {
          index:2,
          title:'Profile of The National Fund	',
          size:'200 KB',
          file:'excel'
        },
        {
          index:3,
          title:'Profile of The National Fund	',
          size:'200 KB',
          file:'pdf'
        },
        {
          index:4,
          title:'Profile of The National Fund	',
          size:'200 KB',
          file:'word'
        }
      ]
       
    }
  }

}
</script>

<style lang="scss" scoped>
.card{
  padding: rem(30px) rem(40px);
}
.table {
	$self: &;
	display: table;
	width: 100%;
	margin: 0;
	&__row {
		display: table;
		width: 100%;
		table-layout: fixed;
		border-bottom: 1px solid #fff;
		position: relative;
		background-color: transparent;
		@media screen and (max-width: 991px) {
			display: block;
			border: solid 2px #eaeaea;
			border-right: 0;
			border-left: 0;
			border-bottom: 0px;
			margin-bottom: 0;
		}
		&:last-child {
			border: 0;
		}
		@media screen and (max-width: 991px) {
			&:last-child {
				margin-bottom: 0px;
			}
		}
		&--cell {
			display: table-cell;
			padding: rem(20px) rem(16px);
			font-size: rem(16px);
			color: #323232;
			font-weight: 600;
			vertical-align: middle;
			text-align: center;
			background-color: transparent;
			text-align: left;
			line-height: 1.2;
			&.sm {
				font-size: rem(14px);
			}
			@media screen and (max-width: 991px) {
				display: flex !important;
				align-items: center;
				width: 100% !important;
				padding-left: 0px !important;
				border-bottom: solid 2px #dee2e6 !important;
				padding: 0 !important;
				position: relative;
				&:before {
					color: #323232;
					padding-left: 6px;
					text-align: left;
					font-weight: 700;
					font-size: rem(15px);
					content: attr(data-label);
					display: table-cell;
					width: 35%;
					min-width: 35%;
					border-right: solid 2px #dee2e6;
					vertical-align: middle;
					padding: rem(25px) rem(10px);
					margin-right: rem(15px);
					line-height: 1.3;
					//text-transform: uppercase;
				}
				&:nth-last-child(2) {
					padding: 0;
				}
			}
		}
		@media screen and (min-width: 1025px) {
			&:hover {
				.action-btns svg {
					fill: #a8372d;
				}
			}
		}
	}
	&__head {
		background: transparent;
		border-bottom: 1px solid #fff;
		#{ $self }__row {
			// padding: rem(50px) 0 rem(20px) 0;
			box-shadow: none;
			&--cell {
				color: #6d8290;
				font-size: rem(20px);
				font-weight: 400;
				padding-right: rem(16px);
				padding-left: rem(16px);
				text-transform: capitalize;
				text-align: left;
				&:first-child {
					padding-left: rem(18px);
				}
			}
		}
		@media screen and (max-width: 991px) {
			display: none;
		}
	}
	&__body {
		#{ $self }__row {
        width: 100%;
        background: #fff;
        padding: rem(20px) rem(30px);
        text-decoration: none;
        box-shadow: 0 0 13px 0px rgba($color: #000000, $alpha: 0.2);
        border: 2px solid transparent;
        transition: 0.4s ease all;
        margin-bottom: 1.875rem;
        outline-offset: 0;
        outline-width: 2px;
        border-radius: 85px;
			@media screen and (min-width: 1025px) {
			}
      &--cell {
        font-weight: 400;
        color: var(--secondary);
        font-size: rem(21px);
        padding: 0;
        .icon {
            font-size: rem(20px);
            color: #fff;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
            @media screen and (max-width:767px) {
                font-size: rem(18px);
            }
            span {
                color: #fff;
                width: 22px;
                height: 20px;
                display: inline-block;
                margin-right: 10px;
                /deep/{
                    div,svg{
                        width: 100%;
                        height: 100%;
                    }
                }
                @media screen and (max-width:767px) {
                    width: 20px;
                    height: 18px;
                }
            }
        }
      }
		}
	}
	@media screen and (max-width: 991px) {
		border: 0;
	}
}
</style>