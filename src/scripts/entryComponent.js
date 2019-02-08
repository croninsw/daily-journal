const makeJournalEntryComponent = entry => {
    return `
        <div id="entry">
            <div>${entry.journaldate}</div>
            <div>${entry.concept}</div>
            <p>${entry.entry}</p>
            <h6>${entry.mood}<h6>
        </div>
    `
}