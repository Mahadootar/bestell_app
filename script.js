function init() {
  /* this function initialate the page */
  getFromLocalStorage();
  renderAll();
  renderBasket();
}

const delivery_Fee = 4.99;
let cartAcount = 0;

/* in this function the the dishes are rendert in to the page */
function renderAll() {
  renderDishesCategory("burger_category", "Burger & Sandwich");
  renderDishesCategory("pizza_category", "Pizza");
  renderDishesCategory("salat_category", "Salad", );
}

/* in this function the dishes are separeted in to three categories */
function renderDishesCategory(containerId, categorName) {
  let refContainer = document.getElementById(containerId);
  refContainer.innerHTML = "";

  const catIndex = allDishes.findIndex( categoryDishes => categoryDishes.category === categorName);
  if (catIndex === -1) return;
  categoryObj = allDishes[catIndex];

  for (let dishIndex = 0; dishIndex < categoryObj.dishes.length; dishIndex++) {
    const dish = categoryObj.dishes[dishIndex];
     refContainer.innerHTML += getDishesTemplate(dish, catIndex, dishIndex);
  }
  
}

function renderBasket() {
  if (emptyBasket()) return;

  const subtotal = renderTheBasketDishes();
  calculatethePrice(subtotal);
}

/* this function shows the empty basket */
function emptyBasket() {
  const emptyRef = document.getElementById("basket_empty");
  const fullRef = document.getElementById("basket_full");
  emptyRef.innerHTML = "";

  if (cartShopping.length === 0) {
    emptyRef.classList.remove("d_none");
    fullRef.classList.add("d_none");
    emptyRef.innerHTML = getTheEmptyBasketTemplate();
    return true;
  }
  emptyRef.classList.add("d_none");
  fullRef.classList.remove("d_none");
  return false;
}

/* by this function from the category of dishes we are able to transfer the item to the basket*/
function renderTheBasketDishes() {
  const itemsRef = document.getElementById("basket_items");
  itemsRef.innerHTML = "";

  let subtotal = 0;
  for (let i = 0; i < cartShopping.length; i++) {
    const item = cartShopping[i];
    subtotal += item.price * item.amount;
    itemsRef.innerHTML += getBasketItemTemplate(item, i);
  }
  return subtotal;
}

/* this function calculates the prices of the dishes*/
function calculatethePrice(subtotal) {
  const delivery = delivery_Fee;
  const total = subtotal + delivery;

  document.getElementById("Subtotal_price").textContent =
    formatToTheCurrency(subtotal);
  document.getElementById("Delivery_price").textContent =
    formatToTheCurrency(delivery);
  document.getElementById("total_price_order").textContent =
    formatToTheCurrency(total);
  document.getElementById("order_button").textContent =
    `Buy Now ${formatToTheCurrency(total)}`;
}

/* this function formates the numbers in to currency */
function formatToTheCurrency(value) {
  return value.toFixed(2).replace(".", ",") + "€";
}

function addToBasket(catIndex, dishesIndex) {
  const dish = allDishes[catIndex].dishes[dishesIndex];
  const existingIndex = cartShopping.findIndex((item) => item.id === dish.id);
  if (existingIndex !== -1) {
    cartShopping[existingIndex].amount += 1;
  } else {
    cartShopping.push({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      amount: 1,
    });
  }
  saveBasketToLocalStorage();
  renderBasket();
}

/* by this function it is posible to remove/delete a dishes from basket */
function removeBasket(i) {
  cartShopping.splice(i, 1);
  saveBasketToLocalStorage();
  renderBasket();
}

/* this enables us to increase or helps us to add one more dish/item to our menu*/
function inscreaAmount(i) {
  cartShopping[i].amount += 1;
  saveBasketToLocalStorage();
  renderBasket();
}

/* this enables us to decrease or helps us to delete one by one dish/item from our menu*/
function descreaAmount(i) {
  cartShopping[i].amount -= 1;
  if (cartShopping[i].amount === 0) {
    cartShopping.splice(i, 1);
  }
  saveBasketToLocalStorage();
  renderBasket();
}

/* this function make possible that after ordering the basket fade away and the overlay is visble*/
function showOrderOverlay() {
  const aotContainer = document.getElementById("aot-img-hero-container");
  const basketFadeAway = document.getElementById("basketHide");
  const overlayRef = document.getElementById("overlay_sec");

  if (!aotContainer || !basketFadeAway || !overlayRef);
  aotContainer.style.width = "100%";
  basketFadeAway.style.display = "none";
  overlayRef.style.display = "flex";
}

/* this function open the overlay and restarts the basket after ordering */
function openOderOverlay() {
  showOrderOverlay();
  restartTheBasket();
  renderBasket();
}
/* this function restarts/empties the basket after ordering */
function restartTheBasket() {
  cartShopping.length = 0;
  localStorage.removeItem("cartShopping");
}

/* this function close the overlay */
function closeOverlay() {
  const closeOverlayRef = document.getElementById("overlay_sec");
  const basket = document.getElementById("basketHide");
  const aotContainer = document.getElementById("aot-img-hero-container");
  let addTotheShop = document.getElementById('shopCount');

  closeOverlayRef.style.display = "none";
  basket.style.display = "";
  aotContainer.style.width = "100%";
  addTotheShop.style.display = "";
  openBasket();
  renderBasket();
}

/* in the mediaquerry section this function enables us to open and close the basket*/
function openBasket() {
  document.querySelector(".basket-section").classList.toggle("active");
  const basket = document.querySelector(".basket-section");
}

/* this function saves the basket in the local storage */
function saveBasketToLocalStorage() {
  localStorage.setItem("cartShopping", JSON.stringify(cartShopping));
}

/* this function gets the basket from the local storage */
function getFromLocalStorage() {
  let cartShoppingArray = JSON.parse(localStorage.getItem("cartShopping"));

  if (cartShoppingArray !== null) {
    cartShopping = cartShoppingArray;
  }
}

/* this function stops the bubble that is created when the add button is click to close the basket*/
function stopBubble(event) {
  event.stopPropagation();
}

/* this function counts how much is in the cart*/
function addToTheShopingList(){
  cartAcount++;

  let addTotheShop = document.getElementById('shopCount');
  addTotheShop.textContent = cartAcount;
  addTotheShop.style.display = "flex";
}
