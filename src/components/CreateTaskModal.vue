<template>
     <div  @click="toggleTaskModal" class="modal-container">
            <div @click="handleModal" class="modal">
                <Close class="close" v-on:click="toggleTaskModal"/>
                <h3 class="create-title">Add new task</h3>
                <input autofocus type="text" placeholder="Taks name" class="create-input" v-model="taskName" @keydown="handleKeyDown">
                <button @click="handleAdd" class="create-button">Add</button>
            </div>
        </div>
</template>

<script setup>
import { ref, inject, defineEmits } from 'vue';
import Close from "./ui/Close.vue"


const emits = defineEmits(["taskInfo"]);
const taskName = ref("");
const { toggleTaskModal } = inject('modalState');


const handleModal = (e) => {
    e.stopPropagation();
}

const handleAdd = (e) => {  
    e.stopPropagation();
    emits("taskInfo", taskName);
}

const handleKeyDown = (e) => {
    if (e.key === "Enter") {
        handleAdd(e);
    }
}
</script>

<style>
      .modal-container{
        position: absolute;
        width: 100%;
        height: calc( 100vh - 90px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 50;
        backdrop-filter: blur(3px); 
        overflow: hidden;
    }

    .modal{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: fit-content;
        background-color: white;
        padding: 50px 0px;
        border-radius: 10px;
        box-shadow: rgba(17, 17, 26, 0.527) 0px 4px 16px, rgba(17, 17, 26, 0.516) 0px 8px 24px, rgba(17, 17, 26, 0.491) 0px 16px 56px;
    }

    .create-title{
        padding: 15px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgb(209, 52, 52) 0px 1px 2px;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .create-input{
        height: 30px;
        border-radius: 5px;
        outline: none;
        border: none;
        border-bottom: solid 1px #00000082;
    }

    .create-button{
        width: 150px;
        padding: 10px 30px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: var(--color4);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    }

    .create-button:hover{
        background-color: var(--color2);
        color: white;
    }

    .close{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 25px;
        height: 25px;
        transition: 0.3s;
    }

    .close:hover{
        transform: scale(1.1);
    } 
</style>