<template>
   
        <div class="input_Tag_Container">

          <div class="tags">
              <div class="tag" v-for="(tag, index) in tags" :key="index">
                  {{ tag }} <button @click="deleteTag(tag)"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/macos-close.png" alt="macos-close"/></button>
              </div>
          </div>
          <form @submit.prevent="handleSubmit">
            <input class="input" type="text" v-model="currentValue" @keydown="handleKeyDown" placeholder="Ingresa un texto">
          </form>

      </div>

</template>
<script>
export default {
     data() {
        return {
            currentValue: "",
            tags: [],
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
            if (this.currentValue !== "") {
                this.tags.push(this.currentValue);
                this.currentValue = "";
                this.onTagsChange(this.tags)
                 // this.$emit("onTagsChange", this.tags); para agregarlo como @onTagsChange
            }
        },
        deleteTag(tag) {
            this.tags = this.tags.filter(item => item !== tag);
            this.onTagsChange(this.tags)
             // this.$emit("onTagsChange", this.tags); para agregarlo como @onTagsChange
        }
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
      background-color: white;
      padding: 2px 0px 2px 10px;
      box-shadow: rgba(0, 0, 0, 0.544) 0px 1px 4px;
      border-radius: 5px;
    }

    .inputTag .input_Tag_Container .tags .tag button{
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      border: none;
      background-color: white;
      border-radius: 5px;
      cursor: pointer;
    }

    .inputTag .input_Tag_Container .tags .tag button img{
      width: 25px;
      height: 25px;
      border-radius: 50%;
      transition: 0.2s;
    }

    .inputTag .input_Tag_Container .tags .tag button:hover img{
      transform: rotate(180deg);
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