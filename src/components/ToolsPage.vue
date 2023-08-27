<script setup>
 import {VueTools} from "../data/Tools"
</script>
 
 
<template>
  <div class="Tools">
    <div v-for="tool in VueTools" class="toolcard">
        <img :src="tool.image" :alt="tool.name">
        <h3>{{ tool.name }}</h3>
    </div>
  </div>
</template>
 
 
<style scoped>
 .Tools{
    width: 55%;
    height: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
 }

 .toolcard{
    width: 250px;
    height: 180px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 7px;
    background-color: var(--color4);
    transition: 0.3s;
 }
 .toolcard:hover{
    transform: scale(1.04);
 }

 .toolcard img{
    border-radius: 7px 7px 0px 0px;
    width: 250px;
    height: 140px;
    background-clip: content-box;
 }

 .toolcard h3{
    text-align: center;
 }

</style>