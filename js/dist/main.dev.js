"use strict";

var message;
var pizza = {
  crust: 'thin',
  size: 'small',
  topping: 'pepporni',
  buildPizza: function buildPizza() {
    message = "baking a pizza on a ".concat(pizza.crust, " crust with a ").concat(pizza.topping, " topping and cheese just for you.");
    document.querySelector('#feedback').textContent = message;
  },
  shoppingList: function shoppingList() {
    var flour = 1;
    if (pizza.crust === 'thick') flour *= 2;
    if (pizza.size === 'large') flour *= 2; //do the same for large property

    message = "you will need to purchase ".concat(flour, " cups of flour and 1 lb of ").concat(pizza.topping, ".");
    document.querySelector('#feedback').textContent = message;
  }
};
document.querySelector('#thin').addEventListener('click', function () {
  return pizza.crust = 'thin';
});
document.querySelector('#thick').addEventListener('click', function () {
  return pizza.crust = 'thick';
});
document.querySelector('#pepperoni').addEventListener('click', function () {
  return pizza.topping = 'pepperoni';
});
document.querySelector('#sausage').addEventListener('click', function () {
  return pizza.topping = 'sausage';
});
document.querySelector('#large').addEventListener('click', function () {
  return pizza.size = 'large';
});
document.querySelector('#small').addEventListener('click', function () {
  return pizza.size = 'small';
}); //do the same thing for toppings and size

document.querySelector('#build').addEventListener('click', pizza.buildPizza);
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList); //hook up the shopping list method call here
//# sourceMappingURL=main.dev.js.map
