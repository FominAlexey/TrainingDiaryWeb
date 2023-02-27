import store from '/src/store/index.js'
import AllRoutes from "./all.routes"

import Main from "/src/views/client/ClientMain.vue"
import Exercises from "/src/views/client/ClientExercises.vue"
import Training from "/src/views/client/ClientTraining.vue"
import Statistics from "/src/views/client/ClientStatistics.vue"
import Profile from "/src/views/client/ClientProfile.vue"

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
        path: AllRoutes.Client.Main,
        component: Main,
        beforeEnter: ifAuthenticated,
        meta: {
            layout: ClientLayout,
            title: "Главная страница"
        }
    },
    {
        path: AllRoutes.Client.Exercises,
        component: Exercises,
        beforeEnter: ifAuthenticated,
        meta: {
            layout: ClientLayout,
            title: "Упражнения"
        }
    },
    {
        path: AllRoutes.Client.Training,
        component: Training,
        beforeEnter: ifAuthenticated,
        meta: {
            layout: ClientLayout,
            title: "Тренировки"
        }
    },
    {
        path: AllRoutes.Client.Statistics,
        component: Statistics,
        beforeEnter: ifAuthenticated,
        meta: {
            layout: ClientLayout,
            title: "Статистика"
        }
    },
    {
        path: AllRoutes.Client.Profile,
        component: Profile,
        beforeEnter: ifAuthenticated,
        meta: {
            layout: ClientLayout,
            title: "Профиль"
        }
    },

]