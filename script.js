function init(){
 renderAll();
}

function renderAll(){
    renderDishesSection('dishes_container', allDishes, getDishesTemplate);
    renderDishesSection('basket_content', shopping_container, basketDishesTemplate);
}

function renderDishesSection(refDishesContainerId, allDishesIndex, templateF ){
    let refDishesContainer = document.getElementById(refDishesContainerId);
    refDishesContainer.innerHTML = "";

    for (let index = 0; index < allDishesIndex.length; index++) { 
        if(index == 0){
            refDishesContainer.innerHTML += `
            <div class="dishe-title">
            <img src="./assets/img/Food_img/Chanese_1.png">
            </div>`;
        }
        if(index == 4){
            refDishesContainer.innerHTML += `
            <div class="dishe-title">
            <img src="./assets/img/Food_img/pizza_1.png">
            </div>`;
        }
        if(index == 8){
            refDishesContainer.innerHTML += `
            <div class="dishe-title">
            <img src="./assets/img/Food_img/salad_1.png">
            </div>`;
        }
        refDishesContainer.innerHTML += templateF(index)
    }
}

function formatToTheCurrency(value){
    return value.toFixed(2).replace('.',',') + '€';

   
}

function addToBasket(dishesIndex){
    shopping_container[dishesIndex].number++
    renderAll()

}