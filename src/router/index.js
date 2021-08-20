import Vue from 'vue'
import VueRouter from "vue-router";
import home from "@/modules/home/router"
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
                return c('router-view')
            },
        },
        children: [...home],
    },
    {
                path: `/:lang/media-center`,
                name: 'media-center',
                component: () =>
                    import ('../views/MediaCenter.vue'),
            },
            {
                path: `/:lang/board-directors`,
                name: 'contact-us',
                component: () =>
                    import ('../views/BoardDirectors.vue'),
     },
            {
                path: `/:lang/our-services`,
                name: 'contact-us',
                component: () =>
                    import ('../views/OurServices.vue'),
            },
            {
                path: `/:lang/knowledge-library`,
                name: 'knowledge-library',
                component: () =>
                    import ('../views/KnowledgeLibrary.vue'),
            },
            {
                path: `/:lang/support-center`,
                name: 'support-center',
                component: () =>
                    import ('../views/SupportCenters.vue'),
            },
            {
                path: `/:lang/initiators`,
                name: 'initiators',
                component: () =>
                    import ('../views/Initiators.vue'),
            },
            {
                path: `/:lang/publication`,
                name: 'publication',
                component: () =>
                    import ('../views/Publication.vue'),
            },
            {
                path: `/:lang/common-intrest`,
                name: 'common-intrest',
                component: () =>
                    import ('../views/CommonInterest.vue'),
            },
            {
                path: `/:lang/contact`,
                name: 'Contact',
                component: () =>
                    import ('../views/Contact.vue'),
            },
            {
                path: `/:lang/media-center-detail`,
                name: 'media-center-detail',
                component: () =>
                    import ('../views/MediaCenterDetail.vue'),
            },
            {
                path: `/:lang/faq`,
                name: 'faq',
                component: () =>
                    import ('../views/Faq.vue'),
            },
            {
                path: `/:lang/search`,
                name: 'search',
                component: () =>
                    import ('../views/Search.vue'),
            },
            {
                path: `/:lang/board-publication`,
                name: 'board-publication',
                component: () =>
                    import ('../views/BoardPublication.vue'),
            },
            {
                path: `/:lang/mission-vision`,
                name: 'mission-vision',
                component: () =>
                    import ('../views/MissionVision.vue'),
            },
//     {
//         path: `/:lang/contact-us`,
//         name: 'contact-us',
//         component: () =>
//             import ('../views/ContactUs.vue'),
//     },
//     {
//         path: `/:lang/media-gallery`,
//         name: 'media-gallery',
//         component: () =>
//             import ('../views/MediaGallery.vue'),
//     },
//     {
//         path: `/:lang/gallery-detail`,
//         name: 'gallery-detail',
//         component: () =>
//             import ('../views/GalleryDetail.vue'),
//     },
//     {
//         path: `/:lang/course-list`,
//         name: 'course-list',
//         component: () =>
//             import ('../views/CourseList.vue'),
//     },
//     {
//         path: `/:lang/our-impact`,
//         name: 'our-impact',
//         component: () =>
//             import ('../views/OurImpect.vue'),
//     },
//     {
//         path: `/:lang/search`,
//         name: 'Search',
//         component: () =>
//             import ('../views/Search.vue'),
//     },
//     {
//         path: `/:lang/cource-detail`,
//         name: 'media-gallery',
//         component: () =>
//             import ('../views/CourseDetails.vue'),
//     },
//     {
//           path: `/:lang/meet-mentors`,
//           name: 'meet-mentors',
//           component: () =>
//           import ('../views/MeetMentors.vue'),
//      },
//      {
//           path: `/:lang/test`,
//           name: 'test',
//           component: () =>
//           import ('../views/Test.vue'),
//      },
    // {
    //     path: `/:lang/slider`,
    //     name: 'slider',
    //     component: () =>
    //         import ('../views/slider.vue'),
    // },
]

// const routes = [{
//         path: '/:lang',
//         name: 'Home',
//         meta: {
//             title: '',
//         },
//         component: () =>
//             import ('../views/Home.vue'),
//     },
//     {
//         path: '/:lang/about-us',
//         component: {
//             render(c) { return c('router-view') }
//         },
//         children: [
//             about
//         ]
//     },
//     // {
//     //     path: '/:lang/about',
//     //     name: 'About',
//     //     meta: {
//     //         title: '',
//     //     },
//     //     component: () =>
//     //         import ('../views/About.vue'),
//     // },

//     {
//         path: `/:lang/search`,
//         name: 'Search',
//         component: () =>
//             import ('../views/Search.vue'),
//     },
//     {
//         path: `/:lang/sitemap`,
//         name: 'SiteMap',
//         component: () =>
//             import ('../views/SiteMap.vue'),
//     },
//     {
//         path: `/:lang/investor`,
//         name: 'investor',
//         component: () =>
//             import ('../views/Investor.vue'),
//     },
//     {
//         path: `/:lang/sustainability`,
//         name: 'sustainability',
//         component: () =>
//             import ('../views/Sustainability.vue'),
//     },
//     {
//         path: `/:lang/policies`,
//         name: 'policies',
//         component: () =>
//             import ('../views/Policies.vue'),
//     },
//     {
//         path: `/:lang/diversity-inclusion`,
//         name: 'diversity-inclusion',
//         component: () =>
//             import ('../views/DiversityInclusion.vue'),
//     },
//     {
//         path: `/:lang/contact-us`,
//         name: 'contact-us',
//         component: () =>
//             import ('../views/ContactUs.vue'),
//     },
//     {
//         path: `/:lang/press-release`,
//         name: 'press-release',
//         component: () =>
//             import ('../views/PressRelease.vue'),
//     },
//     {
//         path: `/:lang/news-letter`,
//         name: 'news-letter',
//         component: () =>
//             import ('../views/NewsLetter.vue'),
//     },
//     {
//         path: `/:lang/zain-business`,
//         name: 'news-letter',
//         component: () =>
//             import ('../views/ZainBusiness.vue'),
//     },
//     {
//         path: `/:lang/press-release-detail`,
//         name: 'press-release-detail',
//         component: () =>
//             import ('../views/PressReleaseDetail.vue'),
//     },
//     {
//         path: `/:lang/media-center`,
//         name: 'media-center',
//         component: () =>
//             import ('../views/MeidaCenter.vue'),
//     },
//     {
//         path: `/:lang/covid-19`,
//         name: 'covid-19',
//         component: () =>
//             import ('../views/Covid19.vue'),
//     },
//     {
//         path: `/:lang/slider`,
//         name: 'slider',
//         component: () =>
//             import ('../views/slider.vue'),
//     },
//     {
//         path: `/:lang/partner`,
//         name: 'partner',
//         component: () =>
//             import ('../views/Partner.vue'),
//     },

// ]

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        } else {
            return new Promise((resolve, reject) => {
                resolve({ x: 0, y: 0 })
            })
        }
    },
})

export default router