import AllRoutes from "./all.routes"
import Login from "/src/views/account/AccountLogin.vue"

import LoginLayout from "/src/layouts/loginLayout.vue"

const ifNotAuthenticated = (to, from, next) => {

    next();

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

]