const slider = document.getElementById("yearSlider");
const yearDisplay = document.getElementById("yearDisplay");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

slider.addEventListener("input", function () {
    yearDisplay.textContent = slider.value;
});

submitBtn.addEventListener("click", function () {
    const correctYear = 1985;
    const guess = Number(slider.value);

    if (guess === correctYear) {
        result.textContent = "Correct!";
    } else {
        result.textContent = "Not quite. The correct year was " + correctYear;
    }
});

function sayHello() {
    alert("Hello from your website!");
}