<script setup>
</script>

<template>
<nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/Client/Main">Главное</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" to="/Client/Exercises">Упражения</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/Client/Training">Тренировки</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/Client/Statistics">Статистика</router-link>
        </li>
      </ul>
      <router-link class="navbar-brand d-flex" to="/Client/Profile">
        <i class="bi bi-gear-fill navbar-brand d-flex"></i>
      </router-link>
    </div>
  </div>
</nav>
</template>

<style scoped>
</style>
