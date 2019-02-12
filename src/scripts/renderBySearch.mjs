import API from "./data.mjs"
import makeJournalEntryComponent from "./entryComponent.mjs"
import addEntriestoDOM from "./entriesDOM.mjs"

const renderBySearch = (input) => {
    API.getJournalEntries()
        .then(entryArray => {
            for (entry of entryArray) {
                console.table(entry)
                if (entry.values.includes(input)) {
                    const html = makeJournalEntryComponent(entry)
                    addEntriestoDOM(html)
                }
            }
        }
        )
}

// const renderByMood = (mood) => {
//     API.getJournalEntries()
//         .then(entryArray => {
//             let filterMood = entryArray.filter(entry => entry.mood === mood)
//             filterMood.forEach(entry => {
//                 const html = makeJournalEntryComponent(entry)
//                 addEntriestoDOM(html)
//             }
//             )
//         })
// }

export default renderBySearch


