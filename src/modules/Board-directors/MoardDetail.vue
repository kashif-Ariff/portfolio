<template>
  <div class="boardDirector">
    <boardOfDirectors :members="this.bod.members" class="mt-md" />
  </div>
</template>

<script>
import boardOfDirectors from "./Members.vue";
import bod from "./data/bod";
export default {
  components: { boardOfDirectors },
  data() {
    return {
      bod: bod,
    };
  },
  created() {
    this.$i18n.locale == "en"
      ? (this.bod = this.bod.en)
      : (this.bod = this.bod.ar);
  },
};
</script>

<style lang="scss" scoped>
</style>