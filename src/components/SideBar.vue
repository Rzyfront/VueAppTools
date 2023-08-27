<script setup>
import { ref } from 'vue';
import { store, calculate, resetStore } from "../store/store";
import Button from "../components/ui/Button.vue";

const total = ref(0);
const tip = ref(0);
const people = ref(0);

 function handleSubmit (){
    resetStore(   )
    store.params.total = total;
    store.params.tip = tip;
    store.params.people = people;
    calculate();
   return
}
</script>
 
 
<template>
    <div class="sidebar-container">
        <form class="form" @submit.prevent="handleSubmit">
            <div>
                <label for="total">Total</label>
                <input type="number" required name="total" v-model="total">
            </div>

            <div>
                <label for="tip">Tip%</label>
                <input type="number" required name="tip" v-model="tip">
            </div>

            <div>
                    <label for="people">Peole</label>
                    <input type="number" required name="people" v-model="people">
            </div>
            <Button :text="'Calcular'"/>
        </form>
    </div>
</template>
 
 
<style scoped>
 .sidebar-container{
    margin: 0px 0px;
    padding: 10px;
    border-radius: 0px 5px 5px 0px;
    width: 250px;
    height: 100%;
    background-color: var(--color2);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.524) 0px 6px 12px -2px, rgba(0, 0, 0, 0.655) 0px 3px 7px -3px;
 }

 .form{
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 }

 .form div{
    display: flex;
    flex-direction: column;
    gap: 5px;
 }

 .form div label{
    color:white;
 }

 .form div:hover label{
    color: var(--color4);
 }

 .form div input{
    width: 100%;
    height: 30px;
    border-radius: 3px;
    border: none;
    outline: none;
    padding:0px 0px 0px 10px;
 }
</style>