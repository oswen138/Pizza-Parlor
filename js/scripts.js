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


//Business Logic for Toppings 
function Toppings() {
  this.toppings = [];
  this.toppingsPrice = 0;
}
pizzaSquare.prototype.addToppings = function(topping) {
  topping.price = this.assignPrice();
  this.toppings.push(topping);
}
pizzaSquare.prototype.assignPrice = function() {
  this.toppingsPrice +=1;
  return this.toppingsPrice;
}
//Business Logic for Pizza
function Pizza() {
  this.grandTotal = grandTotal;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}



pizzaSquare.prototype.findTopping = function(price) {
  for (let i=0; i< this.toppings.length; i++) {
      if (this.toppings[i].price == price) {
        return this.toppings[i];
      }
    };
  return false;
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

// User Interface Logic ---------
let pizzaSquare = new PizzaSquare();

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    const sauce= $("#sauce").val();
    const topping = $("#topping").val();
    let pizzaPrice = new pizzaPrice(size, sauce, topping);
   pizzaSquare.addTopping(newTopping);
    console.log(pizzaSquare.price);
  });
});

const beverage = $("#beverage").val();