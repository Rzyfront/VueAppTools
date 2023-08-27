<script setup>
 import { defineProps } from 'vue';
 import { FormatUSD } from '../../helpers/FormatUSD';

 const props = defineProps(["title", "value","customStyle"])
</script>
 
 
<template>
    <div> 
        <span class="title">{{ props.title }}</span>
        <span :class="['value', props.value === 0 ? 'valuepaid': '']" :style="props.customStyle">{{ 
        FormatUSD(props.value)
        }}</span>
    </div>
</template>
 
 
<style scoped>
 .title {
    font-weight: bold;
 }
 .value {
    color: rgb(212, 69, 69);
 }

 .valuepaid{
    color: rgb(69, 212, 88);
 }
</style>