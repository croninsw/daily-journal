const makeJournalEntryComponent = pastEntry => { 
    return `
        <div id="entry">
            <h4>${pastEntry.journaldate}</h4>
            <h3>${pastEntry.jconcept}</h3>
            <p>${pastEntry.jentry}</p>
            <p>${pastEntry.jmood}<p>
        </div>
    `
}