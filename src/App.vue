<template>
  <component :is="$route.meta.layout || 'div'"></component>
</template>
<script>

export default {
  name: 'App',
}
</script>