class PizzasManager {
  constructor(defaultPizzas) {
    this.pizzasArray = defaultPizzas;
    this.pizzasMap = {};

    // pizzasArray - [
    // {name: 'Tomato', price: 456, sizes: ['small', 'large']},
    // {name: 'Tomato', price: 456, sizes: ['small']}
    // ]
    // pizzasMap - {'Tomato': 456, 'Carbonara': '576'}
  }

  getPizzasArray() {
    return this.pizzasArray;
  }

  addToPizzasArray(pizza) {
    this.pizzasArray.push(pizza);
  }

  deletePizzaByName(pizzaName) {
    this.pizzasArray = this.pizzasArray.filter(item => item.name !== pizzaName);
  }

  getPizzaByName(pizzaName) {
    return this.pizzasArray.find(item => item.name === pizzaName);
  }

  getFilteredPizzasByPrice(leftBorder, rightBorder) {
    return this.pizzasArray.filter(item => item.price > leftBorder && item.price < rightBorder);
  }

  sortPizzasByPrice() {
    this.pizzasArray = this.pizzasArray.sort((item1, item2) => item1.price - item2.price);
  }

  getConvertedPizzasMap() {
  }

  getAveragePrice() {
    return this.pizzasArray.reduce((acc, item) => acc + item.price, 0) / this.pizzasArray.length;
  }
}

const pizzaManager = new PizzasManager([
  {name: 'Tomato', price: 456, sizes: ['small', 'large']},
  {name: 'Carbonara', price: 654, sizes: ['small']},
]);

const getPizzas = (time) => {
  console.log(time, pizzaManager.getPizzasArray());
};
// test cases

getPizzas(1);

pizzaManager.addToPizzasArray({
  name: 'PIPIRONE',
  price: 745,
  sizes: ['large'],
});

getPizzas(2);

pizzaManager.addToPizzasArray({
  name: 'S KOLBASKOI',
  price: 567,
  sizes: ['small', 'large'],
});

getPizzas(3);
console.log('get pizza by name', pizzaManager.getPizzaByName('PIPIRONE'));
console.log('filtered by pirce', pizzaManager.getFilteredPizzasByPrice(500, 700));
console.log('average price', pizzaManager.getAveragePrice());

pizzaManager.sortPizzasByPrice();
getPizzas(4);

pizzaManager.deletePizzaByName('PIPIRONE');

getPizzas(5);

console.log(pizzaManager.getConvertedPizzasMap());
