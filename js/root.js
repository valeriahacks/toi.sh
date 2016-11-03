var vm = new Vue({
  el: 'footer',
  data: {
    year: new Date().getFullYear()
  },
  computed: {
    copyright: function () {
      return "© " + this.year + " Bailey Cassel";
    }
  }
})
