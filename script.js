function init(){
 renderDishes();
}

function renderDishes(){
    let refDishesContainer = document.getElementById('dishes_container');
    refDishesContainer.innerHTML = "";

    for (let dishesIndex = 0; dishesIndex < allDishes.length; dishesIndex++) { 
        if(dishesIndex == 0){
            refDishesContainer.innerHTML += `
            <div class="dishe-title">
            <img scr="./assets/img/Food_img/Chanese_1.png">
            </div>`;
        }
        if(dishesIndex == 4){
            refDishesContainer.innerHTML += `
            <div class="dishe-title">
            <img scr="./assets/img/Food_img/pizza_1.png">
            </div>`;
        }
        if(dishesIndex == 8){
            refDishesContainer.innerHTML += `
            <div class="dishe-title">
            <img scr="./assets/img/Food_img/salad_1.png">
            </div>`;
        }
        refDishesContainer.innerHTML += dishesTemplate(dishesIndex)
    }
}