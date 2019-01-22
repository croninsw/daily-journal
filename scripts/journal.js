// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)

API.getJournalEntries().then(getPastEntries(makeJournalEntryComponent()))