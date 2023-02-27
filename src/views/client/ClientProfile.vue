<template> 
    <div id="center-client-profile">
        <div class="display-6">Профиль</div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Логин</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
        </div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Имя</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
        </div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Фамилия</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
        </div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Рост</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
        </div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Вес</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
        </div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Возраст</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
        </div>
        <div class="input-group-profile mt-3">
            <label class="input-group-text" for="inputGroupSelect01">Пол</label>
            <select class="form-select flex-grow-0 w-25" id="inputGroupSelect01">
                <option value="1">Мужской</option>
                <option value="2">Женский</option>
            </select>
        </div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Количество тренировок</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
        </div>
        <div class="input-group-profile mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Дней в программе</span>
            <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
        </div>
        <div>
            <button class="btn btn-danger mt-3" @click="signOut">Выйти</button>
        </div>
    </div>
</template>
    
<script>
export default {
    methods: {
        signOut() {
            this.$router.push('/')
        }
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