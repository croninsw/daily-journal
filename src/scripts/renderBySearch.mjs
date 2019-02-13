import API from "./data.mjs"
import makeJournalEntryComponent from "./entryComponent.mjs"
import addEntriestoDOM from "./entriesDOM.mjs"

// const renderBySearch = input => {
//     API.getJournalEntries()
//         .then(entryArray => {
//             // entry is not defined because...it's not passed in somewhere?
//             for (entry of entryArray) {
//                 if (Object.values(entry).inlcudes(input)) {
//                     const html = makeJournalEntryComponent(entry)
//                     addEntriestoDOM(html)

//                 }
//             }
//         })
//     }

const renderBySearch = (input) => {
    API.getJournalEntries()
        .then(entryArray => {
            console.log(entryArray[0])
            let filterInput = entryArray.filter(entry => {
                (Object.values(entry).includes(input))
            } )
            filterInput.forEach(entry => {
                const html = makeJournalEntryComponent(entry)
                addEntriestoDOM(html)

            }
            )
        })
}

    export default renderBySearch

