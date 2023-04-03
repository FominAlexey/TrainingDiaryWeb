<template> 
    <div id="center-client-training">
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
    }
  },

  methods: {
    getListTraining() {
      ApiService.Training.GetAllTraining().then(response => {
        this.items = response.data;
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