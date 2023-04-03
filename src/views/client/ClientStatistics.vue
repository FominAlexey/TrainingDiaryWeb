<template>
  <div v-if="isLoading" id="center-client-main" >
    <div  class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status"/>  
  </div>
  <div v-show="!isLoading" id="center-client-statistics">
    <div class="display-6">Статистика</div>
  </div>
  <div class="input-group mt-3 ms-2">
    <span class="input-group-text" id="inputGroup-sizing-default">Рост</span>
    <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="items.height">
  </div>
  <div class="input-group mt-3 ms-2">
    <span class="input-group-text" id="inputGroup-sizing-default">Вес</span>
    <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="items.weight">
  </div>
  <div class="input-group mt-3 ms-2">
    <span class="input-group-text" id="inputGroup-sizing-default">Ккалории</span>
    <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="items.calories">
  </div>
  <div class="input-group mt-3 ms-2">
    <span class="input-group-text" id="inputGroup-sizing-default">Ср.Время тренировки</span>
    <input type="text" class="form-control flex-grow-0 w-25" aria-label="default input example" v-model="items.time">
  </div>
  <div v-show="!isLoading" id="center-client-statistics">
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
import ApiService from "@/services/api/api.js"

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
  },
  data() {
    this.getStatistics();
    return {
      items: null,
      isLoading: true,
    }
  },
  methods: {
    getStatistics() {
      this.isLoading = true;
      ApiService.Account.GetStatistics().then(response => {
        this.items = response.data;
        this.isLoading = false;
      })
    }
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