<template>
    <div class="scrollArea">
        <scrollbar :maxHeight="height" :isMobile="isMobile">
            <slot />
        </scrollbar>
    </div>
</template>

<script>
export default {
    props: {
        height: {
             default:"180px",
             type:String
        },
    },
    data(){
        return{
            isMobile: false
        }
    },
    created(){
        if( /Android|webOS|iPhone|Macintosh|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent) ) {
            this.isMobile=true
        }
    }
}
</script>
