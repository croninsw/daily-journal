.then(MyParsedEntries => {
    MyParsedEntries.forEach(entry => {
        const entryHTML = makeJournalEntryComponent(MyParsedEntries)
        appendJournalEntry(entryHTML)
    })
})