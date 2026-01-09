// Display order summary and bill
function displayOrderSummary() {
    const cart = cartManager.getCart();
    const billItemsContainer = document.getElementById('bill-items');
    const billDate = document.getElementById('bill-date');

    if (!billItemsContainer) return;

    // Set current date
    if (billDate) {
        const now = new Date();
        billDate.textContent = now.toLocaleString('en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    if (cart.length === 0) {
        billItemsContainer.innerHTML = '<p style="text-align: center; padding: 2rem;">No items in cart. <a href="menu.html">Add items from menu</a></p>';
        updateBillTotals(0, 0, 0, 0);
        return;
    }

    // Display cart items
    billItemsContainer.innerHTML = cart.map(item => `
        <div class="bill-item">
            <div class="bill-item-name">
                <strong>${item.name}</strong>
            </div>
            <div class="bill-item-quantity">
                ${item.quantity} x ₹${item.price}
            </div>
            <div class="bill-item-price">
                ₹${(item.price * item.quantity).toFixed(2)}
            </div>
        </div>
    `).join('');

    // Calculate and display totals
    const subtotal = cartManager.calculateSubtotal();
    const serviceCharge = cartManager.calculateServiceCharge(subtotal);
    const gst = cartManager.calculateGST(subtotal);
    const total = cartManager.calculateTotal();

    updateBillTotals(subtotal, serviceCharge, gst, total);
}

// Update bill totals
function updateBillTotals(subtotal, serviceCharge, gst, total) {
    const subtotalEl = document.getElementById('bill-subtotal');
    const serviceChargeEl = document.getElementById('bill-service-charge');
    const gstEl = document.getElementById('bill-gst');
    const totalEl = document.getElementById('bill-total');

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    if (serviceChargeEl) serviceChargeEl.textContent = `₹${serviceCharge.toFixed(2)}`;
    if (gstEl) gstEl.textContent = `₹${gst.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `₹${total.toFixed(2)}`;
}

// Clear cart and redirect to menu
function clearCartAndRedirect() {
    if (confirm('Are you sure you want to start a new order? This will clear your current cart.')) {
        cartManager.clearCart();
        window.location.href = 'menu.html';
    }
}

// Initialize order summary page
document.addEventListener('DOMContentLoaded', () => {
    displayOrderSummary();
    cartManager.updateCartCount();
});

