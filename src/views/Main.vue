<template>
    <div class="display-6 text-center" id="full-screen-default">
        <button class="btn btn-danger" @click="pushToLogin">Ты готов?</button>
    </div>
</template> 
<script>
export default {
    methods: {
        pushToLogin() {
            this.$router.push('/Account/Login');
        }
    }
}
</script>
<style>
#full-screen-default{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>