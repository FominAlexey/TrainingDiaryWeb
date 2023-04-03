import { ACCOUNT_LOGIN, ACCOUNT_LOGOUT } from "../actions/account/actions.type"
import { SET_TOKEN, CLEAR_ACCOUNT } from "../mutations/account/mutations.type"

const state = {
    isAuthorize: false
}

const getters = {
  isAuthenticated(state) {
    return state.isAuthorize;
  }
}

const actions = {
  [ACCOUNT_LOGIN](context, loginDto) {
    context.commit(SET_TOKEN)
  },
  
  [ACCOUNT_LOGOUT](context, loginDto) {
    context.commit(SET_TOKEN)
  }
}

const mutations = {
  [SET_TOKEN](state, user) {
    state.isAuthorize = true;
  },
  [CLEAR_ACCOUNT](state) {
    state.isAuthorize = false;
  }
}

export default {
    state,
    actions,
    mutations,
    getters
}