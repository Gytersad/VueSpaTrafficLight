Одностраничное приложение (SPA) - эмулятор светофора. 

Экран 1: горит красный (зеленый и желтый тусклые/полупрозрачные) 
Экран 2: горит желтый (зеленый и красный тусклые/полупрозрачные) 
Экран 3: горит зеленый (красный и желтый тусклые/полупрозрачные) 

Роутинг приложения:
‘/red’ - экран 1, 
‘/yellow’ - экран 2, 
‘/green’ - экран 3

Установка по команде: "npm install", а запуск - по команде:  "npm run serve". 



Реализованные задачи:

1. Таймер, показывающий сколько секунд осталось до смены сигнала светофора;
2. Мигание сигнала светофора, если до его смены осталось меньше 3 секунд; 
3. Vеханизм, позволяющий сохранять состояние светофора и запускать его работу с того же момента;

Запланированные задачи:

1. Реализовать динамичепский роутинг;
2. Упростить код;



