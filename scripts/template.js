
// my dischTemplate

function getPizza(pizzen, i) {
    return `
        <div class="meal_card">
            <div class="meal">
                <h2>${pizzen.name}</h2>
                <div class="plus_btn">
                  <button onclick="plusToBasket(${i})" id="plusBtn">
                      <img src="./assets/icons/add_icon.png" alt="">
                  </button>
                </div>
            </div>
            <div class="description">
              <span>
                ${pizzen.description}
              </span>
              <b>${pizzen.price} €</b>
            </div>
        </div>
    `
}


// my BasketTemplate

function getDishes(dish, i) {
    return `
        <div class="order_output" id="orderOutput"> 
            <h4 id="">${dish.name}</h4>
            <div class="order_basket_section">
                <div class="basket_counter">
                    <img onclick="dishesCountMinus(${i})" src="./assets/icons/minus.png" alt="minus">
                    <span class="count" id="">${dish.count}</span>
                    <img onclick="dishesCountPlus(${i})" src="./assets/icons/plus.png" alt="plus">
                </div>
                <span id="">${(dish.price * dish.count).toFixed(2)} €</span>
                <img onclick="deleteDishes(${i})" src="./assets/icons/trash.png" alt="trash">
            </div>
        </div>
        `
}


