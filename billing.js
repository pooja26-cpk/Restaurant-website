// Display cart items and calculate bill
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = cartManager.getCart();

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty. <a href="menu.html">Add items from menu</a></p>';
        updateBillSummary(0, 0, 0, 0);
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>₹${item.price} each</p>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateItemQuantity(${item.id}, -1)">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateItemQuantity(${item.id}, 1)">+</button>
                </div>
                <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
                <button class="btn btn-danger" onclick="removeItem(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    // Calculate and update bill summary
    const subtotal = cartManager.calculateSubtotal();
    const serviceCharge = cartManager.calculateServiceCharge(subtotal);
    const gst = cartManager.calculateGST(subtotal);
    const total = cartManager.calculateTotal();

    updateBillSummary(subtotal, serviceCharge, gst, total);
}

// Update item quantity
function updateItemQuantity(itemId, change) {
    cartManager.updateQuantity(itemId, change);
    displayCartItems();
    cartManager.updateCartCount();
}

// Remove item from cart
function removeItem(itemId) {
    cartManager.removeItem(itemId);
    displayCartItems();
    cartManager.updateCartCount();
}

// Update bill summary
function updateBillSummary(subtotal, serviceCharge, gst, total) {
    const subtotalEl = document.getElementById('subtotal');
    const serviceChargeEl = document.getElementById('service-charge');
    const gstEl = document.getElementById('gst');
    const totalEl = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    if (serviceChargeEl) serviceChargeEl.textContent = `₹${serviceCharge.toFixed(2)}`;
    if (gstEl) gstEl.textContent = `₹${gst.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `₹${total.toFixed(2)}`;
    
    if (checkoutBtn) {
        checkoutBtn.disabled = subtotal === 0;
        checkoutBtn.style.opacity = subtotal === 0 ? '0.5' : '1';
        checkoutBtn.style.cursor = subtotal === 0 ? 'not-allowed' : 'pointer';
    }
}

// Initialize billing page
document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
    cartManager.updateCartCount();
});

