const $ = document.querySelector.bind(document)

API.getJournalEntries().then(entryArray => {
    entryArray.forEach(pastEntry => {
        const html = makeJournalEntryComponent(pastEntry)
        addEntriestoDOM(html)
    });
})

$("#journalButton").addEventListener("click", () => {
    const date = $("#journalDate").value
    const concepts = $("#conceptsCovered").value
    const entry = $("#journalEntry").value
    const mood = $("#journalMood").value

    const newJournalEntry = {
            journaldate: date,
            jconcept: concepts,
            jentry: entry,
            jmood: mood
        }

    API.saveJournalEntry(newJournalEntry)
})

// post.then(get).then(render)

const radioButton = document.getElementsByName("mood")
radioButton.forEach(button => {
    button.addEventListener("click", event => {
        const mood = event.target.value
    
        console.log(mood)
    })
})

