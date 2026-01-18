function dishesTemplate(dishesIndex){
    return `<div class="dishe_element">
     <div class="dish_img">
      <img class="food_photo" src="./assets/img/Food_img/${allDishes[dishesIndex].image}">
     </div>
     <div>
     <h3>${allDishes[dishesIndex].name}</h3>
     <p>${allDishes[dishesIndex].description}<p/>
     <p>${allDishes[dishesIndex].price}<p/>
     </div>
    </div>`
}