const clock = document.getElementById("d-day");

function getChristmasDday() {
    const currentDate = new Date();

    const currentYear = currentDate.getFullYear(); 
    const christmasDateThisYear = new Date(currentYear, 11, 25); 
    const christmasDateNextYear = new Date(currentYear + 1, 11, 25); 

    let christmasDateToUse;

    if (currentDate > christmasDateThisYear) {
        christmasDateToUse = christmasDateNextYear;
    } else {
        christmasDateToUse = christmasDateThisYear;
    }

    let timeDifference = christmasDateToUse - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    clock.textContent = `🎄${days}D ${hours}H ${minutes}M ${seconds}S🎅`;
}

getChristmasDday();
setInterval(getChristmasDday, 1000);