let message

const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepporni',
    buildPizza: function () {
message = `baking a pizza on a ${pizza.crust} crust with a ${pizza.topping} topping and cheese just for you.`
document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick') flour *= 2
        if (pizza.size === 'large') flour *= 2
        //do the same for large property
        message = `you will need to purchase ${flour} cups of flour and 1 lb of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message
    }
}
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')


document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')
document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')

document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')
document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')

//do the same thing for toppings and size

document.querySelector('#build').addEventListener('click', pizza.buildPizza)
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)

//hook up the shopping list method call here
