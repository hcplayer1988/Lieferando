function init() {
    let pizzaMenuInit = document.getElementById('pizzaMenu');   // pizzaMenuInit soll das gleiche sein wie 'pizzaMenu' mit getElemmentById greife ich auf das div mit der gleichnamigen id zu
    for (let i = 0; i < myDishes.length; i++) {                 // hier gehe ich durch das array myDishes durch, fange bei stelle 0 an bis i so groß ist wie die länge des Arrays und mit i++ erhöhe ich die 0 und damit die stelle des Arrays an der er durchgeht
        pizzaMenuInit.innerHTML += getPizza(myDishes[i], i);    // hier wird die oben gestellte var mit dem Template getMyPizza
    }
}

function addToBasket(i) {
    let dish = myDishes[i];
    for (let j = 0; j < basket.length; j++) {
        if (basket[j].name === dish.name) {
            basket[j].count++;
            updateBasket();
            calculatePrice();
            return
        }
    }
    basketPush();
}

function basketPush () {
    basket.push ({
        "name": dish.name,
        "price": dish.price,
        "count": 1
    })
    
}