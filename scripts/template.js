function getPizza(pizzas, i) {
    return `
        <div class="meal_card">
            <div class="meal">
                <h2>${pizzas.name}</h2>
                <div class="add_btn">
                  <button onclick="addBtn()" id="add-btn">
                      <img onclick="addToBasket(${i})" id="plusImg${i}" src="./assets/icons/add_icon.png" alt="">
                  </button>
                </div>
            </div>
            <div class="description">
              <span>
                ${pizzas.description}
              </span>
              <b${pizzas.price} €</b>
            </div>
        </div>
    `
}


