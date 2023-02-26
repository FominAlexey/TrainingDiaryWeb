<template>
   <div>
     <p>
        <router-link to="/Account/Login">Login</router-link>
        &nbsp;
        <router-link to="/">Default</router-link>
          &nbsp;
        <router-link to="/Client/Start">Client</router-link>
     </p>
  </div>
  <component :is="$route.meta.layout || 'div'"></component>
</template>
<script>

export default {
  name: 'App',
}
</script>