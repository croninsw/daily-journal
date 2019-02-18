import API from "./data.mjs"
import makeJournalEntryComponent from "./entryComponent.mjs"
import addEntriestoDOM from "./entriesDOM.mjs"
import renderByMood from "./renderByMood.mjs"

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

const renderBySearch = () => {
    let input = document.querySelector("#journalSearch").value.toLowerCase()
    let entriesFilteredBySearchInput = renderByMood.filter((object) => {
        return (object.conceptsCovered)
    })
}

function filterEntriesBySearchInput() {
    return filterEntriesBySelectedMood()
        .then((entriesFilteredByMood) => {
            let input = document.querySelector("#searchEntriesInput").value.toLowerCase()
            let entriesFilteredBySearchInput = entriesFilteredByMood.filter((object) => {
                return (object.conceptsCovered.toLowerCase().includes(input) || object.textEntry.toLowerCase().includes(input))
            })
            return entriesFilteredBySearchInput
        })
}

    export default renderBySearch

