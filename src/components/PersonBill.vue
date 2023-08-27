<script setup>
import { ref } from 'vue';
import { pay } from '../store/store';
import { FormatUSD } from '../helpers/FormatUSD';

const props = defineProps(["id", "numberPerson", "totalPerPerson", "paid"]);
let paid = ref(false)

 function handleChange (e){
    paid=e.target.checked;
    pay(props.id, paid);
}
</script>
 
 
<template>
  <div class="person-bill">
    <div :class="['person-number', props.paid ? 'person-number-true' : '']">
        Person: {{ props.numberPerson }}
    </div>
    <div :class="['person-to-pay', props.paid ? 'person-to-paytrue': '']">
        {{ 
        FormatUSD(props.totalPerPerson)    
        }}
    </div>
    <div :class="['pay', props.paid ? 'paytrue' : '']" >
        <input type="checkbox" name="pay" @change="handleChange"/> Paid
    </div>
  </div>
</template>
 
 
<style scoped>
 .person-bill{
  width: 200px;
  height: 120px;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  white-space: nowrap; /* Evita que el texto se divida en múltiples líneas */
  overflow: hidden; /* Oculta el contenido que se desborda del contenedor */
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
 }

 .person-number{
  background-color: var(--color4);
  padding: 5px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
 }

 .person-number-true{
  background-color: rgba(94, 209, 131, 0.618);
 }
 .person-to-pay{
  border-bottom: solid 1px red;
  border-radius: 3px;
 }

 .person-to-paytrue{
    border-bottom: solid 1px rgb(0, 255, 102);
    border-radius: 5px;
 }

 .pay{
  display: flex;
  align-items: center;
  justify-content: center;
    background-color: rgba(209, 94, 94, 0.618);
  padding: 2px;
  border-radius: 3px;
 }

 .paytrue{
    background-color: rgba(94, 209, 131, 0.618);
 }
</style>