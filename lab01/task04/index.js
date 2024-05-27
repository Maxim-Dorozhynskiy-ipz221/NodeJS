const _ = require('lodash');

//1. Цей метод шукає перший елемент у масиві, який відповідає заданому предикату.
const users = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Peter', age: 40 }];

const adultUser = _.find(users, user => user.age >= 30);
console.log(adultUser);

//2. Цей метод перетворює кожен елемент масиву за допомогою заданої callback-функції.
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = _.map(numbers, num => num * num);
console.log(squaredNumbers);

//3. Цей метод створює новий масив, що містить лише ті елементи з вихідного масиву, які відповідають заданому предикату.
const users = [{ name: 'John', active: true }, { name: 'Jane', active: false }, { name: 'Peter', active: true }];

const activeUsers = _.filter(users, user => user.active);
console.log(activeUsers);

//4. Цей метод зводить масив до одного значення, застосовуючи callback-функцію до кожної пари послідовних елементів.
const numbers = [1, 2, 3, 4, 5];

const sum = _.reduce(numbers, (total, num) => total + num, 0);
console.log(sum); // 15

//5. Цей метод сортує масив за допомогою заданої callback-функції порівняння.
const users = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Peter', age: 40 }];

const sortedUsers = _.sortBy(users, user => user.age);
console.log(sortedUsers);
