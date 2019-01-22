// const dailyJournal = [
//     {
//         date: "",
//         concept: "",
//         entry: "",
//         mood: "",
//     }
// ]

const journalButton = document.querySelector("#journalButton")

journalButton.addEventListener('click', (daily) => {
    const entryHTML = makeJournalEntryComponent(daily)
    appendJournalEntry(entryHTML)
})

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

const appendJournalEntry = (entry) => document.querySelector("#container").innerHTML += entry
