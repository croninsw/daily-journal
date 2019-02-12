import renderByMood from "./renderByMood.mjs"
import checkMood from "./checkMood.mjs"
import API from "./data.mjs"
import saveJournalEntries from "./saveJournalEntries.mjs"
import renderBySearch from "./renderBySearch.mjs";

// fetch entries from API and filter for mood before displaying all
renderByMood()
// function callback on journal button to capture fields and save entry to API
document.querySelector("#journalButton").addEventListener("click", saveJournalEntries)
// function callback on radio buttons to check mood and display only that mood
document.querySelector("#moodRadioButtons").addEventListener("click", checkMood)
// function callback on search field waiting for keypress to search all entries for specific keywords
document.querySelector("#journalSearch").addEventListener("keypress", event => {
    if (event.keyCode === 13) {
        const userInput = event.target.value
        document.querySelector("#container").innerHTML = ""
        renderBySearch(userInput)
    }
})


