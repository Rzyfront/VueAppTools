<script setup>
 import { defineProps } from 'vue';

 const props = defineProps(["text", "customStyle"]);

 const {text, customStyle } = props;
</script>
 
 
<template>
    <button class="button" :style="customStyle">
        {{ text }}
    </button>
</template>
 
 
<style scoped>
.button{
    width: 150px;
    padding: 10px 30px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: var(--color4);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

.button:hover{
    background-color: var(--color2);
    color: white;
}
</style>