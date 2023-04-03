import store from '/src/store/index.js'

import AllRoutes from "./all.routes"
import Login from "/src/views/account/AccountLogin.vue"
import Register from "/src/views/account/AccountRegistration.vue"
import RegisterAppData from "/src/views/account/AccountAppDataRegistration.vue"


import LoginLayout from "/src/layouts/loginLayout.vue"

const ifNotAuthenticated = (to, from, next) => {

  console.log(store.getters.isAuthenticated)
  
  if (!store.getters.isAuthenticated) {
    next()
  }

  next('/Client/Main')

}

export default [
    {
        path: AllRoutes.Account.Login,
        component: Login,
        beforeEnter: ifNotAuthenticated,
        meta: {
            layout: LoginLayout,
            title: "Авторизация"
        }
    },
    {
        path: AllRoutes.Account.Register,
        component: Register,
        beforeEnter: ifNotAuthenticated,
        meta: {
            layout: LoginLayout,
            title: "Регистрация"
        }
    },
    {
        path: AllRoutes.Account.RegisterAppData,
        component: RegisterAppData,
        beforeEnter: ifNotAuthenticated,
        meta: {
            layout: LoginLayout,
            title: "Данные"
        }
    },

]