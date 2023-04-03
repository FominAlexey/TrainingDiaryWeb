import ApiUrls from "./api.urls"
import ApiBase from "./api.base"

export default {
  Training: {
    GetAllTraining() {
      return ApiBase.get(ApiUrls.Training.GetListTraining);
    },
    GetTrainingBoxing() {
      return ApiBase.get(ApiUrls.Training.GetTrainingBoxing);
    },
    GetTrainingGym() {
      return ApiBase.get(ApiUrls.Training.GetTrainingGym);
    },
  },
  
  Exercises: {
    GetAllExercises() {
      return ApiBase.get(ApiUrls.Exercises.GetListExercises);
    },
    GetExercisePullUps() {
      return ApiBase.get(ApiUrls.Exercises.GetExercisePullUps);
    },
    GetExercisesSquats() {
      return ApiBase.get(ApiUrls.Exercises.GetExercisesSquats);
    },
  },

  Account: {
    GetAccount() {
      return ApiBase.get(ApiUrls.Account.GetAccount);
    },
    GetStatistics() {
      return ApiBase.get(ApiUrls.Account.GetStatistics);
    }
  }
}