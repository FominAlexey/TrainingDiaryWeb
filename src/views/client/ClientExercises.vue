<template> 
    <div id="center-client-exercises">
        <div class="display-6">Упражнения</div>
    </div>
    <div class="input-group mt-3 ms-2">
      <button class="btn btn-danger" type="button" id="button-addon1" @click="outExercise">Подтягивания</button>
    </div>  
</template>
    
<script>
export default {
    methods: {
        outExercise() {
            this.$router.push('/Client/Exercise?ExerciseId=1')
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