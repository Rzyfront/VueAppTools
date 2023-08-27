<template>
    <main class="KanbanView">
        <CreateBoardModal v-if="modalBoardVisible" @create-info="handleCreate"/>
        <CreateTaskModal v-if="modalTaskVisible" @task-info="handleAdd"/>
        <h2>Kanban Board</h2>
        <button title="Click to create new board" @click="toggleBoardModal" >Create new board</button>
        <Todos :boards="boards" @gattaskid="getTaskID"/>

    </main>
</template>

<script setup>
import Todos from '../components/Todos.vue';
import CreateBoardModal from "../components/CreateBoardModal.vue"
import CreateTaskModal from "../components/CreateTaskModal.vue"
import { inject, reactive, ref } from 'vue';

const taskToAdd = ref("");


const { modalBoardVisible, toggleBoardModal, modalTaskVisible, toggleTaskModal } = inject('modalState');

const handleCreate = (boardName)=>{
    if (boardName.value !== "" && boards.length<5) {
        boards.push({
            id: crypto.randomUUID(),
            name: boardName.value,
            items: []
        })
        toggleBoardModal();
    }else if (boards.length >= 5) {
        alert("5 board maximummm")
    }
    
}

const getTaskID = (id)=>{
    taskToAdd.value= id;
}


const handleAdd = (taskName) => {
    if (taskName.value !== "" && taskToAdd.value !== "") {
        for (const board of boards) {
            if (board.id === taskToAdd.value) {
                if (board.items.length >= 6) {
                    return alert("6 Tasks maximummm")
                }
                board.items.push({
                    id: crypto.randomUUID(),
                    title: taskName.value,
                })
            }
        }
        taskName.value="";
        toggleTaskModal();
    }

}

let boards = reactive([
    {
        id: crypto.randomUUID(),
        name: "Example",
        items: [
            {
                id: crypto.randomUUID(),
                title: "Task example 1",
            }, {
                id: crypto.randomUUID(),
                title: "Task example 1"
            }
        ]
    },
    
])


</script>
<style scoped>
   .KanbanView{
    position: relative;
    width: 100%;
    height: calc( 100vh - 90px);
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 30px;
   } 

   .KanbanView h2{
    font-size: 30px;
    color: white;
    border-bottom: solid 1px #000;
    border-radius: 7px;
    padding: 0;
    margin: 0;
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
     background-color: var(--color2);
    color: white;
   }

   .KanbanView button:active{
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
   }
</style>