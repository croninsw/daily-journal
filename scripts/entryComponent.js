const makeJournalEntryComponent = (daily) => {
    return `
        <div id="entry">
            <h4>${daily.date}</h4>
            <h3>${daily.concept}</h3>
            <p>${daily.entry}</p>
            <p>${daily.mood}<p>
        </div>
    `
}