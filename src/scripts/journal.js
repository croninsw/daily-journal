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
        concept: concepts,
        entry: entry,
        mood: mood
    }

    API.saveJournalEntry(newJournalEntry)
})

$("#moodRadioButtons").addEventListener("click", event => {
        const mood = event.target.value
        API
            .getJournalEntries()
            .then(parseJson => {
                let filter = parseJson.filter(entry => entry.mood === mood)
                addEntriestoDOM()
            }
        )
    })
