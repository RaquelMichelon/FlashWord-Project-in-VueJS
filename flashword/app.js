//create a new vue instance - createApp()
//to attach to an element in our page / this will plug the vue app with the html - mount()

//create an Options obj and assign to a constant, then pass that as an arg of createApp()
const FlashWord = {
    data() {
        return {
            //define the data properties here
            wordA: 'olá / oi',
            wordB: 'hello'
        }
    }
}


const app = Vue.createApp(FlashWord).mount('#app');