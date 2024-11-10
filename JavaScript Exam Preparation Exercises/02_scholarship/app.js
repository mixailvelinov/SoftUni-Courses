window.addEventListener("load", solve);

function solve() {
    
  const inputStudentElement = document.getElementById("student");
  const inputUniversityElement = document.getElementById("university");
  const inputScoreElemment = document.getElementById("score");

  const nextButton = document.getElementById("next-btn");
  const ulPreviewListElement = document.getElementById("preview-list");
  const ulCandidatesList = document.getElementById("candidates-list");

  nextButton.addEventListener("click", () => {
    const student = inputStudentElement.value;
    const university = inputUniversityElement.value;
    const score = inputScoreElemment.value;

    if (student && university && score) {
      const liElement = document.createElement("li");
      liElement.classList.add("application");

      const articleElement = document.createElement("article");
      
      const h4Element = document.createElement("h4");
      h4Element.textContent = student;

      const pUni = document.createElement("p");
      pUni.textContent = `University: ${university}`;

      const pScore = document.createElement("p");
      pScore.textContent = `Score: ${score}`;

      articleElement.appendChild(h4Element);
      articleElement.appendChild(pUni);
      articleElement.appendChild(pScore);

      liElement.appendChild(articleElement);
      ulPreviewListElement.appendChild(liElement);

      const editButton = document.createElement("button");
      editButton.textContent = "edit";
      editButton.classList.add("action-btn");
      editButton.classList.add("edit");

      const applyButton = document.createElement("button");
      applyButton.textContent = "apply";
      applyButton.classList.add("action-btn");
      applyButton.classList.add("apply");

      liElement.appendChild(editButton);
      liElement.appendChild(applyButton);

      nextButton.disabled = true;

      inputStudentElement.value = "";
      inputUniversityElement.value = "";
      inputScoreElemment.value = "";


      editButton.addEventListener("click", () => {
        console.log("misho")
        inputStudentElement.value = student
        inputUniversityElement.value = university;
        inputScoreElemment.value = score;

        ulPreviewListElement.removeChild(liElement);
        nextButton.disabled = false;
      })

      applyButton.addEventListener("click", () => {
        liElement.removeChild(editButton);
        liElement.removeChild(applyButton);
        ulPreviewListElement.removeChild(liElement);

        ulCandidatesList.appendChild(liElement);

        nextButton.disabled = false;
      })

    }
  })
}
  