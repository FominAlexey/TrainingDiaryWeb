const BASE_URL = 'https://functions.yandexcloud.net'

export default {
  Training: {
    GetListTraining: BASE_URL + '/d4evsplmeapjm58mt2j6',
    GetTrainingBoxing: BASE_URL + '/d4ehn8ao7ojmglc2qf6a',
    GetTrainingGym: BASE_URL + '/d4e03g99k85ac95qfdf1'
  },

  Exercises: {
    GetListExercises: BASE_URL + '/d4e6hrl26ic1gcevpd60',
    GetExercisePullUps: BASE_URL + '/d4ebj0rtsj5en3t2gnke',
    GetExercisesSquats: BASE_URL + '/d4ee943u97vf0778qlfv'
  },

  Account: {
    GetAccount: BASE_URL + '/d4e2m3dm3h44kcsm9sdu',
    GetStatistics: BASE_URL + '/d4e50omsbkrpcr2p0sfm'
  }
};
