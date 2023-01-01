import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import About from '@/components/About.vue'
import Index from '@/components/Index.vue'
import {RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'

const routes: Readonly<RouteRecordRaw[]> = [
    {
        name: "index",
        component: Index,
        path: '/',
    },
    {
        name: "about",
        component: About,
        path: '/about',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
