// For a given lesson time in minutes (min) , 
// write a function price to calculate how much the lesson costs.

function cost(mins) {
    const firstHrRate = 30;
    const halfHrRate = 10;
    let cost = firstHrRate;

    if (mins > 60) {
        let halfHours = (mins - 60) / 30;
        // Round up if they're out of the 5 min grace period, otherwise round down.
        cost += ((halfHours * 30 % 30 > 5.1) ? Math.ceil(halfHours) : Math.floor(halfHours)) * halfHrRate;
        console.log(Math.floor(halfHours));
    }

    return cost;
} 