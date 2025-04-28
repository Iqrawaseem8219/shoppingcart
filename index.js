
alert("\nWelcome to Our Shop!\n");

let itemName = prompt("Enter the name of the item you are buying:");
let itemPrice = parseFloat(prompt("Enter the price of the item:"));
let quantity = parseInt(prompt("Enter the quantity you want to buy:"));

let subtotal = itemPrice * quantity;

alert("You bought " + quantity + " " + itemName +
     "(s).\nYour subtotal is: $" + subtotal);