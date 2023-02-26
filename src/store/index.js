import Vuex from 'vuex'

import AccountModule from './vuex/modules/account.module'

const store = new Vuex.Store({
    modules: {
        AccountModule,
    }
})

export default store

/*

Чтобы не забыть:
    1. state - хранилище данных
    2. mutation - синхронное преобразование данных в state (присвоение значения и т.п.)
    3. action - асинхронное действие (запрос к серверу и т.п.)
    4. getters - обычное получение форматированных данных
    5. module - объединенное в один объект данные о стейтах, мутациях, действиях и геттерах

*/