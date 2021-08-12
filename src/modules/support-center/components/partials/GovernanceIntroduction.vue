<template>
    <div>
        <div class="description__detail">
            <base-smooth-scrollbar>
                <h3 class="description__title">Lorem Ipsum is simply</h3>
                <p>It is with great pride that I address our Zain family.</p>
                <p>
                    Zain has accomplished many achievements never before
                    encountered in the industry. Our leading pace has always
                    been accredited to our culture, with a deep understanding
                    that in order to improve the lives of our clients we must
                    reflect our internal working culture and our promise for a
                    wonderful world.
                </p>
                <p>
                    Zain has accomplished many achievements never before
                    encountered in the industry. Our leading pace has always
                    been accredited to our culture, with a deep understanding
                    that in order to improve the lives of our clients we must
                    reflect our internal working culture and our promise for a
                    wonderful world.
                </p>
                <p>
                    Zain has accomplished many achievements never before
                    encountered in the industry. Our leading pace has always
                    been accredited to our culture, with a deep understanding
                    that in order to improve the lives of our clients we must
                    reflect our internal working culture and our promise for a
                    wonderful world.
                </p>
                <p>
                    Zain has accomplished many achievements never before
                    encountered in the industry. Our leading pace has always
                    been accredited to our culture, with a deep understanding
                    that in order to improve the lives of our clients we must
                    reflect our internal working culture and our promise for a
                    wonderful world.
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
        /deep/ .scrollArea {
            --barcolor: #6e337a !important;
            --trackcolor: #adadad !important;
            --h: 235px;
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
