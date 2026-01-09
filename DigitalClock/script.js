const timeDiv = document.getElementById('time');

setInterval(() => {
    const time = new Date();
    timeDiv.textContent = time.toLocaleTimeString();
}, 1000);
