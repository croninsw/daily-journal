fetch("http://localhost:3000/entries")
    .then(response => response.json())  // Parse as JSON
    .then(MyParsedEntries => {
        MyParsedEntries.forEach(entry => {
            const entryHTML = makeJournalEntryComponent(MyParsedEntries)
            appendJournalEntry(entryHTML)
        })
        // What should happen when we finally have the array?
    })