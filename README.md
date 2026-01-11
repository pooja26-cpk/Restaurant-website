# Restaurant Website - Delicious Bites

A modern, responsive restaurant ordering website built with vanilla HTML, CSS, and JavaScript. This project provides a complete online ordering experience with cart management, billing calculations, and order summary functionality.

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Storage:** Browser localStorage for cart persistence
- **Images:** Unsplash API for food images
- **Styling:** Custom CSS with CSS Grid and Flexbox
- **Responsive:** Mobile-first design with media queries

## Project Structure

```
restaurant-website/
├── index.html              # Home page with hero section and features
├── menu.html               # Menu page with category filtering
├── billing.html            # Cart and billing page
├── order-summary.html      # Final order summary and bill
├── script.js               # Shared cart management and utilities
├── menu.js                 # Menu data and display logic
├── billing.js              # Cart display and billing calculations
└── styles.css              # Complete styling and responsive design
```

## Features

### 🏠 Home Page
- Hero section with restaurant branding
- Feature highlights (Fresh Ingredients, Expert Chefs, Fast Service)
- Navigation to menu

### 🍽️ Menu System
- Categorized menu items:
  - Appetizers (Spring Rolls, Chicken Wings, etc.)
  - Main Course (Grilled Chicken, Beef Steak, Pasta, etc.)
  - Desserts (Chocolate Cake, Ice Cream, Cheesecake, etc.)
  - Beverages (Fresh Juice, Coffee, Soft Drinks, etc.)
- Category filtering buttons
- Add to cart functionality
- Responsive grid layout

### 🛒 Cart Management
- Persistent cart using localStorage
- Real-time cart count in navigation
- Quantity controls (+/- buttons)
- Remove items from cart
- Automatic cart updates

### 💰 Billing System
- Detailed bill breakdown:
  - Subtotal
  - Service Charge (10%)
  - GST (5%)
  - Total amount
- Sticky bill summary on billing page
- Checkout button (disabled when cart is empty)

### 📄 Order Summary
- Complete bill display with date/time
- Itemized order details
- Print-friendly bill layout
- Print functionality
- New order option (clears cart)

### 🎨 User Experience
- Responsive design for all devices
- Smooth animations and transitions
- Toast notifications for user actions
- Hamburger menu for mobile navigation
- Loading states and error handling

## How It Works

1. **Navigation:** Users can navigate between Home, Menu, Billing, and Order Summary pages using the top navigation bar.

2. **Menu Selection:** On the menu page, users can filter items by category and add desired items to their cart. Each item includes name, description, price, and image.

3. **Cart Management:** The cart persists across page reloads using localStorage. Users can view their cart on the billing page, adjust quantities, or remove items.

4. **Billing:** The billing page displays all cart items with quantity controls and a detailed bill summary including taxes and service charges.

5. **Checkout:** Users can proceed to checkout to view the final order summary. The bill can be printed or users can start a new order.

6. **Persistence:** Cart data is automatically saved to localStorage, ensuring users don't lose their selections when navigating between pages.

## Installation & Usage

1. Clone or download the project files
2. Open `index.html` in a web browser
3. No server required - runs entirely in the browser
4. Start by clicking "View Menu" or navigating to menu.html

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features in Detail

### Cart System
- Add/remove items
- Quantity adjustment
- Price calculations
- Cart persistence
- Real-time updates

### Responsive Design
- Desktop: Full grid layouts
- Tablet: Adjusted grid columns
- Mobile: Single column, hamburger menu
- Touch-friendly buttons and controls

### Print Functionality
- Clean, professional bill layout
- Print-optimized CSS
- Date/time stamps
- Itemized breakdown

## Development Notes

- Uses modern JavaScript features (ES6+)
- CSS custom properties for theming
- Modular JavaScript files for maintainability
- External image loading with fallbacks
- No build process required

## Future Enhancements

- User authentication
- Order history
- Payment integration
- Admin panel for menu management
- Real-time order tracking
- Email/SMS notifications

---

**Restaurant Website - Delicious Bites** © 2024. A complete frontend solution for restaurant ordering.