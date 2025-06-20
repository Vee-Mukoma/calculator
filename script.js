var newLine = true;
var value1; //stores the first number entered before pressing an operator
var currentOperator; //stores which operation was pressed

//Function for when a number button is clicked.
function digitBtnPressed(button){
    if(newLine){
        document.getElementById("myInput").value = button;
        newLine = false;
    } else {
        var currentValue = document.getElementById("myInput").value;
        document.getElementById("myInput").value = currentValue + button;
    }
}


//for when AC is pressed
function btnACPressed(){
    document.getElementById("myInput").value = 0; //Resets input to zero
    newLine = true; //Sets newLine = true so the next digit starts fresh.
}

//for when an operator is pressed
function operatorBtnPressed(operator){
    currentOperator = operator;
    value1 = parseInt(document.getElementById("myInput").value);
    newLine = true;
}

//for when equals is pressed
function equalsBtnPressed(){
    var value2 = parseInt(document.getElementById("myInput").value)
    var finalTotal;

    switch(currentOperator){
        case "+":
            finalTotal = value1 + value2;
            break;
        case "-":
            finalTotal = value1 - value2;
            break;
        case "/":
            finalTotal = value1 / value2;
            break;
        case "x":
            finalTotal = value1 * value2;
            break;
    }
    document.getElementById("myInput").value = finalTotal;
}