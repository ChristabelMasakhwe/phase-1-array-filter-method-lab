const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(name, sought) {
    return name.filter(
possibleMatch => possibleMatch.toLowerCase() === sought.toLowerCase()
    )
}

function fuzzyMatch(name, string) {
return name.filter(
    possibleMatch => possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
)
}
function matchName(name, sought) {
    return name.filter(
      record => record.name === sought  
    )
}