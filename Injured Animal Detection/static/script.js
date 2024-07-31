document.addEventListener('DOMContentLoaded', (event) => {
    var popup = document.getElementById("popup");
    var span = document.getElementsByClassName("close")[0];
    var callNGOButton = document.getElementById("callNGO");
    var closePopupButton = document.getElementById("closePopup");
    var callButton = document.getElementById("callButton");

    // Function to show the popup
    function showPopup() {
        popup.style.display = "block";
    }

    // Function to hide the popup
    function hidePopup() {
        popup.style.display = "none";
    }

    // Event listener for the close button
    span.onclick = hidePopup;

    // Event listener for the close popup button
    closePopupButton.onclick = hidePopup;

    // Event listener for clicking outside the popup
    window.onclick = function(event) {
        if (event.target == popup) {
            hidePopup();
        }
    }

    // Event listener for pressing a specific key (e.g., "P" key)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'P' || event.key === 'p') {
            showPopup();
        }
    });

    // Event listener for the Call NGO button
    callNGOButton.onclick = function() {
        alert("Calling NGO..."); // Replace with actual NGO calling functionality
        hidePopup();
    }

    // Event listener for the Call button
    callButton.onclick = function() {
        alert("Calling..."); // Replace with actual call functionality
        hidePopup();
    }

    // Set a timer to show the popup after 35 seconds
    setTimeout(showPopup, 35000);
});