function init(){
 renderDishes();
}

function renderDishes(){
    let refDishesContainer = document.getElementById('dishes_container');
    refDishesContainer.innerHTML = "";

    for (let dishesIndex = 0; dishesIndex < allDishes.length; dishesIndex++) {
        refDishesContainer.innerHTML += dishesTemplate(dishesIndex);
        
    }
}