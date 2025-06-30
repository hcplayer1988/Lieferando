
// my dischtemplate

function getPizza(pizzen, i) {
    return `
        <div class="meal_card">
            <div class="meal">
                <h2>${pizzen.name}</h2>
                <div class="add_btn">
                  <button onclick="addBtn()" id="add-btn">
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


// my Baskettemplate

function getDishes(dish, i) {
    return `
        <div class="order_output"> 
            <h4 id="">${dish.name}</h4>
            <div class="order_basket_section">
                <div class="basket_counter">
                    <img onclick="dishesCountMinus(${i})" src="./assets/icons/minus.png" alt="minus">
                    <span id="count">${dish.count}</span>
                    <img onclick="dishesCountAdd(${i})" src="./assets/icons/plus.png" alt="plus">
                </div>
                <span id="">${(dish.price * dish.count).toFixed(2)}</span>
                <img onclick="deleteDishes(${i})" src="./assets/icons/trash.png" alt="trash">
            </div>
        </div>
        `
}


