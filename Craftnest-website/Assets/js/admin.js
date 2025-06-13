document.addEventListener('DOMContentLoaded', function() {
    // Sample admin data (in a real app, this would come from an API)
    const adminData = {
        totalOrders: 24,
        totalRevenue: 8750,
        newCustomers: 12,
        pendingMessages: 5
    };
    
    // Update stats
    document.getElementById('totalOrders').textContent = adminData.totalOrders;
    document.getElementById('totalRevenue').textContent = `₹${adminData.totalRevenue.toLocaleString()}`;
    document.getElementById('newCustomers').textContent = adminData.newCustomers;
    document.getElementById('pendingMessages').textContent = adminData.pendingMessages;
    
    // FAQ functionality for support pages
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isOpen = question.classList.contains('active');
                
                // Close all other FAQs
                faqQuestions.forEach(q => {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = null;
                    q.querySelector('i').classList.remove('fa-chevron-up');
                    q.querySelector('i').classList.add('fa-chevron-down');
                });
                
                // Toggle current FAQ
                if (!isOpen) {
                    question.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    question.querySelector('i').classList.remove('fa-chevron-down');
                    question.querySelector('i').classList.add('fa-chevron-up');
                }
            });
        });
    }
    
    // In a real app, you would have more admin functionality here:
    // - Fetching real order data
    // - Processing orders
    // - Managing inventory
    // - Customer communication
});