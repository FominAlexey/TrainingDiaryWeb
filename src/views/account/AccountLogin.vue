<template> 
    <div>Diary Work</div>
    <div class="input-group-login mt-3">
        <span class="input-group-text" id="inputGroup-sizing-default" >Логин</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="login">
    </div>
    <div class="input-group-login mt-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Пароль</span>
        <input type="password" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="password">
    </div>
    <div>
        <button class="btn btn-danger" @click="Authorized">Войти</button>
    </div>
    <div>
        <button class="btn btn-danger" @click="Registration">Регистрация</button>
    </div>
</template>
    
<script>
import store from "@/store/index";
export default {
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    Authorized() {
      if (this.login == 'Alex36rus' && this.password == '123123') {
        store.dispatch('ACCOUNT_LOGIN');
        this.$router.push('/Client/Main');
      }
      
    },

    Registration() {
        this.$router.push('/Account/Register')
    }
  }
}
</script>
    
<style>
.input-group-login {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
</style>