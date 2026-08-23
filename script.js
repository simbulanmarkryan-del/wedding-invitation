/* =========================================
   WEDDING COUNTDOWN
   ========================================= */

const weddingDate = new Date("November 26, 2026 15:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* =========================================
   WEDDING MUSIC
   ========================================= */

const music = document.getElementById("wedding-music");
const musicButton = document.getElementById("music-toggle");


/* Music On / Off */

musicButton.addEventListener("click", function () {

    if (music.paused) {

        music.play()
            .then(function () {
                musicButton.textContent = "♫ Music On";
            })
            .catch(function (error) {
                console.error("Music could not play:", error);
            });

    } else {

        music.pause();
        musicButton.textContent = "♫ Music Off";
    }

});

