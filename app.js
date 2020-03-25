const KC = {name: 'KC', age: 2, weight: 15, color: 'black'};
const Kaya = {name: 'Kaya', age: 7, weight: 30, color: 'black'};
const Elle = {name: 'Elle', age: 1, weight: 10, color: 'brown'};
const Layla = {name: 'Layla', age: 3, weight: 25, color: 'brown'}
const Wicket = {name: 'Wicket', age: 5, weight: 12, color: 'brown'};
const Louie = {name: 'Louie', age: 12, weight: 35, color: 'black'}

const dogs = [KC, Kaya, Elle, Layla, Wicket, Louie];


for(let i = 0; i < dogs.length; i++) {
    const dog = dogs[i];
    console.log('dog at index', i, dog);
}

function logOutThings(){
  console.log('Here are your', dogs.length, 'things!');  
} 

logOutThings();
