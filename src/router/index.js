import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/modules/home/router";
// import covid19 from "@/modules/covid19/router"
// import mediaCenter from "@/modules/meida-center/router"
// import sustainability from "@/modules/sustainability/router"
// import partner from "@/modules/partner/router"
// import business from "@/modules/zain-buniness/router"

const routes = [
    // {
    //     path: '/:lang',
    //     name: 'Home',
    //     meta: {
    //         title: '',
    //     },
    //     component: () =>
    //         import ('../views/Home.vue'),
    // },
    {
        path: `/:lang`,
        component: {
            render(c) {
                return c("router-view");
            },
        },
        children: [...home],
    },
    {
        path: `/:lang/media-center`,
        name: "media-center",
        component: () =>
            import ("../views/MediaCenter.vue"),
    },
    {
        path: `/:lang/board-directors`,
        name: "contact-us",
        component: () =>
            import ("../views/BoardDirectors.vue"),
    },
    {
        path: `/:lang/our-services`,
        name: "contact-us",
        component: () =>
            import ("../views/OurServices.vue"),
    },
    {
        path: `/:lang/knowledge-library`,
        name: "knowledge-library",
        component: () =>
            import ("../views/KnowledgeLibrary.vue"),
    },
    {
        path: `/:lang/support-center`,
        name: "support-center",
        component: () =>
            import ("../views/SupportCenters.vue"),
    },
    {
        path: `/:lang/initiators`,
        name: "initiators",
        component: () =>
            import ("../views/Initiators.vue"),
    },
    {
        path: `/:lang/publication`,
        name: "publication",
        component: () =>
            import ("../views/Publication.vue"),
    },
    {
        path: `/:lang/common-interest`,
        name: "common-interest",
        component: () =>
            import ("../views/CommonInterest.vue"),
    },
    {
        path: `/:lang/contact`,
        name: "Contact",
        component: () =>
            import ("../views/Contact.vue"),
    },
    {
        path: `/:lang/media-center-detail`,
        name: "media-center-detail",
        component: () =>
            import ("../views/MediaCenterDetail.vue"),
    },
    {
        path: `/:lang/faq`,
        name: "faq",
        component: () =>
            import ("../views/Faq.vue"),
    },
    {
        path: `/:lang/search`,
        name: "search",
        component: () =>
            import ("../views/Search.vue"),
    },
    {
        path: `/:lang/board-publication`,
        name: "board-publication",
        component: () =>
            import ("../views/BoardPublication.vue"),
    },
    {
        path: `/:lang/mission-vision`,
        name: "mission-vision",
        component: () =>
            import ("../views/MissionVision.vue"),
    },
    {
        path: `/:lang/project-idenfifier`,
        name: "project-idenfifier",
        component: () =>
            import ("../views/ProjectIdentifier.vue"),
    },

];

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: "smooth",
            };
        } else {
            return new Promise((resolve, reject) => {
                resolve({ x: 0, y: 0 });
            });
        }
    },
});

export default router;