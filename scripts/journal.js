// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)

API.getJournalEntries().then(entryArray => {
    entryArray.forEach(pastEntry => {
        const html = makeJournalEntryComponent(pastEntry)
        addEntriestoDOM(html)
    });
})
