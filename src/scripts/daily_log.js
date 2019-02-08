const $ = document.querySelector.bind(document)

$("#journalButton").addEventListener('click', (entry) => {
    const entryHTML = makeJournalEntryComponent(entry)
    appendJournalEntry(entryHTML)
})

const appendJournalEntry = (entry) => $("#container").innerHTML += entry