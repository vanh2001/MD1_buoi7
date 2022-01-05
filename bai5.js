
function phepCong() {
    let number_String1 = document.getElementById('number1').value;
    let number_String2 = document.getElementById('number2').value;
    let number1 = parseInt(number_String1);
    let number2 = parseInt(number_String2);
    let addition = number1 + number2;
    document.getElementById('result').innerText = "Result Addition: " + addition;
    return addition;
}
function phepTru() {
    let number_String1 = document.getElementById('number1').value;
    let number_String2 = document.getElementById('number2').value;
    let number1 = parseInt(number_String1);
    let number2 = parseInt(number_String2);
    let subtraction = number1 - number2;
    document.getElementById('result').innerText = "Result Subtraction: " + subtraction;
    return subtraction;
}
function phepNhan() {
    let number_String1 = document.getElementById('number1').value;
    let number_String2 = document.getElementById('number2').value;
    let number1 = parseInt(number_String1);
    let number2 = parseInt(number_String2);
    let multiplication = number1 * number2;
    document.getElementById('result').innerText = "Result Multiplication: " + multiplication;
    return multiplication;
}
function phepChia() {
    let number_String1 = document.getElementById('number1').value;
    let number_String2 = document.getElementById('number2').value;
    let number1 = parseInt(number_String1);
    let number2 = parseInt(number_String2);
    let division = number1 / number2;
    document.getElementById('result').innerText = "Result Division: " + division;
    return division;
}