
const renderEntries = (mood) => {
    API.getJournalEntries().then(entryArray => {
        let filterMood =
        entryArray.filter(entry => entry.mood === mood)
        filterMood.forEach(entry => {
            const html = makeJournalEntryComponent(entry)
            addEntriestoDOM(html)
        }
        )
    })
}

document.querySelector("#journalButton").addEventListener("click", () => {
    const concept = document.querySelector("#conceptsCovered").value
    const date = document.querySelector("#journalDate").value
    const entry = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#journalMood").value

    const newJournalEntry = {
        concept: concept,
        date: date,
        entry: entry,
        mood: mood
    }

    API.saveJournalEntry(newJournalEntry)
})

document.querySelector("#moodRadioButtons").addEventListener("click", event => {
    const mood = event.target.value
    if (event.target.type === "radio") {
        document.querySelector("#container").innerHTML = ""
        if (event.target.value === mood) {
            renderEntries(mood)
        } else if (event.target.value === allMoods) {
            renderEntries()
        }
    }
}
)
