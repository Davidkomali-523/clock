function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add leading zeros if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    timeElement.textContent = currentTime;
}

// Update the clock every second
setInterval(updateTime, 1000);

// Initialize clock on page load
updateTime();
