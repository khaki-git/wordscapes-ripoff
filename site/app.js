console.log("APP")

document.addEventListener("DOMContentLoaded", async function main() {
    const menu = document.getElementById("menu")
    const downloading = document.getElementById("notice")
    const game = document.getElementById("game")
    const start = document.getElementById("start")

    const wordDictionaryF = await fetch("words_dictionary.json")
    const wordDictionary = await wordDictionary.json()
    downloading.remove()

    start.addEventListener("click", async function(){
        console.log("Clicked")
        const keys = Object.keys(wordDictionary);
        const randomIndex = Math.floor(Math.random() * keys.length);
        console.log(randomIndex)
    })

})