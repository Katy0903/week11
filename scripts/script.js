
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

function greet(name, time="day"){
    console.log(`Good ${time} ${name}`)
    
  }

  greet("kk", "night")
  greet("kk")