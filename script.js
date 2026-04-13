console.log("JS is connected");

const slider = document.getElementById("yearSlider");
const yearDisplay = document.getElementById("yearDisplay");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

slider.addEventListener("input", function () {
    yearDisplay.textContent = slider.value;
});

submitBtn.addEventListener("click", function () {
    const correctYear = Number(slider.dataset.correctYear);;
    const guess = Number(slider.value);

    if (guess === correctYear) {
        result.textContent = "Correct!";
    } else {
        result.textContent = "Not quite. The correct year was " + correctYear;
    }
});

document.addEventListener("DOMContentLoaded", function () {

    console.log("map clicked");

    const map = document.getElementById("worldMap");
    const marker = document.getElementById("marker");
    const coordinatesText = document.getElementById("coordinates");

    map.addEventListener("click", function (event) {
        const rect = map.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;

        marker.style.left = percentX + "%";
        marker.style.top = percentY + "%";
        marker.style.display = "block";

        coordinatesText.textContent =
            "Selected location: x = " + x.toFixed(0) +
            ", y = " + y.toFixed(0) +
            " | " + percentX.toFixed(1) + "%, " + percentY.toFixed(1) + "%";
    });
});





function sayHello() {
    alert("Hello from your website!");
}