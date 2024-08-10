console.log("APP")

document.addEventListener("DOMContentLoaded", async function main() {
    const menu = document.getElementById("mainMenu")
    const downloading = document.getElementById("notice")
    const game = document.getElementById("game")
    const start = document.getElementById("start")
    const input = document.getElementById("iput")
    const submit = document.getElementById("submit")
    const registered = document.getElementById("wordsCollected")

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

        registry = []

        submit.addEventListener("click", function(){
            const inp = input.value
            
            if (checkWord(inp) && !(inp in registry)) {
                let register = document.createElement("p")
                registry.push(inp)
                register.innerText = inp
                registered.appendChild(register)
            }
        })
    })

})