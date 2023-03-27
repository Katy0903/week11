
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
// const enteredValue = prompt("enter a number: ")

// //   check if value is not a numberlet enteredValue;

// // do{
// //     enteredValue = prompt("enter a number: ");
// //  }while(isNaN(enteredValue))


// // references to p tags

// const radiuspara = document.querySelector("#radius")
// radiuspara.textContent = enteredValue
// console.log(radiuspara)
// const resultpara = document.querySelector("#result")
// console.log(resultpara)


// function calculateArea (radius){

// //   check if value is not a numberlet enteredValue;

//   if(isNaN(radius)){
//     alert("This is not a number");
//     // update the resultpara to show the error
//     resultpara.textContent = "This is not a number"
//   }else{
  
//   const area = Math.PI*radius*radius;
  
//   return area.toFixed(2);
  
//  }
  
// }

// let result = calculateArea(enteredValue);

// // alert(`The area of a circle with radius ${enteredValue} is ${result}`)

// if (!isNaN(enteredValue)){
// resultpara.textContent = `The area of a circle with radius ${enteredValue} is ${result}`
// }






// // showing text
// resultpara.textContent
// output ---> 'Show area or Error'





// List

function populateList(myShoppingList){

// get access to the ul Element

    const ulElement = document.querySelector("ul.shopping");
    // console.log(ulElement);

// loop through myShoppingList array

    for (let item of myShoppingList){
        // console.log(item);   
        
         // make a new li document.createElement

        let newli = document.createElement("li");
        // update the text of the new li
        newli.textContent = item;
        // append the new li under ul
        ulElement.appendChild(newli);
    }

}

let ShoppingList = ["bread", "cheese", "green pepper"];

populateList(ShoppingList);








function squareList(){

    // get access to ul
    const ulElement = document.querySelector("ul.shopping");
    // console.log(ulElement);

    // // remove circlelistclass
    ulElement.classList.remove("circleList");

    // // add squarelist class
    ulElement.classList.add("squareList");

}


squareList();

function updateImage(){

    const image = document.querySelector("#shoppingCart")
    image.setAttribute(
    "src","https://cdn-icons-png.flaticon.com/512/263/263142.png")

};

image.setAttribute