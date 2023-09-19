//Iterate w JS For Loops

const myArray = [];

for (let i = 1; i <= 5; i++) {
    myArray.push(i);
}

console.log(myArray);

//console output:
[ 1, 2, 3, 4, 5 ]

//Iterate Odd Numbers With a For Loop

const myArray = [];

for (let i = 1; i <=9; i +=2) {
    myArray.push(i);
}

console.log(myArray);
//console output:
[ 1, 3, 5, 7, 9 ]

//count backwards w a For Loop

const myArray = [];

for (let i = 9; i >= 1; i -= 2) {
    myArray.push(i);
}

console.log(myArray);
//console output:
[ 9, 7, 5, 3, 1 ]