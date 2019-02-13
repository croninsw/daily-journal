import API from "./data.mjs"
import makeJournalEntryComponent from "./entryComponent.mjs"
import addEntriestoDOM from "./entriesDOM.mjs"

const renderBySearch = input => {
    API.getJournalEntries()
        .then(entryArray => {
            console.table(entryArray)
            for (entry of entryArray) {
                if (Object.values(entry).inlcudes(input)) {
                    const html = makeJournalEntryComponent(entry)
                    addEntriestoDOM(html)

                }
            }
        })
    }

    export default renderBySearch