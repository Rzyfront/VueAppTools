<script setup>
 import Welcome from '../components/Welcome.vue';
 import ToolsPage from '../components/ToolsPage.vue';

</script>
 
 
<template>
  <div class="home">
    <Welcome/>
    <ToolsPage/>
  </div>
</template>
 
 
<style scoped>
 
 .home{
    width: 100%;
    height: calc( 100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
 }
</style>