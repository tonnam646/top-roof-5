document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            button.classList.add('active');
            const filterCategory = button.dataset.category;
            portfolioItems.forEach(item => {
                const itemCategory = item.dataset.category;
                if (itemCategory === filterCategory) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });

    const initialFilterButton = document.querySelector('.filter-btn.active');
    if (initialFilterButton) {
        initialFilterButton.click();
    }
});
