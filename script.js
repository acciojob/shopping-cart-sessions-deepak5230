// script.js

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Function to render the product list
function renderProductList() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${product.name} - $${product.price}
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(li);
  });
}

// Function to render the shopping cart
function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  const cart = getCart();
  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// Function to get the cart from session storage
function getCart() {
  return JSON.parse(sessionStorage.getItem("cart")) || [];
}

// Function to save the cart to session storage
function saveCart(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const cart = getCart();
  cart.push(product);
  saveCart(cart);
  renderCart();
}

// Function to clear the cart
function clearCart() {
  saveCart([]);
  renderCart();
}

// Event listener for the clear cart button
document.getElementById("clear-cart-btn").addEventListener("click", clearCart);

// Initial render
renderProductList();
renderCart();
