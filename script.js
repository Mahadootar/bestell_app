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
        <div> 
        <span>${item.amount}x${item.name}</span>
        <div> <img src="./assets/icons/delete_order.png">
        <span>${formatToTheCurrency(item.price * item.amount)}</span>`
        
    }

}


function formatToTheCurrency(value){
    return value.toFixed(2).replace('.',',') + '€';

   
}

function addToBasket(i){
   cartShopping[i].number++
    renderAll();

}

