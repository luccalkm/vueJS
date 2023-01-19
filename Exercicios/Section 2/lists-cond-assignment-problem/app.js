const app = Vue.createApp({
    data() {
        return {
            inputText: '',
            tasks: [],
            show: false,
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputText)
        },
        removeTask(index){
            this.tasks.splice(index, 1)
        },
        toggleVisibility(){
            this.show = !this.show
            console.log(this.show);
        }
    },
})

app.mount('#assignment')