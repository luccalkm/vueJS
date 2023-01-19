const app = Vue.createApp({
  data() {
    return {
      // Valores
      inputGoal: '',
      genId: 'first',
      goals: [],
      index: 0,
    }
  },
  methods: {
    addGoal(){
      if(this.inputGoal){
        const date = new Date();
        const day = date.getDate()
        const month = date.getMonth() + 1 <= 10 ? '' + date.getMonth() + 1 : date.getMonth() + 1;
        const year = date.getFullYear()
        
        this.goals.push({
            id: this.index,
            date: `${day}/${month}/${year}`,
            goal: this.inputGoal
        })
        this.index++
        this.inputGoal = ''
      }
    },
    clearGoals(){
      this.goals = []
    },
    removeGoal(id){
      this.goals = this.goals.filter((goal) => goal.id !== id)
    },
  },
})

app.mount('#user-goals')
document.addEventListener('click', (e) => {
  console.log(e.target.id)
})
