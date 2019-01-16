const dailyJournal = [
    {
        date: "",
        concept: "",
        entry: "",
        mood: "",
    }
]

// const makeJournalEntryComponent = (...args) => {
//     return `
//         <div id="entry">
//             ${journalRestBuilder(date)}
//             ${journalRestBuilder(concept)}
//             ${journalRestBuilder(entry)}
//             ${journalRestBuilder(mood)}
//     `
// }

const journalRestBuilder = (...args) => {
    //return <tag[0]   class=   "tag[1]">   tag[2]   </tag[0]>
    return `<${args[0]} class = "${args[1]}">${args[2]}</${args[0]}>`
}

const makeJournalEntryComponent = (...args) => {
    // Create your own HTML structure for a journal entry
    return `
            <div>
                <h2>${dailyJournal.date}</h2>
                <h3>${dailyJournal.concept}</h3>
                <p>${dailyJournal.entry}</p>
                <h3>${dailyJournal.mood}</h3>
            </div>
    `
}




