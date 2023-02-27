<template> 
    <div>Регистрация</div>
    <div class="input-group input-center mt-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Логин</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
    </div>
    <div class="input-group input-center mt-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Введите пароль</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
    </div>
    <div class="input-group input-center mt-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Повторите пароль</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
    </div>
    <div>
        <button class="btn btn-danger" @click="resumeRegistration">Продолжить</button>
    </div>
</template>
    
<script>
export default {
    methods: {
        resumeRegistration() {
            this.$router.push('/Account/RegisterAppData')
        }
    }
}
</script>
    
<style>
.input-center {
    margin-right: -70%;
}
</style> 