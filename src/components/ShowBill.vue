<script setup>
import { getGrandTotal, store } from '../store/store';
import Label from './ui/Label.vue';
import PersonBill from './PersonBill.vue';

let customStyles = {
   color : 'var(--color4)'
}
</script>
 
 
<template>
 <div class="no-items" v-if="store.people.length === 0">
    No items
 </div>
 <div v-else class="bill">
    <div class="bill-card">

        <header class="bill-header">
            <div>
                <Label title="Total + Tip: " :value="getGrandTotal()" :custom-style="customStyles"/>
            </div>
            <div>
                <Label title="Remaining: " :value="store.params.remaining"/>
            </div>
        </header>
        <section class="bill-body">
            <PersonBill v-for="person in store.people" :key="person.id" :id="person.id" :number-person="person.numberOfPerson" :totalPerPerson="person.totalPerPerson" :paid="person.paid"/>
        </section>

    </div>
 </div>
</template>
 
 
<style scoped>
 
 .no-items {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
 }

 .bill{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
 }

 .bill-card{
   overflow: hidden;
    width: 98%;
    height: calc(100vh - 60px);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
 }

 .bill-header{
    width: 100%;
    padding: 40px 0px 10px 0px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    flex-wrap: wrap;
 }

 .bill-body{
  width: 100%;
  padding: 40px;
  min-height: fit-content;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  flex-wrap: wrap;
  overflow-y: auto;
 } 
</style>