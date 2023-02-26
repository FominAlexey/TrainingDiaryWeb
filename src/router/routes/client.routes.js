import store from '/src/store/index.js'
import AllRoutes from "./all.routes"

import Start from "/src/views/client/ClientStart.vue"

import ClientLayout from '/src/layouts/ClientLayout.vue'

const ifAuthenticated = (to, from, next) => {

    if (store.getters.isAuthenticated) {
        next()
        return
    }

    next('/Account/Login')
}

export default [

    {
        path: AllRoutes.Client.Start,
        component: Start,
        beforeEnter: ifAuthenticated,
        meta: {
            layout: ClientLayout,
            title: "Авторизация"
        }
    },

]