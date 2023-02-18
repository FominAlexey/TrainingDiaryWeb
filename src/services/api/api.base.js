export default {

    async get(url) {
        return this.axios.get(url);
    },

    async post(url, body) {
        return this.axios.post(url, body);
    },

    async put(url, body) {
        return this.axios.put(url, body);
    },

    async delete(url) {
        return this.axios.delete(url);
    },
};
