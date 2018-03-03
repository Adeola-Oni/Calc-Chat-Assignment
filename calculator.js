var inp = "";

function inputnumber(x){
    inp += x;
    document.getElementById("display").value += x;
}

function equalto(){
    var solu =  eval(inp);
    document.getElementById("display").value =solu;
    inp = solu;
    inp = " ";
}

function del(){
    inp = "";
    document.getElementById("display").value ="";
}

function addition(){
    inp += "+";
    document.getElementById("display").value += "+";
}

function subtraction(x){
    inp += "-";
    var a = parseInt(inp);
    a = inp - x;
    document.getElementById("display").value += "-";
}

function multiplication(x){
    inp += "*";
    var a = parseInt(inp);
    a = inp * x;
    document.getElementById("display").value += "*";
}

function division(x){
    inp += "/";
    var a = parseInt(inp);
    a = inp / x;
    document.getElementById("display").value += "/";
}


function modulo(x){
    inp += "%";
    var a = parseInt(inp);
    a = inp % x;
    document.getElementById("display").value += "%";
}

function bracket1(){
    inp += "(";
    document.getElementById("display").value += "(";
}

function bracket2(){
    inp += ")";
    document.getElementById("display").value += ")";
}

function sin(){
    inp += "Math.sin(";
    document.getElementById("display").value += "sin(";
}

function cos(){
    inp += "Math.cos(";
    document.getElementById("display").value += "cos("; 
}

function tan(){
    inp += "Math.tan(";
    document.getElementById("display").value += "tan(";
}

function log(){
    inp += "Math.log10(";
    document.getElementById("display").value += "log(";
}

function exp(){
    inp += "Math.exp(";
    document.getElementById("display").value += "exp(";
}

function sqrt(){
    inp += "Math.sqrt(";
    document.getElementById("display").value += "SQUAREROOT(";
}

function fact(){
    inp += "Math.fact";
    document.getElementById("display").value += "!";
}

function back(){
    inp =  inp.substring(0, inp.length-1);
    document.getElementById("display").value = inp.substring(0, inp.length-1);
    
}

function dot(){
    inp += ".";
    document.getElementById("display").value += ".";
}

