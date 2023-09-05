
function changeImage() {
    var imageElement =
        document.getElementById("me");imageElement.src ="mac.png";

        imageElement.style.width="275px";

        imageElement.style.height="auto";

        imageElement.style.padding="28px";
    }

function restoreImage() {
    var imageElement =
        document.getElementById("me");imageElement.src ="logomac.png"

        imageElement.style.width = "365px";

        imageElement.style.height = "280px"; 

        imageElement.style.padding="0";
    }