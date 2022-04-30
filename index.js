// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const driversTwo = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


// findMatching
function findMatching(arry, string){
const myMatch = arry.filter(element => {
    // This makes it case sensetive
    // if (element === string){
        // This makes it case insensetive
    if (element.toUpperCase() === string.toUpperCase()){
        return element; }
});

return  myMatch
}

console.log (findMatching(drivers,"bobby"))


// fuzzyMatch
// (includes () ) return drivers also with middle or ending letters match

// function fuzzyMatch (arry, string){
// const fuzzyMach = arry.filter(element => {
// if (element.toUpperCase().includes(string.toUpperCase()) ){
//     return element;
// }

// });
// return fuzzyMach;
// }

function fuzzyMatch(arry, string) {
    return arry.filter( element =>
        element.toUpperCase().indexOf(string.toUpperCase()) === 0
        )
}

console.log(fuzzyMatch(drivers, "Sa"))
console.log(fuzzyMatch(drivers, "y"))

// matchName
function matchName(arry, string){
return arry.filter(element => 
    element.name.toUpperCase() === string.toUpperCase()
)

}
console.log (matchName(driversTwo,"bobby"))