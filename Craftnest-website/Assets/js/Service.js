document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality for service pages
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.dataset.service;
            const price = parseFloat(this.dataset.price);
            
            // In a real app, you would have more item details
            const item = {
                name: service,
                description: 'Custom ' + service + ' service',
                price: price,
                quantity: 1,
                image: 'assets/images/products/service-placeholder.jpg'
            };
            
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            // Check if item already exists in cart
            const existingItem = cart.find(i => i.name === item.name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push(item);
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Show confirmation
            alert(`${service} has been added to your cart!`);
            
            // Update cart count in header (if exists)
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
                cartCount.textContent = totalItems;
            }
        });
    });
    
    // Gallery lightbox functionality
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    if (galleryImages.length > 0) {
        galleryImages.forEach(image => {
            image.addEventListener('click', function() {
                // In a real app, you would implement a lightbox here
                console.log('Viewing image:', this.alt);
            });
        });
    }
});