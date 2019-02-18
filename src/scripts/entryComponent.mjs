const makeJournalEntryComponent = entry => {
    return `
        <div id="entry">
            <h4>${entry.date}</h4>
            <h3>${entry.concept}</h3>
            <p>${entry.entry}</p>
            <h6>${entry.mood}<h6>
        </div>

        <section>
        <button id="editButton--${entry.id}">Edit Entry</button>
        <br>
        <button id="deleteButton--${entry.id}">Delete Entry</button>
        <br>
        </section>
    `
}

export default makeJournalEntryComponent