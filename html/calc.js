function calc(){

    var number1 =Number( document.getElementById('number1').value);
    var number2 =Number( document.getElementById('number2').value);
    var operator = document.getElementById('operator').value;

    if(operator === '+'){
        var result = number1 + number2;
    } else if(operator === '-')
    {
        var result = number1 - number2;
    }
    else if(operator === '*')
    {
        var result = number1 * number2;
    }else if(operator === '/')
    {
        var result = number1 / number2;
    }

    var div = document.getElementById('result');
    var output = `${number1} ${operator} ${number2} = ${result}`;
    div.innerHTML = output;

}