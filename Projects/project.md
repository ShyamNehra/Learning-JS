# Projects related to DOM - Solutions

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Project1:-
On clicking the coloured box, the background colour will change too with respect to the box's colour

## Solution
```Javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  
  button.addEventListener('click', function(e){
    const xcolor = e.target.id;

    switch(xcolor){
      case 'grey':
      body.style.backgroundColor = 'grey'
      break;
      case 'white':
      body.style.backgroundColor = 'white'
      break;
      case 'blue':
      body.style.backgroundColor = 'blue'
      break;
      case 'yellow':
      body.style.backgroundColor = 'yellow'
      break;
      default:
      body.style.backgroundColor = 'red'
    }
  });
});
```

## Project2:-
Calculate BMI

## Solution
```Javascript
const form = document.querySelector("form")

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  if(height === 0 || height <= 0 || isNaN(height)){
    document.querySelector('#results').innerHTML = "Enter a vaild height ",height;
  }
  else if(weight === 0 || weight <= 0 || isNaN(weight)){
    document.querySelector('#results').innerHTML = "Enter a vaild weight ",weight;
  }
  else{
    const result = (weight/(height*height/10000)).toFixed(1);
    document.querySelector('#results').innerHTML = result;
  }
})
```

## Project3:-
Real Time CLock

## Solution
```Javascript
setInterval(function () {
  let date = new Date();
  document.querySelector('#clock').innerHTML = date.toLocaleTimeString();
}, 1000);
```



## Project4:-
Guess The Number 

## Solution
```Javascript
const form = document.querySelector('form');

const number = parseInt(Math.random() * 100 + 1);
console.log(number);

let guesses = [];
let NumGuesses = 1;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (NumGuesses <= 10) {
    let guessedValue = parseInt(document.querySelector('.guessField').value);

    if (guessedValue >= 0 || guessedValue <= 100) {
      document.querySelector('.guessField').value = '';

      guesses.push(guessedValue);
      document.querySelector('.guesses').innerHTML = guesses.join(', ');

      if (guessedValue === number) {
        document.querySelector('.lowOrHi').innerHTML = 'Correct Guess';
      } else if (guessedValue < number) {
        document.querySelector('.lowOrHi').innerHTML = 'Too Low';
      } else {
        document.querySelector('.lowOrHi').innerHTML = 'Too High';
      }

      document.querySelector('.lastResult').innerHTML = 10 - NumGuesses;
      NumGuesses++;
    } else {
      const p = document.createElement('p');
      p.textContent = 'Guesses End. Start Again';
      document.body.appendChild(p);

      form.removeEventListener('submit', arguments.callee);
    }
  }
});

```