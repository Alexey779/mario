
// вытаскиваем индификаторы из html
const player = document.getElementById("player");
const damper = document.getElementById("damper");
const btn = document.querySelector(".start");

let interval;
let isStart = false;

const activeJump = () => {
  if (isStart === true) {
    if (!player.classList.contains("active")) {
      player.classList.add("active");
    }

    setTimeout(() => {
      player.classList.remove("active");
    }, 300);
  }
};
// создаем функцию старта игры
const startGame = () => {
//   иницилизируем начальное значение переменной true
    isStart = true; 
//  добавляем анимацию через черепахи через метод
  damper.classList.add("animate");
// инициализируем переменную interval значением setInterval()
  interval = setInterval(() => {
    // обьявляем переменную и делаем проверку в марио методом и вычисляем целое число убирая буквы
    let playerTop = parseInt(
      window.getComputedStyle(player).getPropertyValue("top")
    );
    // то же самое только для черепахи
    let damperLeft = parseInt(
      window.getComputedStyle(damper).getPropertyValue("left")
    );
    // пишем проверку если черепаха ближе 50 px но больше 0 и марио находиться больше либо равно 140px то игра прекрашается
    if (damperLeft < 50 && damperLeft > 0 && playerTop >= 140) {
        // вызываем функцию остановки игры
      andGame();
    //   выводим запись на экран
      alert("Вы проиграли!");
    }
  }, 10);
};
// создаем функцию для оканчания игры
const andGame = () => {
    // назначаем переменной значение false
  isStart = false;
//   вызываем функцию для очистки функции
  clearInterval(interval);
  damper.classList.remove("animate");
};

document.addEventListener("keydown", activeJump);
btn.addEventListener("click", () => {
  startGame();
});
