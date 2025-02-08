//import { apiKey } from './util.js';
//import apiKey from './util.js'; // for default import
//import {abc, def as content} from './utils.js';
//import * as util from './utils.js';

//console.log(util.apiKey);
//console.log(content);


//const userMessage = 'Hello Universe'

//console.log(userMessage);
//console.log(userMessage);


//console.log(10 + 5); // 15
//console.log(10 === 5); // False
//console.log(10 > 5); // True


function greet(username, message) {
    console.log(username);
    console.log(message);
    return "Hi, I am "+ username +". " + message;
}

/*greet('Max', 'Hello');
greet('Manuel', 'Hello, what\'s up'); */


/* export default (username, message) => {
    console.log('Hello')
    return username + message
} */

/* const user = {
    name: 'Max',
    age: 34
    greet(){
        console.log("Hello!");
        console.log(this.age);
    }
};

console.log(user.name);
user.greet(); */

/* class User{
    constructor(name, age){
        this.name;
        this.age;
    }
    greet(){
        console.log("Hi!");
    }
}

const user1 = new User("Manuel", 35);
console.log(user1);
user1.greet(); */


const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const index = hobbies.findIndex((item) => item === 'Sports');

console.log(index);

//const editedHobbies = hobbies.map((item) => item + "!");
const editedHobbies = hobbies.map((item) => item + ({text: item}));
console.log(editedHobbies);