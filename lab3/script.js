`use strict`

let sortedNames = [];
let ul = document.querySelector("ul");


function greetNames (names = []) {
    if (names.length === 0) {
        alert("Array is empty!!!");
        return;
    }

    for (let name of names) {
        if (typeof name === "number") {
            alert("Invalid input, please provide a string.");
            return;
        } else if (name.length < 3) {
            alert(`Invalid input: ${name}. Name must be at least 3 characters`);
            return;
        }
        let lowerCaseName = name.toLowerCase();
        let lastChar = lowerCaseName[lowerCaseName.length - 1];

        if (lowerCaseName[0] === "j") {
            sortedNames.push(speakGoodBye.speak(name));
        } else if (lastChar === "a") {
            sortedNames.push(speakSpecialHello.speak(name));
        } else {
            sortedNames.push(speakHello.speak(name));
        }
    }

    sortedFunction(sortedNames);
}

const sortedFunction = (array) => {
    array.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    })

    addElements();
}

const addElements = () => {
    for (let name of sortedNames) {
        let li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
    }
}
greetNames(["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"])
// greetNames([1,2,3,4,5,6,7,8])