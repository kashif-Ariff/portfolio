<template>
  <div class="filters">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-12">
            <vue-select
                :options="input__options"
                v-model="selected_item"
                aria-label="content category"
                tabIndex="0"
            ></vue-select>
        </div>
         <div class="col-xl-6 col-lg-7 col-md-12">
              <input
                  type="text"
                  class="form-control"
                  aria-label=""
                  placeholder="What are you searching for?"
              />
          </div>
          <div class="col-xl-2 col-lg-12 col-md-12">
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
          { code: 'a', label: 'This is First option' },
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
    input{
      border:3px solid transparent;
      @media screen and (max-width:991px) {
          margin-top: rem(30px);
          padding: rem(28px) rem(22px);
      }
    }
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
</style>>
