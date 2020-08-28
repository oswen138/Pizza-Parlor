//Pizza Constructor

function pizzaSquare() {
  this.toppings = [];
  this.size = 0
  this.toppingsPrice = 0;
  this.grandTotal = 0;
}

//prototype method to call on topping objects
pizzaSquare.prototype.addToppings = function(topping) {
  topping.price = this.assignPrice();
  this.toppings.push(topping);
}
pizzaSquare.prototype.assignPrice = function() {
  this.toppingsPrice +=1;
  return this.toppingsPrice;
}

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


  function AddressBook() {
    this.contacts = [];
  }
  
  function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
  
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }

  //Business Logic for Pizza
  
  Pizza.prototype.addToppings = function(topping) {
    this.toppings.push(topping);
  }

