function init(){
 renderAll();
  renderDishesSection('dishes_container', allDishes, getDishesTemplate);
  renderBasket();
}

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
    const basketContenRef = document.getElementById('basket_dish');
    basketContenRef.innerHTML = "";

    if (cartShopping.length === 0){
        basketContenRef.innerHTML = `<div>
           <img class="empty_baskett" src="./assets/icons/empty_basket.png">
           <h3> Dein Warenkorb ist leer</h3></div>
    `;
    return;    
    }
    
    for (let i = 0; i < cartShopping.length; i++) {
        const item = cartShopping[i]
        basketContenRef.innerHTML += `
        <div id="item_container"> 
          <div class="basket_dish_item">
          <div><h4 class="item_name">${item.amount}x${item.name}</h4></div>
          <div> <img class="remove_pin" src="./assets/icons/delete_order.png">
          <span>
           <h4 class="item_name">${formatToTheCurrency(item.price * item.amount)}</h4>
           </span>
            </div>
        </div>
        </div> `
        
    }

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

