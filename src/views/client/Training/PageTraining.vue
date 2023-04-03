<template> 
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
</template>
    
<script>
import ApiService from "@/services/api/api.js"
export default {
  data() {
    this.getTraining();
    return {
      items: null,
    }
  },

  methods: {
    getTraining() {
      if (this.$route.query.id == 1) {
        ApiService.Training.GetTrainingBoxing().then(response => {
          this.items = response.data;
        })
      } else {
        ApiService.Training.GetTrainingGym().then(response => {
          this.items = response.data;
        })
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