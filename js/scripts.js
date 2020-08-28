//Business Logic for PizzaOrder ---------

function PizzaOrder() {
  this.grandTotal = grandTotal,
  this.sauce = 0
  this.toppings = 0
  this.size = 0
  this.saucePrice = 0
}

//Select size of pizza
PizzaOrder.prototype.addSize = function(size) {
  this.size = size;
}

//Select sauce to put on pizza
PizzaOrder.prototype.addSauce = function(sauce) {
  this.sauce = sauce;
  if (this.sauce === (sauces === 1)) {
      this.saucePrice = 1;
  } else if (this.sauce === (sauces === 2)) {
      this.saucePrice = 2;
  } else if (this.sauce === (sauces === 3)) {
      this.saucePrice = 3;
  } else {
      this.saucePrice = 0;
  }
  this.countTotal();
}

//Select topping to put on pizza
PizzaOrder.prototype.addTopping = function(topping) {
  this.topping = topping;
  if (this.topping === (toppings === 1)) {
      this.toppingPrice = 1;
  } else if (this.topping === (toppings === 2)) {
      this.toppingPrice = 2;
  } else if (this.topping === (toppings === 3)) {
      this.toppingPrice = 3;
  } else {
      this.toppingPrice = 0;
  }
  this.countTotal();
}

//Calculate total cost of pizza
PizzaOrder.prototype.countTotal = function() {
  this.grandTotal = this.saucePrice + this.toppingPrice;
  this.showTotal();
}

//UI Logic for PizzaOrder ------------

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





















