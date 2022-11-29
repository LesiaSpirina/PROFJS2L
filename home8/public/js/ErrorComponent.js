Vue.component('error', {
    data(){
        return {
            text: ''
        }
    },
   
   methods: {
    setText (value) {
        this.text = value;
    }
   },
   computed: {
    isVisible(){
        return this.text !== ''
    }
  },
    template: `
    <div class="error-block" v-if="isVisible">
       <p class="error-msg"><span class="err-margin">{{text}}</span>
       <button class="close-btn" @click="setText('')">X</button>
       </p>
    </div>   `
})