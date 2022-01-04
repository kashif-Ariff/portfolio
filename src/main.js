import App from './App.vue'
import router from './router'
import Vue from 'vue'

import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/sccs/utility/_variables.scss'
import 'vue-select/dist/vue-select.css';
import "font-awesome/css/font-awesome.min.css";
import '@/assets/sccs/helper/_fonts.scss'
import BaseSvgIcon from '@/common/components/base/BaseSvgIcon.vue'
import i18n from '@/common/i18n'
import baseSmoothScrollbar from "@/common/components/base/BaseSmoothScrollbar"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import pages from '@/mixin/pages.js'
import VuePageTransition from 'vue-page-transition'
import "vue-page-transition/dist/vue-page-transition.css";

import vSelect from 'vue-select'

import vuescroll from 'vuescroll';

Vue.use(BootstrapVue)
Vue.component('base-svg-icon', BaseSvgIcon)
Vue.component('base-smooth-scrollbar', baseSmoothScrollbar)
Vue.component('vue-select', vSelect)
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);
// Vue.component('scrollbar', VueScrollbar);
Vue.use(VuePageTransition);
Vue.use(vuescroll);
Vue.config.productionTip = false


Vue.mixin(pages)
router.beforeEach((to, from, next) => {
    let lang = to.params.lang
    if (!lang) {
        i18n.locale = 'en'
        lang = 'en'
        next({
            name: 'Home',
            params: {
                lang: lang,
            },
        })
    } else {
        i18n.locale = lang
        next()
    }
})

const fixIdScrolling = {

};

new Vue({
    router,
    //store,
    i18n,
    render: (h) => h(App),
}).$mount('#app')