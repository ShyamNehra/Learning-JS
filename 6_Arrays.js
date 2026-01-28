let arr = [10, 20, 30, 40, 50];
arr[0] = 15; 
// Modify the first element

console.log(arr);
//array works on shalow copy(reference based - non primitive data types) and primitive data types works on deep copy(value based )





//Array Methods

arr.push(88);  //adds element at the end
arr.unshift(5);  //adds element at the beginning
// console.log(arr);

arr.pop();  //removes element from the end
arr.shift();  //removes element from the beginning
// console.log(arr);

console.log(arr.includes(90));
console.log(arr.indexOf(30));

console.log(arr.join("-")); //converts array to string with given separator

//slice and splice
let newArr = arr.slice(1,4); //does not modify original array (starting index = 1, ending index = 4 (not included))
console.log("Original array: ", arr);
console.log("After slice:", newArr);

arr.splice(1,2, 100, 200); //modifies original array (starting index = 1, number of elements to remove = 2, elements to add = 100, 200)
console.log("After splice:", arr);




//-------------Merging two arrays--------------------------
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const veggies = ["Carrot", "Potato", "Cabbage"];

const allFood = fruits.concat(veggies)
console.log(allFood); 
//correct way to merge two arrays (concat returns a new array)



//or using spread operator
const newallFood = [...fruits, ...veggies];
console.log(newallFood);



const complexArr = [1, [3,4,5,6,[99,88,56]], [2, 3], ];
console.log(complexArr.flat(Infinity))
//flat method flattens the array up to the specified depth (Infinity flattens all levels)



console.log(Array.isArray("Shyam"))
console.log(Array.from("Shyam"))
console.log(Array.from({name: "Shyam", age: 24}))  //Intersting - will return empty array as object is not iterable


let score1 = 30; 
let score2 = 70; 
let score3 = 10;

console.log(Array.of(score1, score2, score3)) //creates an array from the given arguments
