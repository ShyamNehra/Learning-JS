const parent = document.querySelector(".weekdays");
// console.log(weekdays);
// console.log(weekdays.children);
// console.log(weekdays.children[1].innerHTML);

//for loop
/* 
for (let i = 0; i < weekdays.children.length; i++) {
  (console.log(weekdays.children[i].innerHTML));
}
*/

console.log(weekdays.firstElementChild)
console.log(weekdays.lastElementChild)

const dayOne = document.querySelector('.day')
console.log(dayOne.weekdaysElement)
console.log(dayOne.nextElementSibling)


console.log("Nodes:", weekdays.childNodes)
//This will count the '\n', like the next line gap will be considered too