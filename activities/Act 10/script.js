function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum").innerHTML = "Please enter valid numbers.";
        document.getElementById("diff").innerHTML = "Please enter valid numbers.";
        document.getElementById("prod").innerHTML = "Please enter valid numbers.";
        document.getElementById("quot").innerHTML = "Please enter valid numbers.";
        document.getElementById("rem").innerHTML = "Please enter valid numbers.";
        return;
    }
    const sum = num1 + num2;
    document.getElementById("sum").innerHTML = "The sum is: " + sum.toFixed(2);

    const diff = num1 - num2;
    document.getElementById("diff").innerHTML = "The difference is: " + diff.toFixed(2);

    const prod = num1 * num2;
    document.getElementById("prod").innerHTML = "The product is: " + prod.toFixed(2);
    
    let quot, rem; 
    if(num2 != 0) { 
        quot = num1 / num2;
        document.getElementById("quot").innerHTML = "The Quotient is: " + quot.toFixed(2);
        rem = num1 % num2;
        document.getElementById("rem").innerHTML = "The Remainder is: " + rem.toFixed(2);
} else { 
    quot = "Undifined";
    document.getElementById("quot").innerHTML = "The Quotient is: " + quot;
    rem = "Undefined";
    document.getElementById("rem").innerHTML = "The Remainder is: " + rem;

}
}

function clearFields() {
    document.getElementById("sum").innerHTML = " ";
    document.getElementById("diff").innerHTML = " ";
    document.getElementById("prod").innerHTML = " ";
    document.getElementById("quot").innerHTML = " ";
    document.getElementById("rem").innerHTML = " ";
}
