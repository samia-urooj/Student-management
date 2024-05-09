import inquirer from "inquirer";

let randomNum: number = Math.floor(1000 + Math.random() * 9000);

let myBalance: number = 0;

let answer = await inquirer.prompt([
  {
    name: "students",
    message: "Enter student name: ",
    type: "input",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please enter non-empty value";
    },
  },
  {
    name: "courses",
    type: "list",
    message: "Select the course to enrolled:",
    choices: ["Typescript", "HTML", "CSS", "Javascript", "Python"],
  },
]);

let courseFees: { [key: string]: number } = {
  Typescript: 10000,
  HTML: 5000,
  CSS: 5000,
  Javascript: 12000,
  Python: 15000,
};
console.log(`\nTution fees: ${courseFees[answer.courses]}/-\n`);
console.log(`\nBalance: ${myBalance}\n`);

let payMethod = await inquirer.prompt([
  {
    name: "payment",
    type: "list",
    message: "Select the payment method: ",
    choices: ["Easy paisa", "Jazz cash", "Bank transfer"],
  },
  {
    name: "amount",
    type: "input",
    message: "Please enter your amount: ",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "PLease enter non-empty value!";
    },
  },
]);
console.log(`\nYou select payment method ${payMethod.payment}\n`)
let tutionfees = courseFees[answer.courses];
let paymentAmount = parseFloat(payMethod.amount);

if (tutionfees === paymentAmount){
  console.log(`\nCongratulations, you have successfuly enrolled in ${answer.courses}\n`)

  let ans = await inquirer.prompt([
    {
      name: "select",
      type: "list",
      message:"What would you like to do next?",
      choices: ["View status", "Exit"]
    }
])
if (ans.select=== "View status"){
  console.log(`\n*******STATUS********\n`);
  console.log(`Student Name: ${answer.students}`);
  console.log(`Student ID: ${randomNum}`);
  console.log(`Course: ${answer.courses}`);
  console.log(`Tution fees paid: ${paymentAmount}`);
  console.log(`Balance: ${myBalance += paymentAmount}`)
}
else{
  console.log(`\nExiting student management system\n`)
}
}
else{
  console.log("Invalid amount due to course.")
};