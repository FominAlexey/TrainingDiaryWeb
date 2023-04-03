<template> 
  <div v-if="isLoading" v-show="isLoading" id="center-client-exercises" >
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status"></div>  
    </div> 
    <div v-show="!isLoading" id="center-client-training">
        <div class="display-6">Тренировки</div>
    </div>
    <div class="input-group mt-3 ms-2" v-for="item in items?.list" :key="item.id">
      <span class="input-group-text" id="inputGroup-sizing-default">{{ item.date }}</span>
      <button class="btn btn-danger" type="button" id="button-addon1" @click="openWorkout(item.id)">{{ item.name }}</button>
    </div>  
</template>
    
<script>
import ApiService from "@/services/api/api.js"
export default {
  data() {
    this.getListTraining();
    return {
      items: null,
      isLoading: true,
    }
  },

  methods: {
    getListTraining() {
      this.isLoading = true;
      ApiService.Training.GetAllTraining().then(response => {
        this.items = response.data;
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
#center-client-training{
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style> 