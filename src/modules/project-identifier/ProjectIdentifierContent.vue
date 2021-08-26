<template>
  <div class="projectIdentifier">
    <div class="row">
      <div class="col-md-4">
        <div class="projectIdentifier__side">
          <div class="rangeCard">
            <div class="title">
              <span class="icon"
                ><base-svg-icon
                  icon-id="userIcon"
                  icon-viewbox="0 0 17.104 20.217"
                ></base-svg-icon></span
              >Employees
            </div>
            <span class="label">
              {{ Employees | numberWithComma }} Employees
            </span>
            <div class="slide">
              <vue-slider
                ref="slider"
                v-model="Employees"
                v-bind="optionsOne"
                @change="FilterProjects"
              ></vue-slider>
            </div>
          </div>
          <div class="rangeCard">
            <div class="title">
              <span class="icon"
                ><base-svg-icon
                  icon-id="assets"
                  icon-viewbox="0 0 18.412 18.412"
                ></base-svg-icon></span
              >Assets
            </div>
            <span class="label"> {{ Assets | numberWithComma }} KD </span>
            <div class="slide">
              <vue-slider
                ref="sliderTwo"
                v-model="Assets"
                v-bind="optionsTwo"
                @change="FilterProjects"
              ></vue-slider>
            </div>
          </div>
          <div class="rangeCard mb-0">
            <div class="title">
              <span class="icon"
                ><base-svg-icon
                  icon-id="revenue"
                  icon-viewbox="0 0 20.238 20.238"
                ></base-svg-icon></span
              >Revenue
            </div>
            <span class="label"> {{ Revenue | numberWithComma }} KD </span>
            <div class="slide">
              <vue-slider
                ref="slider"
                v-model="Revenue"
                v-bind="optionsThree"
                @change="FilterProjects"
              ></vue-slider>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="projectIdentifier__content">
          <div
            class="projects mb-10"
            v-for="project in projectData"
            :key="project.index"
          >
            <ProjectCard
              :Project="project"
              :data-Minemployees="project.employees.min"
              :data-Minassets="project.assets.min"
              :data-Minrevenue="project.revenue.min"
              :data-Maxemployees="project.employees.max"
              :data-Maxassets="project.assets.max"
              :data-Maxrevenue="project.revenue.max"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import ProjectCard from "./partials/ProjectCard";
export default {
  components: {
    VueSlider,
    ProjectCard,
  },
  data() {
    return {
      Employees: 5,
      optionsOne: {
        dotSize: 22,
        height: 3,
        direction: "ltr",
        data: null,
        dataLabel: "label",
        dataValue: "value",
        min: 5,
        max: 200,
        interval: 5,
      },
      Assets: 0,
      optionsTwo: {
        dotSize: 22,
        height: 3,
        direction: "ltr",
        data: null,
        dataLabel: "label",
        dataValue: "value",
        min: 0,
        max: 500000,
        interval: 5,
      },
      Revenue: 0,
      optionsThree: {
        dotSize: 22,
        height: 3,
        direction: "ltr",
        data: null,
        dataLabel: "label",
        dataValue: "value",
        min: 0,
        max: 800000,
        interval: 5,
      },
      projectData: [
        {
          index: 0,
          title: "Small Project",
          image: "Small.png",
          employees: {
            min: "5",
            max: "50",
          },
          assets: {
            min: 0,
            max: "249999",
          },
          revenue: {
            min: 0,
            max: "749999",
          },
        },
        {
          index: 1,
          title: "Medium Project",
          image: "Medium.png",
          employees: {
            min: "51",
            max: "150",
          },
          assets: {
            min: "250000",
            max: "500000",
          },
          revenue: {
            min: "750000",
            max: "1500000",
          },
        },
        // {
        //   index: 2,
        //   title: "Small Project",
        //   image: "Small.png",
        //   employees: {
        //     min: "6",
        //     max: "50",
        //   },
        //   assets: {
        //     min: 0,
        //     max: "249999",
        //   },
        //   revenue: {
        //     min: 0,
        //     max: "749999",
        //   },
        // },
        // {
        //   index: 3,
        //   title: "Medium Project",
        //   image: "Medium.png",
        //   employees: {
        //     min: "51",
        //     max: "150",
        //   },
        //   assets: {
        //     min: "250000",
        //     max: "500000",
        //   },
        //   revenue: {
        //     min: "750000",
        //     max: "1500000",
        //   },
        // },
      ],
    };
  },
  methods: {
    FilterProjects() {
      let projects = document.querySelectorAll(".projects");
      projects.forEach((project) => {
        let employees = {
          min: +project.querySelector(".projectCard").dataset.minemployees,
          max: +project.querySelector(".projectCard").dataset.maxemployees,
        };
        let assets = {
          min: +project.querySelector(".projectCard").dataset.minassets,
          max: +project.querySelector(".projectCard").dataset.maxassets,
        };
        let revenue = {
          min: +project.querySelector(".projectCard").dataset.minrevenue,
          max: +project.querySelector(".projectCard").dataset.maxrevenue,
        };
        project.querySelector(".projectCard").classList.add("disable");
        if (
          this.Employees >= employees.min &&
          this.Employees <= employees.max
        ) {
          if (this.Assets >= assets.min && this.Assets <= assets.max) {
            if (this.Revenue >= revenue.min && this.Revenue <= revenue.max) {
              project.querySelector(".projectCard").classList.remove("disable");
            }
          }
        } else {
        }
      });
    },
  },
  mounted() {
    this.FilterProjects();
  },
  filters: {
    numberWithComma: function (value) {
      var parts = value.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    },
  },
};
</script> 

<style lang="scss" scoped>
.projectIdentifier {
  padding-top:rem(20px);
  &__side {
    max-width: 325px;
    margin-right: auto;
    @media screen and (max-width:767px){
      margin-left: auto;
      margin-bottom:rem(40px);
    }
    @media screen and (max-width:575px){
          max-width: 85%;
    }
    .rangeCard {
      margin-bottom: rem(60px);
      .title {
        font-size: rem(25px);
        color: var(--secondary);
        font-weight: 400;
        text-align: center;
        margin-bottom: rem(14px);
        display: flex;
        align-items: flex-end;
        justify-content: center;
        .icon {
          display: block;
          width: 22px;
          color: var(--secondary);
          margin-right: rem(15px);
          /deep/ {
            div,
            svg {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .label {
        font-size: rem(24px);
        color: var(--primary);
        display: block;
        text-align: center;
        margin-bottom: rem(30px);
        font-weight: 400;
      }
      @media screen and (max-width:767px){
        margin-bottom:rem(30px);
        .label{
          margin-bottom: rem(20px);
        }
      }
    }
    /deep/ {
      .slide {
        .vue-slider-process {
          background-color: var(--secondary);
        }
        .vue-slider-dot-handle {
          border: unset;
          background: var(--primary);
        }
        .vue-slider-rail {
          background-color: rgba($color: #224156, $alpha: 0.2);
        }
      }
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
    padding-left: rem(120px);
    flex-wrap: wrap;
    @media screen and (max-width:1600px){
      padding-left:rem(90px);
    }
    @media screen and (max-width:991px){
      padding-left:rem(70px);
    }
    @media screen and (max-width:767px){
      padding-left: unset;
    }
    .projects{
        width:50%;
        @media screen and (max-width:360px) {
          width: 100%;
        }
    }
  }
  /deep/{
    .vue-slider-dot-tooltip-inner{
          border-color: rgba(1, 156, 222, 1);
        background-color: rgba(1, 156, 222, 1);
    }
  }
}
</style>
