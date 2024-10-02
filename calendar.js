const MONTHS = [
    "Zarantyr", "Olarune", "Therendor", "Eyre", "Dravago",
    "Nymm", "Lharvion", "Barrakas", "Rhaan", "Sypheros",
    "Aryth", "Vult"
];
const WEEKDAYS = ["Sul", "Mol", "Zol", "Wir", "Zor", "Far", "Sar"];

const irlDate = new Date();
let numberYear = irlDate.getFullYear() - 1022;
let numberMonth = irlDate.getMonth();
let numberDate = irlDate.getDate()
let eberronDate = numberDate;

function renderCalendar() {
    const eberronMonth = MONTHS[numberMonth];
    const eberronYear = `${numberYear} YK`;
    // Check if the current day is the last day (28) in the fixed Eberron month
    eberronDate >= 28 ? eberronDate = 28 : null;
    console.log(eberronDate);
    const monthYear = document.getElementById("monthYear");
    const daysContainer = document.getElementById("days");
    const weekdaysContainer = document.getElementById("weekdays");

    // Set the month and year display
    monthYear.textContent = `${eberronMonth} ${eberronYear}`;

    // Clear any existing content in the containers
    daysContainer.innerHTML = '';
    weekdaysContainer.innerHTML = WEEKDAYS.map(day => `<span>${day}</span>`).join('');

    const totalDays = 28; // Eberron calendar has 28 days in each month

    // Generate the days in the calendar
    for (let day = 1; day <= totalDays; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = day;
        daysContainer.appendChild(dayDiv);
    }

    // Highlight the current day
    const dayDivs = daysContainer.children;
    if (dayDivs[eberronDate - 1] && eberronMonth === MONTHS[irlDate.getMonth()] && numberYear === irlDate.getFullYear() - 1022) {
        dayDivs[eberronDate - 1].classList.add("highlight");
    }

    // Highlight holidays
    switch (MONTHS[numberMonth]) {
        case "Zarantyr":
            break;
        case "Olarune":
            break;
        case "Therendor":
            break;
        case "Eyre":
            break;
        case "Dravago":
            break;
        case "Nymm":
            break;
        case "Lharvion":
            break;
        case "Barrakas":
            break;
        case "Rhaan":
            break;
        case "Sypheros":
            if (dayDivs[18 - 1]) {
                dayDivs[18 - 1].classList.add("holiday");
            }
            if (dayDivs[19 - 1]) {
                dayDivs[19 - 1].classList.add("holiday");
            }
            break;
        case "Aryth":
            break;
        case "Vult":
            break;
    }
    if (dayDivs[18 - 1] && eberronMonth === MONTHS[irlDate.getMonth()]) {
        dayDivs[18 - 1].classList.add("holiday");
    }
}

function prevMonth() {
    numberMonth--;
    if (numberMonth < 0) {
        numberMonth = MONTHS.length - 1; // Wrap around to the last month
        numberYear--; // Decrease the year
    }
    renderCalendar();
}

function nextMonth() {
    numberMonth++;
    if (numberMonth > 11) {
        numberMonth = 0; // Wrap around to the last month
        numberYear++; // Decrease the year
    }
    renderCalendar();
}

document.getElementById("prevMonth").addEventListener("click", prevMonth);
document.getElementById("nextMonth").addEventListener("click", nextMonth);



window.onload = renderCalendar();