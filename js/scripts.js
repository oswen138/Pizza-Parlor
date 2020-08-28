//Pizza Constructor

function Pizza() {
  this.toppings
  this.size =
  this.price = 
  this.toppingsPrice = 0;
  this.grandTotal = 0;
}


//prototype method to call on topping objects

function Topping(mushroom, salami, bacon) {
  this.mushroomTopping = mushroomTopping;
  this.salamiTopping = salamiTopping;
  this.baconTopping = baconTopping;
}

//prototype method to call on topping objects

let tomatoes = { name: "Tomatoes", price: 2.99 };
let cucumbers = { name: "Cucumbers", price: 0.99 };
let onions = { name: "Onions", price: 0.79 };

stores.forEach(function(store) {
  console.log(store.name + " sells:");
  store.products.forEach(function(product) {
    console.log(product.name);
  });


