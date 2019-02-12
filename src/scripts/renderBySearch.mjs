import API from "./data.mjs"
import makeJournalEntryComponent from "./entryComponent.mjs"
import addEntriestoDOM from "./entriesDOM.mjs"

const renderBySearch = (input) => {
    API.getJournalEntries()
        .then(entryArray => {
            for (entries of entryArray) {
                console.table(entries)
                if (entries.value.includes(input)) {
                    const html = makeJournalEntryComponent(entry)
                    addEntriestoDOM(html)
                }
            }
        }
        )
}

export default renderBySearch


