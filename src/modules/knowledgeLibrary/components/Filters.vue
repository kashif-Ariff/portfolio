<template>
  <div class="filters">
      <h2>Information Sources</h2>
      <div class="row justify-content-center">
        <div class="col-md-3">
              <vue-select
                  :options="input__options"
                  v-model="selected_item"
                  aria-label="content category"
                  tabIndex="0"
              ></vue-select>
        </div>
         <div class="col-md-9">
         <div class="filters__search">
              <input
                  type="text"
                  class="form-control"
                  aria-label=""
                  placeholder="What are you searching for?"
              />
            <button class="btn btn-primary">
                  <base-svg-icon icon-id="search"></base-svg-icon>
                <span>Search</span>
            </button>
          </div>
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
  margin-bottom: rem(50px);
  h2{
    font-size: rem(35px);
    font-weight: 400;
    color: var(--secondary);
    text-align: center;
    margin-bottom: rem(70px);
  }
  /deep/ {
      .v-select {
          .vs__actions {
              .vs__clear{
                display: none;
              }
          }
      }
    }
    &__search{
      display: flex;
      justify-content: space-between;
      button{
        display: flex;
        align-items: center;
        margin-left: rem(30px);
        padding: rem(22px) rem(35px);
        /deep/ svg{
          width: 20px;
          height: 20px;
        }
        span{
          margin-left: rem(10px);
          font-size: rem(24px);
        }
      }
    }
}
</style>>
