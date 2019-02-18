const API = {
    getJournalEntries: function () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    postJournalEntry: function (obj) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
    },
    deleteJournalEntry: function (entryId) {
        return fetch(`http://localhost:3000/entries/${entryId}`, {
            method: "DELETE"
        })
    },
    putJournalEntry: function (entryId, entry) {
        return fetch(`http://localhost:3000/entries/${entryId}`), {
            method: "PUT",
            headers: {
                    "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        }
    }

}

export default API