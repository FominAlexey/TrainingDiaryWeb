<template> 
    <div id="center-client-training">
        <div class="display-6">Тренировки</div>
    </div>
    <div class="input-group mt-3 ms-2">
      <span class="input-group-text" id="inputGroup-sizing-default">17.09.2023</span>
      <button class="btn btn-danger" type="button" id="button-addon1" @click="openWorkout">Бег 3 км + Подтягивания</button>
    </div>  
</template>
    
<script>
export default {
    methods: {
        openWorkout() {
            this.$router.push('/Client/Workout?id=1')
        }
    }
}
</script>
    
<style>
#center-client-training{
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style> 