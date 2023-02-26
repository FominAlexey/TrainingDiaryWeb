import { ACCOUNT_LOGIN } from "../actions/account/actions.type"
import { SET_TOKEN } from "../mutations/account/mutations.type"

const state = {
    isAuthorize: true
}

const getters = {
    isAuthenticated(state) {
        return state.isAuthorize;
    }
}

const actions = {
    [ACCOUNT_LOGIN](context, loginDto) {

        return new Promise((resolve, reject) => {

        });        
    }
}

const mutations = {
    [SET_TOKEN](state, user) {
        state.isAuthorize = true;
    },
}

export default {
    state,
    actions,
    mutations,
    getters
}