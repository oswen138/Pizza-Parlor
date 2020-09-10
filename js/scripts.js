// Pizza Constructor
function Pizza(size, toppings, sauces) {
  this.size = size;
  this.toppings = toppings;
  this.sauces = sauces;
  this.total = 0;
};

Pizza.prototype.calculate = function() {

  if (this.size === "Tiny") {
    this.total += 8
  } else if (this.size === "Giant") {
    this.total += 12;
  } else if (this.size === "Monster") {
    this.total += 20;
  } else {
    this.total += 1;
  }

  if (this.toppings === "1") {
    this.total += 2;
  } else if (this.toppings === "2") {
    this.total += 3;
  } else if (this.toppings === "3") {
    this.total += 5;
  } else {
    this.total += 1;
  }

  if (this.sauces === "1") {
    this.total += 2;
  } else if (this.sauces === "2") {
    this.total += 3;
  } else if (this.sauces === "3") {
    this.total += 5;
  } else {
    this.total += 1;
  }
  return this.total;
};

// Front-End User Logic
$(document).ready(function() {
  $("form#select-pizza").submit(function(event) {
    event.preventDefault();

    const selectSize = $("select#size").val();
    const selectSauces = $("select#sauces").val();
    const selectToppings = $("select#toppings").val();

    const pizzaTotal = new Pizza(selectSize, selectToppings, selectSauces);
    pizzaTotal.calculate();

    $("#order-detail").text("Pizza total is $ " + pizzaTotal.calculate() + "!");
   
  });
});