<template>
   
        <div class="input_Tag_Container">

          <div class="tags">
              <div class="tag" v-for="(tag, index) in tags" :key="index">
                  {{ tag }} <CloseBoard @click="deleteTag(tag)" class="delete-task"/>
              </div>
          </div>
          <form @submit.prevent="handleSubmit">
            <input class="input" type="text" v-model="currentValue" @keydown="handleKeyDown" placeholder="Ingresa un texto">
          </form>

      </div>

</template>
<script>
import CloseBoard from './ui/CloseBoard.vue';

export default {
     data() {
        return {
            currentValue: "",
            tags: ["Example"],
        }
    },
    // emits: ["onTagsChange"], para agregarlo como @onTagsChange
    props: ["onTagsChange"],
    methods: {
        handleKeyDown(e) {
            if (e.key === "Backspace" && this.currentValue === "") {
                this.tags.pop()
                this.onTagsChange(this.tags);
                // this.$emit("onTagsChange", this.tags); para agregarlo como @onTagsChange
            }
        },
        handleSubmit() {
            if (this.currentValue !== "" && this.tags.length < 5) {
                this.tags.push(this.currentValue);
                this.currentValue = "";
                this.onTagsChange(this.tags)
                 // this.$emit("onTagsChange", this.tags); para agregarlo como @onTagsChange
            }else if (this.tags.length >= 5) {
              alert("5 tags maximummn");
            }
        },
        deleteTag(tag) {
            this.tags = this.tags.filter(item => item !== tag);
            this.onTagsChange(this.tags)
             // this.$emit("onTagsChange", this.tags); para agregarlo como @onTagsChange
        }
    },
    components: {
    CloseBoard
    },

}
</script>
<style scoped>
    
  .inputTag .input_Tag_Container{
    display: inline-flex;
    background-color: white;
    border: solid 1px #272727;
    border-radius: 5px;
    height: 40px;
  }

    .inputTag .input_Tag_Container .tags{
      display: flex;
      gap: 5px;
      padding: 5px;
      border-radius: 5px;
    }

    .inputTag .input_Tag_Container .tags .tag{
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      background-color: var(--color4);
      padding: 2px 0px 2px 10px;
      box-shadow: rgba(0, 0, 0, 0.544) 0px 1px 4px;
      border-radius: 5px;
    }

    .delete-task{
      width: 25px;
      height: 25px;
      transition: 0.4s;
    }

    .tag:hover .delete-task{
      transform: rotate(90deg);
    }

    .inputTag .input_Tag_Container form{
      display: inline-flex;
      height: 100%;
      padding: 0;
      margin: 0;
      border-radius: 5px;
    }

      .inputTag .input_Tag_Container form .input{
        outline: none;
        border: none;
        height: 100%;
        padding: 0%;
        margin: 0%;
        border-radius: 5px;
      }
</style>