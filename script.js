function init(){
 renderAll();
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
         refContainer.innerHTML += getCategoryTemplateHeader(categoryName, categoryImage);
         
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
    emptyRef.classList.remove('d_none');
    fullRef.classList.add('d_none');
    emptyRef.innerHTML = getEmptyBasketTemplate() 
    return;    
    }
    emptyRef.classList.add('d_none');
    fullRef.classList.remove('d_none');

    let subtotal = 0;
    for (let i = 0; i < cartShopping.length; i++) {
        const item = cartShopping[i];
        subtotal += item.price * item.amount;
        itemsRef.innerHTML += getBasketItemTemplate(item, i);
    }

    const delivery = delivery_Fee
    const total = subtotal + delivery;

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

function removeBasket(i){
    cartShopping.splice(i, 1)
    renderBasket();

}
