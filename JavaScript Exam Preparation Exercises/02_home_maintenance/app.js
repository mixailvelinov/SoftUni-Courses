window.addEventListener("load", solve);

    function solve() {
        const inputPlaceELlement = document.getElementById("place");
        const inputActionElement = document.getElementById("action");
        const inputPersonElement = document.getElementById("person");
        const ulTasklist = document.getElementById("task-list");
        const ulDoneList = document.getElementById("done-list");

        const addButtonElement = document.getElementById("add-btn");

        addButtonElement.addEventListener("click", () => {

            place = inputPlaceELlement.value;
            action = inputActionElement.value;
            person = inputPersonElement.value;

            if (place && action && person) {
                const liElement = document.createElement("li");
                liElement.classList.add("clean-task");
                
                const articleElement = document.createElement("article");
                const placeP = document.createElement("p");
                const actionP = document.createElement("p");
                const personP = document.createElement("p");

                placeP.textContent = `Place: ${place}`;
                actionP.textContent = `Action: ${action}`;
                personP.textContent = `Person:${person}`;

                articleElement.appendChild(placeP);
                articleElement.appendChild(actionP);
                articleElement.appendChild(personP);

                liElement.appendChild(articleElement);
                ulTasklist.appendChild(liElement);

                divButtonsElement = document.createElement("div");
                divButtonsElement.classList.add("buttons");

                editButton = document.createElement("button");
                editButton.classList.add("edit");
                editButton.textContent = "Edit"
                doneButton = document.createElement("button");
                doneButton.classList.add("done")
                doneButton.textContent = "Done";

                divButtonsElement.appendChild(editButton);
                divButtonsElement.appendChild(doneButton);
                liElement.appendChild(divButtonsElement);

                inputPlaceELlement.value = ""
                inputActionElement.value = "";
                inputPersonElement.value = "";

                const allLiElements = document.querySelectorAll("li");

                editButton.addEventListener("click", () => {
                    inputPlaceELlement.value = place;
                    inputActionElement.value = action;
                    inputPersonElement.value = person;

                    ulTasklist.removeChild(liElement);
                })

                doneButton.addEventListener("click", () => {
                    const deleteButton = document.createElement("button");
                    deleteButton.classList.add("delete");
                    deleteButton.textContent = "Delete";

                    const doneLiElemenet = document.createElement("li")
                    doneLiElemenet.appendChild(articleElement);
                    ulDoneList.appendChild(doneLiElemenet)
                    doneLiElemenet.appendChild(deleteButton)

                    ulTasklist.removeChild(liElement)

                    
                deleteButton.addEventListener("click", () => {
                    ulDoneList.removeChild(doneLiElemenet);
                })

                })

            }
        })
    }