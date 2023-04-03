import store from '/src/store/index.js'
import AllRoutes from "./all.routes"

import Main from "/src/views/client/ClientMain.vue"
import Exercises from "/src/views/client/ClientExercises.vue"
import Training from "/src/views/client/ClientTraining.vue"
import Statistics from "/src/views/client/ClientStatistics.vue"
import Profile from "/src/views/client/ClientProfile.vue"
import Workout from "/src/views/client/Training/PageTraining.vue"
import Exercise from "/src/views/client/Training/PageExercise.vue"

import ClientLayout from '/src/layouts/clientLayout.vue'

const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem("vuex")) {
    store.dispatch("INIT_ACCOUNT_VUEX");
  }

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
    {
        path: AllRoutes.Client.Workout,
        component: Workout,
        beforeEnter: ifAuthenticated,
        meta: {
            layout: ClientLayout,
            title: "Тренировка"
        }
    },
    {
        path: AllRoutes.Client.Exercise,
        component: Exercise,
        beforeEnter: ifAuthenticated,
        meta: {
            layout: ClientLayout,
            title: "Упражнение"
        }
    },

]