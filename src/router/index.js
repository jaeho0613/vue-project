import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from "@/views/DataBinding";
import ListBinding from "@/views/ListBinding";
import RenderingMethod from "@/views/RenderingMethod";
import EventMethod from "@/views/EventMethod";
import ComputedAndWatch from "@/views/ComputedAndWatch";
import ListBinding2 from "@/views/ListBinding2";
import NestedComponent from "@/components/NestedComponent";
import ParentComponent from "@/views/ParentComponent";
import ProvideInject from "@/views/ProvideInject";
import Calculator from "@/views/Calculator";
import Mixins from "@/views/Mixins";
import CustomDirective from "@/views/CustomDirective";

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
    },
    {
        path: '/computedandwatch',
        name: 'ComputedAndWatch',
        component: ComputedAndWatch
    },
    {
        path: '/listbinding2',
        name: 'ListBinding2',
        component: ListBinding2
    },
    {
        path: '/nested',
        name: 'nested',
        component: NestedComponent
    },
    {
        path: '/component',
        name: 'component',
        component: ParentComponent
    },
    {
        path: '/provideinject',
        name: 'provideinject',
        component: ProvideInject
    },
    {
        path: '/calculator',
        name: 'calculator',
        component: Calculator
    },
    {
        path: '/mixin',
        name: 'mixin',
        component: Mixins
    },
    {
        path: '/directive',
        name: 'directive',
        component: CustomDirective
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
