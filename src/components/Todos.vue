<template>
    <section class="boards-container">
        <div class="board" v-for="board in boards" :key="board.id">
            <div class="board-title">{{ board.name }}</div>
            <div class="items">
                <div class="item" v-for="item in board.items" :key="item.id">
                    {{ item.title }}
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

import { reactive } from "vue";

let boards = reactive([
    {
        id: crypto.randomUUID(),
        name: "Tablero 1",
        items: [
            {
                id: crypto.randomUUID(),
                title: "Create a project"
            }, {
                id: crypto.randomUUID(),
                title: "Create a project2"
            }
        ]
    },
      {
        id: crypto.randomUUID(),
        name: "Tablero 2",
        items: [
            {
                id: crypto.randomUUID(),
                title: "Create a project3"
            }, {
                id: crypto.randomUUID(),
                title: "Create a project4"
            }
        ]
    }
])

</script>
<style scoped>
    
    .boards-container{
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .board{
        display: flex;
        gap: 5px;
        flex-direction: column;
        width: 200px;
        height: fit-content;
        padding:15px 10px;
        background-color: white;
        border-radius: 3px;
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
        padding: 10px;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        cursor: pointer;
    }



    
</style>