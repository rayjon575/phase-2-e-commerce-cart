# E-Commerce Cart Application

This is a simple e-commerce cart application built with React. Users can add products to their cart, update item quantities, and view the total price. The application is designed to be lightweight, easy to understand, and responsive.

## Features

- **Add to Cart**: Add products to the cart and manage quantities.
- **Cart Management**: Update item quantities or remove items from the cart.
- **Total Price Calculation**: Automatically calculate and display the total price of the items in the cart.
- **Responsive Design**: The app is fully responsive, adjusting the layout based on screen size.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling and ensuring the app is responsive.

## Installation

To get started with this project, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/rayjon575/phase-2-e-commerce-cart.git
    cd e-commerce-cart
    npm install
    npm start
## Key Components
App.js: The main component that manages the cart state, handles adding/removing products, and calculates the total price.
ProductList.js: Displays the list of products and allows the user to add them to the cart.
Cart.js: Displays the cart's contents and allows the user to update the quantity or remove items.
CartItem.js: Displays individual items in the cart with controls to update their quantities.
Product.js: Represents each product in the product list and includes an "Add to Cart" button.
data.js: Contains an array of products with their names, prices, and IDs.
## How It Works
Adding Products to the Cart: When a user clicks "Add to Cart" on a product, the addToCart function is called. It checks if the product is already in the cart:

If the product exists, it updates the quantity.
If not, it adds the product to the cart with a quantity of 1.
Updating or Removing Items from the Cart: The user can update the quantity of items in the cart using the updateCartItem function. If the quantity is set to 0 or a negative number, the item is removed from the cart.

Calculating the Total: The calculateTotal function sums up the total price of all items in the cart, taking into account each item's price and quantity.

## Responsive Design
The app is designed to be responsive, adjusting automatically for different screen sizes. On smaller screens, the layout of the cart and product list adjusts to provide an optimized user experience.

## Future Features
Product Details: Add a feature to view more details for each product.
User Authentication: Implement user login to allow users to save their carts.
Discounts & Coupons: Add support for applying discount codes to the total price.
## License
This project is licensed under the MIT License - see the LICENSE file for details.

vbnet
Copy

