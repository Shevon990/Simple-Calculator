let display = document.getElementById("display");
let newDisplay = [];
input = "";
let latestDisplay = "";

function appendToDisplay(input){
    display.value += input;
    newDisplay.push(input);
}
function deleterecent(){
    newDisplay.pop(input);
    latestDisplay = newDisplay.join("");
    display.value = latestDisplay;

}

function clearDisplay(){

    display.value = "";

}

function calculate(){

    try{

        display.value = eval(display.value);

    }

    catch(error){
        display.value = "Error";
    }
 
}