document.addEventListener("DOMContentLoaded", function () {
  const folderButtons = document.querySelectorAll(".folder-button");

  folderButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const folderContent = this.nextElementSibling; // Get the next sibling (folder content)
      folderContent.classList.toggle("show"); // Toggle the 'show' class
    });
  });
});

//credit to CHATGPT for this code example