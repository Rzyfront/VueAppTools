<template>
    <section class="boards-container">
        <div class="board" @drop="onDrop($event, board)" @dragover.prevent @dragenter.prevent v-for="board in boards" :key="board.id">
            <CloseBoard @click="hadleCloseBoard(board)" class="close-board"/>
            <div class="board-title">{{ board.name }}</div>
            <div class="items">
                <div title="You can drag task to other board or check to  complete" draggable="true" @dragstart="startDrag($event, board, item)" class="item" v-for="item in board.items" :key="item.id">
                    {{ item.title }} <Check class="check" @click="habldeCheckTask(board, item)"/>
                </div>
                <button title="Click to add new task" @click="handleAddButton(board.id)" class="add-buttom">Add taks <img width="20" height="20" src="https://img.icons8.com/pulsar-color/48/plus-2-math.png" alt="plus-2-math"/></button>
            </div>
        </div>
    </section>
</template>
<script setup>
import { defineProps, inject, defineEmits } from 'vue';
import CloseBoard from "../components/ui/CloseBoard.vue";
import Check from "../components/ui/Check.vue";

const { toggleTaskModal } = inject('modalState');
const emits = defineEmits(["gataskid"])
const props = defineProps(["boards"])
let {boards} = props;


const handleAddButton = (id)=>{
    toggleTaskModal();
    emits("gattaskid", id);
}

const hadleCloseBoard = (board)=>{
   const boardToDelete = boards.indexOf(board);
   boards.splice(boardToDelete,1); 
}

const habldeCheckTask = (board,task)=>{
    const itemToDelete = board.items.indexOf(task)
    board.items.splice(itemToDelete,1);
}

function startDrag(e, board, item) {
    e.dataTransfer.setData("text/plain",JSON.stringify({boardId: board.id, itemId: item.id}))
}
function onDrop(e, dest) {
    const { boardId, itemId } = JSON.parse(e.dataTransfer.getData("text/plain"));
    console.log(boardId, itemId);

    const originBoard = boards.find((board)=> board.id == boardId);
    const originItem = originBoard.items.find((item)=> item.id == itemId);

    if (dest.items.length >=6) {
        return alert("6 Tasks maximummn")
    }
    dest.items.push({...originItem});
    originBoard.items = originBoard.items.filter(item => item.id !== itemId);
}


</script>
<style scoped>
    
    .boards-container{
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .board{
        position: relative;
        display: flex;
        gap: 5px;
        flex-direction: column;
        width: 200px;
        height: fit-content;
        padding:15px 10px;
        background-color: white;
        border-radius: 7px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }

 
    .board-title{
        padding: 15px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgb(209, 52, 52) 0px 1px 2px;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .board:hover .board-title{
       box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgb(52, 70, 209) 0px 1px 2px;
    }

    .items{
        display: flex;
        gap: 5px;
        flex-direction: column;
    }

    .item{
        position: relative;
        padding: 10px;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        cursor: pointer;
        white-space: nowrap; /* Evita que el texto se divida en múltiples líneas */
        overflow: hidden; /* Oculta el contenido que se desborda del contenedor */
        text-overflow: ellipsis; 
    }

    .add-buttom{
        display: flex;
        gap: 10px;
        padding: 5px 10px;
        align-items: center;
        justify-content: center;
        background-color: var(--color4);
        outline: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 15px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgb(209, 52, 52) 0px 1px 2px;
    }

    .add-buttom:hover{
         box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgb(52, 70, 209) 0px 1px 2px;
         color: white;
         background-color: var(--color2);
    }

    .add-buttom:active{
        box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
    }

    .close-board{
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 10;
        width: 30px;
        height: 30px;
        transition: 0.2s;
    }

    .close-board:hover{
        transform: scale(1.1);
    }

    .check{
        position: absolute;
        width: 25px;
        height: 25px;
        top: 7px;
        right: 5px;
        z-index: 10px;
    }
    
</style>