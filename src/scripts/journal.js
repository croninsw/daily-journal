API.getJournalEntries().then(entryArray => {
    entryArray.forEach(pastEntry => {
        const html = makeJournalEntryComponent(pastEntry)
        addEntriestoDOM(html)
    });
})

document.querySelector("#journalButton").addEventListener("click", () => {
    const date = document.querySelector("#journalDate").value
    const concepts = document.querySelector("#conceptsCovered").value
    const entry = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#journalMood").value

    const newJournalEntry = {
            journaldate: date,
            jconcept: concepts,
            jentry: entry,
            jmood: mood
        }

    API.saveJournalEntry(newJournalEntry)
})

// post.then(get).then(render)