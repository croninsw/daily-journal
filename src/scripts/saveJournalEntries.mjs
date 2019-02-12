import API from "./data.mjs"

function saveJournalEntries() {
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
}
export default saveJournalEntries