const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn VueJS ',
      googleLink: 'https://google.com',
    }
  },
})

app.mount('#user-goal')
