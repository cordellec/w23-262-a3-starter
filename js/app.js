const form = document.querySelector('form');
const output = document.querySelector('.output');

const handleSubmit = function(event) {
  event.preventDefault();

  // Possible values for `day`: 
  // 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'
  const day = form.day.value; 

  // Possible values for `meal`: 
  // 'breakfast', 'lunch', 'dinner'
  const meal = form.meal.value; 

  console.log(day, meal);

  // Declare a variable to hold the answer
  let answer;

  /*************************************/
  /* ^^^ Don't edit the above code ^^^ */
  /*************************************/

  /***********************/
  /* Put your code below */
  /***********************/

  // Using if, else if and else blocks: assign a meal recommendation to `answer` based on the submitted options for `day` and `meal`.

  // For example: 


// I just used an "If" statement at first, and than everything else was "else if" statments sepearated by day and meal, with diffrent meal pretaining to that time and day//
// I used the "else" statement at the end of the "If" & "Else If" statmenet's for a genral fall back for any of the statmenets if they do fail to provide a food //

 if (day === "mon" && meal === "breakfast") {
  answer = "Egg Burger";
 } else if (day === "mon" && meal === "lunch") {
  answer = "Veggie Burger";
 } else if ( day === "mon" && meal === "dinner") {
  answer = "Beef Burger";
 } else if (day==="tue" && meal === "breakfast"){
  answer = "Egg Taco's";
} else if (day === "tue" && meal === "lunch"){
  answer = "Veggie Taco's";
} else if (day === "tue" && meal === "dinner"){
  answer = "Beef Taco's";
} else if (day === "wed" && meal === "breakfast") {
  answer = "Egg Wings";
} else if (day === "wed" && meal === "lunch") {
  answer = "Veggie Wings";
} else if (day === "wed" && meal === "dinner"){
  answer = "Beef Wings";
}  else if (day === "thu" && meal === "breakfast") {
  answer = "Egg Pho";
} else if (day === "thu" && meal === "lunch") {
  answer = "Veggie Pho";
} else if (day === "thu" && meal === "dinner") {
  answer = "Beef Pho";
}  else if (day === "fri" && meal === "breakfast"){
  answer = "Egg Pizza";
} else if (day === "fri" && meal === "lunch"){
  answer = "Veggie Pizza";
} else if (day === "fri" && meal === "dinner"){
  answer = "Beef Pizza";
} else if (day === "sat" && meal === "breakfast") {
  answer = "Egg Nacho's";
} else if (day === "sat" && meal === "lunch") {
  answer = "Veggie Nacho's";
} else if (day === "sat" && meal === "dinner") {
  answer = "Beef Nacho's";
} else if (day === "sun" && meal === "breakfast") {
  answer = "Egg Potachos";
} else if (day === "sun" && meal === "lunch") {
  answer = "Veggie Potachos";
} else if (day === "sun" && meal === "dinner") {
  answer = "Beef Potachos";
} else {
  answer = "No food :("
}

  /************************************/
  /* Don't edit the rest of this code */
  /************************************/

  output.innerHTML = answer;

}

form.addEventListener('submit', handleSubmit);