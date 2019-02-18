import renderByMood from "./renderByMood.mjs"
import checkMood from "./checkMood.mjs"
import API from "./data.mjs"
import saveJournalEntries from "./saveJournalEntries.mjs"
import renderBySearch from "./renderBySearch.mjs";

// !!!!! Need to refactor main to have one event listener and a bunch of if statements? !!!!

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
// function declaration on body to listen for delete button
document.querySelector("body").addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteButton")) {
        let id = parseInt(event.target.id.split("--")[1])
        return (API.deleteJournalEntry(id))
        .then(() => {
            document.querySelector("#container").innerHTML = ""
            return
        })
        .then(() => {
            return renderByMood()
        })
    }
})

// if (event.target.id.startsWith("editButton")) {
//     let id = parseInt(event.target.id.split("--")[1])
//     return (API.putJournalEntry(id))
//     .then(() => {
//         document.querySelector("#save_button").textContent = "Update"
//         document.querySelector("#container").innerHTML = ""
//         return
//     })
//     .then(() => {
//         return renderByMood()
//     })
// }

