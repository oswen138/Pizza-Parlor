//Business Logic for PizzaOrder ---------

function PizzaOrder() {
  this.grandTotal = [],
  this.sauce = 0
  this.toppings = 0
  this.size = 0
}

//Select size of pizza
PizzaOrder.prototype.addSize = function(size) {
  this.size = size;
}

//Select sauce to put on pizza
PizzaOrder.prototype.addSauce = function(sauce) {
  this.sauce = sauce;
  if (this.sauce == "")
}



PizzaOrder.prototype.addChoice = function(choice) {
  choice.id = this
}




















  this.sauce = 0
  this.toppings = 0
  this.size = 0
}

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

function displaytoppingDetails(toppingsToDisplay) {
}

//does tomsh
function attachPizzaListeners() {
$("ul#pizzaSquare").on("click", "li", function() {
  console.log("The id of this <li> is " + this.id + ".");
});
};

//showOrder(orderId) {
  const order = pizzaSquare.findOrder(orderID);
  $('#show-order").show();
  $(".pizza-size").html(order.pizzaSize);
  $(".pizza-sauce").html(order.pizzaSauce);
  $(".pizza-topping").html(order.pizzaTopping);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + order.id+">Delete</button>");
}

$(document).ready(function() {
  attachContactListeners();  
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    const sauce= $("#sauce").val();
    const topping = $("#topping").val();

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");

    let pizzaPrice = new pizzaPrice(size, sauce, topping);
   pizzaSquare.addTopping(newTopping);
   displayContactDetails(addressBook);  
   
  });
});

const beverage = $("#beverage").val();

function displayCurrentBalance(currentBalance) {
  $("#balance").text(currentBalance);
}


$("form#pizza-order").submit(function(event) {
  event.preventDefault();

  const sauce = parseFloat($("#sauce").val());
  const topping = parseFloat($("#topping").val());

  currentOrder = order(currentOrder);
  displayCurrentOrder(currentOrder);
});
});
