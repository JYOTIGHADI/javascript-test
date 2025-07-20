// 1. Print a Pyramid Pattern with Spaces:
// Input: 3
// Output:
//   *
//  ***
// *****

let n = 3;

for (let i = 1; i <= n; i++) {
    let Spaces = " ".repeat(n - i);
    let stars = "* ".repeat(2 * i - 1);

    console.log(Spaces + stars);
}




// 2. Print a Square with Border Only:
// Input: 4
// Output:
// ****
// * *
// * *
// ****


let a = 4;
for (let i = 1; i <= a; i++) {
    if (i === 1 || i === a) {
        console.log("*".repeat(a));
    }
    else {
        console.log("*" + " ".repeat(a - 2) + "*");
    }
}



// 3. Count Binary Zeros and Ones:
// Input: "101010110"
// Output: { ones: 5, zeros: 4 }

let Binary = "101010110";
let ones = 0;
let zeros = 0;
for (let i = 0; i < Binary.length; i++) {
    if (Binary[i] === "1") {
        ones++;
    }
    else if (Binary[i] === "0") {
        zeros++;
    }
}
console.log({ ones, zeros });




// 4. Group Users by Role (Objects inside Array):
// Input: [
// { name: "A", role: "admin" },
// { name: "B", role: "user" },
// { name: "C", role: "admin" },
// ]
// Output:
// {
// admin: ["A", "C"],
// user: ["B"]
// }


let users = [
    { name: "A", role: "admin" },
    { name: "B", role: "user" },
    { name: "C", role: "admin" },
]
let result = {};

for (let i = 0; i < users.length; i++) {
    let role = users[i].role;
    let name = users[i].name;

    if (!result[role]) {
        result[role] = [];
    }
    result[role].push(name);
}

console.log(result);




// 5. Filter Only Unique Binary Strings from Array:
// Input: ["101", "101", "000", "111", "000"]
// Output: ["101", "000", "111"]

let arr = ["101", "101", "000", "111", "000"];
let unique = [];

for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
        unique.push(arr[i]);
    }
}

console.log(unique);



// 6. Number Pyramid
// Input: 5
// Output:
//     1
//    121
//   12321
//  1234321
// 123454321

let b = 5;

for (let i = 1; i <= b; i++) {
    let line = "";

    for (let s = 1; s <= b - i; s++) {
        line += " ";
    }

    for (let j = 1; j <= i; j++) {
        line += j;
    }

    for (let j = i - 1; j >= 1; j--) {
        line += j;
    }

    console.log(line);
}



// 7. Diamond Pattern
// Input: 4
// Output:
//      *
//     ***
//    *****
//   *******
//    *****
//     ***
//      * 

const printDiamond = () => {
    let range = 4;

    for (let i = 1; i <= range; i++) {
        let res = "";

        for (let s = 1; s <= range - i; s++) {
            res += " ";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            res += "*";
        }

        console.log(res);
    }

    for (let i = range - 1; i >= 1; i--) {
        let res = "";
        for (let s = 1; s <= range - i; s++) {
            res += " ";
        }

        for (let j = 1; j <= 2 * i - 1; j++) {
            res += "*";
        }

        console.log(res);
    }
};

printDiamond();
