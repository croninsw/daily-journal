const $ = document.querySelector.bind(document)

const renderEntries = (mood) => {
    API.getJournalEntries().then(entryArray => {
        let filterMood = entryArray.filter(entry => entry.mood === mood)
        filterMood.forEach(entry => {
                const html = makeJournalEntryComponent(entry)
                addEntriestoDOM(html)
            }
    )
})
}

//     renderEntries(filterMood)

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
        document.querySelector("#container").innerHTML = ""
        renderEntries(mood)

            }
        )
