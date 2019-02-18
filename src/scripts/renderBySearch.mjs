import API from "./data.mjs"
import makeJournalEntryComponent from "./entryComponent.mjs"
import addEntriestoDOM from "./entriesDOM.mjs"


const renderBySearch = (input) => {
    API.getJournalEntries()
    .then(entryArray => {
            let filterInput = entryArray.filter(entry => (entry.entry.includes(input)))
            filterInput.forEach(entry => {
                const html = makeJournalEntryComponent(entry)
                addEntriestoDOM(html)
            }
            )
        })
}
    export default renderBySearch

