<template>
  <main class="inputTag">
    <h2>Input multiselector tags</h2>
    <InputMultiTag :onTagsChange="handlerOnTagsChange"/>
  </main>
</template>

<script>
import InputMultiTag from '../components/InputMultiTag.vue'

export default {
  components:{
    InputMultiTag
  },
  methods:{
    handlerOnTagsChange(tags){
      console.log(tags);
    }
  }
}
</script>

<style scoped>
  .inputTag{
    max-width: 100%;
    height: calc( 100vh - 90px );
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 30px;
    overflow: hidden;
  }

   .inputTag h2{
    font-size: 30px;
    color: white;
    border-bottom: solid 1px #000;
    border-radius: 7px;
  }

</style>