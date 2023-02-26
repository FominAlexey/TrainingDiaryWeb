<template>
	<Navbar/>
    <router-view  />
</template>

<script>
import Navbar from '../components/Client/Navbar.vue';
export default {
	
	name: "clientLayout", // you can enter any name (optional)
	components: {
		Navbar
	},
}
</script>
