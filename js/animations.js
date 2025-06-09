// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Function to handle scroll animations
function handleScrollAnimations() {
    const categoryContents = document.querySelectorAll('.category-content');
    
    categoryContents.forEach(content => {
        if (isInViewport(content) && !content.classList.contains('visible')) {
            content.classList.add('visible');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimations);

// Initial check for elements in viewport
document.addEventListener('DOMContentLoaded', handleScrollAnimations); 