function init(){
 renderAll();
  renderDishesSection('dishes_container', allDishes, getDishesTemplate);
  renderBasket();
}

const delivery_Fee = 4.99;

function renderAll(){
    renderDishesSection('dishes_container', allDishes, getDishesTemplate);
}

function  renderDishesSection(containerId, dataArray, templateFunction){
    let refContainer = document.getElementById(containerId);
    refContainer.innerHTML = "";
    
     for (let catIndex = 0; catIndex < dataArray.length; catIndex++) {
        const categoryName = dataArray[catIndex].category;
        const categoryImage = dataArray[catIndex].categoryImage;
         refContainer.innerHTML += `
         <div class="dishe-title">
         <img src="${categoryImage}">
         <h2>${categoryName}</h2>
         </div>`
    for (let dishesIndex = 0; dishesIndex < dataArray[catIndex].dishes.length; dishesIndex++){
         refContainer.innerHTML += templateFunction(catIndex, dishesIndex);
    }
}
}

function renderBasket(){
    const emptyRef = document.getElementById('basket_empty');
    const fullRef = document.getElementById('basket_full');
    const itemsRef = document.getElementById('basket_items');

    emptyRef.innerHTML = "";
    itemsRef.innerHTML = "";

    if (cartShopping.length === 0){
        fullRef.classList.add('d_none');

        emptyRef.innerHTML = `<div class="empty_state">
        <h3 class="basket_h3">Your Basket is empty</h3>
        <h3 class="basket_h3">Order NOW!!!</h3>
           <img class="shop_cart_img" src="./assets/icons/empty_basket.png">
           </div>
    `;
    return;    
    }
    fullRef.classList.remove('d_none');

    let totalPrice = 0;

    for (let i = 0; i < cartShopping.length; i++) {
        const item = cartShopping[i];
        totalPrice += item.price * item.amount;

        itemsRef.innerHTML += `
          <div class="basket_dish_item">
          <div><h4 class="item_name">${item.amount}x${item.name}</h4></div>
          <div class="item_name_price"> <img class="remove_pin" src="./assets/icons/delete_order.png">
          <div>
           <h4 class="item_name">${formatToTheCurrency(item.price * item.amount)}</h4>
           </div>
            </div>
        </div>`; 
    }

    const delivery = delivery_Fee
    const total = Subtotal + delivery;

    document.getElementById('Subtotal_price').textContent = formatToTheCurrency(subtotal);
    document.getElementById('Delivery_price').textContent = formatToTheCurrency(delivery);
    document.getElementById('total_price_order').textContent = formatToTheCurrency(total);
    document.getElementById('order_button').textContent = `Buy Now ${formatToTheCurrency(total)}`;
    

}


function formatToTheCurrency(value){
    return value.toFixed(2).replace('.',',') + '€';

   
}

function addToBasket(catIndex, dishesIndex){
    const dish = allDishes[catIndex].dishes[dishesIndex];
   
    const existingIndex = cartShopping.findIndex(
        item => item.id === dish.id
    );

    if (existingIndex !== -1) {
        cartShopping[existingIndex].amount += 1;
    }else{
        cartShopping.push({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            amount: 1

        });
    }
    renderBasket();
}

function removeBasket(id){
    cartShopping.splice(id, 1)
    renderBasket();

}
