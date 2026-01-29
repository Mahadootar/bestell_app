function getDishesTemplate(catIndex, dishIndex){
    const dish = allDishes[catIndex].dishes[dishIndex]

    return `
    <div class="dishe_element" onclick="openBasket()">
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

function getCategoryTemplateHeader(categoryName, categoryImage){
   return `<div class="dishe-title">
         <img class="category-img" src="${categoryImage}">
         <h2 class="category_name">${categoryName}</h2>
   </div>`;
}

function getEmptyBasketTemplate(){
  return `<div class="empty_state">
        <h3 class="basket_h3">Your Basket is empty</h3>
        <h3 class="basket_h3">Order NOW!!!</h3>
           <img class="shop_cart_img" src="./assets/icons/empty_basket.png">
           </div>
    `;  
}


function getBasketItemTemplate(item, i){
return `<div class="basket_dish_item">
   <div><h4 class="item_name">${item.amount}x${item.name}</h4></div>
      <div class="item_name_price">
      <img class="remove_pin" onclick="removeBasket(${i})" src="./assets/icons/delete_order.png">
      <div>
       <h4 class="item_name">${formatToTheCurrency(item.price * item.amount)}</h4>
      </div>
   </div>
</div>`; 
}