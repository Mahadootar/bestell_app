function getDishesTemplate(dish, catIndex, dishIndex){
    return `
    <div class="dishe_element" onclick="openBasket()">
     <div class="dish_img" tabindex="0">
        <img class="food_photo" src="./assets/img/Food_img/${dish.image}">
     </div>
     <div class="dish_text">
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
     <div class="dish_bottom">
        <p class="price_class">${formatToTheCurrency(Number(dish.price))}</p>
     <div>
        <button class="add_to_basket_btn" onclick="stobBubble(event); addToBasket(${catIndex}, ${dishIndex})">
        <img class="add_to_basket_img" src="./assets/icons/button_add.png"></button>
     </div>
     </div>
     </div>
    </div>
    `;
}

function getTheEmptyBasketTemplate(){
  return `<div class="empty_state">
        <h3 class="basket_h3">Your Basket is empty</h3>
        <h3 class="basket_h3">Order NOW!!!</h3>
           <img class="shop_cart_img" src="./assets/icons/empty_basket.png">
           </div>
    `;  
}


function getBasketItemTemplate(item, i){
return `<div class="basket_dish_item" tabindex="0">
   <div>
        <h4 class="item_name">${item.amount}x${item.name}</h4>
   </div>
      <div class="item_name_price">
      <div class="removing_item">
      <div class="taken_item" onclick="descreaAmount(${i})">-</div>
      <div>
      <img class="remove_pin" onclick="removeBasket(${i})" src="./assets/icons/delete_order.png" tabindex="0">
      </div>
      <div class="adding_item" onclick="inscreaAmount(${i})">+</div>
      </div>
      <div>
       <h4 class="item_name">${formatToTheCurrency(item.price * item.amount)}</h4>
      </div>
   </div>
</div>`; 
}