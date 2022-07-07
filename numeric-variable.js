var price = 5;
var word;
var result;
var input = prompt("Digite um numero: ");
result = price * input;

/* document.writeln(result);
document.writeln("RESULTADO") */
var r = document.getElementById('cost');

r.textContent = '$' + result;

//----------------------------

var username = 'Molly';
var message = 'See our upcoming range';

var elName = document.getElementById('name');

elName.textContent = username;