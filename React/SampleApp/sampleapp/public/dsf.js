function waitingTime(tickets, p) {
    const currentRequirement = tickets[p];
    let totalTime = 0;
    for (let indx = 0; indx <= p; indx++) {
        // if (tickets[indx] < currentRequirement) {
        //     totalTime += tickets[indx];
        // }
        // else {
        //     totalTime += currentRequirement;
        // }

        totalTime += Math.min(tickets[indx], currentRequirement);
    }

    if (currentRequirement != 1) {
        for (let indx = p + 1; indx < tickets.length; indx++) {

            totalTime += Math.min(tickets[indx], currentRequirement-1);
            // if (tickets[indx] < currentRequirement - 1) {
            //     totalTime += tickets[indx];
            // }
            // else {
            //     totalTime += currentRequirement - 1;
            // }
        }
    }

    return totalTime;
}

console.log(waitingTime([1,2,5], 1));