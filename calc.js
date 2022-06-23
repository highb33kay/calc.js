numValid = false;
function calc(x,y,z){

    // run calculations

    if(z == '+'){
        result = x + y;
        numValid = true;
    }else if (z == '-'){ 
        result = x - y;
        numValid = true;
    } else if (z == '/'){
        result = x / y;
        numValid = true;
    } else if (z == '*'){
        result = x * y;
        numValid = true;
    } else{
        console.log("you have used an invalid operator")
        alert("you have used an invalid operator")
        numValid = false;
    }
}

// use a do while loop to validate operations
do{
    // declare variables
    let x = parseInt(prompt("enter first number: "));
    let z = prompt("Enter an operator such as + to add, - to subtract, * to multiply, / to divide: ");
    let y = parseInt(prompt("enter second number: "));

    // check for addition
    calc(x,y,z)
} while (!numValid)

alert(result)
console.log(result)