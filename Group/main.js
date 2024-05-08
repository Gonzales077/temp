const quantityInput = document.getElementById('quantityInput');
const addToCartButton = document.getElementById('addToCartButton');
const cartItems = document.querySelector('.cart-items');
const cartList = document.querySelector('.cart-list');

// Add event listener to the add to cart button
addToCartButton.addEventListener('click', function(event) {
    // Prevent the default button behavior (which causes the page to scroll)
    event.preventDefault();

    // Get the quantity value
    const quantity = parseInt(quantityInput.value);
    
    // Update the cart items count and list
    if (!isNaN(quantity) && quantity > 0) {
        const currentQuantity = parseInt(cartItems.textContent);
        cartItems.textContent = currentQuantity + quantity;

        // Create a new list item for the cart
        const cartItem = document.createElement('li');
        cartItem.textContent = `Product X ${quantity}`;
        cartList.appendChild(cartItem);

        quantityInput.value = ''; // Reset the quantity input
    }
});
