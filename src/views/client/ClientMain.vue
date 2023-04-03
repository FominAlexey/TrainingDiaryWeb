<template>
    <div v-if="isLoading" id="center-client-main" >
       <div  class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status"/>  
    </div>
    <div v-show="!isLoading" id="center-client-main">
        <div class="display-6">Главное</div>
    </div>
    <div class="input-group mt-3 ms-2">
        <span class="input-group-text" id="inputGroup-sizing-default">Рост</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="itemsStatistics.height">
    </div>
    <div class="input-group mt-3 ms-2">
        <span class="input-group-text" id="inputGroup-sizing-default">Вес</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="itemsStatistics.weight">
    </div>
    <div class="input-group mt-3 ms-2">
        <span class="input-group-text" id="inputGroup-sizing-default">Ккалории</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="itemsStatistics.calories">
    </div>
    <div class="input-group mt-3 ms-2">
        <span class="input-group-text" id="inputGroup-sizing-default">Ср.Время тренировки</span>
        <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="itemsStatistics.time">
    </div>
    <div v-if="isLoading" id="center-client-main" >
     <div  class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status"/>  
    </div>
    <div v-show="!isLoading" id="center-client-main" >
      <div  class="display-6" >Тренировки</div>   
    </div>
    <div class="input-group mt-3 ms-2" v-for="item in itemsTraining?.list" :key="item.id">
      <span class="input-group-text" id="inputGroup-sizing-default">{{ item.date }}</span>
      <button class="btn btn-danger" type="button" id="button-addon1" @click="openWorkout(item.id)">{{ item.name }}</button>
    </div>  
</template>
    
<script>
import ApiService from "@/services/api/api.js"
export default {
  data() {
    this.getStatistics();
    this.getListTraining();
    return {
      itemsTraining: null,
      itemsStatistics: null,
      isLoading: true,
    }
  },

  methods: {
    getListTraining() {
      this.isLoading = true;
      ApiService.Training.GetAllTraining().then(response => {
        this.itemsTraining = response.data;
        this.isLoading = false;
      })
    },
    getStatistics() {
      this.isLoading = true;
      ApiService.Account.GetStatistics().then(response => {
        console.log(response.data)
        this.itemsStatistics = response.data;
        this.isLoading = false;
      })
    },
    openWorkout(id) {
      if (id == 1) {
        this.$router.push('/Client/Workout?id=1')
      } else {
        this.$router.push('/Client/Workout?id=2')
      }    
    }
  }
}
</script>
    
<style>
#center-client-main{
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style> 