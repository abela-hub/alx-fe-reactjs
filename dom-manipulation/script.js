// Select the notification element
const notification = document.getElementById("notification");

// Function to show messages
function showNotification(message, type = "error") {
    notification.textContent = message;
    notification.style.color = type === "error" ? "red" : "green";
    // Auto-clear after 3 seconds
    setTimeout(() => { notification.textContent = ""; }, 3000);
}
