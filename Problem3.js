let itemChoice;
let quantity;
let totalPrice;

do {
    itemChoice = prompt("Select an item:\nA. Pepsi Cola (Php 30.00)\nB. Coca Cola (Php 35.00)\nC. Apple (per kg) (Php 100.00)\nD. Orange (per kg) (Php 120.00)\nE. Hotdogs (per kg) (Php 180.00)\nEnter choice (A-E):").toUpperCase();
} while (!/^[A-E]$/.test(itemChoice));


quantity = parseInt(prompt("Enter quantity:"));


switch (itemChoice) {
    case "A":
        totalPrice = 30 * quantity;
        break;
    case "B":
        totalPrice = 35 * quantity;
        break;
    case "C":
        totalPrice = 100 * quantity;
        break;
    case "D":
        totalPrice = 120 * quantity;
        break;
    case "E":
        totalPrice = 180 * quantity;
        break;
    default:
        totalPrice = 0;
}

alert(`Total price: Php ${totalPrice}`);

