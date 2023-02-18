<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar/>
  <transition name="fade">
    <router-view/>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 1s;
}

.fade-enter-active {
  transition-delay: 1s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

</style>
