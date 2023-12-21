let trueOrFalse = true;
    function showElement(elementId) {
    // Hide all elements
    const allElements = document.querySelectorAll('.search-dropdown');
    allElements.forEach(element => {
        element.style.display = 'none';
    });

    // Show the selected element
    const selectedElement = document.getElementById(elementId);
    if (trueOrFalse) {
        selectedElement.style.display = 'block';
    } else {
      selectedElement.style.display = 'none';
    }
    trueOrFalse= !trueOrFalse;
  } 
  



function setupButtonClickHandlers() {
    const buttons = document.querySelectorAll('.buttonav');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const elementId = button.getAttribute('data-target');
            showElement(elementId);
        });
    });
}

// Call setupButtonClickHandlers to set up click event handlers for your buttons
document.addEventListener("DOMContentLoaded", function () {
    setupButtonClickHandlers();
});




