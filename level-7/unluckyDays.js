// Find the number of Friday 13th in the given year.
function unluckyDays(year) {
    let count = 0
    //get the date
    for (let m = 0; m < 12; m++) {
        const d = new Date(year, m, 13)
        if (d.getDay() == 5) {
            count++;
        }
    }
    return count
}