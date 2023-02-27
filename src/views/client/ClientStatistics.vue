<template>
  <div id="center-client-statistics">
    <div class="display-6">Статистика</div>
  </div>
  <div class="input-group mt-3 ms-2">
      <span class="input-group-text" id="inputGroup-sizing-default">Рост</span>
      <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
  </div>
  <div class="input-group mt-3 ms-2">
      <span class="input-group-text" id="inputGroup-sizing-default">Вес</span>
      <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
  </div>
  <div class="input-group mt-3 ms-2">
      <span class="input-group-text" id="inputGroup-sizing-default">Ккалории</span>
      <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
  </div>
  <div class="input-group mt-3 ms-2">
      <span class="input-group-text" id="inputGroup-sizing-default">Ср.Время тренировки</span>
      <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example">
  </div>
  <div id="center-client-statistics">
    <Chart
        :size="{ width: 500, height: 400 }"
        :data="data"
        :margin="margin"
        :direction="direction">

        <template #layers>
        <Grid strokeDasharray="2,2" />
        <Line :dataKeys="['name', 'pl']" />
        </template>

    </Chart>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Chart, Grid, Line } from 'vue3-charts'
import { plByMonth } from '/src/store/data/dataChart'

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Grid, Line },
  setup() {
    const data = ref(plByMonth)
    const direction = ref('horizontal')
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0
    })

    return { data, direction, margin }
  }
})
</script>

<style>
#center-client-statistics{
width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#app {
  color: #040404
}
</style>