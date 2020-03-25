const kc = {name: 'KC', age: 2, weight: 15, color: 'black'};
const kaya = {name: 'Kaya', age: 7, weight: 30, color: 'black'};
const elle = {name: 'Elle', age: 1, weight: 10, color: 'brown'};
const layla = {name: 'Layla', age: 3, weight: 25, color: 'brown'}
const wicket = {name: 'Wicket', age: 5, weight: 12, color: 'brown'};
const louie = {name: 'Louie', age: 12, weight: 35, color: 'black'}

const dogs = [kc, kaya, elle, layla, wicket, louie];



function logOutThings(){
  console.log('Here are your', dogs.length, 'things!'); 
  for(let i = 0; i < dogs.length; i++) {
    const dog = dogs[i];
    if(dog.color === 'black'){
        console.log('black dog');
    }
        else if(dog.color === 'brown'){
            console.log('brown dog');
        }
        console.log(dog);
} 
} 

logOutThings();

