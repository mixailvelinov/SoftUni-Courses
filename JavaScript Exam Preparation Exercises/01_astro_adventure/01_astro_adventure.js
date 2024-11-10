function solve(input) {
    const number = input.shift();
    let astronauts = []

    for (let i = 0; i < number; i++) {
        let [name, oxygen, energy] = input.shift().split(" ")

        astronauts.push(
            {
                'Astronaut': name,
                'Oxygen': oxygen,
                'Energy': energy
            }
        )
    }

    function findAustronaut(name) {
        return astronauts.find(astronaut => astronaut.Astronaut === name)
    }

    for (let line of input) {
        let [command, austronaut, amount] = line.split(" - ");
        if (command === "Explore") {
            let astr = findAustronaut(austronaut);
            if (astr && astr.Energy >= Number(amount)) {
                astr.Energy -= Number(amount);
                console.log(`${austronaut} has successfully explored a new area and now has ${astr.Energy} energy!`)
            } else {
                console.log(`${astr.Astronaut} does not have enough energy to explore!`)
            }
        }
        else if (command === "Refuel") {
            const maxEnergy = 200;
            let astr = findAustronaut(austronaut);
            if (astr) {
                if (Number(astr.Energy) + Number(amount) <= maxEnergy) {
                    astr.Energy = Number(astr.Energy) + Number(amount);
                    console.log(`${astr.Astronaut} refueled their energy by ${amount}!`)
                } else if (Number(astr.Energy) + Number(amount) >= maxEnergy) {
                    let initialEnergy = Number(astr.Energy);
                    let difference = maxEnergy - initialEnergy;
                    astr.Energy = maxEnergy;
                    console.log(`${astr.Astronaut} refueled their energy by ${difference}!`)
                }
            }
        }
        else if (command == "Breathe") {
            const maxOxygen = 100;
            let astr = findAustronaut(austronaut);
            if (astr) {
                if (Number(astr.Oxygen) + Number(amount) <= maxOxygen) {
                    astr.Oxygen = Number(astr.Oxygen) + Number(amount);
                    console.log(`${astr.Astronaut} took a breath and recovered ${amount} oxygen!`)
                } else if (Number(astr.Oxygen) + Number(amount) >= maxOxygen) {
                    let initialOxygen = Number(astr.Oxygen);
                    let difference = maxOxygen - initialOxygen;
                    astr.Oxygen = maxOxygen;
                    console.log(`${astr.Astronaut} took a breath and recovered ${difference} oxygen!`)
                }
            }
        }
    }

    for (let el of astronauts) {
        console.log(`Astronaut: ${el.Astronaut}, Oxygen: ${el.Oxygen}, Energy: ${el.Energy}`)
    }
}

solve([    '4',
'Alice 60 100',
'Bob 40 80',
'Charlie 70 150',
'Dave 80 180',
'Explore - Bob - 60',
'Refuel - Alice - 30',
'Breathe - Charlie - 50',
'Refuel - Dave - 40',
'Explore - Bob - 40',
'Breathe - Charlie - 30',
'Explore - Alice - 40',
'End'])