document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function updateNavigation() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === messages.length - 1;
    }

    function showMessage(index) {
        messages.forEach((message, i) => {
            message.classList.remove('active', 'previous');
            if (i === index) {
                message.classList.add('active');
            } else if (i < index) {
                message.classList.add('previous');
            }
        });
        currentIndex = index;
        updateNavigation();
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            showMessage(currentIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < messages.length - 1) {
            showMessage(currentIndex + 1);
        }
    });

    // Initialize navigation state
    updateNavigation();
}); 