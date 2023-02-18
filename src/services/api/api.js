import ApiUrls from "./api.urls"
import ApiBase from "./api.base"

export default {
    training: {
        getAll() {
            return ApiBase.get(ApiUrls.training.base);
        },
    },
}