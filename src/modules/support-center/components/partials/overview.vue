<template>
    <div>
        <div class="description__detail">
            <base-smooth-scrollbar>
                <h3 class="description__title">
                    Regulatory Environment in Kuwait
                </h3>
                <p>
                    In the past few years, the Board has been heavily involved
                    in updating and refining the corporate governance framework
                    in response to changes in legislation in Kuwait. Zain
                    continues to engage in dynamic communications with investors
                    and encourage all shareholders to vote and help preserve the
                    long-term goals as set out in the company’s Articles of
                    Association. In 2015, CMA issued a set of regulations as
                    part of the updated executive bylaw that replaced a number
                    of previous decisions and regulations. Accordingly, the
                    Board adopted the revised regulations and revised internal
                    policies and charters to reflect the legislative changes.
                    These and other documents define the Corporate Governance
                    framework.
                </p>
                <h3 class="description__title">Governance at Zain</h3>
                <p>
                    Zain’s success is dependent on its willingness to understand
                    the environment in which it operates while aiming to achieve
                    profitable growth. The company views this economic
                    instability as being challenging, though opportunities still
                    exist. Unflinching governance principles ensure the
                    effectiveness of the Board and are key to maintaining the
                    trust of investors. In 2015, Zain was an early adopter of
                    the new governance regulations issued by the Capital Markets
                    Authority (CMA) in Kuwait, which oversees and defends the
                    interest of all stakeholders. The company has and shall
                    continue to drive the accountable, value-driven management
                    through its transparent system of corporate governance.
                </p>
            </base-smooth-scrollbar>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.description {
    &__detail {
        /deep/.scrollArea {
            --barcolor: #6e337a;
            --trackcolor: #adadad;
            --h: 235px;
            // height: var(--h) !important;
        }
    }
    &__title {
        font-size: rem(24px);
        color: var(--secondary);
        font-weight: 900;
        text-transform: uppercase;
        margin-bottom: rem(35px);
    }
    p {
        font-weight: 400;
        font-size: rem(22px);
        color: #2d2d2d;
    }
}
</style>
