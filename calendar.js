const MONTHS = [
    "Zarantyr", "Olarune", "Therendor", "Eyre", "Dravago",
    "Nymm", "Lharvion", "Barrakas", "Rhaan", "Sypheros",
    "Aryth", "Vult"
];
const WEEKDAYS = ["Sul", "Mol", "Zol", "Wir", "Zor", "Far", "Sar"];

const irlDate = new Date();
let numberYear = irlDate.getFullYear() - 1022;
const eberronYear = `${numberYear} YK`;
let numberMonth = irlDate.getMonth();
const eberronMonth = MONTHS[numberMonth];
let numberDate = irlDate.getDate()
const eberronDate = numberDate;

console.log(`It is ${eberronDate} ${eberronMonth} of ${eberronYear}`);

function renderCalendar() {
    // Check if the current day is the last day (28) in the fixed Eberron month
    eberronDate >= 28 ? eberronDate === 28 : null;

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
    if (dayDivs[eberronDate - 1] && eberronMonth === MONTHS[irlDate.getMonth()]) {
        dayDivs[eberronDate - 1].classList.add("highlight");
    }
}

function removeMonth() {
    numberMonth--;
    renderCalendar;
}

document.getElementById("prevMonth").addEventListener("click", removeMonth());
//document.getElementById("nextMonth").addEventListener("click", addMonth());



window.onload = renderCalendar();