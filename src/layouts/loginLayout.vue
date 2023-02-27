<template>
  <div class="display-6" id="center-account-login">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "loginLayout",
};
</script>
<style>
#center-account-login{
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
