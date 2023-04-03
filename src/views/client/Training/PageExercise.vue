<template> 
    <div id="center-client-exercise">
        <div class="display-6">{{ items?.name }}</div>
    </div>
    <p class="text-start ms-4 fs-5">
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
    }
  },
  methods: {
    getExercise() {
      if (this.$route.query.ExerciseId == 1) {
        ApiService.Exercises.GetExercisePullUps().then(response => {
          this.items = response.data;
        })
      } else {
        ApiService.Exercises.GetExercisesSquats().then(response => {
          this.items = response.data;
        })
      }
    },
  }
}
</script>
    
<style>
#center-client-exercise{
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style> 