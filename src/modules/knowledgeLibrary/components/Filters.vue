<template>
  <div class="filters">
      <div class="filtersWrapper">
        <div class="filters__select">
            <vue-select
                :options="input__options"
                v-model="selected_item"
                aria-label="content category"
                tabIndex="0"
            ></vue-select>
        </div>
         <div class="filters__search">
              <input
                  type="text"
                  class="form-control"
                  aria-label=""
                  placeholder="What are you searching for?"
              />
          </div>
          <div class="filters__button">
              <button class="btn btn-primary">
                  <base-svg-icon icon-id="search"></base-svg-icon>
                  <span>Search</span>
              </button>
          </div>
      </div>
  </div>
</template>

<script>
const selected_item = {
    label: 'Content Category',
}
export default {
  name :'filters',
 data(){
   return{
      selected_item,
      input__options: [
          { code: null, label: 'All' },
          { code: 'a', label: 'content category' },
          { code: 'b', label: 'Selected Option' },
          { code: 'c', label: 'Third Option' },
      ],
   }
 }
}
</script>

<style lang="scss" scoped>
.filters{
    margin-bottom: rem(70px);
    padding-right: rem(30px);
    padding-left: rem(30px);
    @media screen and (max-width:1199px) {
      margin-bottom: rem(35px);
    }
    .filtersWrapper{
      display: flex;
      align-items:center
    }
    &__select{
      max-width:280px;
      flex:0 0 280px;
    }
    &__search{
      flex:1;
      margin:0 rem(30px);
      input{
        border:3px solid transparent;
        @media screen and (max-width:991px) {
            margin-top: rem(30px);
            padding: rem(28px) rem(22px);
        }
      }
    }
    &__button{
      max-width:170px;
      flex:0 0 170px;
      button{
        display: flex;
        align-items: center;
        @media screen and (max-width:1600px) {
          font-size: rem(24px);
          padding: rem(13px) rem(28px);
        }
        @media screen and (max-width:1199px) {
          margin: auto;
          margin-top: rem(35px);
          font-size: rem(22px);
          padding: rem(11px) rem(28px);
        }
        /deep/ svg{
          width: 20px;
          height: 20px;
        }
        span{
          margin-left: rem(8px);
          font-size: rem(24px);
        }
      }
    }
}
</style>>
