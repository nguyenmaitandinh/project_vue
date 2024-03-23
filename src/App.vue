<template>
<navbar/>
<router-view/>

</template>

<script>

import navbar from "@/components/Navbar.vue";



export default {
  name: 'App',
  components: {navbar}
}
</script>

<style>

</style>
