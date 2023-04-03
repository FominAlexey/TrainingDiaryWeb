<template> 
    <div v-if="isLoading" id="center-client-main" >
      <div  class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status"/>  
    </div>
    <div v-show="!isLoading" id="center-client-profile">
        <div class="display-6">Профиль</div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Логин</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="items.login">
        </div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Имя</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="items.name">
        </div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Фамилия</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="items.surname">
        </div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Рост</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="items.height">
        </div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Вес</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="items.weight">
        </div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Возраст</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="items.age">
        </div>
        <div class="input-group-profile mt-3">
            <label class="input-group-text" for="inputGroupSelect01">Пол</label>
            <select class="form-select flex-grow-0 w-25" id="inputGroupSelect01">
                <option value="1" v-if="items.gender == 'Мужской'">Мужской</option>
                <option value="2">Женский</option>
            </select>
        </div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Количество тренировок</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="items.sessions">
        </div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Дней в программе</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="items.program">
        </div>
        <div>
            <button class="btn btn-danger mt-3" @click="signOut">Выйти</button>
        </div>
    </div>
</template>
    
<script>
import store from "@/store/index";
import ApiService from "@/services/api/api.js"
export default {
  data() {

    this.getAccount();
    return {
      items: null,
      isLoading: true,
    }
  },

  methods: {
    getAccount() {
      this.isLoading = true;
      ApiService.Account.GetAccount().then(response => {
        this.items = response.data;
        this.isLoading = false;
      })
    },
    signOut() {
      store.dispatch('ACCOUNT_LOGOUT');   
      this.$router.push('/');
    },
    
  }
}
</script>
    
<style>
#center-client-profile{
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.input-group-profile {
    position: relative;
    display: flex;
  justify-content: center;
  align-items: center;
    width: 100%;
}
</style> 