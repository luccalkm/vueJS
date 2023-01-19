Vue.createApp({
  data() {
    return {
      className: '',
      inlineStyle: '',
      visible: true,
    }
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible
    },
    test() {
      console.log(this.inlineStyle)
    },
  },
  computed: {
    paragraphClasses() {
      const classObj = {
        className: this.className,
        show: this.visible ? 'visible' : 'hidden',
      }
      return classObj.className + ' ' + classObj.show
    },
    writeStyle() {
      return this.inlineStyle
    },
  },
}).mount('#assignment')
