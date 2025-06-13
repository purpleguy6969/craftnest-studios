document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    // Sample responses for the chatbot
    const responses = {
        'hello': 'Hello there! How can I assist you with CraftNest Studios today?',
        'hi': 'Hi! Welcome to CraftNest Studios. What would you like to know?',
        'services': 'We offer several services: 1) Holiday Homework Helper, 2) Notebook & Bookmark Customizer, 3) Digital Design Services, and 4) DIY Gift Box Creator. Which one interests you?',
        'holiday homework': 'Our Holiday Homework Helper service assists kids with their summer projects. We offer file decoration, creative charts, handwritten pages, and science models. Prices range from ₹100–₹500 per project depending on size.',
        'notebook': 'Our Notebook & Bookmark Customizer creates personalized notebooks (₹99–₹199) and bookmarks (₹20–₹50). Themes include anime, zodiac signs, BTS, minimalist, and study quotes.',
        'digital design': 'Our Digital Design service offers Canva-based designs for resumes, posters, Instagram highlight covers, and birthday invites. Prices range from ₹50–₹300 per design.',
        'gift box': 'Our DIY Gift Box Creator makes personalized hampers with notes, sweets, stickers, and more. Prices range from ₹199–₹399 depending on size. Perfect for birthdays and special occasions!',
        'price': 'Prices vary by service: Holiday Homework (₹100–₹500), Notebooks (₹99–₹199), Bookmarks (₹20–₹50), Digital Designs (₹50–₹300), Gift Boxes (₹199–₹399).',
        'order': 'To place an order, please visit our service pages and add items to your cart. Then proceed to checkout.',
        'contact': 'You can contact us via WhatsApp (9315667722), phone (9625494983), or email (sangwanpriyanshu98@gmail.com).',
        'default': "I'm sorry, I didn't understand that. Could you rephrase or ask about our services, prices, or how to order?"
    };

    // Add a message to the chat
    function addMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'avatar';
        avatarDiv.innerHTML = sender === 'user' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';
        contentDiv.innerHTML = `<p>${message}</p>`;
        
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Process user input
    function processInput() {
        const message = userInput.value.trim().toLowerCase();
        if (message === '') return;
        
        // Add user message to chat
        addMessage('user', message);
        userInput.value = '';
        
        // Simulate typing indicator
        const typing