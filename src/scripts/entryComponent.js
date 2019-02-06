const makeJournalEntryComponent = entry => { 
    return `
        <div id="entry">
            <h4>${entry.journaldate}</h4>
            <h3>${entry.concept}</h3>
            <p>${entry.entry}</p>
            <p>${entry.mood}<p>
        </div>
    `
}