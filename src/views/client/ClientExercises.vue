<template> 
    <div id="center-client-exercises">
        <div class="display-6">Упражнения</div>
    </div>
    <div class="input-group mt-3 ms-2" v-for="item in items?.listExercises" :key="item.id">
      <button class="btn btn-danger" type="button" id="button-addon1" @click="outExercise(item.id)">{{ item.name }}</button>
    </div>  
</template>
    
<script>
import ApiService from "@/services/api/api.js"
export default {
   data() {
    this.getListExercises();
    return {
      items: null,
    }
  },
  methods: {
    getListExercises() {
      ApiService.Exercises.GetAllExercises().then(response => {
        this.items = response.data;
      })
    },
    outExercise(id) {
      if (id == 1) {
        this.$router.push('/Client/Exercise?ExerciseId=1')
      } else {
        this.$router.push('/Client/Exercise?ExerciseId=2')
      }
    }
  }
}
</script>
    
<style>
#center-client-exercises{
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style> 