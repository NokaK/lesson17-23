let person = {
  name: "Mosh",
  age: 30,
};

let persons = [
  { name: "Mosh", age: 30 },
  { name: "John", age: 20 },
];

// console.log(numbers[numbers.length - 1]);
// console.log(numbers[0]);

let colors = ["red", "blue", "yellow", "black", "white"];
// colors[5] = "green";
colors.push("green"); //  ბოლო ელემენტის დამატება
//console.log(colors);
colors.pop(); // ბოლო ელემნეტის წაშლა
// console.log(colors);
colors.unshift("yellow"); // პირველი ელემენტის დამატება
// console.log(colors);
colors.shift(); // პირველი ელემენტის წაშლა
// console.log(colors);

let newColorsArray = colors.splice(0, 4);
// console.log(newColorsArray);

let numbers = [1, 2, 8, 6, 9, 0];
let sortedNumbers = numbers.sort();
let reversedNumbers = numbers.reverse();

let index = 2;

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  //   if (number > 4 || number < 8) {
  //     console.log(number, "რიცხვი მეტია 4-ზე");
  //   } else {
  //     console.log(number, "რიცხვი ნაკლებია 4-ზე");
  //   }

  //   if (number % 2 === 0) {
  //     console.log(number, "ლუწია");
  //   } else {
  //     console.log(number, "კენტია");
  //   }
}
let names = ["Mosh", "John", "Bob", "Mary"];

for (let i = 0; i < names.length; i++) {
  if (names[i].length > 3) {
    console.log(names[i].toLowerCase());
  } else {
    console.log(names[i].toUpperCase());
  }
}

let students = [
  { name: "Mosh", age: 30, isMarried: true },
  { name: "John", age: 20, isMarried: false },
  { name: "Bob", age: 25, isMarried: true },
];
let marriedStudents = [];
let notMarriedStudents = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].isMarried) {
    marriedStudents.push(students[i]);
  } else {
    notMarriedStudents.push(students[i]);
  }
}

let randomNumber = Math.random() * 10;

let floatNumber = 12.7456;
floatNumber = Math.floor(floatNumber);
// console.log(Math.ceil(floatNumber));

let date = new Date().getDay();
console.log(date);

switch (date) {
  case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  default:
    console.log("არასწორი თარიღი");
    break;
}
