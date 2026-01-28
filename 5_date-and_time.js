let date = new Date();
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleString())
// console.log(date.toLocaleTimeString(), "\n")

let newdate = new Date(2026, 0, 28)
//month is 0-indexed
console.log(newdate.toLocaleString())

// let newdate2 = new Date(2026, 0, 28, 12, 38)
// let newdate2 = new Date("01-17-2026")    MM:DD:YYYY
// let newdate2 = new Date("2026-01-17T12:38:00")
// console.log(newdate2.toLocaleString())


let mytimestamp = Date.now()
console.log("Current Timestamp:", mytimestamp)  //give today's date timestamp in milliseconds counting from Jan 1, 1970

const date2 = new Date(2026, 0, 28)
console.log(date2.getDate()) //get current date
console.log(date2.getDay()) //get current day of week (0-6)
console.log(date2.getMonth()) //get current month (0-11)