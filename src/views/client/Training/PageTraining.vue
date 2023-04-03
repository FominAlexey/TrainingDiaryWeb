<template>
  <div v-if="isLoading" v-show="isLoading" id="center-client-exercises" >
    <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status"></div>  
  </div> 
  <div v-else v-show="!isLoading">
    <div id="center-client-training">
        <div class="display-6">{{ items?.date }}</div>
        <div class="display-6">{{ items?.name }}</div>
    </div>
    <table class="table mt-4">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Упражнение</th>
                <th scope="col">Количество</th>
                <th scope="col">Минуты</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items?.exercises" :key="index">
                <th scope="row">{{ index }}</th>
                <td>{{ item.nameWorkout }}</td>
                <td>{{ item.count }}</td>
                <td>{{ item.timeWorkout }}</td>
            </tr>
        </tbody>
    </table> 
  </div> 
</template>
    
<script>
import ApiService from "@/services/api/api.js"
export default {
  data() {
    this.getTraining();
    return {
      items: null,
      isLoading: true,
    }
  },

  methods: {
    getTraining() {
      this.isLoading = true;
      if (this.$route.query.id == 1) {
        ApiService.Training.GetTrainingBoxing().then(response => {
          this.items = response.data;
          this.isLoading = false;
        })
      } else {
        ApiService.Training.GetTrainingGym().then(response => {
          this.items = response.data;
          this.isLoading = false;
        })
      }
    }
  }
}
</script>
    
<style>
#center-client-training{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3%;
}
</style> 