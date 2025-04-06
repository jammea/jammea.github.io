
function updateCountdown() {
    const festivalDate = new Date("April 10, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = festivalDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "The festival has begun!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
