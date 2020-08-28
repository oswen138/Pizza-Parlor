//Business Logic for PizzaOrder ---------

function PizzaOrder() {
  this.grandTotal = grandTotal,
  this.sauce = []
  this.toppings = 
  this.size = 0
  this.saucePrice = 0
  this.toppingPrice = 0
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

//Calculate total cost of pizza
PizzaOrder.prototype.Total = function() {
  this.grandTotal = this.sauceTotal + this.toppingTotal;
  this.pizzaBalance();
}

//display pizzaBalance
function displayPizzaBalance(pizzaBalance) {
  $("#balance").text(pizzaBalance);
}

//UI Logic for PizzaOrder ------------

$(document).ready(function() {
  let pizzaOrder = new PizzaOrder;

  //user selects size
  $(".size").click(function() {
		let size = event.target.id;
		pizza.addSize(size);
	});


  $("form#formOne").click(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    const sauce= $("#sauce").val();
    const topping = $("#topping").val();

    $("#size").val("");
    $("sauce").val("");
    $("topping").val("");
    
    let newPizzaOrder = new PizzaOrder(size, sauce, topping);
    pizzaBalance = parseInt(sauce)
    displayPizzaBalance(pizzaBalance);
  });
}); 


$(document).ready(function() {
  attachListeners();

  let playerOne = new Player();
  let playerTwo = new Player();
  playerGroup.addPlayer(playerOne);
  playerGroup.addPlayer(playerTwo);
});

 


















