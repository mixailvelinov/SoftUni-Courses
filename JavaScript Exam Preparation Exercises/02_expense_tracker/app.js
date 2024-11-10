window.addEventListener("load", solve)
    function solve() {
    const inputExpensesElement = document.getElementById("expense");
    const inputAmountElement = document.getElementById("amount");
    const inputDateElement = document.getElementById("date");
    const addButtonElement = document.getElementById("add-btn");
    let ulElementPreviewList = document.getElementById("preview-list");
    let ulExpensesList = document.getElementById("expenses-list")
    let deleteButtonElement = document.querySelector(".delete");

    deleteButtonElement.addEventListener("click", () => {
        location.reload()   
    })

    addButtonElement.addEventListener("click", () => {
        if (inputExpensesElement.value && inputAmountElement.value && inputDateElement.value) {
            const liElement = document.createElement("li");
            const pType = document.createElement("p");
            const pAmount = document.createElement("p");
            const pDate = document.createElement("p");
            const articleElement = document.createElement("article");

            liElement.classList.add("expense-item")

            const type = inputExpensesElement.value;
            const amount = inputAmountElement.value;
            const date = inputDateElement.value;

            pType.textContent = `Type: ${type}`;
            pAmount.textContent = `Amount: ${amount}$`;
            pDate.textContent = `Date: ${date}`;

            const editButton = document.createElement("button");
            const addButton = document.createElement("button");
            const divButtons = document.createElement("div");

            addButton.classList.add("btn")
            editButton.classList.add("btn")
            addButton.classList.add("ok")
            editButton.classList.add("edit")
            divButtons.classList.add("buttons")
            
            divButtons.appendChild(editButton);
            divButtons.appendChild(addButton);

            editButton.textContent = "EDIT";
            addButton.textContent = "OK";

            articleElement.appendChild(pType);
            articleElement.appendChild(pAmount);
            articleElement.appendChild(pDate);
            ulElementPreviewList.appendChild(liElement);
            liElement.appendChild(articleElement);
            liElement.appendChild(divButtons);

            inputExpensesElement.value = "";
            inputAmountElement.value = "";
            inputDateElement.value = "";
            addButtonElement.disabled = true;

        editButton.addEventListener("click", () => {
            inputExpensesElement.value = type;
            inputAmountElement.value = amount;
            inputDateElement.value = date;
            ulElementPreviewList.innerHTML = "";
            addButtonElement.disabled = false;
        })

        addButton.addEventListener("click", () => {
            const liElement = document.createElement("li");
            liElement.appendChild(articleElement);
            ulExpensesList.appendChild(liElement);

            liElement.classList.add("expenses-list")

            ulElementPreviewList.innerHTML = "";
            addButtonElement.disabled = false;
        })
        


        }

    
    })

    }
