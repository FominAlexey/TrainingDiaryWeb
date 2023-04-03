import { ACCOUNT_LOGIN, ACCOUNT_LOGOUT, INIT_ACCOUNT_VUEX } from "../actions/account/actions.type"
import { SET_TOKEN, CLEAR_ACCOUNT, SET_DATA_ACCOUNT_VUEX } from "../mutations/account/mutations.type"

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
    context.commit(CLEAR_ACCOUNT)
  },

  [INIT_ACCOUNT_VUEX]: async (context) => {
    var dataAccountVuex = JSON.parse(localStorage.getItem("vuex")).store.AccountModule;
    let stateAccountVuex = {
      isAuthorize: dataAccountVuex.isAuthorize,
    };
    context.commit(SET_DATA_ACCOUNT_VUEX, stateAccountVuex);
  },
}

const mutations = {
  [SET_TOKEN](state, user) {
    state.isAuthorize = true;
  },
  [CLEAR_ACCOUNT](state) {
    state.isAuthorize = false;
  },
  [SET_DATA_ACCOUNT_VUEX](state, vuexData) {
    state.isAuthorize = vuexData.isAuthorize;
  },
}

export default {
    state,
    actions,
    mutations,
    getters
}