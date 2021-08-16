<template>
    <div class="initiatorSlider" :aria-label="ariaLabel" role="region">
        <initiator :cardContent="cardContent"></initiator>
    </div>
</template>

<script>
import Initiator from './partials/Initiator.vue'
export default {
    components: { Initiator },
    props: {
        sectionTitle: String,
        ariaLabel: String,
    },
    data() {
        return {
            cardContent: [
                {
                    color: '#fcc30b',
                    index: '01',
                    image: 'calendar.png',
                    image_hover: 'calendar-hover.png',
                    title: 'Small and Medium Enterprise guide',
                    heading:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla molestiae ab iste cum provident odit dolorem quae voluptate quos. Repellat iure doloribus magnam ab maxime reiciendis quia magni voluptatum. Ducimus architecto aut error molestiae ad fuga. Reprehenderit, quasi impedit, exercitationem cupiditate esse harum enim neque temporibus soluta porro eveniet blanditiis. Amet suscipit optio placeat. Blanditiis voluptatem esse fugiat amet tempora officiis rem repellendus eaque est, quidem maiores quasi sint illum molestias repudiandae quo numquam. Nemo et, officia eligendi delectus ex sunt nostrum, fuga perspiciatis eum dicta, quod molestiae voluptates enim architecto quia sed sapiente illum id dolor deserunt. Dolore?',
                },
                {
                    color: '#a21942',
                    index: '02',
                    image: 'calendar.png',
                    image_hover: 'calendar-hover.png',
                    title: 'decent work & economic growth',
                    heading:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla molestiae ab iste cum provident odit dolorem quae voluptate quos. Repellat iure doloribus magnam ab maxime reiciendis quia magni voluptatum. Ducimus architecto aut error molestiae ad fuga. Reprehenderit, quasi impedit, exercitationem cupiditate esse harum enim neque temporibus soluta porro eveniet blanditiis. Amet suscipit optio placeat. Blanditiis voluptatem esse fugiat amet tempora officiis rem repellendus eaque est, quidem maiores quasi sint illum molestias repudiandae quo numquam. Nemo et, officia eligendi delectus ex sunt nostrum, fuga perspiciatis eum dicta, quod molestiae voluptates enim architecto quia sed sapiente illum id dolor deserunt. Dolore?',
                },
                {
                    color: '#fd6925',
                    index: '03',
                    image: 'calendar.png',
                    image_hover: 'calendar-hover.png',
                    title: 'industry, innovation & infrastructure',
                    heading:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla molestiae ab iste cum provident odit dolorem quae voluptate quos. Repellat iure doloribus magnam ab maxime reiciendis quia magni voluptatum. Ducimus architecto aut error molestiae ad fuga. Reprehenderit, quasi impedit, exercitationem cupiditate esse harum enim neque temporibus soluta porro eveniet blanditiis. Amet suscipit optio placeat. Blanditiis voluptatem esse fugiat amet tempora officiis rem repellendus eaque est, quidem maiores quasi sint illum molestias repudiandae quo numquam. Nemo et, officia eligendi delectus ex sunt nostrum, fuga perspiciatis eum dicta, quod molestiae voluptates enim architecto quia sed sapiente illum id dolor deserunt. Dolore?',
                },
            ],
        }
    },
    methods: {
        isActive(index) {
            return this.tabIndex == index
        },
    },
}
</script>
<style lang="scss" scoped>
.initiatorSlider {
    --activeColor: #d31b88;
    /deep/ {
        svg {
            max-width: 100%;
            height: auto;
        }
    }
    padding: rem(35px) 0px;
    &__description {
        margin-top: rem(30px);
        p {
            font-size: rem(20px);
            color: #010101;
            font-weight: 600;
            margin-bottom: rem(50px);
        }
    }
}
</style>
