<template >
    <div class="modal-container">
        <div class="modal">
            <h3 class="create-title">Create new board</h3>
            <input type="text" placeholder="Board name" class="create-input">
            <button class="create-button">Create</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    
    .modal-container{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 50;
        backdrop-filter: blur(3px); 
    }

    .modal{
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
        padding: 5px 30px;
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
</style>