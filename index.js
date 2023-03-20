// code your solution here
const record = [
 { year: "2018", result: "N/A"},
 { year: "2017", result: "N/A"},
 { year: "2016", result: "N/A"},
 { year: "2015", result: "W"},
 { year: "2014", result: "N/A"},
 { year: "2013", result: "L"},
 { year: "2012", result: "N/A"},
 { year: "2011", result: "N/A"},
 { year: "2010", result: "N/A"},
 { year: "2009", result: "N/A"},
 { year: "2008", result: "N/A"},
 { year: "2007", result: "N/A"},
 { year: "2006", result: "N/A"},
 { year: "2005", result: "N/A"},
 { year: "2004", result: "N/A"},
 { year: "2003", result: "N/A"},
 { year: "2002", result: "N/A"},
 { year: "2001", result: "N/A"},
 { year: "2000", result: "N/A"},
 { year: "1999", result: "N/A"},
 { year: "1998", result: "W"},
 { year: "1997", result: "W"},
 { year: "1996", result: "N/A"},
 { year: "1995", result: "N/A"},
 { year: "1994", result: "N/A"},
 { year: "1993", result: "N/A"},
 { year: "1992", result: "N/A"},
 { year: "1991", result: "N/A"},
 { year: "1990", result: "N/A"},
 { year: "1989", result: "L"},
 { year: "1988", result: "N/A"},
 { year: "1987", result: "L"},
 { year: "1986", result: "L"},
 { year: "1985", result: "N/A"},
 { year: "1984", result: "N/A"},
 { year: "1983", result: "N/A"},
 { year: "1982", result: "N/A"},
 { year: "1981", result: "N/A"},
 { year: "1980", result: "N/A"},
 { year: "1979", result: "N/A"},
 { year: "1978", result: "N/A"},
 { year: "1977", result: "N/A"},
 { year: "1976", result: "L"},
 { year: "1975", result: "N/A"},
 { year: "1974", result: "N/A"},
 { year: "1973", result: "N/A"},
 { year: "1972", result: "N/A"},
 { year: "1971", result: "N/A"},
 { year: "1970", result: "N/A"},
 { year: "1969", result: "N/A"},
 { year: "1968", result: "N/A"},
 { year: "1967", result: "N/A"},
 { year: "1966", result: "N/A"},
 { year: "1965", result: "N/A"},
 { year: "1964", result: "N/A"},
 { year: "1963", result: "N/A"},
 { year: "1962", result: "N/A"},
 { year: "1961", result: "N/A"},
 { year: "1960", result: "N/A"}
]
// let sadReality = record.find(year => year === 1960)
// console.log('====================================');
// console.log(sadReality);
// console.log('====================================');
// function superbowlWin(year){
//   year === "2015"
//  return year;
// }
// const notwiny = record.find(sadReality);
// function sadReality(year) {
// return year === '2018';
// }
// console.log('====================================');
// console.log(winy);
// console.log('====================================');
// const year = record.map(function(record){
//  return record.year;
// }) 
// function superBowlWin(win){
//  let win = record.find(year => year.result === record)
//  return win;
// }
// console.log('====================================');
// console.log(superBowlWin("2015"));
// console.log('====================================');
// // record.find(year => year.result === record)
const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
function superbowlWin(record) {
let winYear = record.find((x) => x.result === 'W');
if (winYear) {
 return winYear.year
} else {
 return undefined
}
 // return winYear ? winYear.year : undefined
};

console.log(superbowlWin(record)); // '2015'
console.log(superbowlWin(sadReality)); // 'undefined'

// console.log('after crash');