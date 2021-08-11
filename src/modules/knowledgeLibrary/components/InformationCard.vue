<template>
  <div class="informationCard">
      <div class="informationCard__info">
            <div class="informationCard__info--image">
                <img src="@/assets/images/logo/logoipsum.png" alt="" class="img-fluid">
            </div>
            <div class="informationCard__info--title">
                Logo Ipsum Technicals
            </div>
            <div class="informationCard__info--subtitle">
                    <div class="icon">
                         <img src="@/assets/images/icons/satalite.png" alt="" class="img-fluid">
                    </div>
                <span>
                    Technology & Equipment
                </span>
            </div>
      </div>
      
  </div>
</template>

<script>
export default {
    name : 'Information-card'
}
</script>

<style lang="scss" scoped>
.informationCard{
    padding: rem(50px) rem(30px);
    border: 1px solid #e6eaec;
    border-radius: 25px;
    box-shadow: 0px 0px 17px -4px rgba($color: black, $alpha: 0.3);
    &__info{
        &--title{
            color: #224156;
            font-size: rem(16px);
            font-weight: 500;
            margin: rem(30px) 0;
        }
        &--subtitle{
            display: flex;
            align-items: center;
                .icon{
                    margin-right: rem(10px);
                }
        }
    }
}
</style>>
