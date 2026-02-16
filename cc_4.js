// cc_4.js - Retail Discount Engine

// Products Array
let inventory = [
    { name: "Tomato", category: "groceries", price: 2.00, inventory: 100 },
    { name: "Woodpecker", category: "pets", price: 150.00, inventory: 5 },
    { name: "Garbage Disposal", category: "household", price: 200.00, inventory: 10 },
    { name: "Lightning Strike", category: "miscellaneous", price: 500.00, inventory: 3 },
    { name: "Pillow", category: "household", price: 25.00, inventory: 40 }
];

// Category discounts

for (let product of inventory) {
    let discountRate = 0;

    switch (product.category) {
        case "groceries":
        case "household":
            discountRate = 0.10; // 10% off for Tomato, Disposal, and Pillow
            break;
        case "pets":
            discountRate = 0.05; // 5% Discount for Woodpecker
            break;
        case "miscellaneous":
        default:
            discountRate = 0; // No discount for Lightning Strike
            break;
    }
    // Update the price
    product.price = product.price - (product.price * discountRate);
}

// Checkout Customer Types
let customerTypes = ["regular", "student", "senior"];

for (let i = 0; i < customerTypes.length; i++) {
    let customerType = customerTypes[i];
    let totalCartValue = 0;

    for (let product of inventory) {
        if (product.inventory > 0) {
            totalCartValue += product.price;
            product.inventory -= 1; // Lower stock after purchase
        }
    }

// Membership discounts
    let extraDiscount = 0;
    if (customerType === "student") {
        extraDiscount = 0.05; 
    } else if (customerType === "senior") {
        extraDiscount = 0.07;
    }

    let finalTotal = totalCartValue - (totalCartValue * extraDiscount);

    console.log("Customer " + (i + 1) + " (" + customerType + ") Total: $" + finalTotal.toFixed(2));
}

console.log("Single Product (Lightning Strike)");

let strikeInfo = inventory[3];
for (let key in strikeInfo) {
    console.log(key + ": " + strikeInfo[key]);
}

console.log("Final Inventory Check");

    for (let [key, value] of Object.entries(product)) {
        console.log(key + " -> " + value);
    }
    console.log("-----------------"); 
