// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the animation
function handleAnimation() {
    const elementsToAnimate = document.querySelectorAll('.animate-slide');
    
    elementsToAnimate.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('slide-in');
        } else {
            element.classList.remove('slide-in');
        }
    });
}

// Add an event listener to handle the animation on scroll
window.addEventListener('scroll', handleAnimation);


//credit to CHATGPT for this code example
