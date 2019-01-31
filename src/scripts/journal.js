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

        fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
    })