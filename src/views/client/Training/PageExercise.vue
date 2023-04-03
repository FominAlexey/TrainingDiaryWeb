<template> 
    <div v-if="isLoading" id="center-client-exercises" >
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status"></div>  
    </div>
    <div v-show="!isLoading" id="center-client-exercise">
        <div class="display-6">{{ items?.name }}</div>
    </div>
    <p v-show="!isLoading" class="text-start ms-4 fs-5">
        {{ items?.description }}
    </p>
</template>
    
<script>
import ApiService from "@/services/api/api.js"
export default {
  data() {
    this.getExercise();
    return {
      items: null,
      isLoading: true,
    }
  },
  methods: {
    getExercise() {
      this.isLoading = true;
      if (this.$route.query.ExerciseId == 1) {
        ApiService.Exercises.GetExercisePullUps().then(response => {
          this.items = response.data;
          this.isLoading = false;
        })
      } else {
        ApiService.Exercises.GetExercisesSquats().then(response => {
          this.items = response.data;
          this.isLoading = false;
        })
      }
      this.isLoading = false;
    },
  }
}
</script>
    
<style>
#center-client-exercise{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3%;
}
</style> 