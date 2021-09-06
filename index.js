// Your code here
//function basic setup 

//razzle becomes a pointer to some stored potential work (the function)
//the pointer "invokes" the function by using the () after the pointer
// call the function by using "razzle()" in the terminal
// you can write these after you call them 
// functions can be passed arguments or given default arguments

  //Implement a function called saturdayFun. It should return a String like "This Saturday, I want to ....!" Fill in the ... with the activity that's passed in as the first parameter. 
  //If nothing is passed in, default to "roller-skate". 
  // MUST RETURN TO PRINT SOMETHING OUT 
  function saturdayFun(activity="roller-skate") {
     return `This Saturday, I want to ${activity}!`
  }

  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
  }



// Return a function that is an "inner" function
// take a single parameter that defaults to "special"
// returns a String "You are ... " where ... is the adjectvie  this function received wrapped in a visual flair
// take as parameter a string that is used to create visual flair
// this parameter can be anything but it should be defaulted to *
// Basically there are two functions - a outer function (wrapAdjective) and an inner function
//need to use let
let wrapAdjective = function(visualFlair="*") {
    //return function number two - should default parameter to special
    return function(word="special") {
        return `You are ${visualFlair}${word}${visualFlair}!`
    }
}
//this will default to You are *special*


  // define an object called Calculator = Calculator = {}
  //WITHIN the objects, create functions
  //pass in a,b for the variables
  //ensure you have an ending ; after each return and a comma after each new function
  const Calculator = {
    add:  function (a,b) {
        return a + b;
    },

    subtract: function(a,b) {
        return a - b;
    },

    multiply: function(a,b) {
        return a * b;
    }, 
    divide: function(a,b) {
        return a/b;
    }
  }


// Defines a function called actionApplyer
// receives 2 args (starting integer and array of functions)
//returns given starting point unchanged, when array is empty
// Given 13, returns 4 after being acted on by several functions
// you need to use let because its the outer most function - defined other functions inside
let actionApplyer = function(startInt, array){
    // redefine the starting integer
   // let a = startInt 
    // create a loop, starting with 0, iterate over the array length 
    // redefine the starting integer with the array[]
    // 13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result: expected [Function] to equal 4
        //NEED TO MULTIPLY THE ARRAY[I] BY THE STARTING INTEGER
    for (let i = 0; i < array.length; i++) {
        startInt = array[i](startInt)
    }
    //returns starting integer unchanged when array is empty
    return startInt
}


  //JavaScript's ability to call functions before they appear in the code is called hoisting.
  //For hoisting to work, the function must be defined using a function declaration.
  //expressions produce a value
  //interpret a function using a grouping operator () - puts everything in parenthases
  //grouping operator is usually used in arithmetic operations to tell the JavaScript engine to evaluate the value that's inside it first.

 // (function() {
   // console.log("Yet more razzling");
  //}) 

  //anoynumus function is a function without a name
  //if you do not assign a name to a function there is no way to call it
  // can only use anoynmus functions as a callback function
  //you'll often see anonymous functions passed as an argument to an event listener:
  //Our anonymous function is being passed as an argument to addEventListener.
  //The JavaScript engine "stores it away" as work to be executed later, when the button is clicked.

  //defining a variable called button that selects the button in the document
  //add the click event listener to the button - pass in an anoynmus function as an argument
  // everytime a button is clicked, print "yet more razzling"
  //const button = document.getElementById('button');
    //button.addEventListener('click', function() {
    //console.log("Yet more razzling");
   // });

    //define a function using a function expression
    //const fn = function() {
      //  console.log("Yet more razzling");
      //}

      //fn; //=> ƒ () { console.log("Yet more razzling") }
     // fn is a pointer to the stored block that has yet to been invoked 
     
     
     //Implement a function expression called mondayWork. 
     //The function should return a String like "This Monday, I will ... ."
     // If nothing is passed in, default to "go to the office".
   
