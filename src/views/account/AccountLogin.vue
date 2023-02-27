<template> 
    <div>Diary Work</div>
    <div class="input-group input-center mt-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Логин</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
    </div>
    <div class="input-group input-center mt-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Пароль</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
    </div>
    <div>
        <button class="btn btn-danger" @click="Authorized">Войти</button>
    </div>
    <div>
        <button class="btn btn-danger" @click="Registration">Регистрация</button>
    </div>
</template>
    
<script>
export default {
    methods: {
         Authorized() {
            this.$router.push('/Client/Main');
        },

        Registration() {
            this.$router.push('/Account/Register')
        }
    }
}
</script>
    
<style>
.input-center {
    margin-right: -70%;
}
</style>