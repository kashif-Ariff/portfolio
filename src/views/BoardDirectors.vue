<template>
  <div class="boardDirector">
    <base-inner-banner :banner-detail="innerBannerDetail" />
    <div class="container">
      <base-bread-crumb :items="items"></base-bread-crumb>
      <div class="boardDirector">
        <boardOfDirectors :members="this.bod.members" class="mt-md" />
      </div>
    </div>
  </div>
</template>

<script>
import boardOfDirectors from "@/modules/Board-directors/Members.vue";
import bod from "@/modules/Board-directors/data/bod";
export default {
  components: { boardOfDirectors },
  data() {
    return {
      bod: bod,
      innerBannerDetail: {
        image: "BOD.png",
        title: "Board of directors",
      },
      items: [
        {
          text: "about the national fund",
          href: "#",
        },
        {
          text: "Board of Directors",
          active: true,
        },
      ],
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
.boardDirector {
  position: relative;
  padding-bottom: rem(80px);
}
</style>