function init(){
 renderDishes();
}

function renderDishes(){
    let refDishesContainer = document.getElementById('dishes_container');
    refDishesContainer.innerHTML = "";

    for (let dishesIndex = 0; dishesIndex < allDishes.length; dishesIndex++) { 
        if(dishesIndex == 4 || dishesIndex == 8 ){
            refDishesContainer.innerHTML += `
            <div class="dishe-title">
            </div>`
        }
        refDishesContainer.innerHTML += dishesTemplate(dishesIndex)
    }
}