//Business logic for Order
function pizzaOrder() {
  this.order = [];
  this.grandTotal = 0;
  this.sizePrice = 0;
  this.saucePrice = 0;
  this.toppingPrice = 0;
}

//assign id to pizzaOrder
pizzaOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
//find specific pizzaOrder
pizzaOrder.prototype.findOrder = function(grandTotal) {
  for (let i=0; i<this.order.length; i++) {
    if (this.order[i]) {
      if (this.order[i].id == id) {
        return this.order[i];
      }
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
  this.pizzaOrder.push(saucePrice);
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
  this.pizzaOrder.push(toppingPrice);
}
//Calculate total cost of pizza and sisplay
pizzaOrder.prototype.Total = function() {
  console.log(this.grandTotal);
  this.grandTotal = this.sizePrice + this.saucePrice + this.toppingPrice;
}


//Business Logic for Pizza
function Pizza(sauce, topping, size) {
  this.pizzaSize = pizzaSize;
  this.pizzaSauce = pizzaSauce;
  this.pizzaTopping = pizzaTopping;
}

Contact.prototype.pizzaPrice = function() {
  return this.pizzaSize + this.pizzaSauce + this.pizzaTopping;
}


//attach listeners for pizza selections
function attachOrderListeners() {
  $("ul#order").on("click", "li", function() {
    showOrder(this.id);
  });


//User Interface Logic ---------
let pizzaOrder = new pizzaOrder();

function displayOrderDetails(pizzaOrderToDisplay) {
  let pizzaOrder = $("ul#summary");
  let htmlForOrderInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

}

$(document).ready(function() {
  $("form#select-pizza").submit(function(event) {
    event.preventDefault();
    const size = $("#size1").val();
    const size = $("#size2").val();
    const size = $("#size3").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
  })
})




const size = $("#size").val();
//     const sauce= $("#sauces").val();
//     const topping = $("#toppings").val();

$("form").submit(function(event) {
  event.preventDefault();



  pizza.sizePrice();
  pizza.saucePrice();
  pizza.toppingPrice();
  $(".size-output").show;
  $(".sauce-output").show;
  $(".topping-output").show;
  $(".price-output").show;
  const size = $("#size").val();
  //     const sauce= $("#sauces").val();
  //     const topping = $("#toppings").val();
  //     let newPizzaOrder = new PizzaOrder(size, sauce, topping);
});


$(document).ready(function() {
  let summary = '';
  $('size').each(function() {
    summary += $(this).val() + '';
  });
  $('#summary').text(summary);
});






$('input').on('blur', function() {
  let summary = '';
  $('input').each( function() {
      summary += $(this).val() + ' ';
  });
  $('#summary').text(summary);
});
$(document).ready(function() {
  $("#formZing").submit(function(event) {
    event.preventDefault();
    const inputNum  = parseInt($("#input").val());
    let result = speakArray(inputNum).toString();
    $("#result").text(result);
    $("#result").show() 
  });
});





