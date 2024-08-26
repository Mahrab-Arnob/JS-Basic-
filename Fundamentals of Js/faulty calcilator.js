/*
create a faulty calculater using JS

this calculater will perform the following instructions
1. It will take 2 inputs from the users.
2.it will performs wrong operations such as:

+ ---> -
* ---> +
- ---> /
/ ---> **

It perfroms wrong operation 10% of the times.

*/

// Taking two inputs from the user
function faultyCalculator(a, b, operator) {
  function isfaulty() {
    return Math.random() < 0.1;
  }

  let result;
  if (isfaulty) {
    switch (operator) {
      case "+":
        result = a - b;
        break;
      case "*":
        result = a + b;
        break;
      case "-":
        result = a / b;
        break;
      case "/":
        result = a ** b;
        break;

      default:
        result = "Invalid Result";
        break;
    }
  } else {
    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "*":
        result = a * b;
        break;
      case "-":
        result = a - b;
        break;
      case "/":
        result = a / b;
        break;

      default:
        result = "Invalid Result";
        break;
    }
  }
  return result;
}
console.log(faultyCalculator( 18,7,"+"));
