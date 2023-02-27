<template> 
    <div>Заполнение данных</div>
    <div class="input-group-registrationAppData mt-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Имя</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
    </div>
    <div class="input-group-registrationAppData mt-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Фамилия</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
    </div>
    <div class="input-group-registrationAppData mt-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Рост</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
    </div>
    <div class="input-group-registrationAppData mt-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Вес</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
    </div>
    <div class="input-group-registrationAppData mt-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Возраст</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
    </div>
    <div class="input-group-registrationAppData mt-3">
        <label class="input-group-text" for="inputGroupSelect01">Пол</label>
        <select class="form-select flex-grow-0 w-25" id="inputGroupSelect01">
            <option value="1">Мужской</option>
            <option value="2">Женский</option>
        </select>
    </div>
    <div>
        <button class="btn btn-danger" @click="endRegistration">Закончить регистрация</button>
    </div>
</template>
    
<script>
export default {
    methods: {
        endRegistration() {
            this.$router.push('/Client/Main')
        }
    }
}
</script>
    
<style>
.input-group-registrationAppData {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
</style> 