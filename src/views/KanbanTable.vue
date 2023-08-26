<template>
    <main class="KanbanView">
        <CreateModal v-if="modalVisible" @create-info=""/>
        <h2>Kanba Board</h2>
        <button @click="handleCreate">Create new board</button>
        <Todos/>
    </main>
</template>

<script setup>
import Todos from '../components/Todos.vue';
import CreateModal from "../components/CreateModal.vue"
import { inject } from 'vue';
const { modalVisible, toggleModal } = inject('modalState');
const handleCreate = ()=>{
    toggleModal();
}



</script>
<style scoped>
   .KanbanView{
    position: relative;
    width: 100%;
    height: calc( 100vh - 60px);
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   } 

   .KanbanView h2{
    font-size: 30px;
    color: white;
    border-bottom: solid 1px #000;
    border-radius: 7px;
   }

   .KanbanView button{
    padding: 10px;
    border-radius: 10px;
    background-color: var(--color4);
    border: none;
    outline: none;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    cursor: pointer;
   }

   .KanbanView button:hover{
    box-shadow: rgba(14, 30, 37, 0.438) 0px 2px 4px 0px, rgba(14, 30, 37, 0.518) 0px 2px 16px 0px;
   }
</style>