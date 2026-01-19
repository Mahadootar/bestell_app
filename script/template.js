function dishesTemplate(dishesIndex){
    return `<div class="dishe_element">
     <div class="dish_img">
      <img class="food_photo" src="./assets/img/Food_img/${allDishes[dishesIndex].image}">
     </div>
     <div class="dish_text">
     <h3>${allDishes[dishesIndex].name}</h3>
     <p>${allDishes[dishesIndex].description}</p>
     <div class="dish_bottom">
     <p class="price_class">${allDishes[dishesIndex].price}</p>
     <div>
     <button class="add_to_basket_btn" onclick="addToBasket(${dishesIndex})">
     <img src="./assets/icons/button_add.png"</button>
     </div>
     </div>
     </div>
    </div>
    `;
}