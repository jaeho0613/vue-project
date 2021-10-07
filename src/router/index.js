import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from "@/views/DataBinding";
import ListBinding from "@/views/ListBinding";
import RenderingMethod from "@/views/RenderingMethod";
import EventMethod from "@/views/EventMethod";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/databinding',
        name: 'dataBinding',
        component: DataBinding
    },
    {
        path: '/listbinding',
        name: 'listBinding',
        component: ListBinding
    },
    {
        path: '/rendering',
        name: 'Rendering',
        component: RenderingMethod
    },
    {
        path: '/event',
        name: 'EventMethod',
        component: EventMethod
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
