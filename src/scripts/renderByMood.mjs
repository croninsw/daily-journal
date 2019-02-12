import API from "./data.mjs"
import makeJournalEntryComponent from "./entryComponent.mjs"
import addEntriestoDOM from "./entriesDOM.mjs"

const renderByMood = (mood) => {
    API.getJournalEntries()
        .then(entryArray => {
            let filterMood = entryArray.filter(entry => entry.mood === mood)
            filterMood.forEach(entry => {
                const html = makeJournalEntryComponent(entry)
                addEntriestoDOM(html)
            }
            )
        })
}

export default renderByMood