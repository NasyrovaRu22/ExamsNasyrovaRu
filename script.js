const app = Vue.createApp({
  data() {
    return {
      colors: ['red', 'green', 'blue', 'yellow', 'purple']
    };
  },
  methods: {
    changeColor(index) {
      // Меняем цвет на случайный из массива
      const randomIndex = Math.floor(Math.random() * this.colors.length);
      this.colors[index] = this.colors[randomIndex];
    }
  }
});

app.mount('#app');
