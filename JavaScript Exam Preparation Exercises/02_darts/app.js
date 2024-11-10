window.addEventListener("load", solve);

function solve() {
  const inputPlayerNameElement = document.getElementById("player");
  const inputScoreElement = document.getElementById("score");
  const inputRoundElement = document.getElementById("round");

  const addButton = document.getElementById("add-btn")
  const ulElement = document.getElementById("sure-list");
  const ulScoreboard = document.getElementById("scoreboard-list")
  const clearButton = document.querySelector(".clear")

    addButton.addEventListener("click", () => {
      const playerName = inputPlayerNameElement.value;
      const score = inputScoreElement.value;
      const round = inputRoundElement.value;
  
      if (playerName && score && round) {
      const liElement = document.createElement("li");
      liElement.classList.add("dart-item");
      
      const articleElement = document.createElement("article");
      const pName = document.createElement("p")
      const pScore = document.createElement("p")
      const pRound = document.createElement("p")
  
      pName.textContent = playerName;
      pScore.textContent = `Score: ${score}`;
      pRound.textContent = `Round: ${round}`;
  
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("btn");
      editButton.classList.add("edit");
  
      const okButton = document.createElement("button");
      okButton.textContent = "Ok";
      okButton.classList.add("btn")
      okButton.classList.add("ok");
  
      articleElement.appendChild(pName);
      articleElement.appendChild(pScore);
      articleElement.appendChild(pRound);
      liElement.appendChild(articleElement);
      liElement.appendChild(editButton);
      liElement.appendChild(okButton);
      ulElement.appendChild(liElement);
  
      inputPlayerNameElement.value = ""
      inputScoreElement.value = ""
      inputRoundElement.value = "";
  
      addButton.disabled = true;
  
      editButton.addEventListener("click", () => {
        addButton.disabled = false;
  
        inputPlayerNameElement.value = playerName
        inputScoreElement.value = score
        inputRoundElement.value = round;
        ulElement.removeChild(liElement)
  
      })
  
      okButton.addEventListener("click", () => {
        const scoreboardLi = document.createElement("li");
        scoreboardLi.classList.add("dart-item");
        const scoreboardArticle = document.createElement("article");

        scoreboardArticle.appendChild(pName);
        scoreboardArticle.appendChild(pScore);
        scoreboardArticle.appendChild(pRound);
        scoreboardLi.appendChild(scoreboardArticle)
  
        ulScoreboard.appendChild(scoreboardLi)
  
        ulElement.removeChild(liElement);
        addButton.disabled = false
      })
      }
    })
    clearButton.addEventListener("click", () => {
      location.reload()
    })

  }




