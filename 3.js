"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const ar = [];
for (let i = 0; i < 5; i++) {
  ar.push(Math.trunc(Math.random() * 10));
}
console.log(ar);
let sum = 0;
for (let i = 0; i < ar.length; i++) {
  sum += ar[i];
}
console.log(`Сумма элементов массива равна ${sum}`);
let minValue = ar[0];
for (let i = 1; i < ar.length; i++) {
  if (ar[i] < minValue) minValue = ar[i];
}
console.log(`Минимальное значение в массиве ${minValue}`);
const newArrray = [];
for (let i = 0; i < ar.length; i++) {
  if (ar[i] === 3) newArrray.push(i);
}
console.log(
  newArrray.length === 0 ? "Троек не нашли" : "Вывожу массив с индексами троек"
);
console.log(newArrray);
