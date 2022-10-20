



// This function clear all the values
function clearScreen() {
    document.getElementById("outcome").value = "";
}


 
// This function display values
function display(value) {
    document.getElementById("outcome").value += value;
}



 
// This function evaluates the expression and returns result
function calculate() {
    let a = document.getElementById("outcome").value;
    let b; 

    if(a.includes("%")){
        let x = a.split("%");

        b = Number(x[0])/100;

    }else{
        b = eval(a);
    }
    
    document.getElementById("outcome").value = b;
}

