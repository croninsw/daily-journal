const journalButton = document.querySelector("#journalButton")

journalButton.addEventListener('click', (daily) => {
    const entryHTML = makeJournalEntryComponent(daily)
    appendJournalEntry(entryHTML)
})


const appendJournalEntry = (entry) => document.querySelector("#container").innerHTML += entry
