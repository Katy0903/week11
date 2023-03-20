
// Three way writing function


// function declaration 1

// function greet(name){
//     console.log(`Hello ${name} !`);
// }
// // function calling
// greet("Katy");





// function expression 2

// const greet = function(name){
//     console.log(`Hello ${name}`)
// }
// greet("Katy")





// arrow function 3

// let greet = (name) =>{
//     console.log(`Hello ${name}`)
// }

// greet("Katy")





// if no value
// const greet = function(name){
//     console.log(`Hello ${name}`)
// }
// greet()

// Output: -----> Hello undefined




// 2 var and default value

// function greet(name, time="day"){
//     console.log(`Good ${time} ${name}`)
    
//   }

//   greet("kk", "night")
//   greet("kk")







// calculate
const enteredValue = prompt("enter a number: ")

//   check if value is not a numberlet enteredValue;

// do{
//     enteredValue = prompt("enter a number: ");
//  }while(isNaN(enteredValue))


// references to p tags

const radiuspara = document.querySelector("#radius")
radiuspara.textContent = enteredValue
console.log(radiuspara)
const resultpara = document.querySelector("#result")
console.log(resultpara)


function calculateArea (radius){

//   check if value is not a numberlet enteredValue;

  if(isNaN(radius)){
    alert("This is not a number");
    // update the resultpara to show the error
    resultpara.textContent = "This is not a number"
  }else{
  
  const area = Math.PI*radius*radius;
  
  return area.toFixed(2);
  
 }
  
}

let result = calculateArea(enteredValue);

// alert(`The area of a circle with radius ${enteredValue} is ${result}`)

if (!isNaN(enteredValue)){
resultpara.textContent = `The area of a circle with radius ${enteredValue} is ${result}`
}

// // showing text
// resultpara.textContent
// output ---> 'Show area or Error'