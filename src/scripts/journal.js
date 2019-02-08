
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
    if (event.target.type === "radio") {
        const mood = event.target.value
        document.querySelector("#container").innerHTML = ""
        renderEntries(mood)
    }
}
)

