import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
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