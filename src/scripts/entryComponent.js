const makeJournalEntryComponent = entry => {
    return `
        <div id="entry">
            <h4>${entry.date}</h4>
            <h3>${entry.concepts}</h3>
            <p>${entry.entry}</p>
            <p>${entry.mood}<p>
        </div>
    `
}