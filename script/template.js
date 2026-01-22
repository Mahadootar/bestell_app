function getDishesTemplate(catIndex, dishIndex){
    const dish = allDishes[catIndex].dishes[dishIndex]

    return `
    <div class="dishe_element">
     <div class="dish_img">
        <img class="food_photo" src="./assets/img/Food_img/${dish.image}">
     </div>
     <div class="dish_text">
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
     <div class="dish_bottom">
        <p class="price_class">${formatToTheCurrency(Number(dish.price))}</p>
     <div>
        <button class="add_to_basket_btn" onclick="addToBasket(${catIndex}, ${dishIndex})">
        <img class="add_to_basket_img" src="./assets/icons/button_add.png"></button>
     </div>
     </div>
     </div>
    </div>
    `;
}

