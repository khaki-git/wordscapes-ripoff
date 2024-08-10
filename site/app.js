console.log("APP")

document.addEventListener("DOMContentLoaded", async function main() {
    const menu = document.getElementById("mainMenu")
    const downloading = document.getElementById("notice")
    const game = document.getElementById("game")
    const start = document.getElementById("start")
    const input = document.getElementById("iput")
    const submit = document.getElementById("submit")
    const registered = document.getElementById("wordsCollected")
    const avaliables = document.getElementById("avaliableletters")
    const errorMessage = document.getElementById("errorMessag")

    const wordDictionaryF = await fetch("words_dictionary.json")
    const wordDictionary = await wordDictionaryF.json()
    downloading.remove()

    start.addEventListener("click", async function(){
        console.log("Clicked")
        function word() {
            const keys = Object.keys(wordDictionary);
            const randomIndex = keys[Math.floor(Math.random() * keys.length)];
            const randomValue = wordDictionary[randomIndex]

            return randomIndex
        }

        function checkWord(word) {
            let correct = false;
            if (wordDictionary[word] == 1) {
                correct = true
            }
            return correct
        }
        menu.style.visibility = "hidden"
        game.style.visibility = "visible"

        let registry = []
        const weightedLetters = [
            "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "t", "t", "t", "t", "t", "t", "t", "t", 
            "a", "a", "a", "a", "a", "a", "a", "o", "o", "o", "o", "o", "o", "i", "i", "i", "i", "i", 
            "n", "n", "n", "n", "s", "s", "s", "s", "h", "h", "h", "r", "r", "r", "d", "d", "d", "l", 
            "l", "l", "c", "c", "u", "u", "m", "m", "w", "w", "f", "f", "g", "g", "y", "y", "p", "p", 
            "b", "b", "v", "v", "k", "k", "j", "x", "q", "z"
        ];
        
        let available = [];
        
        console.log("Start of available creation");
        while (available.length < 7) {
            const letter = weightedLetters[Math.floor(Math.random() * weightedLetters.length)];
            if (!available.includes(letter)) {
                available.push(letter);
            }
        }
        console.log("Available letters:", available);

        let avaliableString = ""
        available.forEach(letter => {
            avaliableString = avaliableString + letter
        });
        avaliableString = avaliableString.toLocaleUpperCase()
        avaliables.innerText = "Avaliable Letters : " + avaliableString

        submit.addEventListener("click", function(){
            let inp = input.value
            inp = inp.toLowerCase()
            let allLettersInAvaliable = true
            for (let i = 0; i < inp.length; i++) {
                if (!available.includes(inp[i].toLowerCase())) {
                    allLettersInAvaliable = false
                    errorMessage.innerText = "Invalid letters."
                    break
                }
            }
            if (allLettersInAvaliable && checkWord(inp) && !(registry.includes(inp))) {
                let register = document.createElement("p")
                registry.push(inp)
                register.innerText = inp
                registered.appendChild(register)
            } else if (registry.includes(inp)) {
                errorMessage.innerText = "Already wrote " + inp
            } else if (!allLettersInAvaliable) {
                errorMessage.innerText = "Invalid letters."
            } else {
                errorMessage.innerText = inp + " is not a real word. Try not to use punctuation if it is a real word."
            }
        })
    })

})