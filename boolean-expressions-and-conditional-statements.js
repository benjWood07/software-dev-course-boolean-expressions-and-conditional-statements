/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = false;
const hasMap = false;
const hasSword = true;
const hasCompass = true;
const hasFood = true;
const hasWater = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch)
  {if (hasMap || hasCompass) {
    console.log("You find your way through the mountains using your map or compass.");
  } else {
    console.log("it's too dark to proceed. You decide to turn back.");
  }
} else if (choice === "village")
  { if (hasMap || hasCompass) {
    console.log("You find your way to the village using your map or compass.");
  } else {
    console.log("You wander around aimlessly and eventually find the village.");
  }
} else {
  console.log("You get lost and wander aimlessly.");
}

console.log("You stay for a while in the village. You can rest and gather supplies.");
const restOrGather = readline.question("Do you want to 'rest' or 'gather' supplies? ");

if (restOrGather === "rest") {
  console.log("You rest and regain your strength.");
  const gatherAfterRest = readline.question("Do you want to gather supplies now? (yes/no) ");
  if (gatherAfterRest.toLowerCase() === "yes") {
    restOrGather = "gather";
  }
}

if (restOrGather === "gather") {
  if (!hasFood) {
    console.log("You don't have food, so you go to the market.");
    hasFood = true;
  } else {
    console.log("You have enough food.");
  }
  
  if (!hasWater) {
    console.log("You don't have water, so you go to the village well and fill your canteen.");
    hasWater = true;
  }
  
  if (hasFood && hasWater) {
    console.log("You have enough food and water to sustain yourself.");
  }
}
