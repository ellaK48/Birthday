document.addEventListener("DOMContentLoaded", function () {
    console.log("JS is connected");

    const shouldResetScore = document.body.dataset.resetScore === "true";

    if (shouldResetScore) {
        localStorage.setItem("totalScore", 0);
    }

    const slider = document.getElementById("yearSlider");
    const yearDisplay = document.getElementById("yearDisplay");
    const submitBtn = document.getElementById("submitBtn");

    const map = document.getElementById("worldMap");
    const marker = document.getElementById("marker");
    const coordinatesText = document.getElementById("coordinates");

    const yearScoreText = document.getElementById("yearScoreText");
    const locationScoreText = document.getElementById("locationScoreText");
    const totalScoreText = document.getElementById("totalScoreText");

    let guessX = null;
    let guessY = null;

    if (slider && yearDisplay) {
        yearDisplay.textContent = slider.value;

        slider.addEventListener("input", function () {
            yearDisplay.textContent = slider.value;
        });
    }

    if (map && marker && coordinatesText && submitBtn) {
        map.addEventListener("click", function (event) {
            const rect = map.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            guessX = (x / rect.width) * 100;
            guessY = (y / rect.height) * 100;

            marker.style.left = guessX + "%";
            marker.style.top = guessY + "%";
            marker.style.display = "block";

            coordinatesText.textContent =
                "Selected location: " +
                guessX.toFixed(1) + "%, " +
                guessY.toFixed(1) + "%";

            submitBtn.disabled = false;
        });
    }

    if (slider && submitBtn && map) {
        submitBtn.addEventListener("click", function () {
            const correctYear = Number(slider.dataset.correctYear);
            const guessYear = Number(slider.value);

            const correctX = Number(map.dataset.correctX);
            const correctY = Number(map.dataset.correctY);

            const yearDifference = Math.abs(guessYear - correctYear);
            const yearScore = Math.max(0, 2500 - yearDifference * 50);

            const dx = guessX - correctX;
            const dy = guessY - correctY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const locationScore = Math.max(0, 2500 - distance * 40);

            const totalScore = Math.round(yearScore + locationScore);

            yearScoreText.textContent =
                "Year score: " + Math.round(yearScore) + " / 2500";

            locationScoreText.textContent =
                "Location score: " + Math.round(locationScore) + " / 2500";

            totalScoreText.textContent =
                "Total score: " + totalScore + " / 5000";

            const previousTotal = Number(localStorage.getItem("totalScore")) || 0;
            const newTotal = previousTotal + totalScore;

            localStorage.setItem("totalScore", newTotal);

            const modal = new bootstrap.Modal(document.getElementById("scoreModal"));
            modal.show();
        });
    }
});

function sayHello() {
    alert("Hello from your website!");
}