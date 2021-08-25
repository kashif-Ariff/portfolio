<template>
  <div class="projectIdentifier">
    <base-inner-banner :banner-detail="innerBannerDetail" />
    <div class="container">
      <project-identifier-content />
    </div>
  </div>
</template>

<script>
import ProjectIdentifierContent from "@/modules/project-identifier/ProjectIdentifierContent";
export default {
  components: { ProjectIdentifierContent },
  data() {
    return {
      innerBannerDetail: {
        image: "BOD.png",
        title: "Project Scale Definitions",
        subTitle:
          "According To The Executive Regulations Of Law No. 14 Of 2018 Amending Some Provisions Of Law No. 98 Of 2013 Regarding The National Fund For Small And Medium Enterprises Development. ",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
