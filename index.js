// Code your solution here
function findMatching(drivers,string){     
    const nMatch = drivers.filter(d => d == string || d == string[0].toUpperCase()+string.slice(1) || d == string[0].toLowerCase()+string.slice(1))
    return nMatch
}

// const drivers = [ 'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby' ]
// const string = 'Sa'
function fuzzyMatch(drivers, string){
    const fm = drivers.filter(d => d.split('').slice(0,1).join('') === string.split('').slice(0,1).join(''))
    return fm
}
// fuzzyMatch(drivers, string)

function matchName(drivers, string){
    return drivers.filter(d => d.name == string)
}