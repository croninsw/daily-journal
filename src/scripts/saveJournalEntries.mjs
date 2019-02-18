import API from "./data.mjs"

function saveJournalEntries() {
    const newJournalEntry = {
        concept: document.querySelector("#conceptsCovered").value,
        date: document.querySelector("#journalDate").value,
        entry: document.querySelector("#journalEntry").value,
        mood: document.querySelector("#journalMood").value
    }


    API.postJournalEntry(newJournalEntry)
}
export default saveJournalEntries

