import renderEntries from "./renderEntries.mjs"
import API from "./data.mjs"

renderEntries()
// refactor to only have callbacks and addEventListener function on main.js

document.querySelector("#journalButton").addEventListener("click", () => {
    const concept = document.querySelector("#conceptsCovered").value
    const date = document.querySelector("#journalDate").value
    const entry = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#journalMood").value

    const newJournalEntry = {
        concept: concept,
        date: date,
        entry: entry,
        mood: mood
    }

    API.saveJournalEntry(newJournalEntry)
})

document.querySelector("#moodRadioButtons").addEventListener("click", event => {
    const mood = event.target.value
    if (event.target.type === "radio") {
        document.querySelector("#container").innerHTML = ""
        if (event.target.value === mood) {
            renderEntries(mood)
        } else if (event.target.value === allMoods) {
            renderEntries()
        }
    }
}
)
