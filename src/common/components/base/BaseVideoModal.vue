<template>
    <div>
        <b-modal
            modal-class="videoModal"
            ref="videoModal"
            centered
            hide-footer
            @hidden="$emit('closeVideoModal', false)"
            v-model="isShow"
        >
            <div class="videoWrapper">
                <iframe
                    v-if="videoType!='mp4'"
                    :src="videoUrl"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <video id="player" playsinline controls v-if="videoType=='mp4'">
                    <source :src="videoUrl" type="video/mp4" />
                </video>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
        isShow: {
            type: Boolean,
            default: false,
        },
        videoUrl: String,
        videoType: String
    },
    data() {
        return {
            showModal: this.isShow,
        }
    },
}
</script>

<style lang="scss" scoped>
/deep/ {
    @media screen and (max-width: 1200px) {
        .modal .modal-dialog {
            margin-left: auto;
            margin-right: auto;
        }
    }
    .videoModal {
        .modal-content {
            padding: 0px !important;
            .modal-body {
                padding: 0px !important;
            }
        }
        .videoWrapper {
            width: 100%;
            height: 550px;
            @media screen and (max-width: 1200px) {
                padding: rem(40px);
            }
            @media screen and (max-width: 767px) {
                padding: rem(30px);
                height: 450px;
            }
            @media screen and (max-width: 575px) {
                padding: rem(30px);
                height: 400px;
            }
            iframe {
                width: 100%;
                height: 100%;
            }
            video{
                width: 100%;
                height:100%;
            }
        }
        
    }
    .modal-header {
        padding: 0;
        border: 0;
        .close {
            background-color: transparent;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24px' height='24px'%3E%3Cpath fill-rule='evenodd' fill='rgb(256, 256, 256)' d='M13.711,12.337 L23.103,21.728 C23.622,22.247 23.622,23.088 23.103,23.607 C22.584,24.125 21.743,24.125 21.225,23.607 L11.833,14.215 L2.441,23.607 C1.922,24.125 1.082,24.125 0.563,23.607 C0.044,23.088 0.044,22.247 0.563,21.728 L9.955,12.337 L0.563,2.945 C0.044,2.426 0.044,1.585 0.563,1.066 C1.082,0.547 1.922,0.547 2.441,1.066 L11.833,10.458 L21.225,1.066 C21.743,0.547 22.584,0.547 23.103,1.066 C23.622,1.585 23.622,2.426 23.103,2.945 L13.711,12.337 Z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            border: 0;
            padding: 0;
            font-size: 0;
            height: 24px;
            width: 24px;
            position: absolute;
            margin: 0;
            right: -40px;
            top: -40px;
            opacity: 1;
            @media screen and (min-width: 1025px) {
                &:hover {
                    opacity: 0.7;
                }
            }
        }
    }
}
</style>
