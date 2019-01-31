const makeJournalEntryComponent = pastEntry => { 
    return `
        <div id="entry">
            <h4>${pastEntry.date}</h4>
            <h3>${pastEntry.concept}</h3>
            <p>${pastEntry.entry}</p>
            <p>${pastEntry.mood}<p>
        </div>
    `
}