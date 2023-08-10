function calculateAge() {
    const today = new Date();
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdateParts = birthdateInput.split("-");

    const birthDay = parseInt(birthdateParts[0], 10);
    const birthMonth = parseInt(birthdateParts[1], 10) - 1;
    const birthYear = parseInt(birthdateParts[2], 10);

    const birthDate = new Date(birthYear, birthMonth, birthDay);

    const isValidDate = (date) => {
        return (
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        );
    };

    if (!isValidDate(birthDate)) {
        alert("Invalid Date Format: Please Enter a valid date in DD-MM-YYYY format.");
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.44);
    const ageInYears = Math.floor(ageInDays / 365.25);

    const resultContainer = document.getElementById("resultContainer");
    const result = document.createElement("div");
    result.className = "result-item";

    result.innerHTML = `
        <h3>Age:</h3>
        <p>${ageInYears} years ${ageInMonths % 12} months ${ageInDays % 30} days</p>
        <h3>Month Passed:</h3>
        <p>${ageInMonths}</p>
        <h3>Weeks Passed:</h3>
        <p>${ageInWeeks}</p>
        <h3>Days Passed:</h3>
        <p>${ageInDays}</p>
        <h3>Hours Passed:</h3>
        <p>${ageInHours}</p>
        <h3>Minutes Passed:</h3>
        <p>${ageInMinutes}</p>
        <h3>Seconds Passed:</h3>
        <p>${ageInSeconds}</p>
    `;

    resultContainer.innerHTML = "";
    resultContainer.appendChild(result);
    resultContainer.style.display = "block";
}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAge();
});
