
let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(productName + " added to your cart!");
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById('cart-list');
    let totalPrice = 0;
    cartList.innerHTML = '';
    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = item.productName + " - $" + item.price.toFixed(2);
        cartList.appendChild(listItem);
        totalPrice += item.price;
    });
    document.getElementById('total-price').textContent = "Total: $" + totalPrice.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Your order has been placed. Thank you for shopping with us!");
        cart = [];
        updateCart();
    }
}
