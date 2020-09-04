//Business Logic for PizzaOrder ---------

function PizzaOrder() {
  this.grandTotal = 0;
  this.sauce = [];
  this.toppings = [];
  this.size = "";
  this.saucePrice = 0;
  this.toppingPrice = 0;
}

//Select size of pizza
PizzaOrder.prototype.addSize = function(size) {
  this.size = size;
  if (this.size === "size1") {
		this.sizePrice = 10;
	} else if (this.size === "size2") {
    this.sizePrice = 15;
  } else if (this.size === "size3") {
		this.sizePrice = 20;
	} else {
		this.sizePrice = 0;
	}
	this.sizeTotal();
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
  this.sauceTotal();
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
  this.toppingTotal();
}

//Calculate total cost of pizza and sisplay
PizzaOrder.prototype.Total = function() {
  console.log(this.grandTotal);
  this.grandTotal = this.sizeTotal + this.sauceTotal + this.toppingTotal;
}

// //display pizzaBalance
// function displayPizzaBalance(pizzaBalance) {
//   return this.sizeTotal + this.sauceTotal + this.toppingTotal;
// }

//UI Logic for PizzaOrder ------------

$(document).ready(function() {
  let pizzaorder = new PizzaOrder;

  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    const sauce= $("#sauces").val();
    const topping = $("#toppings").val();

    $("#size").val("");
    $("#sauce").val("");
    $("#topping").val("");

    let pizzaorder = new PizzaOrder(size, sauce, topping);
    sizeTotal = parseInt(size)
    sauceTotal = parseInt(sauce)
    toppingTotal = parseInt(topping)
    displaygrandTotal(pizzaBalance);

  });
}); 



















