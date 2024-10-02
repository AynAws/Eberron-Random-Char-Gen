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
    let holidayInfo = document.createElement("a");
    // Highlight holidays
    switch (MONTHS[numberMonth]) {
        case "Zarantyr":
            break;
        case "Olarune":
            if (dayDivs[9 - 1]) {
                dayDivs[9 - 1].classList.add("holiday");
                dayDivs[9 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: 'Crystalfall'}));
            }
            if (dayDivs[20 - 1]) {
                dayDivs[20 - 1].classList.add("holiday");
                dayDivs[20 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: 'The Day of Mourning'}));
            }
            break;
        case "Therendor":
            if (dayDivs[15 - 1]) {
                dayDivs[15 - 1].classList.add("holiday");
                dayDivs[15 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: "Sun's Blessing"}));
            }
            break;
        case "Eyre":
            break;
        case "Dravago":
            if (dayDivs[26 - 1]) {
                dayDivs[26 - 1].classList.add("holiday");
                dayDivs[26 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: "Aureon's Crown"}));
            }
            break;
        case "Nymm":
            if (dayDivs[12 - 1]) {
                dayDivs[12 - 1].classList.add("holiday");
                dayDivs[12 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: 'Brightblade'}));
            }
            break;
        case "Lharvion":
            if (dayDivs[23 - 1]) {
                dayDivs[23 - 1].classList.add("holiday");
                dayDivs[23 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: 'The Race of Eight Winds'}));
            }
            break;
        case "Barrakas":
            if (dayDivs[4 - 1]) {
                dayDivs[4 - 1].classList.add("holiday");
                dayDivs[4 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: "The Hunt"}));
            }
            if (dayDivs[25 - 1]) {
                dayDivs[25 - 1].classList.add("holiday");
                dayDivs[25 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: "Fathen's Fall"}));
            }
            break;
        case "Rhaan":
            if (dayDivs[9 - 1]) {
                dayDivs[9 - 1].classList.add("holiday");
                dayDivs[9 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: "Boldrei's Feast"}));
            }
            break;
        case "Sypheros":
            if (dayDivs[18 - 1]) {
                dayDivs[18 - 1].classList.add("holiday");
                dayDivs[18 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: 'Wildnight'}));
            }
            if (dayDivs[19 - 1]) {
                dayDivs[19 - 1].classList.add("holiday");
                dayDivs[19 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: 'Wildnight'}));
            }
            break;
        case "Aryth":
            if (dayDivs[11 - 1]) {
                dayDivs[11 - 1].classList.add("holiday");
                dayDivs[11 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: 'Thronehold'}));
            }
            break;
        case "Vult":
            if (dayDivs[26 - 1]) {
                dayDivs[26 - 1].classList.add("holiday");
                dayDivs[26 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: 'Long Shadows'}));
            }
            if (dayDivs[27 - 1]) {
                dayDivs[27 - 1].classList.add("holiday");
                dayDivs[27 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: 'Long Shadows'}));
            }
            if (dayDivs[28 - 1]) {
                dayDivs[28 - 1].classList.add("holiday");
                dayDivs[28 - 1].appendChild(Object.assign(document.createElement('span'), { className: 'tooltiptext', textContent: 'Long Shadows'}));
            }
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