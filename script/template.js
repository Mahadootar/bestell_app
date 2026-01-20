function getDishesTemplate(index){
    return `<div class="dishe_element">
     <div class="dish_img">
        <img class="food_photo" src="./assets/img/Food_img/${allDishes[index].image}">
     </div>
     <div class="dish_text">
        <h3>${allDishes[index].name}</h3>
        <p>${allDishes[index].description}</p>
     <div class="dish_bottom">
        <p class="price_class">${formatToTheCurrency(Number(allDishes[index].price))}</p>
     <div>
        <button class="add_to_basket_btn" onclick="addToBasket(${index})">
        <img src="./assets/icons/button_add.png"</button>
     </div>
     </div>
     </div>
    </div>
    `;
}

