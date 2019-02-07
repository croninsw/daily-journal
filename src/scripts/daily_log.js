const journalButton = document.querySelector("#journalButton")

journalButton.addEventListener('click', (entry) => {
    const entryHTML = makeJournalEntryComponent(entry)
    appendJournalEntry(entryHTML)
})


const appendJournalEntry = (entry) => document.querySelector("#container").innerHTML += entry

