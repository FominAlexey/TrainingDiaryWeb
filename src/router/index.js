import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

import defaultLayout from '../layouts/defaultLayout.vue'

import AccountRoutes from "./routes/account.routes"
import ClientRoutes from "./routes/client.routes"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...AccountRoutes,
        ...ClientRoutes,
        {
            path: '/',
            name: 'Home',
            component: Main,
            meta: {
                layout: defaultLayout,
                title: "дефолт"
            }
        }
    ]
})

export default router