//Business logic for Order
function pizzaOrder() {
  this.orders = [];
  this.currentId = 0;
  this.grandTotal = 0;
  this.sizePrice = 0;
  this.saucePrice = 0;
  this.toppingPrice = 0;
}

//add order
pizzaOrder.prototype.addPizza = function(order) {
  order.id = this.assignId();
  this.orders.push(order);
}
//assign id to pizzaOrder
pizzaOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
//find specific pizzaOrder
pizzaOrder.prototype.findOrder = function(id) {
  for (let i=0; i< this.orders.length; i++) {
    if (this.orders[i].id == id) {
        return this.orders[i];
      }
    };
  return false;
}
//Select size of pizza
pizzaOrder.prototype.addSize = function(size) {
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
	this.pizzaOrder.push(sizePrice);
}
//Select sauce to put on pizza
pizzaOrder.prototype.addSauce = function(sauce) {
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
  this.pizzaOrder.push(saucePrice);
}

//Select topping to put on pizza
pizzaOrder.prototype.addTopping = function(topping) {
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
  this.pizzaOrder.push(toppingPrice);
}
//Calculate total cost of pizza and sisplay
pizzaOrder.prototype.Total = function() {
  console.log(this.grandTotal);
  this.grandTotal = this.sizePrice + this.saucePrice + this.toppingPrice;
}

//Business Logic for Pizza
function Pizza(pizzaSauce, pizzaTopping, pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.pizzaSauce = pizzaSauce;
  this.pizzaTopping = pizzaTopping;
}

pizzaOrder.prototype.pizzaPrice = function() {
  return this.pizzaSize + this.pizzaSauce + this.pizzaTopping + " ";
}


//User Interface Logic ---------

//display order info in the DOM
function displayPizzaDetails(pizzaOrderToDisplay) {
  let orderList = $("ul#order");
  let htmlForPizzaInfo = "";
  pizzaOrderToDisplay.orders.forEach(function(order) {
    htmlForOrderInfo += "<li id=" + order.id + ">" + order.sauces + " " + order.toppings + "</li>";
  });
  orderList.html(htmlForPizzaInfo);
};

function show() {
  const Pizza = pizzaOrder.findPizza(PizzaId);
  $("#show-order").show();
  $(".size").html(Pizza.sizePrice);
  $(".sauces").html(Pizza.saucePrice);
  $(".toppings").html(Pizza.toppingPrice);
}

function attachPizzaListeners() {
  $("ul#order").on("click", "li", function() {
    showPizza(this.id);
  });
};

$(document).ready(function() {
  attachPizzaListeners(); 
  $("form#select-pizza").submit(function(event) {
    event.preventDefault();
    const sauces = $("#sauces").val();
    const toppings = $("#toppings").val();

    $(".size-output").text();
    $(".sauce-output").text(sauces);
    $(".topping-output").text(toppings);
    $(".price-output").text();

    $("#show-order").show();

    let pizzaOrder = new pizzaOrder(sauces, toppings);
    pizzaOrder.addPizza(newPizza);
    displayPizzaDetails(pizzaOrder);

  });
}); 
    











