function solve(text) {
    let word = text.shift();

    for (let element of text) {
        const [splitElement, substr, replacement] = element.split("?");
        if (splitElement === "Buy") {
            console.log(`The cryptocurrency is: ${word}`)
            break;
        } else if (splitElement === "TakeEven") {
            let finalWord = "";
            let newWord = word.split("");
            for (let i = 0; i < newWord.length; i+=2) {
                finalWord += newWord[i];
            }
            word = finalWord;
            console.log(word)
        } else if (splitElement === "ChangeAll") {

            while (word.includes(substr)) {
                word = word.replace(substr, replacement);
            }
            console.log(word);
        } else if (splitElement == "Reverse") {
            if (word.includes(substr)) {
                word = word.replace(substr, "");
                let reversedStr = substr.split("").reverse().join("");
                word += reversedStr;
                console.log(word)
            } else {
                console.log("error")
            }
        }
    }
}
solve(["PZDfA2PkAsakhnefZ7aZ",
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"])
