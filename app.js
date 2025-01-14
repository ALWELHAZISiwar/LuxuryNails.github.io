// app.js

// Simple cart implementation
let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} added to cart.`);
    updateCart();
}

function updateCart() {
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.textContent = `Cart (${cart.length})`;
}

// Simple login functionality (for demonstration purposes)
let isLoggedIn = false;

function toggleLogin() {
    if (isLoggedIn) {
        isLoggedIn = false;
        alert("Logged out successfully");
    } else {
        isLoggedIn = true;
        alert("Logged in successfully");
    }
}

// Update cart items
function viewCart() {
    alert("Cart contents: " + JSON.stringify(cart));
}
