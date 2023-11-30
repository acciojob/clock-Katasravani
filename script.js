//your JS code here. If required.
// script.js

function updateTimer() {
    // Get the current date and time
    const currentDate = new Date();

    // Format the date and time
    const formattedDateTime = currentDate.toLocaleString();

    // Update the content of the 'timer' element
    document.getElementById('timer').textContent = formattedDateTime;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to set the timer immediately
updateTimer();

