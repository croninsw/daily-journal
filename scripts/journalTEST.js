// IS COOL PART 1
// const journalRestBuilder = (...args) => {
//     //return <tag[0]   class=   "tag[1]">   tag[2]   </tag[0]>
//     return `<${args[0]} class = "${args[1]}">${args[2]}</${args[0]}>`
// }

// IS COOL PART 2--BUT SEEMS TO TAKE LONGER TO LOAD--
//https://stackoverflow.com/questions/2305654/innerhtml-vs-appendchildtxtnode
// const makeJournalEntryComponent = (...args) => {
//     // Create your own HTML structure for a journal entry
//     return `
//             <div>
//                 <h2>${dailyJournal.date}</h2>
//                 <h3>${dailyJournal.concept}</h3>
//                 <p>${dailyJournal.entry}</p>
//                 <h3>${dailyJournal.mood}</h3>
//             </div>
//     `
// }


// const makeJournalEntryComponent = () => {
// const journalFrag = document.createDocumentFragment()

// const h2 = document.createElement("h2")
// h2.className = "journal__date"
// h2.textContent = `${dailyJournal.date}`
// fragment.appendChild(h2)

// const h3 = document.createElement("h3")
// h3.className = "journal__concept"
// h3.textContent = `${dailyJournal.concept}`

// const p = document.createElement("p")
// p.className = "journal__entry"
// p.textContent = `${dailyJournal.entry}`

// const h3 = document.createElement("h3")
// h3.className = "journal__mood"
// h3.textContent = `${dailyJournal.mood}`
// }

// document.querySelector(".container").appendChild(fragment)

//does the button use 'document.querySelector' to populate
// const journalButton = document.querySelector("#journalButton")
// journalButton.addEventListener("click", (taco) => {
//     const newEntry = (entry) => document.querySelector("#container").innerHTML += entry
// })