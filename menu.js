// Menu Data
const menuItems = [
    // Appetizers
    { id: 1, name: 'Spring Rolls', price: 150, category: 'appetizers', description: 'Crispy vegetable spring rolls with sweet chili sauce', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop' },
    { id: 2, name: 'Chicken Wings', price: 250, category: 'appetizers', description: 'Spicy buffalo wings with blue cheese dip', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop' },
    { id: 4, name: 'Mozzarella Sticks', price: 200, category: 'appetizers', description: 'Fried mozzarella with marinara sauce', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop' },
    
    // Main Course
    { id: 5, name: 'Grilled Chicken', price: 450, category: 'mains', description: 'Tender grilled chicken with herbs and vegetables', image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop' },
    { id: 6, name: 'Beef Steak', price: 650, category: 'mains', description: 'Juicy beef steak with mashed potatoes', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop' },
    { id: 7, name: 'Pasta Carbonara', price: 380, category: 'mains', description: 'Creamy pasta with bacon and parmesan', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop' },
    { id: 8, name: 'Fish & Chips', price: 420, category: 'mains', description: 'Beer-battered fish with crispy fries', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop' },
    { id: 9, name: 'Vegetable Curry', price: 320, category: 'mains', description: 'Mixed vegetables in aromatic curry sauce', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop' },
    { id: 10, name: 'Pizza Margherita', price: 350, category: 'mains', description: 'Classic pizza with tomato and mozzarella', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
    
    // Desserts
    { id: 11, name: 'Chocolate Cake', price: 220, category: 'desserts', description: 'Rich chocolate layer cake', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop' },
    { id: 12, name: 'Ice Cream Sundae', price: 180, category: 'desserts', description: 'Vanilla ice cream with chocolate sauce', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop' },
    { id: 13, name: 'Cheesecake', price: 240, category: 'desserts', description: 'New York style cheesecake', image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=300&fit=crop' },
    { id: 14, name: 'Tiramisu', price: 260, category: 'desserts', description: 'Classic Italian dessert', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop' },
    
    // Beverages
    { id: 15, name: 'Fresh Orange Juice', price: 120, category: 'beverages', description: 'Freshly squeezed orange juice', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop' },
    { id: 16, name: 'Coffee', price: 100, category: 'beverages', description: 'Hot brewed coffee', image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop' },
    { id: 17, name: 'Soft Drink', price: 80, category: 'beverages', description: 'Cola, Sprite, or Fanta', image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop' },
    { id: 18, name: 'Milkshake', price: 150, category: 'beverages', description: 'Chocolate, vanilla, or strawberry', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' }
];

// Display menu items
function displayMenuItems(category = 'all') {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;

    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No items found in this category.</p>';
        return;
    }

    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.parentElement.innerHTML='${getItemEmoji(item.category)}';">
            </div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="menu-item-footer">
                <span class="menu-item-price">₹${item.price}</span>
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Get emoji for category
function getItemEmoji(category) {
    const emojis = {
        'appetizers': '🥟',
        'mains': '🍽️',
        'desserts': '🍰',
        'beverages': '🥤'
    };
    return emojis[category] || '🍴';
}

// Add item to cart
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (item) {
        cartManager.addItem(item);
    }
}

// Category filter functionality
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter and display items
            const category = button.getAttribute('data-category');
            displayMenuItems(category);
        });
    });

    // Display all items on page load
    displayMenuItems('all');
});

