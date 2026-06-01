// Функция для поиска блока с максимальной суммой цифр
function findMaxBlock(str) {
  // Разбиваем строку по символу '0' и фильтруем пустые строки
  const blocks = str.split('0').filter(block => block.length > 0);

  let maxSum = -1;
  let maxBlock = '';

  // Проходим по каждому блоку
  for (const block of blocks) {
    // Считаем сумму цифр в блоке
    const sum = block.split('').reduce((acc, digit) => acc + parseInt(digit), 0);

    // Обновляем максимум
    if (sum > maxSum) {
      maxSum = sum;
      maxBlock = block;
    }
  }

  return [maxBlock, maxSum];
}

// Пример вызова функции (можно удалить или закомментировать)
console.log(findMaxBlock('721024501111111090')); // ['245', 11]

// Инициализация Vue.js приложения
const { createApp } = Vue;

createApp({
  data() {
    return {
      colors: ['red', 'green', 'blue', 'yellow', 'purple']
    };
  },
  methods: {
    changeColor(index) {
      const randomColors = ['red', 'green', 'blue', 'yellow', 'purple'];
      this.colors[index] = randomColors[Math.floor(Math.random() * randomColors.length)];
    }
  }
}).mount('#app');
