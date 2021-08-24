export default {
    data() {
        return {
            videoUrlSet: "",
            showModal: false,
            videoType: "youtube"
        }
    },
    methods: {
        closeModal(modal) {
            this.showModal = modal
            this.videoUrlSet = ""
        },
        openModal(videoUrl) {
            this.showModal = true
            this.videoUrlSet = videoUrl
            if(videoUrl.indexOf(".mp4") > -1){
                this.videoType="mp4"
                this.videoUrlSet = videoUrl
            }
        }
    },
     watch:{
        showModal:function(val){
            if (val) {
                setTimeout(() => {
                    document.querySelector('.modal.show .close').focus();
                    if(this.videoType=="mp4"){
                        var vid = document.getElementById("player");
                        vid.play();
                    }
                }, 200);
            }
            else{
                if(this.videoType=="mp4"){
                    var vid = document.getElementById("player");
                    vid.pause();
                }
            }
        }
    }
}