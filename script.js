const productsData = [
    { id: 1, name: 'Product 1', price: 50.00, image: 'https://picsum.photos/200/200' },
    { id: 2, name: 'Product 2', price: 75.00, image: 'https://picsum.photos/200/200' },
    { id: 3, name: 'Product 3', price: 75.00, image: 'https://picsum.photos/200/200' },
    { id: 4, name: 'Product 4', price: 75.00, image: 'https://picsum.photos/200/200' },
    { id: 5, name: 'Product 5', price: 75.00, image: 'https://picsum.photos/200/200' },
    { id: 6, name: 'Product 6', price: 75.00, image: 'https://picsum.photos/200/200' },
    { id: 7, name: 'Product 7', price: 75.00, image: 'https://picsum.photos/200/200' },
    { id: 8, name: 'Product 8', price: 75.00, image: 'https://picsum.photos/200/200' },
    { id: 9, name: 'Product 9', price: 75.00, image: 'https://picsum.photos/200/200' },
    { id: 10, name: 'Product 10', price: 75.00, image: 'https://picsum.photos/200/200' },
];


let cartItems = [];
let cartTotal = 0;

function renderProducts() {
    const productsContainer = document.getElementById('products');

    productsData.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product';

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.onclick = () => addToCart(product);

        productCard.appendChild(image);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(addToCartButton);

        productsContainer.appendChild(productCard);
    });
}

function addToCart(product) {
    cartItems.push({ id: product.id, name: product.name, price: product.price });
    cartTotal += product.price;

    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Clear previous cart items
    cartItemsList.innerHTML = '';

    // Populate the cart with the updated items
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });

    // Update total
    cartTotalElement.textContent = cartTotal.toFixed(2);
}

// Call the function to render products when the page loads
window.onload = renderProducts;
