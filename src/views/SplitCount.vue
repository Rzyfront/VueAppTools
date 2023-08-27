<script setup>
import SideBar from '../components/SideBar.vue';
import ShowBill from '../components/ShowBill.vue';

</script>
 
 
<template>
    <div class="page">
        <SideBar/>
        <ShowBill/>
    </div>
</template>
 
 
<style scoped>
 .page{
    display: flex;
    width: 100%;
    height: calc( 100vh - 60px );
    overflow: hidden;
 }
</style>