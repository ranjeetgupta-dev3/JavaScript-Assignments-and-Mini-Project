// ============================================
// Capstone Mini Project
// Interactive Product Inventory & Analytics Dashboard
// ============================================

console.log("--- Initializing Inventory System ---");

// --------------------------------------------
// 1. Initial Inventory
// --------------------------------------------

const inventory = [
    {
        name: "Laptop",
        price: 800
    },
    {
        name: "Mouse",
        price: 25
    }
];


// --------------------------------------------
// 2. Function to Determine Product Category
// --------------------------------------------

function getCategory(price) {
    if (price < 50) {
        return "Budget";
    } else if (price < 200) {
        return "Standard";
    } else {
        return "Premium";
    }
}


// Assign categories to existing products
inventory.forEach(function(product) {
    product.category = getCategory(product.price);
});


// --------------------------------------------
// 3. User Input
// --------------------------------------------

let productName = prompt("Enter new product name:");
let productPrice = prompt("Enter product price:");


// Explicit type conversion
productPrice = Number(productPrice);


// --------------------------------------------
// 4. Input Validation
// --------------------------------------------

if (productName === null || productName.trim() === "") {

    console.log("Invalid product name.");

} else if (isNaN(productPrice) || productPrice <= 0) {

    console.log("Invalid product price.");

} else {

    console.log("Product input is valid.");

}


// --------------------------------------------
// 5. Category Assignment
// --------------------------------------------

let categoryCode;

if (productPrice < 50) {
    categoryCode = 1;
} else if (productPrice < 200) {
    categoryCode = 2;
} else {
    categoryCode = 3;
}


let category;

switch (categoryCode) {

    case 1:
        category = "Budget";
        break;

    case 2:
        category = "Standard";
        break;

    case 3:
        category = "Premium";
        break;

    default:
        category = "Unknown";
}


// --------------------------------------------
// 6. Add New Product
// --------------------------------------------

if (
    productName !== null &&
    productName.trim() !== "" &&
    !isNaN(productPrice) &&
    productPrice > 0
) {

    const newProduct = {
        name: productName.trim(),
        price: productPrice,
        category: category
    };

    inventory.push(newProduct);

    console.log("Product successfully added to inventory.");

} else {

    console.log("Product was not added due to invalid input.");

}


// --------------------------------------------
// 7. Inventory Roster using forEach()
// --------------------------------------------

console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach(function(product) {

    console.log(
        `* Item: ${product.name} ($${product.price}) -> Category: ${product.category}`
    );

});


// --------------------------------------------
// 8. Calculate Total Inventory Value
// --------------------------------------------

function calculateTotalInventory(inventoryItems) {

    let total = 0;

    for (let i = 0; i < inventoryItems.length; i++) {
        total += inventoryItems[i].price;
    }

    return total;
}


const totalInventoryValue = calculateTotalInventory(inventory);


// --------------------------------------------
// 9. Filter Affordable Products
// --------------------------------------------

const affordableProducts = inventory.filter(function(product) {

    return product.price < 200;

});


const affordableProductNames = affordableProducts.map(function(product) {

    return product.name;

});


// --------------------------------------------
// 10. Create Formatted Report using map()
// --------------------------------------------

const formattedReport = inventory.map(function(product) {

    return `${product.name.toUpperCase()}: $${product.price}`;

});


// --------------------------------------------
// 11. Arrow Function - Apply Discount
// --------------------------------------------

const applyDiscount = (price, discountPercent = 0) => {

    return price - (price * discountPercent / 100);

};


const discountedMonitorPrice = applyDiscount(150, 10);


// --------------------------------------------
// 12. Financial Analytics
// --------------------------------------------

console.log("\n--- Financial Analytics ---");

console.log(
    "Total Inventory Value: $" + totalInventoryValue
);

console.log(
    "Filtered Affordable Items (Under $200):",
    affordableProductNames
);

console.log(
    "Formatted Report List:",
    formattedReport
);

console.log(
    "Monitor Price after 10% Discount:",
    discountedMonitorPrice
);