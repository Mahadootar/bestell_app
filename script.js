function init(){
 renderAll();
}

function renderAll(){
    renderDishesSection('dishes_container', allDishes, getDishesTemplate);
    renderDishesSection('basket_content', cartShopping, basketDishesTemplate);
}

function  renderDishesSection(containerId, dataArray, templateFunction){
    let refContainer = document.getElementById(containerId);
    refContainer.innerHTML = "";
    console.log(containerId, refContainer);
    

    for (let index = 0; index < dataArray.length; index++){
         refContainer.innerHTML += templateFunction(index);
    }
}


function formatToTheCurrency(value){
    return value.toFixed(2).replace('.',',') + '€';

   
}

function addToBasket(dishesIndex){
    shopping_container[dishesIndex].number++
    renderAll();

}

