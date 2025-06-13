document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cartItems');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    // Sample cart data (in a real app, this would come from localStorage or a backend)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Render cart items
    function renderCart() {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Your cart is empty</p>
                    <a href="index.html" class="btn">Continue Shopping</a>
                </div>
            `;
            subtotalElement.textContent = '₹0.00';
            totalElement.textContent = '₹50.00';
            checkoutBtn.disabled = true;
            return;
        }
        
        let html = '';
        let subtotal = 0;
        
        cart.forEach((item, index) => {
            subtotal += item.price * item.quantity;
            html += `
                <div class="cart-item">
                    <div class="item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <div class="item-price">₹${item.price.toFixed(2)}</div>
                    </div>
                    <div class="item-quantity">
                        <button class="quantity-btn minus" data-index="${index}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus" data-index="${index}">+</button>
                    </div>
                    <div class="item-total">₹${(item.price * item.quantity).toFixed(2)}</div>
                    <button class="remove-item" data-index="${index}"><i class="fas fa-trash"></i></button>
                </div>
            `;
        });
        
        cartItems.innerHTML = html;
        subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
        totalElement.textContent = `₹${(subtotal + 50).toFixed(2)}`;
        checkoutBtn.disabled = false;
        
        // Add event listeners
        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', decreaseQuantity);
        });
        
        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', increaseQuantity);
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', removeItem);
        });
    }
    
    // Quantity functions
    function decreaseQuantity(e) {
        const index = e.target.dataset.index;
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
            updateCart();
        }
    }
    
    function increaseQuantity(e) {
        const index = e.target.dataset.index;
        cart[index].quantity++;
        updateCart();
    }
    
    function removeItem(e) {
        const index = e.target.closest('button').dataset.index;
        cart.splice(index, 1);
        updateCart();
    }
    
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
    
    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        alert('Proceeding to checkout. In a real app, this would redirect to a payment page.');
        // window.location.href = 'checkout.html';
    });
    
    // Initial render
    renderCart();
});