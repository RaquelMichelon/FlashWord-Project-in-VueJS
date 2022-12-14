//create a new vue instance - createApp()
//to attach to an element in our page / this will plug the vue app with the html - mount()

//create an Options obj and assign to a constant, then pass that as an arg of createApp()
const FlashWord = {
    //vue data is reactive
    data() {
        return {
            //define the data properties here
            wordA: 'olá / oi',
            wordB: 'hello',
            //this will be filled by the user
            answer: '',
            //correct will be a boolean
            correct: null,
            showFeedback: false,

            //to learn list rendering
            //array example
            portugueseWords: ['oi', 'tchau', 'um', 'dois',],

            //object example
            word: {a: 'oi', b: 'hello'},

            //array of objects examples
            words: [
                {wordA: 'oi', wordB: 'hello'}, 
                {wordA: 'tchau', wordB: 'goodbye'}, 
                {wordA: 'um', wordB: 'one'}, 
                {wordA: 'dois', wordB: 'two'},
            ],
        }
    },
    //we can also have the methods option
    methods: {
        checkAnswer() {
            this.correct = this.wordB == this.answer; 
            this.showFeedback = true
        },
        resetAnswer() {
            this.showFeedback = false,
            this.answer = ''
        }
    }
}


const app = Vue.createApp(FlashWord).mount('#app');