function solve(input) {
    number = Number(input.shift());
    maxFuel = 100;
    riders = [];

    for (let i = 0; i < number; i++) {
        currentLine = input.shift()
        const [rider, fuel, position] = currentLine.split("|");
        riders.push({
            "name": rider,
            "fuel": Number(fuel),
            "position": Number(position),
        })
    }

    function findRider(riderName) {
        return riders.find(rider => rider.name === riderName);
    }
    
    for (line of input) {
        const [command, el1, el2, el3] = line.split(" - ");

        if (command == "Finish") {
            for (let rider of riders) {
                console.log(`${rider.name}\n   Final position: ${rider.position}`)
            }
            break;
        }

        if (command == "StopForFuel") {

            const riderName = el1;
            const minFuel = Number(el2);
            const changedPosition = Number(el3);

            currentRider = findRider(riderName);
            if (currentRider && currentRider.fuel < minFuel) {
                currentRider.position = changedPosition;
                currentRider.fuel = maxFuel;
                console.log(`${riderName} stopped to refuel but lost his position, now he is ${changedPosition}.`)
            } else if (currentRider && currentRider.fuel >= minFuel) {
                console.log(`${riderName} does not need to stop for fuel!`)
            }
        }

        if (command === "Overtaking") {
            const rider1 = findRider(el1);
            const rider2 = findRider(el2);

            if (rider1 && rider2) {
            const currentRider2pos = rider2.position;
            const currentRider1pos = rider1.position;

            if (rider1.position < rider2.position) {
                rider1.position = currentRider2pos;
                rider2.position = currentRider1pos;
                console.log(`${rider1.name} overtook ${rider2.name}!`)
            }
            }

        }

        if (command == "EngineFail") {
            const riderName = el1;
            const lapsLeft = Number(el2);
            const riderInfo = findRider(riderName);
            if (riderInfo) {
            const currentRiderIndex = riders.indexOf(riderInfo);
            riders.splice(currentRiderIndex, 1);

            console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
            }
        }
    }
}

solve(["1",
"Valentino Rossi|100|1",
"EngineFail - Valentino Rossi - 10",
"Finish"])