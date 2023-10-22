/* File: SophisticatedCode.js */

// Description: This code simulates a complex web application that manages a fictional e-commerce store.

// Utility functions for the store

function generateRandomId() {
  return Math.floor(Math.random() * 1000000);
}

function calculateDiscount(price, percentage) {
  return price - (price * percentage);
}

// Data structures for the store

class Product {
  constructor(name, price) {
    this.id = generateRandomId();
    this.name = name;
    this.price = price;
  }
}

class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    const existingItem = this.items.find((item) => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new CartItem(product, quantity));
    }
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  checkout() {
    // Simulate complex checkout logic
    console.log('Processing payment...');
    console.log('Order placed successfully!');
    this.clearCart();
  }

  clearCart() {
    this.items = [];
  }
}

// Main program

const storeProducts = [
  new Product('T-Shirt', 20),
  new Product('Jeans', 50),
  new Product('Shoes', 80),
  new Product('Sunglasses', 100),
  new Product('Watch', 200)
];

const shoppingCart = new Cart();

shoppingCart.addItem(storeProducts[0], 2);
shoppingCart.addItem(storeProducts[2], 1);
shoppingCart.addItem(storeProducts[3], 3);

console.log(`Total price in cart: $${shoppingCart.getTotalPrice()}`);

shoppingCart.removeItem(storeProducts[2].id);

console.log(`Total price in cart after removing an item: $${shoppingCart.getTotalPrice()}`);

shoppingCart.checkout();

console.log(`Total price in cart after checkout: $${shoppingCart.getTotalPrice()}`);