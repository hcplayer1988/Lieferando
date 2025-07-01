function init() {
    let pizzaMenuInit = document.getElementById('pizzaMenu');   // pizzaMenuInit soll das gleiche sein wie 'pizzaMenu' mit getElemmentById greife ich auf das div mit der gleichnamigen id zu
    for (let i = 0; i < myDishes.length; i++) {                 // hier gehe ich durch das array myDishes durch, fange bei stelle 0 an bis i so groß ist wie die länge des Arrays und mit i++ erhöhe ich die 0 und damit die stelle des Arrays an der er durchgeht
        pizzaMenuInit.innerHTML += getPizza(myDishes[i], i);    // hier wird die oben gestellte var mit dem Template getMyPizza
    }
}


function plusToBasket(i) {
    let dish = myDishes[i];
    for (let j = 0; j < basket.length; j++) {
        if (basket[j].name === dish.name) {
            basket[j].count++;
            updateBasket();
            calculatePrice();
            return
        }
    }
    basket.push ({
        "name": dish.name,
        "price": dish.price,
        "count": 1
    });
    document.getElementById('orderPlacedTxt').innerHTML = '';
    updateBasket();
    calculatePrice();
}


function updateBasket() {
    document.getElementById('orderOutput').innerHTML = '';
    for (let k = 0; k < basket.length; k++) {
        document.getElementById('orderOutput').innerHTML += getDishes(basket[k], k);
    }
}


function deleteDishes (i) {
    basket.splice(i, 1);
    updateBasket();
    calculatePrice();
}


function dishesCountMinus(i) {
    if (basket[i].count === 1) {
        deleteDishes(i);
    } else {
        basket[i].count--;
    }
    updateBasket();
    calculatePrice();
}


function dishesCountPlus (i) {
    basket[i].count ++;
    updateBasket();
    calculatePrice();
}


function calculatePrice() {
    let totalPrice = 0;
    for (let l = 0; l < basket.length; l++) {
        totalPrice += basket[l].count * basket[l].price;
    }
    document.getElementById('subtotal').innerHTML = `${totalPrice.toFixed(2)}€`;
    if (basket.length > 0) {
         document.getElementById('totalEndPrice').innerHTML = `${(totalPrice + 5).toFixed(2)}€`;
    } else {
        document.getElementById('totalEndPrice').innerHTML = `${totalPrice.toFixed(2)}€`;
    }
}


function placeOrder() {
    basket.length = 0;
    document.getElementById('orderPlacedTxt').innerHTML = 'Bestellung aufgegeben!'
    updateBasket();
    calculatePrice();
}








//function plusToBasket(i) {
//    let dish = myDishes[i];
//    for (let j = 0; j < basket.length; j++) {
//        if (basket[j].name === dish.name) {
//            basket[j].count++;
//            updateBasket();
//            calculatePrice();
//            return
//        }
//    }
//    basketPush();
//}


//function basketPush () {
//    basket.push ({
//        "name": dish.name,
//        "price": dish.price,
//        "count": 1
//    });
//    document.getElementById('orderPlacedTxt').innerHTML = '';
//    updateBasket();
//    calculatePrice();
//}













