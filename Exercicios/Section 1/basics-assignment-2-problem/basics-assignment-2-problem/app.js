Vue.createApp({
  data() {
    return {
      firstOutput: 'First output',
      secondOutput: 'Second output',
    }
  },
  methods: {
    showAlert() {
      alert('Sinta-se alertado.')
    },
    setFirstOutput(e) {
      this.firstOutput = e.target.value
      if (e.target.value === '') {
        this.firstOutput = 'First output'
      }
    },
    setSecondOutput(e) {
      this.secondOutput = e.target.value
      if (e.target.value === '') {
        this.firstOutput = 'Second output'
      }
    },
  },
}).mount('#assignment')
