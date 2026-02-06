// Cart Management with localStorage
class CartManager {
    constructor() {
        this.cart = this.loadCart();
        this.updateCartCount();
    }

    loadCart() {
        const cartData = localStorage.getItem('restaurantCart');
        return cartData ? JSON.parse(cartData) : [];
    }

    saveCart() {
        localStorage.setItem('restaurantCart', JSON.stringify(this.cart));
        this.updateCartCount();
    }

    addItem(item) {
        const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...item,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.showNotification('Item added to cart!');
    }

    removeItem(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.saveCart();
        this.showNotification('Item removed from cart!');
    }

    updateQuantity(itemId, change) {
        const item = this.cart.find(cartItem => cartItem.id === itemId);
        
        if (item) {
            item.quantity += change;
            
            if (item.quantity <= 0) {
                this.removeItem(itemId);
            } else {
                this.saveCart();
            }
        }
    }

    getCart() {
        return this.cart;
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
    }

    getCartCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    updateCartCount() {
        const cartCountElements = document.querySelectorAll('#cart-count');
        const count = this.getCartCount();
        cartCountElements.forEach(element => {
            element.textContent = count;
        });
    }

    calculateSubtotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    calculateServiceCharge(subtotal) {
        return subtotal * 0.10; // 10% service charge
    }

    calculateGST(subtotal) {
        return subtotal * 0.05; // 5% GST
    }

    calculateTotal() {
        const subtotal = this.calculateSubtotal();
        const serviceCharge = this.calculateServiceCharge(subtotal);
        const gst = this.calculateGST(subtotal);
        return subtotal + serviceCharge + gst;
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
}

// Initialize cart manager
const cartManager = new CartManager();

// Update cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    cartManager.updateCartCount();
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a nav link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
});

